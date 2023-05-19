import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProfilesContext } from "./ProfilesContext";

function RenderProfileList({startIndex, endIndex}) {
  const profilesData = useContext(ProfilesContext);

  return (
   
      <ul>
        {profilesData?.users.map((profile, index) => {
          if(index<=endIndex&&index>=startIndex)
          return (
            <Link to={`/profile/${profile.id}`} key={profile.id}>
              <li className="nameInfo">
                <img src={profile.profilepicture} alt="noImg" />
                {profile.name}
              </li>
            </Link>
          );
        })}
      </ul>
  );
}

export default RenderProfileList;
