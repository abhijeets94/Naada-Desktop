import React from "react";
import "./userprofilecomponent.css";
const UserProfileComponent = () => {
  return (
    <div className="usrprofilecomp-container">
          <div className="upperContainer">
              <div className="imageContainerProfile"></div>
              <div className="userdescriptionContainer">
                  <div className="userName">
                      1
                  </div>
                  <div className="userDescription">
2
                  </div>
                  <div className="Followers">3</div>
              </div>
              <div className="editprofileContainer">
                  <div>
                      a
                  </div>
                  <div>
                      b
                  </div>
                  <div>
                      c
                  </div>
                  <div>
                      <button>
                          Edit Profile
                      </button>
                  </div>
              </div>
      </div>
      <div className="lowerContainer"></div>
    </div>
  );
};

export default UserProfileComponent;

