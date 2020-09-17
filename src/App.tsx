import React from 'react';
import ItemCard from './components/ItemCard';
import CardList from './components/CardList';
import ItemPresence from './components/ItemPresence';
import SectionCard from './components/SectionCard';
import Header from './components/Header';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import { makeStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core/styles';
import { Item, Section } from './types'
import { initialItems, initialSections } from './initialData'

import './App.scss';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#60D7A4',
      main: '#3cc68a',
      dark: '#029b59',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

type ItemsActions = 
  | { type: "add"; item: Item}
  | { type: "remove"; item: Item}
  | { type: "update"; item: Item}

type SectionsActions = 
  | { type: "add"; section: Section}
  | { type: "remove"; section: Section}
  | { type: "update"; section: Section}

type State = {
  items: Item[],
  sections: Section[],
  openDrawer: boolean,
  openSection: boolean,
  focusedSection: Section,
  selectedId: number
}

const ItemsReducer = (state: State["items"], action: ItemsActions) => {
  switch (action.type){
    case "add":
      const arr = state.sort((a,b) => { return a.id - b.id });
      const newID = arr[arr.length - 1].id + 1;
      const newItem = {...action.item, id:newID}
      return [...state, newItem];
    case "remove": 
      return state.filter((item) => item.id !== action.item.id);
    case "update": 
      return state.map((item) => item.id === action.item.id ? action.item : item);
    default:
      return state;
  }
}

const SectionsReducer = (state: State["sections"], action: SectionsActions) => {
  console.log(action);
  switch (action.type){
    case "add":
      action.section.id = state[state.length -1] ? state[state.length -1].id + 1 : 1;
      let temp = state.map((section) => { section.order = (section.order >= action.section.order) ? section.order + 1 : section.order; return section })
     
      temp = [...temp, action.section];
       return temp.sort((a, b) => {return a.order - b.order});

    case "remove": 
      return state.map((section) => { section.order = (section.order >= action.section.order) ? section.order - 1 : section.order; return section }).filter((section) => section.id !== action.section.id);

    case "update": 
      let originalOrder:number = 0;
      state.map((section) => {if(section.id === action.section.id){originalOrder = section.order}});
      let temp2 = state.map((section) => {
        if(section.order > action.section.order){
          if(section.order < originalOrder ){
            section.order = section.order + 1
          }
        }
        else if(section.order < action.section.order){
          if(section.order > originalOrder ){
            section.order -= 1
          }
        }
        else if(section.order === action.section.order){
          if(section.order > originalOrder ){
            section.order -= 1
          }else{
            section.order += 1
          }
            
        }
        if(section.id === action.section.id){ section = action.section }
        return section
       })
       console.log(temp2);
       return temp2.sort((a, b) => {return a.order - b.order});
    default:
      return state;
  }
}


const useStyles = makeStyles({
  root: {
    margin: 10,
    paddingLeft: 20,
    paddingRight: 30,
    background: 'linear-gradient(45deg, #1db675 30%, #60d7a4 90%)',
    textTransform: "none",
    transition: ".2s all",
    fontWeight: 400,
    "&:hover": { 
      transform: "translateY(-6px)"
    }
  },
});


function App() {
  const [items, dispatchItems] = React.useReducer(ItemsReducer, initialItems);
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [openSection, setOpenSection] = React.useState(false);
  const [sections, dispatchSections] = React.useReducer(SectionsReducer, initialSections);
  const [focusedSection, setFocusedSection] = React.useState({name: "", order: 1, id: 0});
  const [selectedId, setSelectedId] = React.useState(null);
  const [selectedSection, setSelectedSection] = React.useState(null);

  const title = "Build Your Menu";
  React.useEffect(() => {
    document.title = title;
  }, [title]); // Only re-run the effect if count changes


  const classes = useStyles();
  const variants = {
    hidden: {
      opacity: 0,
      scale: .2
    },
    shown: {
      opacity: 1,
      scale: 1,
      transition: { 
        duration: .3,
        when: "beforeChildren",
        staggerChildren: 0.15 }
    } 
  }

  const renderCards = (items) => {
    let tempSections = sections.sort((a,b) => {return a.order - b.order});
    return tempSections.map((section, index) => {
      return (
        <motion.div key={section.id} variants={variants}>
          <h2 style={{cursor:"pointer",position:"relative",textAlign: "left", marginLeft: 15, marginBottom: 5}}  onClick={()=>{setFocusedSection(section); setOpenSection(true)}}>
            {section.name} 
            <span className="section-underline"></span></h2>
            <AnimateSharedLayout type="crossfade">
              <CardList items={items} setSelected={setSelected} setSelectedSection={setSelectedSection} selectedId={selectedId} sectionId={section.id}/>
              <AnimatePresence>  
                {selectedSection === section.id && selectedId && openDrawer && <ItemPresence key={`item-${section.id}`} sections={sections} items={items} id={selectedId} setSelected={setSelected} handleEditItem={(item) => { dispatchItems({ type: "update", item: item}) }} handleDeleteItem={(item) => { setTimeout(()=>{dispatchItems({ type: "remove", item: item})}, 500) }} />}
              </AnimatePresence>
            </AnimateSharedLayout>
        </motion.div>
      )

    })
  };

const setSelected = (id) => {
  id === null ? setOpenDrawer(false) : setOpenDrawer(true)
  setSelectedId(id);
}

const openAdd = () => {
  setOpenDrawer(true);
  setOpenSection(false);
}
const openAddSection = () => {
  setFocusedSection({name: "", order: 1, id: 0})
  setOpenSection(true);
  setOpenDrawer(false);
}



  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <Header />
      
      <div style={{display : "none"}}>
        <ItemCard 
          item={{}} 
          sections={sections} 
          expandedProp={openDrawer} 
          handleAddItem = {item => { dispatchItems({ type: "add", item: item}) }}
          handleCloseCard = {() => { setOpenDrawer(false) }}
        />
      </div>
      <div style={openSection ? {display: "block"} : {display : "none"}}>
        <SectionCard 
          section={focusedSection} 
          sections={sections} 
          expandedProp={openSection} 
          handleAddSection = {section => { dispatchSections({ type: "add", section: section}) }}
          handleEditSection = {section => { dispatchSections({ type: "update", section: section}) }}
          handleDeleteSection = {section => { dispatchSections({ type: "remove", section: section}) }}
          handleCloseCard = {() => { setOpenSection(false); }}
        />
      </div>

      <motion.div className="grid-container" animate={ "shown" } initial={ "hidden" } variants={variants}>
        {renderCards(items)}
      </motion.div> 
      </MuiThemeProvider>
    </div>
  );
}

export default App;
