import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Atharv Malve- Product Builder ",
  description: "I'm Atharv Malve, a passionate UI/UX Designer & Full-Stack Developer specializing in creating user-centered and visually stunning digital experiences. I bring a blend of design expertise and technical proficiency to transform ideas into innovative and impactful web applications. Let's build something amazing together!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
