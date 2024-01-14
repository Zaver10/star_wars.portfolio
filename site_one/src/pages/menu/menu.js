import { useEffect, useState } from "react";
import Cards from "../../components/cards";
import LabelSearch from "../../components/label-search";
import "./menu.css";
import Loader from "../../components/loader/loader";


const Menu = ({ displayName, data, }) => {
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(()=>{
   fetch(`https://swapi.dev/api/`).then(()=>{
     setIsLoading(true)
   })
  
  },[])
  
  return (
    <div className="screen2 screen">
      <LabelSearch displayName={displayName}></LabelSearch>
      {!isLoading ? <Loader></Loader> : <Cards data={data}></Cards>}
  
      
    </div>
  );
}; 

export default Menu;