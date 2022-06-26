const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.username;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
};
export default authSelectors;
