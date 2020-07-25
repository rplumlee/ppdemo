import * as React from "react";
import TextField from '@material-ui/core/TextField';
import ItemCard from './ItemCard';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';

import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import { TextareaAutosize } from "@material-ui/core";


interface Props{
    handleChangeSection(section: Section): any,
    handleCloseSections(): any,
    shown: boolean,
    sections: Section[]
}
interface Section{
    name: string,
    order: number
}

interface Topping{
    toppingName: string,
    toppingPrice: number
}

const initialState = {
    name: "", 
    order: 1,
    }

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

export const AddSection: React.FC<Props> = ({handleChangeSection, shown, sections, handleCloseSections}) => {

    const [section, setSection] = React.useState(initialState);

    const updateState = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target; 
        setSection({
            ...section,
            [name]: value
        })
    }

    const updateApp = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleChangeSection(section);
        setSection(initialState);
        handleCloseSections();
    }

    return(
        <motion.div variants={wrapperVariant} initial={"hidden"} animate={shown ? "shown" : "hidden"} style={{overflow: "hidden"}}>
            

                <div className="container">
                <motion.h5 variants={variants} initial={"hidden"} animate={shown ? "shown" : "hidden"} style={{textAlign:"left",marginBottom: 0, marginLeft: 15}}>Add a section</motion.h5>
                    
                    <form onSubmit={updateApp}>
                        <div className="add-to-menu">
                            <motion.div className="form" variants={variants} animate={shown ? "shown" : "hidden"}>
                                <motion.div variants={variants} className="section-name"><TextField value={section.name} name="name" onChange={updateState} label="Name" variant="standard" /></motion.div>
                                <motion.div variants={variants} className="section-position">
                                    <FormControl>
                                        <InputLabel id="demo-simple-select-label">Position</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={section.order}
                                            onChange={updateState}
                                            name="order"
                                            variant="standard"
                                        >
                                            {sections.map((section, index) => {
                                                return <MenuItem value={index + 1} key={index}>{index + 1}</MenuItem> 
                                            })}
                                            <MenuItem value={sections.length + 1} key={sections.length + 1}>{sections.length + 1}</MenuItem>
                                        </Select>
                                    </FormControl></motion.div>
                                <motion.div variants={variants} style={{marginTop: 15}}>
                                    <Fab  type="submit" variant="extended" color="primary">
                                        <DoneIcon />
                                        <span style={{marginLeft:7, fontSize: "1.1em"}}>Add section</span>
                                        </Fab>
                                        <Fab variant="extended" onClick={handleCloseSections}>
                                        <ClearIcon />
                                        <span style={{marginLeft:7, fontSize: "1.1em"}}>Cancel</span>
                                    </Fab>
                                </motion.div>
                             </motion.div>

                        </div>
                    </form>
                </div>
            
        </motion.div>
    )
}

export default AddSection;