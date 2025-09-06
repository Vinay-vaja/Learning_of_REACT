import Item from "./item";
import { useState } from "react";

const FoodItem = ({items}) => {

  let [activeItems,setActiveItems]=useSet([]);

  let onByButton = (item,event)=>{
    let newitem=[...activeItems,item];
    setActiveItems(newitem);

  }
  
  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <Item key={item}
           programmingLang={item}
           bought={activeItems.includes(item)}
           handleBuyButton={ (event)=>(item,event)}
           ></Item>
        ))}
      </ul>
    </>
  );
};
export default FoodItem;
