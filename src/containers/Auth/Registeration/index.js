import React, { useState } from "react";

import Style from "./style";

import axiosInstance from "../../../services/axios";

import Registration from "../../../components/Registration";

const index = ({ navigation, user, connectUser }) => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  async function register() {
    await axiosInstance.registerUser({ username, password });
  }

  function goToConnection() {
    navigation.replace("Connection");
  }

  return (
    <Registration
      registration={register}
      setUsername={setUsername}
      setPassword={setPassword}
      goToConnection={goToConnection}
    />
  );
};

export default index;
