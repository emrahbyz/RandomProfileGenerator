import React, { useState } from "react";
import axios from "axios";
import "./App.css";
const App = () => {
  const [profiles, setProfiles] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const getProfile = async () => {
    const profile = await axios.get("https://randomuser.me/api/");

    setProfiles(profile.data.results[0].picture.large);
    setName(
      `${profile.data.results[0].name.first} ${profile.data.results[0].name.last} `
    );
    setEmail(profile.data.results[0].email);
    setPhone(profile.data.results[0].cell);
  };

  return (
    <div className="App">
      <div className="profileDiv">
        <img src={profiles} />
        <h1> {name} </h1>
        <p> {email} </p>
        <p> {phone} </p>
        <button onClick={() => getProfile()}>Get Profile</button>
      </div>
    </div>
  );
};

export default App;
