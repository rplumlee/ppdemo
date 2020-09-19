import * as React from "react";
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import { motion } from 'framer-motion';
import { Section } from '../types'

interface Props{
    handleIncrementSection(section: Section): any,
    handleDecrementSection(section: Section): any,
    handleUpdateSectionName(section: Section): any,
    section: Section
}



export const SectionHeader: React.FC<Props> = ({handleIncrementSection, handleDecrementSection, handleUpdateSectionName, section}) => {
    const [isEditing, setIsEditing] = React.useState(false)
    const [newSection, setNewSection] = React.useState(section)

    const updateInputState = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target
        setNewSection({
            ...newSection,
            [name]: value 
        }) 
      }   

    return( 
           
            <motion.h2 className="section-header" layoutId={`cardList`} key={`section-${section.id}`}>
                {!isEditing ? section.name : <TextField value={newSection.name} name="name" onChange={updateInputState} variant="standard" /> } 
                <div className={section.id != 0 ? 'section-actions' : 'section-actions featured'}>
                    {!isEditing ? 
                        (<span><Fab color="primary" size="small" onClick={() => {handleIncrementSection(section)}}>
                            <ArrowDownward />
                        </Fab>
                        <Fab color="primary" size="small" onClick={() => {handleDecrementSection(section)}}>
                                <ArrowUpward />
                            </Fab>
                            <Fab color="primary" size="small" onClick={() => {setIsEditing(true)}}>
                            <EditIcon />
                        </Fab></span>) 
                : (<Fab color="primary" size="small" onClick={() => {handleUpdateSectionName(newSection); setIsEditing(false)}}>
                        <DoneIcon />
                    </Fab>) }
                </div>
                {!isEditing && <motion.span className="section-underline"></motion.span>}
            </motion.h2>
    )
}

export default SectionHeader;