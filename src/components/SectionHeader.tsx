import * as React from "react";
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { motion } from 'framer-motion';
import { Section } from '../types'

interface Props{
    handleIncrementSection(): any,
    handleDecrementSection(): any,
    handleUpdateSectionName(): any,
    section: Section
}

export const SectionHeader: React.FC<Props> = ({handleIncrementSection, handleDecrementSection, handleUpdateSectionName, section}) => {

    return(
        <motion.div layoutId={'cardList'}>
            
            <motion.h2 className="section-header" layoutId={`cardlist`}>
                {section.name} 
                <span className="section-underline"></span>
            </motion.h2>
            
        </motion.div>
    )
}

export default SectionHeader;