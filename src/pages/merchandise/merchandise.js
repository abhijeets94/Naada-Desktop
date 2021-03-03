import React from "react";
import "./merchandise.css";
import MerchComp from "../../components/merchComp/merchComp";
import SidebarComponent from "../../components/sidebar/sidebar";
import {SearchBar} from '../../StyledComponents/Styles'
import userImage from "../../assets/DesktopIconsJPG/bruce-mars-DBGwy-1.jpg";
const Merchandise = () => {
  const items = [
    {
      id: "01",
      name: "item1",
      cost: "3",
      imgurl: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
      count: "16",
    },
    {
      id: "02",
      name: "item2",
      cost: "5",
      imgurl: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
      count: "10",
    },
    {
      id: "03",
      name: "item3",
      cost: "6",
      imgurl: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
      count: "10",
    },
    {
      id: "04",
      name: "item4",
      cost: "7",
      imgurl: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
      count: "10",
    },
    {
      id: "05",
      name: "item5",
      cost: "7",
      imgurl: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
      count: "10",
    },
    {
      id: "06",
      name: "ite6",
      cost: "23",
      imgurl: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
      count: "10",
    },
    {
      id: "07",
      name: "item7",
      cost: "45",
      imgurl: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
      count: "10",
    },
  ];
  return (
    <div className="merchpage">
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

      <div className="searchNmerch">
        <strong>welcome back NATASHA</strong>
        <div style={{ marginTop: "2%" }}>
          <SearchBar placeholder="search merch" />
        </div>
        <div>
          <h2>YOUR MECHANDISE</h2>
          <div className="merchitems">
            {items.map((oneItem) => (
              <MerchComp
                imgURL={oneItem.imgurl}
                merchName={oneItem.name}
                merchPrice={oneItem.cost}
                id={oneItem.id}
              />
            ))}
          </div>
        </div>
        <div>
          <h2>SHOP OTHER ARTIST</h2>
          <div className="merchitems">
            {items.map((oneItem) => (
              <MerchComp
                imgURL={oneItem.imgurl}
                merchName={oneItem.name}
                merchPrice={oneItem.cost}
                id={oneItem.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Merchandise;
