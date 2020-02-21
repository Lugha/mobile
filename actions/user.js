export const UPDATE_USER = "UPDATE_USER";

export function updateUser(newUser) {
  return {
    type: UPDATE_USER,
    user: newUser
  };
}
