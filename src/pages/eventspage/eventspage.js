import React from "react";
import "./eventspage.css";
import SidebarComponent from "../../components/sidebar/sidebar";
import { SearchBar } from "../../StyledComponents/Styles";
import userImage from "../../assets/DesktopIconsJPG/bruce-mars-DBGwy-1.jpg";
import EventsComp from "../../components/eventscomp/EventsComp";
import calendaricon from "../../assets/DesktopIconsSVG/DesktopIconsSVG/Calendar Icon.svg";
import filtericon from "../../assets/DesktopIconsSVG/DesktopIconsSVG/Filter Icon.svg";
import iicon from "../../assets/DesktopIconsSVG/DesktopIconsSVG/Icon.svg";
const Events = () => {
  var price = 0;
  const items = [
    {
      id: "01",
      name: "event1",
      cost: 3,
      imgurl: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
    },
    {
      id: "02",
      name: "event2",
      cost: 5,
      imgurl: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
    },
    {
      id: "03",
      name: "event2",
      cost: 6,
      imgurl: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
    },
    {
      id: "04",
      name: "event4",
      cost: 7,
      imgurl: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
    },
  ];
  return (
    <div className="eventspage">
      <div className="sidebar-container">
        <SidebarComponent
          ImageURL={userImage}
          UserName="Niharika"
          following="2K"
          location="Bangalore"
          occupation="DJ"
          genre="sufi"
        />
      </div>
      <div className="searchNevents">
        <div>
          <div className="searchbar">
            <SearchBar placeholder="search events" />
            <button style={{ border: "none", backgroundColor: "#9edbb6" }}>
              <p>Download CSV</p>
            </button>
            <strong>
              {items.map((oneEvent) => {
                price = price + oneEvent.cost;
              })}
              ${price}
              <img src={iicon}></img>
            </strong>
            <img src={calendaricon}></img>
            <img src={filtericon}></img>
          </div>
        </div>
        <div className="eventsitems">
          {items.map((eventItem) => (
            <EventsComp
              imgURL={eventItem.imgurl}
              EventName={eventItem.name}
              EventPrice={eventItem.cost}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
