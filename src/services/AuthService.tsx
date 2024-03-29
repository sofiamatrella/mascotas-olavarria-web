import User from "@/models/User";

class AuthService {
  baseURL: string = `/api/users`;

  async register(values: User): Promise<any> {
    const res = await fetch(`${this.baseURL}/register`, {
      method: "POST",
      body: JSON.stringify({
        email: values.email,
        username: values.username,
        password: values.password,
        firstName: values.firstName,
        lastName: values.lastName,
      }),
      cache: "no-store",
    });

    return res;
  }

  async login(values: User): Promise<any> {
    const res = await fetch(`${this.baseURL}/login`, {
      method: "POST",
      body: JSON.stringify({ email: values.email, password: values.password }),
      cache: "no-store",
    });

    return res;
  }
}

export default new AuthService();
