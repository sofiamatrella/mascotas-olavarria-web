import { User } from "@prisma/client";

class UserDTOFactory {
  userRegisterDTO(user: User, password: string) {
    return {
      username: user.username,
      email: user.email,
      password: password,
    };
  }
}

export default new UserDTOFactory();
