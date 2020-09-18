import * as React from "react"
import Fab from '@material-ui/core/Fab'
import { motion } from 'framer-motion'
import TextField from '@material-ui/core/TextField'
import ClearIcon from '@material-ui/icons/Clear'
import DeleteIcon from '@material-ui/icons/Delete'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import { Section } from '../types'
 
interface Props{
    handleEditSection?(section: Section): any,
    handleDeleteSection?(section: Section): any,
    handleAddSection?(section: Section): any,
    handleCloseCard?(): any,
    sections: Section[],
    expandedProp?: boolean,
    section?: Section
}

export const SectionCard: React.FC<Props> = ({sections, section, handleEditSection, handleDeleteSection, expandedProp, handleAddSection, handleCloseCard}) => {

    const [sectionState, setSectionState] = React.useState(section);
    const [sectionsState, setSectionsState] = React.useState(sections);
    const [update, setUpdate] = React.useState(false);

    React.useEffect(() => {
      setSectionState(section);
      setUpdate(section.name !== "" ? true : false);
    }, [section]);

    React.useEffect(() => {
      setSectionsState(sections);

    }, [sections]);

    const updateState = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target; 

        setSectionState({
            ...sectionState,
            [name]: value
        })
    }

    const updateApp = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        update ? handleEditSection(sectionState) : handleAddSection(sectionState);   
        handleCloseCard();
    }

    const deleteSection = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        handleCloseCard();
        setSectionState({name: "", order: 1, id: 0});
        handleDeleteSection(section);
    }

    const closeCard = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        handleCloseCard();
    }

    const wrapperVariant = {
      hidden: {
        top: "calc(50vh)",
        left: "calc(50vw)",
        scale: [.7,1],
        translateY: ["20%", "0%"],
        translateX: ["0%", "0%"],
        zIndex: 20,
        paddingLeft: 30,
        transition: {
          duration: .3,
          delay: 0,
          times: [0,.7]
        }
      },
      show: {
          scale: [.3, 1],
          top: "42vh",
          left: "50vw",
          zIndex: 50,
          translateY: ["-60%", "-50%"],
          translateX: ["-50%", "-50%"],
          transition: { 
              duration: .3,
              delay: 0,
              times: [0,.7]
          }
      }
    }

    const overlayVariant = {
      hidden: {
        top: "0",
        left: "0",
        height: "0vh",
        width: "0vh",
        zIndex: 9,
        overflow: "hidden",
        content: "",
        background: "rgba(0,0,0,.7)",
        transition: {
          duration: 0
        }
      },
      show: {
          zIndex: 49,
          height: "100vh",
          width: "100vw",
          transition: { 
              duration :0
          }
      } 
    }
  

    return(
        <div className="section-card">
             <form onSubmit={updateApp} className="section-form">
             <motion.div variants={overlayVariant} initial={"hidden"} style={{position: "fixed"}}  animate={expandedProp ? "show" : "hidden"} onClick={expandedProp ? handleCloseCard : null}></motion.div>

          <motion.div className="form" variants={wrapperVariant} animate={expandedProp ? "show" : "hidden"}  style={{position: "fixed", background: "#fff"}}>
            <h5 style={{textAlign: "left", marginBottom: 10}}>Add a section</h5>
            <motion.div className="section-name">
            <TextField value={sectionState.name} name="name" onChange={updateState} label="Section name" variant="standard" /></motion.div>
            <motion.div className="section-position">
                <FormControl>
                    <InputLabel id="demo-simple-select-label">Position</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={update ? sections.length > 1 ? sectionState.order : "" : 1}
                        onChange={updateState}
                        name="order"
                        variant="standard"
                    >
                        {sections.length > 0 ? sections.map((section1, index) => {
                            return <MenuItem value={section1.order} key={section1.order}>{section1.order}</MenuItem> 
                        }) : ""}
                        {update ? "" : <MenuItem value={sectionsState.length + 1} key={sectionsState.length + 1}>{sectionsState.length + 1}</MenuItem>}
                    </Select>
                </FormControl></motion.div>
                <motion.div style={{justifyContent: "space-between", display: "flex", width: "100%", position: "absolute", bottom: -80, left: "50%", transform: "translateX(-50%)"}}>
                    <Fab  type="submit" variant="extended" color="primary">
                
                        <span style={{marginLeft:7, fontSize: "1.1em"}}>{update ? "Edit" : "Add"} section</span>
                        </Fab>
                         <a style={{display: "inline-flex", marginRight: 0, cursor: "pointer", marginLeft: 20}} onClick={closeCard}>
                            <ClearIcon />
                            <span>Cancel</span>
                        </a>
                        {update ? <a style={{display: "inline-flex",  cursor: "pointer"}} onClick={deleteSection}><DeleteIcon /><span>Delete<span className="hidden-sm"> Item</span></span></a> : ""}
                       
                </motion.div>
              </motion.div>
            </form>
        </div>
    )
}

export default SectionCard;