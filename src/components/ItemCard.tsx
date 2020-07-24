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
    handleEditItem(item: Item): any,
    handleDeleteItem(item: Item): any,
    sections: Section[],
    item: Item,
    demoCard: boolean
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
      top: "calc(50vh - 50%)",
      left: "calc(50vw - 50%)",
      width: 280,
      scale: 1,
      height: "auto",
      translateY: "0%",
      translateX: "0%",
      zIndex: 20,
      transition: {
        duration: .3,
        delay: 0
      }
    },
    expanded: {
        scale:1,
        top: "50vh",
        left: "50vw",
        zIndex: 50,
        translateY: "-50%",
        translateX: "-50%",
        width: "auto",
        height: "auto",
        transition: { 
            duration: .3,
            delay: 0,
        }
    } 
  }

  const overlayVariant = {
    hidden: {
      top: "0",
      left: "0",
      height: 0,
      width: 0,
      zIndex: 9,
      overflow: "hidden",
      content: "",
      background: "rgba(0,0,0,.7)",
      transition: {
        duration: 0,
        delay: 0
      }
    },
    show: {
        zIndex: 49,
        height: "100vh",
        width: "100vw",
        left: "0",
        top: 0,
        transition: { 
        duration: .3,
        delay: 0
        }
    } 
  }


export const ItemCard: React.FC<Props> = ({sections, handleEditItem, handleDeleteItem, item, demoCard}) => {
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
        handleEditItem(itemState);
        setExpanded(false);
    }

    const deleteItem = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        console.log(item);
        setExpanded(false);
        handleDeleteItem(item);

    }

    const closeCard = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        setExpanded(false);
    }


    return(
        <div style={demoCard ? {} : {width: 280, minHeight: 310}}>
            <form onSubmit={updateApp}>
            
            <motion.div variants={overlayVariant} initial={"hidden"} style={{position: "fixed"}}  animate={expanded ? "show" : "hidden"} onClick={() => setExpanded(false)}></motion.div>

            <motion.div variants={wrapperVariant} className={expanded ? "cardexpander expanded" : "cardexpander"} initial={"normal"} animate={expanded ? "expanded" : "normal"} style={{display:"flex", justifyContent: "center", alignItems: "center"}}>
                <Card className={classes.root} onClick={(e) => { expanded || demoCard ? console.log(' ') : setExpanded(true) }}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={demoCard ? 
                                item.imgUrl ? item.imgUrl: "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
                                : itemState.imgUrl ? itemState.imgUrl: "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"}
                        />
                        <CardContent>
                        <div className="card-title">
                            {expanded ? 
                                <h5 style={{margin: "0px 0px 5px 0px"}}><TextField value={itemState.itemName} name="itemName" onChange={updateState} label="Name" variant="outlined" /><small><TextField value={itemState.itemPrice ? itemState.itemPrice : ""} name="itemPrice" onChange={updateState} label="Price" variant="outlined" /></small></h5>
                                : 
                                <h5 style={{margin: "0px 0px 5px 0px"}}>{demoCard ? item.itemName : itemState.itemName} <small>{itemState.itemPrice ? "$" : ""}{demoCard ? item.itemPrice : itemState.itemPrice}</small></h5>
                            }
                        
                        </div>
                        <Typography variant="body2" color="textSecondary" component="div" style={{paddingTop:3, minHeight: 113}}>
                            <span>
                                {expanded 
                                    ? 
                                    <TextField value={itemState.itemDescription} name="itemDescription" multiline rows={3} onChange={updateState} label="Description" variant="outlined" />
                                    : 
                                    demoCard ? item.itemDescription : itemState.itemDescription
                                }

                                {expanded 
                                    ? 
                                    <FormControl>
                                            <InputLabel id="demo-simple-select-label">Section</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={itemState.section}
                                                onChange={updateState}
                                                name="section"
                                                variant="outlined"
                                            >
                                                {sections.map((section, index) => {
                                                    return <MenuItem value={section.name} key={index}>{section.name}</MenuItem> 
                                                })}
                                            </Select>
                                        </FormControl>     
                                    : 
                                    ""
                                }
                            </span>

                            
                            {expanded 
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
                                demoCard ? 
                                <span style={{marginBottom:0, marginTop: 15}}>{item.gf ? <span className='gluten-free'>GF</span> : ""}{item.v ? <span className='vegan'>V</span> : ""}{item.featured ? <span className='featured'>Featured</span> : ""}</span>
                                : <span style={{marginBottom:0, marginTop: 15}}>{itemState.gf ? <span className='gluten-free'>GF</span> : ""}{itemState.v ? <span className='vegan'>V</span> : ""}{itemState.featured ? <span className='featured'>Featured</span> : ""}</span>
                            }

                            



                            
                          
                          
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        {expanded 
                                ? 
                                <span style={{margin: "0 10px 10px 10px", height: 48, alignItems: "center", display: "flex", justifyContent: "space-between", width: "100%"}}>
                                    <Fab  type="submit" variant="extended" color="primary" style={{marginRight: 20}}>
                                        <DoneIcon />
                                        <span style={{marginLeft:7, fontSize: "1.1em"}}>Confirm edits</span>
                                    </Fab>
                                    <a style={{display: "inline-flex", marginRight: 20, cursor: "pointer"}} onClick={closeCard}>
                                        <ClearIcon />
                                        <span style={{marginLeft:7, fontSize: "1.1em"}}>Cancel</span>
                                    </a>
                                    <a style={{display: "inline-flex", color: "#B22222", cursor: "pointer"}} onClick={deleteItem}>
                                        <DeleteIcon />
                                        <span style={{marginLeft:7, fontSize: "1.1em"}}>Delete</span>
                                    </a>
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