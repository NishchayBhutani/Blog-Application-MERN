/** @format */
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
export const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  useEffect(() => {
    const id = localStorage.getItem("userId");
    axios
      .get("http://localhost:5000/user/" + id)
      .then((res) => {
        console.log(res.data);
        setName(res.data.name);
        setEmail(res.data.email);
        setBio(res.data.bio);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h4>{name}</h4>
      <h4>{email}</h4>
      <label>Bio:</label>
      <textarea placeholder={bio || "Tell us something about yourself..."} />
    </div>
  );
};
