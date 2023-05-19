import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import RenderProfileList from "./RenderProfileList";
import { ProfilesContext } from "./ProfilesContext";

function Header({ heading, data }) {
  const [isSignOutOpen, setIsSignOutOpen] = useState(false);
  const profilesData = useContext(ProfilesContext);

  const calcStartIndex = () => {
    if (data.id == profilesData?.users.length) return 0;
    return data.id;
  };

  const calcEndIndex = () => {
    if (data.id == profilesData?.users.length) return 1;
    return data.id + 1;
  };

  const renderSignOutPopup = () => {
    return (
      <div className="signOutWrapper">
        <img src={data.profilepicture} alt="noImg" className="pp" />
        <div className="name">{data.name}</div>
        <div className="email">{data.email}</div>
        <RenderProfileList
          startIndex={calcStartIndex()}
          endIndex={calcEndIndex()}
        />
        <Link to="/" className="redBtn">
          SignOut
        </Link>
      </div>
    );
  };

  return (
    <div className="HeaderWrapper">
      <div className="title">{heading}</div>
      <div className="nameInfo">
        <img
          src={data.profilepicture}
          alt="noImg"
          onClick={() => {
            setIsSignOutOpen(!isSignOutOpen);
          }}
        />
        <div
          className="name"
          onClick={() => {
            setIsSignOutOpen(!isSignOutOpen);
          }}
        >
          {data.name}
        </div>
        {isSignOutOpen && renderSignOutPopup()}
      </div>
    </div>
  );
}

export default Header;
