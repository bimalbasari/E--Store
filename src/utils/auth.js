import Cookies from "js-cookie";

export const setUserData = (data) => {
  Cookies.set("user", JSON.stringify(data));
};

export const getUserData = () => {
  let user = Cookies.get("user");
  if (user) {
    user = JSON.parse(user);
    return user;
  }
};

export const removeUser = () => {
  Cookies.remove("user");
};
