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
      return state.map((section) => { return action.section.id === section.id ? {...section, name: action.section.name} : section})

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
  const [openPresence, setOpenPresence] = React.useState(false);
  const [sections, dispatchSections] = React.useReducer(SectionsReducer, initialSections);
  const [selectedId, setSelectedId] = React.useState(null);

  const setSelected = (id) => {
    id === null ? setOpenPresence(false) : setOpenPresence(true)
    setSelectedId(id);
  }

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
    return sections.sort((a,b) => {return a.order - b.order}).map((section, index) => {
      return (
        <div key={`section-block-${section.id}`}>
            <SectionHeader key={`section-component-${section.id}`} section={section} handleIncrementSection={(section) => { dispatchSections({ type: "increment", section: section}) }} handleDecrementSection={(section) => { dispatchSections({ type: "decrement", section: section}) }} handleUpdateSectionName={(section) => { dispatchSections({ type: "updateName", section: section}) }}  />
            <CardList items={items} setSelected={setSelected} selectedId={selectedId} sectionId={section.id}/>
        </div>
      )
    })
  }

  const renderFeaturedItems = (items) => {
      return (
        <div key={`section-block-featured`} className="featured-section">
            <SectionHeader key={`section-component-featured`} section={{id: 0, name: 'Featured Menu Items', order: 0}} handleIncrementSection={() => { }} handleDecrementSection={() => { }} handleUpdateSectionName={() => { }}  />
            <CardList items={items} setSelected={setSelected} selectedId={selectedId} sectionId={0}/>
        </div>
      )
  }

  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <Header />
        <motion.div className="grid-container" animate={ "shown" } initial={ "hidden" } variants={variants}>
          <AnimateSharedLayout type="crossfade">
            <AnimatePresence>  
                  {selectedId && openPresence && <ItemPresence key="item" sections={sections} items={items} id={selectedId} setSelected={setSelected} handleEditItem={(item) => { dispatchItems({ type: "update", item: item}) }} handleDeleteItem={(item) => { setTimeout(()=>{dispatchItems({ type: "remove", item: item})}, 500) }} />}
            </AnimatePresence>
            {renderFeaturedItems(items)}
            {renderCards(items)}
          </AnimateSharedLayout>
        </motion.div> 
      </MuiThemeProvider>
    </div>
  );
}

export default App;
