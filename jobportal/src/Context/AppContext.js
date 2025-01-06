import { createContext, useState } from "react";
export const AppContext=createContext();
export const AppContextProvider=(props)=>{
    const [isSearchFilter,setSearchFilter]=useState({title:'',location:''})
    const [isSearch,setSearch]=useState(false);

    const value={
       isSearchFilter,setSearchFilter,
       isSearch,setSearch
    }
    return (<AppContext.Provider>
          {props.children}
    </AppContext.Provider>)
}
 