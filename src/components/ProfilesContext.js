import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ProfilesContext = createContext();

export const ProfilesProvider = ({ children }) => {
  const [profilesData, setProfilesData] = useState();

  useEffect(() => {
    axios.get('https://panorbit.in/api/users.json').then((response) => {
      setProfilesData(response.data);
    });
  }, []);

  return (
    <ProfilesContext.Provider value={profilesData}>
      {children}
    </ProfilesContext.Provider>
  );
};
