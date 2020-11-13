import React, { useState, useEffect } from "react";
// import axios from "../axios";
import axios from "axios";
import "./UserCard.css";

function UserCard() {
  const [userResponse, setUserResponse] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(async () => {
    const response = await axios
      .get("https://randomuser.me/api")
      .then(response => response.data.results);
    // .catch(e => setErrorMsg(response.error));
    console.log(response);
    //debugger;
    setUserResponse(response);
    console.log("HIIIIIIIIIIII", response[0].gender);
    console.log("Heeeeeeeeeeeee", response[0].name);
    //console.log("Hoooooooooooooo", userResponse[0].location);
  }, []);

  return (
    <div>
      <h1>Welcome to UserCard</h1>
      {/* {userResponse.map((v, k) => {
        return (
          <div className="card">
            <div className="userImg">
              <img src={v.picture.thumbnail}></img>
              
              <div className="userDetails">
                <a>{v.name.first}</a>
                <span className="userAddr">{v.location.city}</span>
              </div>
            </div>
            
          </div>
        );
        
      })} */}
      {userResponse.map((v, k) => {
        return (
          <div class="blue-line">
            <div class="card-container">
              <div class="card1">
                <div class="img">
                  <img src={v.picture.thumbnail}></img>
                </div>
              </div>
              <div class="card2">
                <div class="">
                  <a>{v.name.first}</a>
                  <div className="userAddr">{v.location.city}</div>
                  <div className="userAddr">{v.registered.date}</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default UserCard;
