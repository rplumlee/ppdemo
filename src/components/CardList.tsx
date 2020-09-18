import React from "react";
import { motion } from "framer-motion";

function Card({ id, itemName, itemDescription, imgUrl, setSelected, gf, v, featured, sectionId, theme }) {

  return (
    <motion.li className={`card ${theme}`} onClick={() => {setSelected(id)}} layoutId={`cardlist`} key={`card-${id}`}>
      <div className="card-content-container">
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <img className="card-image" src={imgUrl} alt="" />
          </motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <div>
              <h2>{itemName}</h2>
              <span className="category">{itemDescription}</span>
            </div>
            <div className="tags">{gf ? <span className='gluten-free'>GF</span> : ""}{v ? <span className='vegan'>V</span> : ""}{featured ? <span className='featured'>Featured</span> : ""}</div>
            
          </motion.div>
        </motion.div>
      </div>
    </motion.li>
  );
}

export default function CardList({ items, setSelected, selectedId, sectionId }) {
  return (
    <ul className="card-list">
      {items.map((item, index) => (
        item.section === sectionId && <Card key={`${sectionId}-${index}`} {...item} setSelected={setSelected} selectedId={selectedId} sectionId={sectionId} layout />
      ))}
    </ul>
  );
}
