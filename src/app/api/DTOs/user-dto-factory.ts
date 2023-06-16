import { User } from "@prisma/client";

class UserDTOFactory {
  userRegisterDTO(user: User, password: string) {
    return {
      username: user.username,
      email: user.email,
      password: password,
      firstName: user.firstName,
      lastName: user.lastName,
      profilePicture: user.profilePicture,
    };
  }
}

export default new UserDTOFactory();
