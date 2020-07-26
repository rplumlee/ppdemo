import * as React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import { motion } from 'framer-motion';
import TextField from '@material-ui/core/TextField';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import DeleteIcon from '@material-ui/icons/Delete';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

interface Props{
    handleEditItem?(item: Item): any,
    handleDeleteItem?(item: Item): any,
    handleAddItem?(item: Item): any,
    handleCloseCard?(): any,
    sections: Section[],
    item: Item,
    demoCard?: boolean,
    expandedProp?: boolean
}
interface Section{
    name: string,
    order: number,
    id: number
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

const useStyles = makeStyles({
    root: {
      margin: 15,
      boxShadow: "0px 18px 37px 0px rgba(0, 0, 0, 0.07)",
      display: "inline-block",
      transition: ".2s all",
      textAlign: "left",
      zIndex: 10,
      '&:hover': {
        boxShadow: "0px 25px 45px 0px rgba(0, 0, 0, 0.17)",
        transform: "translateY(-5px)"
    },
    },
    media: {
      height: 140,
    },
  });

  const wrapperVariant = {
    normal: {
      top: "calc(50vh)",
      left: "calc(50vw)",
      width: [280, 280],
      scale: [.7,1],
      height: "auto",
      translateY: ["20%", "0%"],
      translateX: ["0%", "0%"],
      zIndex: 20,
      transition: {
        duration: .3,
        delay: 0,
        times: [0,.7]
      }
    },
    expanded: {
        scale: [.3, 1],
        top: "42vh",
        left: "50vw",
        zIndex: 50,
        translateY: ["-60%", "-50%"],
        translateX: ["-50%", "-50%"],
        width: [550, 550],
        height: "auto",
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


export const ItemCard: React.FC<Props> = ({sections, handleEditItem, handleDeleteItem, item, demoCard, expandedProp, handleAddItem, handleCloseCard}) => {
    const classes = useStyles();
    const [itemState, setItemState] = React.useState(item);
    const [expanded, setExpanded] = React.useState(false);

    const updateState = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target; 
        console.log(value);
        setItemState({
            ...itemState,
            [name]: value
        })
    }

    const udpateCheckbox = (e) => {
        setItemState({ ...itemState, [e.target.name]: e.target.checked });
      };

    const updateApp = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        expandedProp ? handleAddItem(itemState) : handleEditItem(itemState);
        if (expandedProp){ setItemState({}) };
        expandedProp ? handleCloseCard() : setExpanded(false);
    }

    const deleteItem = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        setExpanded(false);
        handleDeleteItem(item);
    }

    const closeCard = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        if (expandedProp){ setItemState({}) };
        expandedProp ? handleCloseCard() : setExpanded(false);
    }


    return(
        <div className={demoCard ? "" : "card-placeholder"}>
            <form onSubmit={updateApp}>
            
            <motion.div variants={overlayVariant} initial={"hidden"} style={{position: "fixed"}}  animate={expanded || expandedProp ? "show" : "hidden"} onClick={() => expandedProp ? handleCloseCard : setExpanded(false)}></motion.div>

            <motion.div variants={wrapperVariant} className={expanded || expandedProp ? "cardexpander expanded" : "cardexpander"} initial={"normal"} animate={expanded || expandedProp ? "expanded" : "normal"} style={{display:"flex", justifyContent: "center", alignItems: "center"}}>
                <Card className={classes.root} onClick={(e) => { expanded || expandedProp ? console.log(' ') : setExpanded(true) }}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={itemState.imgUrl ? itemState.imgUrl: "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"}
                        />
                        <CardContent>
                        <div className="card-title">
                            {expanded || expandedProp ? 
                                <h5 style={{margin: "0px 0px 5px 0px"}}><TextField value={itemState.itemName} name="itemName" onChange={updateState} label="Name" variant="standard" /><small><TextField value={itemState.itemPrice ? itemState.itemPrice : ""} name="itemPrice" onChange={updateState} label="Price" variant="standard" /></small></h5>
                                : 
                                <h5 style={{margin: "0px 0px 5px 0px"}}>{itemState.itemName} <small>{itemState.itemPrice ? "$" : ""}{itemState.itemPrice}</small></h5>
                            }
                        
                        </div>
                        <Typography variant="body2" color="textSecondary" component="div" style={{paddingTop:3, minHeight: 113}}>
                            <span>
                                {expanded || expandedProp 
                                    ? 
                                    <TextField value={itemState.itemDescription} name="itemDescription" multiline rows={4} onChange={updateState} label="Description" variant="standard" style={{marginBottom:12}}/>
                                    : 
                                    itemState.itemDescription
                                }

                                {expanded || expandedProp
                                    ? 
                                    <FormControl>
                                            <InputLabel id="demo-simple-select-label">Section</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={itemState.section}
                                                onChange={updateState}
                                                name="menu section"
                                                variant="standard"
                                            >
                                                {sections.map((section, index) => {
                                                    return <MenuItem value={section.name} key={section.id}>{section.name}</MenuItem> 
                                                })}
                                            </Select>
                                        </FormControl>     
                                    : 
                                    ""
                                }
                            </span>

                            
                            {expanded || expandedProp 
                                ? 
                                <span style={{display: "block", marginTop: 10}}>
                                    <FormControlLabel
                                    control={
                                        <Checkbox
                                        checked={itemState.gf}
                                        onChange={udpateCheckbox}
                                        name="gf"
                                        color="primary"
                                        />
                                    }
                                    label="Gluten free"
                                    />
                                    <FormControlLabel
                                    control={
                                        <Checkbox
                                        checked={itemState.v}
                                        onChange={udpateCheckbox}
                                        name="v"
                                        color="primary"
                                        />
                                    }
                                    label="Vegan"
                                    />
                                    <FormControlLabel
                                    control={
                                        <Checkbox
                                        checked={itemState.featured}
                                        onChange={udpateCheckbox}
                                        name="featured"
                                        color="primary"
                                        />
                                    }
                                    label="Featured"
                                    />
                                </span>
                                : 
                               <span style={{marginBottom:0, marginTop: 15}}>{itemState.gf ? <span className='gluten-free'>GF</span> : ""}{itemState.v ? <span className='vegan'>V</span> : ""}{itemState.featured ? <span className='featured'>Featured</span> : ""}</span>
                            }

                            



                            
                          
                          
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        {expanded || expandedProp 
                                ? 
                                <span style={{margin: "10px 0 0 0", height: 48, alignItems: "center", display: "flex", justifyContent: "space-between", width: "100%"}}>
                                    <Fab  type="submit" variant="extended" color="primary">
                                        <span style={{fontSize: "1.1em"}}>Confirm<span className="hidden-sm"> edits</span></span>
                                    </Fab>
                                    <a style={{display: "inline-flex", marginRight: 0, cursor: "pointer", marginLeft: 20}} onClick={closeCard}>
                                        <ClearIcon />
                                        <span>Cancel</span>
                                    </a>
                                    {expandedProp ?  "" : 
                                        <a style={{display: "inline-flex",  cursor: "pointer"}} onClick={deleteItem}>
                                            <DeleteIcon />
                                            <span>Delete<span className="hidden-sm"> Item</span></span>
                                        </a>
                                    }

                                </span>
                                : 
                                ""
                            }
                    </CardActions>
                </Card>
            </motion.div>
            </form>
        </div>
    )
}

export default ItemCard;