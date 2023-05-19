import { React, useContext} from "react";
import cover from "../assets/header.svg";
import ProfileList from "../components/RenderProfileList";
import { ProfilesContext } from "../components/ProfilesContext";


const Home = () => {
  const profilesData = useContext(ProfilesContext);

  const renderCoverImage = () => {
    return (
      <>
        <img src={cover} alt="noImg" className="cover" />
      </>
    );
  };

  return (
    <div className="HomeWrapper">
      {renderCoverImage()}
      <div className="content"> <div className="ProfileListWrapper">
      <div className="title">Select an Account</div><ProfileList startIndex={0} endIndex={profilesData?.users.length}/></div></div>
    </div>
  );
};

export default Home;
