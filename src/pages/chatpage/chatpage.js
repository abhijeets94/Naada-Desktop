import React,{useState} from "react";
import "./chatpage.css";
import userImage from "../../assets/DesktopIconsJPG/bruce-mars-DBGwy-1.jpg";
import UsersWithSearch from "../../components/userswithsearch/userswithsearch";
import ChatMessageComponent from "../../components/chatmessages/chatmessage";
const ChatPage = () => {
 const [user,SetUser] =  useState('')
    const selectUser = (user) => {
        SetUser(user)
    }
  return (
    <div className="chatpagecontainer">
      <div className="chatpage-left">
              <UsersWithSearch
                  imgURl={userImage}
        selectuser = {selectUser}      />
      </div>
      <div className="chatpage-right">
              <ChatMessageComponent
                  messages={['hi', 'nice video', 'whens the next concert?']}
                  user={user}/>
      </div>
    </div>
  );
};
export default ChatPage;
