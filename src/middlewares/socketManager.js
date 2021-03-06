import socketIOClient from "socket.io-client";

import config from "../../config";

function socketManager() {
  const socket = socketIOClient.connect(`${config.baseUrl}:5001`, {
    forceBase64: 1
  });

  return ({ dispatch }) => next => action => {
    console.log({ action, type: typeof action });
    if (typeof action === "function") {
      return next(action);
    }

    const { event, emit, leave, handle, payload, ...rest } = action;

    if (!event) {
      return next(action);
    }

    if (leave) {
      socket.removeListener(event);
      return;
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
