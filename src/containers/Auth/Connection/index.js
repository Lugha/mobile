import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Style from "./style";

import { connectUser, updateUser } from "../../../actions/user";

import Connection from "../../../components/Connection";

const index = ({ navigation, user, connectUser }) => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  function connect() {
    connectUser({ username, password });
  }

  function goToRegistration() {
    navigation.replace("Registration");
  }

  useEffect(() => {
    if (user && user.token) {
      navigation.replace("Menu");
    }
  }, [user]);

  return (
    <Connection
      connection={connect}
      setUsername={setUsername}
      setPassword={setPassword}
      goToRegistration={goToRegistration}
    />
  );
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, {
  connectUser
})(index);
