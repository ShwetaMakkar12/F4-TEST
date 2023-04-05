import React from "react";
import { Link } from "react-router-dom";
const HomePage = ({data}) => {
    return (
    <>
      <div className="homePage">

         {data.map((data)=>{
        return (
          <div className="cardDetails">
      <div className="img">
            <img className="img" src={`https://picsum.photos/200?random=${data.id}`} alt="image"/>
          </div>
<div className="body">User ID : {data.userId}</div>
<div className="title">Title : {data.title.slice(0, 15)}... </div>
<div className="body">Body : {data.body.slice(0, 35)}...</div><br/><br/>
<Link to= "/DetailPage" className="btn">
             Read More
          </Link>
          </div>
        )})
      }
      </div>
    </>
  );
};

export default HomePage;
