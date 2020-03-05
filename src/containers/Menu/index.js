import React from "react";
import { connect } from "react-redux";

import { updateUser } from "../../actions/user";

import Menu from "../../components/Menu";

const index = ({ navigation, user, updateUser }) => {
  function disconnect() {
    updateUser(null);
    navigation.navigate("Connection");
  }

  function goToLobby() {
    navigation.navigate("Lobby");
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
