import React, { useState, useEffect } from "react";
import "./merchandise.css";
import MerchComp from "../../components/merchComp/merchComp";
import SidebarComponent from "../../components/sidebar/sidebar";
import { SearchBar } from "../../StyledComponents/Styles";
import userImage from "../../assets/DesktopIconsJPG/bruce-mars-DBGwy-1.jpg";
import { useSelector } from "react-redux";
const Merchandise = () => {
  const user = useSelector((state) => state.user);
  console.log(user);
  const [fetchedData, setFetchData] = useState([]);

  async function getData() {
    console.log("reached here");
    await fetch("https://naada-server.herokuapp.com/merchandises")
      .then((response) => response.json())
      .then((result) => setFetchData(result));
  }

  useEffect(() => {
    getData();
  }, []);
  console.log(fetchedData);

  //0._id
  // 0.images

  return (
    <div className="merchpage">
      <div className="sidebar-container">
        <SidebarComponent />
      </div>

      <div className="searchNmerch">
        {user.UserSignedIn === true ? (
          <strong>welcome back {user.customer.username}</strong>
        ) : (
          <strong>Please sign in!</strong>
        )}
        <div style={{ marginTop: "2%" }}>
          <SearchBar placeholder="search merch" />
        </div>
        <div>
          <h2>YOUR MECHANDISE</h2>
          <div className="merchitems">
            {fetchedData.map((oneItem) => (
              <MerchComp
                imgURL={oneItem.images}
                merchName={oneItem.name}
                merchPrice={oneItem.price}
                id={oneItem.id}
              />
            ))}
          </div>
        </div>
        <div>
          <h2>SHOP OTHER ARTIST</h2>
          <div className="merchitems">
            {fetchedData.map((oneItem) => (
              <MerchComp
                imgURL={oneItem.imgurl}
                merchName={oneItem.name}
                merchPrice={oneItem.price}
                id={oneItem.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};;

export default Merchandise;
