import { Inter, Raleway, Poppins } from "next/font/google";

export const inter = Inter({ subsets: ["latin"], variable: "--inter-font" });

export const raleway = Raleway({
  weight: ["400", "700"],
  variable: "--raleway-font",
  subsets: ["latin"],
});

export const poppins = Poppins({
  weight: ["400", "500", "700"],
  variable: "--poppins-font",
  subsets: ["latin"],
});
