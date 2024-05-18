"use client";

import { Button } from "@mui/material";
import BasicMenu from "./dropdown";
import Logo from "./logo";
import LoginIcon from "@mui/icons-material/Login";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Sidebar from "./sidebar";

type Props = {
  isLoggedin: boolean;
};

function HeaderHome({ isLoggedin }: Props) {
  const router = useRouter();

  return (
    <div className=" bg-white w-full border flex z-10">
      <div className="flex items-center w-full h-[5em] px-5">
        {isLoggedin ? (
          <div className="flex items-center gap-5">
            <Sidebar />
            <div className="h-7">
              <Link href={"/"}>
                <Logo />
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <Link href={"/"}>
              <Logo />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export { HeaderHome };
