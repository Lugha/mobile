import socketIOClient from "socket.io-client";

import questions from "../actions/questions";

function socketManager() {
  const socket = socketIOClient.connect(`http://10.4.57.230:5001`, {
    forceBase64: 1
  });

  return ({ dispatch }) => next => action => {
    if (typeof action === "function") {
      return next(action);
    }

    const { event, emit, leave, handle, payload, ...rest } = action;

    if (!event) {
      return next(action);
    }

    if (leave) {
      socket.removeListener(event);
    }

    if (emit) {
      socket.emit(event, payload);
      return;
    }

    let handleEvent = handle;
    if (typeof handleEvent === "string") {
      handleEvent = result => dispatch({ type: handle, result, ...rest });
    }
    return socket.on(event, handleEvent);
  };
}

export default socketManager;
