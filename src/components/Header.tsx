import React from 'react';
import { Parallax } from 'react-parallax';
import { motion } from 'framer-motion';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const headerVariants = {
    hidden: {
        opacity: 0,
        y: 50,
        color: "#ffffff"
    },
    shown: {
        opacity: 1,
        y: 0,
        color: "#ffffff",
        transition: { 
        duration: .5,
        when: "beforeChildren",
        staggerChildren: 0.2 }
    } 
}

const headerStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 550
}

const buttonStyles = {
    margin: 10,
    paddingLeft: 20,
    paddingRight: 30,
    background: 'linear-gradient(45deg, #1db675 30%, #60d7a4 90%)',
    textTransform: "none",
    transition: ".2s all",
    fontWeight: 400
}

/*
const useStyles = makeStyles({
    root: {
      margin: 10,
      paddingLeft: 20,
      paddingRight: 30,
      background: 'linear-gradient(45deg, #1db675 30%, #60d7a4 90%)',
      textTransform: "none",
      transition: ".2s all",
      fontWeight: 400,
      "&:hover": { 
        transform: "translateY(-6px)"
      }
    },
});

const classes = useStyles();
  */

export const Header = () => (

    <Parallax
          blur={0}
          bgImage={require('../assets/parallax.jpg')}
          bgImageAlt="the cat"
          strength={400}
      ><div style={headerStyles}>
          <div className="headerBG"></div>
        
          <motion.div variants={headerVariants} initial={ "hidden" } animate={ "shown" } className="headerTitle">
              <motion.h1 className="title" variants={headerVariants}>Welcome to your menu</motion.h1>
              <motion.h6 className="title" variants={headerVariants}>Click on an existing menu section or item to edit it.</motion.h6>
              <motion.div variants={headerVariants}>
                <Fab variant="extended" color="primary">
                  <AddIcon />
                  <span style={{marginLeft:7, fontSize: "1.1em"}}>Add menu item</span>
                </Fab>
                <Fab variant="extended" color="primary">
                  <AddIcon />
                  <span style={{marginLeft:7, fontSize: "1.1em"}}>Add menu section</span>
                </Fab>
              </motion.div>
          </motion.div>

      </div>
      </Parallax>
)

export default Header