import React from 'react';
import CardList from './components/CardList';
import ItemPresence from './components/ItemPresence';
import SectionHeader from './components/SectionHeader';
import Header from './components/Header';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
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
  | { type: "increment"; section: Section}
  | { type: "decrement"; section: Section}
  | { type: "updateName"; section: Section}

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
  
  switch (action.type){
    case "add":
      const newID = state[state.length -1] ? state[state.length -1].id + 1 : 1;
      const newSection = {...action.section, id: newID}
      let newSections = state.map((section) => { section.order = (section.order >= action.section.order) ? section.order + 1 : section.order; return section })   
      newSections = [...newSections, newSection];
      return newSections.sort((a, b) => {return a.order - b.order});

    case "remove": 
      return state.map((section) => { section.order = (section.order >= action.section.order) ? section.order - 1 : section.order; return section }).filter((section) => section.id !== action.section.id)

    case "updateName":
      return state.map((section) => { return action.section.id === section.id ? action.section : section})

    case "increment":
      if(action.section.order === state.length){
        return state
      }
      return state.map((section) => { 
        if(section.order === action.section.order){
          return {...section, order: section.order + 1}
        }
        else if (section.order === action.section.order + 1){
          return {...section, order: section.order - 1}
        }
        else{
          return section
        }
      })
    case "decrement":
      if(action.section.order === 1){
        return state
      }
      return state.map((section) => { 
        if(section.order === action.section.order){
          return {...section, order: section.order - 1}
        }
        else if (section.order === action.section.order - 1){
          return {...section, order: section.order + 1}
        }
        else{
          return section
        }
      })
    default:
      return state;
  }
}

function App() {
  const [items, dispatchItems] = React.useReducer(ItemsReducer, initialItems);
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [sections, dispatchSections] = React.useReducer(SectionsReducer, initialSections);
  const [selectedId, setSelectedId] = React.useState(null);

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
            <SectionHeader section={section} handleIncrementSection={(section) => { dispatchSections({ type: "increment", section: section}) }} handleDecrementSection={(section) => { dispatchSections({ type: "decrement", section: section}) }} handleUpdateSectionName={(section) => { dispatchSections({ type: "updateName", section: section}) }}  />
            <CardList items={items} setSelected={setSelected} selectedId={selectedId} sectionId={section.id}/>
        </motion.div>
      )
    })
  }

const setSelected = (id) => {
  id === null ? setOpenDrawer(false) : setOpenDrawer(true)
  setSelectedId(id);
}


  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <Header />
        <motion.div className="grid-container" animate={ "shown" } initial={ "hidden" } variants={variants}>
          <AnimateSharedLayout type="crossfade">
            <AnimatePresence>  
                  {selectedId && openDrawer && <ItemPresence key="item" sections={sections} items={items} id={selectedId} setSelected={setSelected} handleEditItem={(item) => { dispatchItems({ type: "update", item: item}) }} handleDeleteItem={(item) => { setTimeout(()=>{dispatchItems({ type: "remove", item: item})}, 500) }} />}
            </AnimatePresence>
            {renderCards(items)}
          </AnimateSharedLayout>
        </motion.div> 
      </MuiThemeProvider>
    </div>
  );
}

export default App;
