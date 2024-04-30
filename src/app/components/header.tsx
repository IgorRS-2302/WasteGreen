"use client";

import { Button } from "@mui/material";
import BasicMenu from "./dropdown";
import Logo from "./logo";
import LoginIcon from "@mui/icons-material/Login";

function HeaderHome() {
  return (
    <div className="md:sticky md:top-0 bg-white w-full border flex p-5 z-10">
      <div className="flex justify-between items-center w-full h-fit">
        <div className="min-[120px]:block md:hidden">
          <BasicMenu />
        </div>
        <div className="h-7">
          <Logo />
        </div>
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
            className="bg-green-500 text-white hover:text-green-500 p-2"
            id="basic-button"
            endIcon={<LoginIcon />}
          >
            Entrar
          </Button>
        </div>
        <div className="min-[120px]:block md:hidden"></div>
      </div>
    </div>
  );
}

export { HeaderHome };
