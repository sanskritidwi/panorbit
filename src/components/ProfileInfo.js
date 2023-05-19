import React from "react";
import Map from "./Map";

function ProfileInfo({ data }) {
  //hooks

  //handlefunctions

  //renderfunctionc
  const renderPersonalDetails = () => {
    return (
      <>
        <thead>
          <tr>
            <th colSpan="2">
              <img src={data?.profilepicture} alt="noimg" />
            </th>
          </tr>
          <tr>
            <th colSpan="2">{data?.name}</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(data).map(([key, value]) => {
            if (
              typeof value !== "string" ||
              key === "name" ||
              key === "profilepicture"
            ) {
              return null;
            }
            return (
              <tr key={key}>
                <td className="keyName">
                  {key.charAt(0).toUpperCase() + key.slice(1)} :
                </td>
                <td className="valueName"> {value}</td>
              </tr>
            );
          })}
        </tbody>
      </>
    );
  };

  const renderCompanyDetails = () => {
    return (
      <>
        <table>
          <thead>
            <tr>
              <th colSpan="2">Company</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(data?.company).map(([key, value]) => (
              <tr key={key}>
                <td className="keyName">
                  {key.charAt(0).toUpperCase() + key.slice(1)}:
                </td>
                <td className="valueName">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  };
  const renderAddressDetails = () => {
    return (
      <>
        <thead>
          <tr>
            <td>Address:</td>
          </tr>
        </thead>
        <tbody>
          {Object.entries(data?.address).map(([key, value]) => {
            if (typeof value !== "string") {
              return null;
            }
            return (
              <tr key={key}>
                <td className="keyName">
                  {key.charAt(0).toUpperCase() + key.slice(1)} :
                </td>
                <td className="valueName"> {value}</td>
              </tr>
            );
          })}
        </tbody>
      </>
    );
  };

  if (data)
    return (
      <div className="ProfileInfoWrapper">
        <div className="left">
          <div className="personalDetailsWrapper">
            <table>{renderPersonalDetails()}</table>
          </div>
          {renderCompanyDetails()}
        </div>
        <div className="right">
          <div className="addressDetailsWrapper">
            <table>{renderAddressDetails()}</table>
          </div>
          <Map
            lat={parseFloat(data?.address.geo.lat)}
            lng={parseFloat(data?.address.geo.lng)}
          />
        </div>
      </div>
    );
}

export default ProfileInfo;
