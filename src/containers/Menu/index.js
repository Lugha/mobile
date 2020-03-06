import React from "react";
import { connect } from "react-redux";

import { updateUser } from "../../actions/user";

import Menu from "../../components/Menu";

const index = ({ navigation, user, updateUser }) => {
  if (!user || !user.username) {
    user = {
      username: "dev"
    };
  }

  function disconnect() {
    updateUser(null);
    navigation.replace("Connection");
  }

  function goToLobby() {
    navigation.replace("Lobby");
  }

  return (
    <Menu
      disconnect={disconnect}
      username={user.username}
      goToLobby={goToLobby}
    />
  );
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, {
  updateUser
})(index);
