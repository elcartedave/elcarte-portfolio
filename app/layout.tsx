import type { Metadata } from "next";
import "./globals.css";
import CustomLayout from "./customLayout";

export const metadata: Metadata = {
  title: "Portfolio | Your Name",
  description: "Personal portfolio website showcasing my projects and skills",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <CustomLayout>{children}</CustomLayout>
      </body>
    </html>
  );
}
