"use client";

import { ArrowBackIosNew } from "@mui/icons-material";
import Menu from "@mui/icons-material/Menu";
import { Button, Drawer } from "@mui/material";
import { useState } from "react";
import Logo from "./logo";

export default function Sidebar() {
  const [toogleSidebar, setToogleSidebar] = useState<boolean>(false);
  return (
    <div>
      <Button
        variant="contained"
        color="success"
        className="bg-green-500"
        onClick={() => setToogleSidebar((prev) => !prev)}
      >
        <Menu />
      </Button>
      <Drawer open={toogleSidebar} variant="persistent">
        <div className="flex flex-wrap w-screen sm:w-72 h-screen justify-between">
          <div className="h-[57px] py-10 w-full justify-end flex items-center gap-2">
            <Button
              className="flex justify-between w-full px-5 items-center"
              onClick={() => setToogleSidebar((prev) => !prev)}
            >
              <span className="text-green-800 font-bold text-2xl">Menu</span>
              <ArrowBackIosNew color="success" />
            </Button>
          </div>
          <div className="w-full h-[calc(100vh-6.25em)] grid pb-5 px-5 mt-5">
            <ul className="w-full h-fit grid grid-cols-1 gap-3">
              <li>
                <Button
                  variant="contained"
                  size="large"
                  className="w-full bg-green-700 hover:bg-green-800"
                >
                  Dashboard
                </Button>
              </li>
              <li>
                <Button
                  variant="contained"
                  size="large"
                  className="w-full bg-green-700 hover:bg-green-800"
                >
                  Planos
                </Button>
              </li>
              <li>
                <Button
                  variant="contained"
                  size="large"
                  className="w-full bg-green-700 hover:bg-green-800"
                >
                  Minha conta
                </Button>
              </li>
              <li>
                <Button
                  variant="contained"
                  size="large"
                  className="w-full bg-green-700 hover:bg-green-800"
                >
                  Solicitar
                </Button>
              </li>
            </ul>
            <div className="w-full self-end">
              <Button
                variant="outlined"
                size="large"
                color="error"
                className="w-full h-fit"
              >
                Sair
              </Button>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
