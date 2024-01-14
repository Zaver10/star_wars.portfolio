import { useParams } from "react-router";
import "./datails.css";
import { useEffect, useState } from "react";
import { searchImg } from "../../method/method";
import { req } from "../../method/method";
import bigPlaceholder from "../../img/big-placeholder.jpg"

export default function Details({ url }) {
  const [information, setInformation] = useState({
    name: null,
    image: null,
    details: null,
  });
  
  const { id } = useParams();
  useEffect(()=>{
    req(`${url}${id}`).then((e) => {
        setInformation({
            name : e.name || e.title,
            image : searchImg(e.url).image ,
            details : e
        })

    }).catch(()=>{})
  }, [])
  return (
    <div className="page">
      <div className="page-datails">
        <div className="datails-name">{information.name }</div>
        <div className="datails-image">
          <img src={information.image}></img>
        </div>
        <div className="datails-information">{null}</div>
      </div>
    </div>

  );
}
