import { jwtVerify } from "jose";

class AuthUtils {
  getJwtSecretKey() {
    const secret = process.env.TOKEN_SECRET;
    return new TextEncoder().encode(secret);
  }

  async verifyToken(token: string) {
    const { payload } = await jwtVerify(token, this.getJwtSecretKey());
    return payload;
  }
}

export default new AuthUtils();
