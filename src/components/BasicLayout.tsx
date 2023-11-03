"use client";
import { SessionProvider } from "next-auth/react";
interface Props {
  children: React.ReactNode;
}
const BasicLayout = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default BasicLayout;
