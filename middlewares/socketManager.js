import question from "../actions/question";

const socketManager = socket => ({ getState, dispatch }) => {
  socket.on("getRandomRound", data => {
    console.log(data);
  });

  return next => action => next(action);
};

export default socketManager;
