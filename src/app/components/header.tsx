"use client";

import { Button } from "@mui/material";
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
          <div className="flex items-center justify-between w-full gap-5">
            <div className="flex items-center gap-5">
              <Sidebar />
              <div className="h-7">
                <Link href={"/"}>
                  <Logo />
                </Link>
              </div>
            </div>
            <div className="flex gap-2">
              <p>
                Olá,
              </p>
                <span className="font-semibold">{localStorage.getItem("name")}</span>
            </div>
          </div>
        ) : (
          <div className="flex w-full justify-between items-center">
            <Link href={"/"}>
              <Logo />
            </Link>
            <Link href={"/sign"}>
              <Button
                variant="contained"
                className="bg-green-500 hover:bg-green-800"
              >
                Entrar
              </Button>
            </Link>

          </div>
        )}
      </div>
    </div>
  );
}

export { HeaderHome };
