import { useState } from "react";
import ListView from "./listView";
import frameworkslist from './items'
import './listView.css'
function List() {
    let [items, setItems] =useState(frameworkslist);
    
    function filterItems(searchPattern){
        if(searchPattern===""){
            setItems(frameworkslist);
        }else{
            let newItems = filterItemsBySearchPattern(searchPattern);
            setItems(newItems);
        }
    } 

    function filterItemsBySearchPattern(searchPattern) {
        let filterItems = frameworkslist.filter(item => item.toLowerCase().includes(searchPattern.toLowerCase()));
        return filterItems;
    }

    return(
        <ListView elements={items} funFilterItems={filterItems} />
    );
}
export default List;