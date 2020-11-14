import React, { useState, useEffect } from "react";
import axios from "../axios";
// import axios from "axios";
import "./UserCard.css";

function UserCard() {
  const [userResponse, setUserResponse] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(async () => {
    const response = await axios.get().then(response => response.data.results);
    // .catch(e => setErrorMsg(response.error));

    setUserResponse(response);
  }, []);

  async function loadHandler(e) {
    debugger;
    const response = await axios
      .get("/?results=5")
      .then(response => response.data.results);
    // .catch(e => setErrorMsg(response.error));

    setUserResponse(userResponse.concat(response));
  }
  return (
    <div>
      <h1>RandomAPI User Card</h1>
      {userResponse.map((v, k) => {
        return (
          <div key={k} className="blue-line">
            <div className="card-container">
              <div className="card1">
                <div className="img">
                  <img src={v.picture.medium}></img>
                </div>
              </div>
              <div className="card2">
                <div className="">
                  <h3 className="card-header">
                    {v.name.title} {v.name.first} {v.name.last}
                  </h3>
                  <div className="userAddr">
                    {v.location.city},{v.location.country}
                  </div>
                  <div className="userAddr">{v.registered.date}</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <button onClick={loadHandler}>Load more</button>
    </div>
  );
}

export default UserCard;
