import React from "react";
import { motion } from "framer-motion";
import TextField from '@material-ui/core/TextField';
import ClearIcon from '@material-ui/icons/Clear';
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function ItemPresence({ items, id, setSelected, sections, handleEditItem, handleDeleteItem }) {
  const [item, setItem] = React.useState(items.find(item => item.id === id))

  const updateInputState = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {value, name} = e.target
    setItem({
        ...item,
        [name]: value
    })
  }   

  const udpateCheckboxState = (e) => {
    setItem({ ...item, [e.target.name]: e.target.checked })
  }

  const updateItem = () => {
    handleEditItem(item)
    setSelected(null)
  }

  const deleteItem = () => {
    handleDeleteItem(item)
    setSelected(null)
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: "auto" }}
        className="overlay"
      >

          <a onClick={() => setSelected(null)}></a>
      
      </motion.div>
      <div className="card-content-container open">
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <img className="card-image" src={item.imgUrl} alt="" />
          </motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
          </motion.div>

          <motion.div className="content-container" animate>
            <div className="title-inputs">
              <TextField value={item.itemName} name="itemName" label="Name" variant="standard" onChange={updateInputState}/>
              <TextField value={item.itemPrice ? item.itemPrice : ""} name="itemPrice" onChange={updateInputState} label="Price" variant="standard" />
            </div>

            <TextField value={item.itemDescription} name="itemDescription" multiline rows={4} onChange={updateInputState} label="Description" variant="standard" />
            
            <div className="title-inputs">
              <div className="title-inputs column wide">
                <FormControl className="sections-select">
                  <InputLabel id="demo-simple-select-label">Menu Section</InputLabel>
                  <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={sections.length > 0 ? item.section : ""}
                      onChange={updateInputState}
                      name="section"
                      variant="standard"
                  >
                    {sections.map((section, index) => {
                        return <MenuItem value={section.id} key={section.id}>{section.name}</MenuItem> 
                    })}
                  </Select>
                </FormControl>
                <TextField value={item.imgUrl} name="imgUrl" onChange={updateInputState} label="Image Url" variant="standard" />
              </div>
            <div className="title-inputs column">
              <FormControlLabel
                control={
                    <Checkbox
                    checked={item.gf}
                    onChange={udpateCheckboxState}
                    name="gf"
                    color="primary"
                    />
                  }
                  label="Gluten free"
                  />
                  <FormControlLabel
                  control={
                      <Checkbox
                      checked={item.v}
                      onChange={udpateCheckboxState}
                      name="v"
                      color="primary"
                      />
                  }
                  label="Vegan"
                  />
                  <FormControlLabel
                  control={
                      <Checkbox
                      checked={item.featured}
                      onChange={udpateCheckboxState}
                      name="featured"
                      color="primary"
                      />
                  }
                  label="Featured"
                  />
                  </div>
              </div>
              <div className="card-buttons">
                <Fab variant="extended" color="primary" onClick={() => {updateItem()}}>
                    <span>Confirm<span className="hidden-sm"> edits</span></span>
                </Fab>
                <div className="cancel-delete-buttons">
                  <button onClick={(e) => {e.preventDefault(); setSelected(null)}}>
                      <ClearIcon />
                      <span>Cancel</span>
                  </button>
                  <button onClick={(e)=>{e.preventDefault(); deleteItem()}}>
                      <DeleteIcon />
                      <span>Delete</span>
                  </button>
                </div> 
              </div>
              
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
