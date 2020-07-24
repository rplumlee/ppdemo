import * as React from "react";
import TextField from '@material-ui/core/TextField';
import ItemCard from './ItemCard';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { motion } from 'framer-motion';


interface Props{
    handleChangeItem(item: Item): any,
    handleCloseItems(): any,
    shown: boolean,
    sections: Section[]
}

interface Section{
    name: string,
    order: number
}

interface Item{
    itemName?: string,
    itemPrice?: number,
    section?: string,
    itemDescription?: string,
    imgUrl?: string,
    id?: number,
    gf?: boolean,
    v?: boolean,
    featured?: boolean
  }

const initialState = {
    imgUrl: "", 
    section: "",
    itemName: "",
    itemDescription: "",
    itemPrice: null,
    gf: false,
    v: false,
    featured: false}

const variants = {
    hidden: {
      opacity: 0,
      scale: 0,
      transition: {
        staggerChildren: 0.1
      }
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
  const wrapperVariant = {
    hidden: {
      height:0,
      transition: {
        duration: .3,
        delay: .15
      }
    },
    shown: {
      height: "auto",
      transition: { 
        duration: .3,
        }
    } 
  }

export const AddItem: React.FC<Props> = ({handleChangeItem, shown, sections, handleCloseItems}) => {

    const [item, setItem] = React.useState(initialState);

    const updateState = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target; 
        setItem({
            ...item,
            [name]: value
        })
    }

    
    const udpateCheckbox = (e) => {
        setItem({ ...item, [e.target.name]: e.target.checked });
    };


    const updateApp = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        handleChangeItem(item);
        setItem(initialState);
        handleCloseItems();
    }

    const cancelAdd = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        setItem(initialState);
        handleCloseItems();
    }

    return(
        <motion.div variants={wrapperVariant} initial={"hidden"} animate={shown ? "shown" : "hidden"} style={{overflow: "hidden"}}>
            

                <div className="container">
                <motion.h5 variants={variants} initial={"hidden"} animate={shown ? "shown" : "hidden"} style={{textAlign:"left",marginBottom: 0, marginLeft: 15}}>Add an item</motion.h5>
                    
                    <div id="add-form">
                        <div className="add-to-menu">
                            <motion.div className="form" variants={variants} animate={shown ? "shown" : "hidden"}>
                                
                                <div style={{paddingRight: 30, maxWidth: 450}}>
                                <motion.div variants={variants} style={{width: "calc(70% - 30px)", display: "inline-block", paddingRight: 30}}><TextField value={item.itemName} name="itemName" onChange={updateState} label="Name" variant="outlined" /></motion.div>
                                <motion.div variants={variants} style={{width: "30%", display: "inline-block"}}><TextField value={item.itemPrice ? item.itemPrice : ""} name="itemPrice" onChange={updateState} label="Price" variant="outlined" /></motion.div>
                                <motion.div variants={variants} className="select-section">
                                    <FormControl>
                                        <InputLabel id="demo-simple-select-label">Section</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={item.section}
                                            onChange={updateState}
                                            name="section"
                                            variant="outlined"
                                        >
                                            {sections.map((section, index) => {
                                                return <MenuItem value={section.name} key={index}>{section.name}</MenuItem> 
                                            })}
                                        </Select>
                                    </FormControl>
                                </motion.div>
                                <motion.div variants={variants}><TextField value={item.imgUrl} name="imgUrl" onChange={updateState} label="Image URL" variant="outlined" /></motion.div>
                                <motion.div variants={variants}><TextField value={item.itemDescription} name="itemDescription" multiline rows={3} onChange={updateState} label="Description" variant="outlined" /></motion.div>
                              
                                <motion.div variants={variants} style={{display:"inline-block", paddingTop: 15}} className="select-section">
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                        checked={item.gf}
                                        onChange={udpateCheckbox}
                                        name="gf"
                                        color="primary"
                                        />
                                    }
                                    label="Gluten free"
                                    /></motion.div>
                                <motion.div style={{display:"inline-block", paddingTop: 15}} variants={variants} className="select-section">
                                    <FormControlLabel
                                    control={
                                        <Checkbox
                                        checked={item.v}
                                        onChange={udpateCheckbox}
                                        name="v"
                                        color="primary"
                                        />
                                    }
                                    label="Vegan"
                                    /></motion.div>
                                <motion.div style={{display:"inline-block", paddingTop: 15}} variants={variants} className="select-section">
                                    <FormControlLabel
                                    control={
                                        <Checkbox
                                        checked={item.featured}
                                        onChange={udpateCheckbox}
                                        name="featured"
                                        color="primary"
                                        />
                                    }
                                    label="Featured"
                                    /></motion.div>
                                 </div><motion.div variants={variants} style={{marginTop: 10}}>
                                        <ItemCard demoCard={true} item={item} handleEditItem={()=>{ console.log('') }} sections={sections}  handleDeleteItem = {() => console.log('')}/>
                                        <motion.div variants={variants} style={{textAlign: "center", display: "block"}}>
                                        <Fab variant="extended" color="primary" onClick={updateApp} href="#">
                                        <DoneIcon />
                                        <span style={{marginLeft:7, fontSize: "1.1em"}}>Add menu item</span>
                                        </Fab>
                                        <Fab variant="extended" onClick={cancelAdd} href="#">
                                        <ClearIcon />
                                        <span style={{marginLeft:7, fontSize: "1.1em"}}>Cancel</span>
                                        </Fab>
                                    </motion.div>
                                </motion.div>

                            </motion.div>

                        </div>
                    </div>
                </div>
            
        </motion.div>
    )
}
export {};
export default AddItem;