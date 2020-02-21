export const CREATE_ROOM = "CREATE_ROOM";

export const subscribeCreateRoom = () => {
  return {
    handle: CREATE_ROOM,
    event: CREATE_ROOM,
    emit: true,
    listen: true
  };
};

export const unsubscribeCreateRoom = () => {
  return {
    event: CREATE_ROOM,
    leave: true
  };
};
