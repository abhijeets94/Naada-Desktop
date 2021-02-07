import React from "react";
import "./userswithsearch.css";
const dummyDataUsers = [
  {
    name: "John",
    imageUrl: "img1",
  },
  {
    name: "Ram",
    imageUrl: "img2",
  },
  {
    name: "Sita",
    imageUrl: "img3",
  },
  {
    name: "Lakshman",
    imageUrl: "img4",
  },
];
const UsersWithSearch = (props) => {
  return (
    <div className="usersWithSeacrhContainers">
      <div className="searchbox">
        <input type="text"></input>
      </div>
      <div className="chatusersContainer"></div>
      {dummyDataUsers.map((onedata) => (
        <div className="onechatusers" onClick={()=>props.selectuser(onedata.name)}>
          <div className="onechatuser-img">
            <img src={props.imgURl}></img>
          </div>
          <div className="onechatuser-name">
            <h1>{onedata.name}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};
export default UsersWithSearch;
