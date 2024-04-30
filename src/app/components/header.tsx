"use client";

import { Button } from "@mui/material";
import BasicMenu from "./dropdown";
import Logo from "./logo";
import LoginIcon from "@mui/icons-material/Login";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Props = {
  isLoggedin: boolean;
};

function HeaderHome({ isLoggedin }: Props) {
  const router = useRouter();

  return (
    <div className=" bg-white w-full border flex p-5 z-10">
      <div className="flex justify-between items-center w-full h-fit">
        <div className="min-[120px]:block md:hidden">
          <BasicMenu />
        </div>
        <div className="h-7">
          <Link href={"/"}>
            <Logo />
          </Link>
        </div>
        {isLoggedin ? (
          <div>Logado</div>
        ) : (
          <div className="flex min-[120px]:hidden md:block">
            <Button
              variant="outlined"
              className="me-2 text-green-500 border-green-500 hover:bg-green-500/10 hover:border-green-500 p-2"
              id="basic-button"
            >
              Junte-se
            </Button>
            <Button
              variant="outlined"
              className="me-2 text-green-500 border-green-500 hover:bg-green-500/10 hover:border-green-500 p-2"
              id="basic-button"
            >
              Nossa Missão
            </Button>
            <Button
              variant="outlined"
              className="me-2 text-green-500 border-green-500 hover:bg-green-500/10 hover:border-green-500 p-2"
              id="basic-button"
            >
              Planos
            </Button>
            <Button
              onClick={() => {
                router.push("/sign");
              }}
              className="bg-green-500 text-white hover:text-green-500 p-2"
              id="basic-button"
              endIcon={<LoginIcon />}
            >
              Entrar
            </Button>
          </div>
        )}
        <div className="min-[120px]:block md:hidden"></div>
      </div>
    </div>
  );
}

export { HeaderHome };
