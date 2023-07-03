export default interface User {
  firstName?: string;
  lastName?: string;
  username?: string;
  password: string;
  email: string;
}

export const userRegister = {
  firstName: "",
  lastName: "",
  username: "",
  password: "",
  email: "",
};

export const userLogin = {
  email: "",
  password: "",
};
