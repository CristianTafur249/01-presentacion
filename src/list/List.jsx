import { useState } from "react";
import ListView from "./listView";
import originalItems from './list'
function List() {
    let [items, setItems] =useState(frammeworkslist);
    
    function filterItems(searchPattern){
        if(searchPattern==""){
            setItems(frammeworkslist);
        }else{
            let newItems = filterItemsBySearchPattern(searchPattern);
        }
    } 

    function filterItemsBySearchPattern(searchPattern) {
        let filterItems = frammeworkslist.filter(item => item.toLowerCase().include(searchPattern.toLowerCase));
        return filterItems;
    }

    return(
        <ListView elements={frameworkslist} />
    );
}
export default List;