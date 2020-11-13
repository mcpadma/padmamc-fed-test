import React, { useState, useEffect } from "react";
// import axios from "../axios";
import axios from "axios";

function UserCard() {
  const [userResponse, setUserResponse] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
//   useEffect(() => {
//     //   const response =  axios.get().then(response => response.data.results);
//     //   console.log(response);
//     //   const response =  axios.get().then(response => response.data.results.name);
//     //   console.log(response);
//     async function fetchData() {
//       debugger;
//       const request = await axios.get();
//       setUserResponse(request.data.results);
//       //console.log(request.data.results);
//       return request;
//     }
//     fetchData();

//     //   debugger;
//     // axios.get('https://randomuser.me/api/')
//     // .then(response => setUserResponse(response.results));
//     //   console.log(response);
//   }, []);

 useEffect(async () => {
const response =  await axios.get("https://randomuser.me/api")
.then (response => response.data.results)
// .catch(e => setErrorMsg(response.error));
console.log(response)
debugger;
// setUserResponse(JSON.stringify(response));
setUserResponse(response);
console.log("HIIIIIIIIIIII", response[0].gender);
console.log("Heeeeeeeeeeeee", response[0].name);
},[]);

  return (
    <div>
      <h1>Welcome to UserCard</h1>
      {/* <h2>{userResponse[0].gender}</h2> */}
      {/* <h1>{userResponse[0].gender}</h1> */}
    </div>
  );
}

export default UserCard;
