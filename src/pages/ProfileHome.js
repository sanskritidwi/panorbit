import React, { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ProfilesContext } from "../components/ProfilesContext";
import Header from "../components/Header";
import ProfileInfo from "../components/ProfileInfo";
import ComingSoon from "../components/ComingSoon";
import Chat from "../components/Chat";
import right from '../assets/right.png';


const menuItems = [
  {
    item: "Profile",
  },
  {
    item: "Posts",
  },
  {
    item: "Gallery",
  },
  {
    item: "To Do",
  },
];

function ProfileHome() {
  const [openMenuItem, setOpenMenuItem] = useState(0);
  const profilesData = useContext(ProfilesContext);

  const { id } = useParams();

  const renderMenu = () => {
    const handleMenuClick = (index) => {
      setOpenMenuItem(index);
    };

    return (
      <div className="MenuWrapper">
        {menuItems.map((menu, index) => {
          return (
            <div
              onClick={()=>handleMenuClick(index)}
              key={index}
              className={openMenuItem === index ? "activeMenu" : "inactiveMenu"}
            >
              {menu.item}
              {openMenuItem === index ? <img src={right} alt="noimg"/> : null}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="ProfileHomeWrapper">
      {renderMenu()}
      <div> {profilesData?.users.map((profile) => {
        if (profile.id == id)
          return (
              <Header data={profile} heading = {menuItems[openMenuItem].item} key={profile.id}/>
          );
      })}
      {
      (() => {
        switch (openMenuItem) {
          case 0:
            return <ProfileInfo data={profilesData?.users[id-1]} />;
          case 1:
            return <ComingSoon />;
          case 2:
            return <ComingSoon />;
          case 3:
            return <ComingSoon />;
          default:
            return null;
        }
      })()
    }</div>
     <Chat/>
    </div>
  );
}

export default ProfileHome;
