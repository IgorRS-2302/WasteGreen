"use client";

import { CheckBox, DateRange } from "@mui/icons-material";
import { HeaderHome } from "../components/header";
import {
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";
import PlanCard from "./components/PlanCard";

export default function PlansPage() {
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <main className="flex flex-col w-full bg-green-800 ">
      <HeaderHome isLoggedin={true} />
      <div className="w-10/12 lg:w-8/12 md:flex justify-between mx-auto h-[calc(100vh-5.25em)] py-5">
        <div className="w-full h-[calc(100vh-57px)]">
          <div className="flex gap-3">
            <Card className="bg-white text-black w-6/12 h-3/6 rounded-md p-5">
              <div className="flex text-xl gap-2 items-center">
                <h2 className=" font-bold">Plano atual:</h2>
                <span>Coleta Mensal</span>
              </div>
              <p>Data de renovação: 18/06/2024</p>
              <p>Valor do plano: R$100/mês</p>
              <div className="mt-2">
                <p>Seu plano contêm</p>
                <ul className="list-inside">
                  <li className="list-disc">Balde de 16L</li>
                  <li className="list-disc">1 Coleta por semana</li>
                  <li className="list-disc">1 Recompensa Mensal</li>
                </ul>
              </div>
            </Card>
            <Card className="w-6/12 p-5">
              <p className="font-bold text-xl">Deseja mudar de plano?</p>

              <div className="text-sm">
                <p>
                  Caso faça um upgrade será mudado imediatamente e será efetuada
                  uma cobrança com o valor da diferença até sua próxima
                  renovação.
                </p>
                <p className="mt-2">
                  Caso seja um downgrade do plano o seu plano atual ira
                  permanecer até a próxima renovação.
                </p>
                <Button
                  variant="contained"
                  onClick={() => setOpen((prev) => !prev)}
                  className="bg-green-600 hover:bg-green-800 mt-3"
                >
                  Mudar de plano agora
                </Button>
              </div>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                PaperProps={{
                  style: {
                    width: "80%",
                    maxWidth: "1200px",
                  },
                }}
              >
                <div>
                  <DialogTitle
                    id="alert-dialog-title"
                    className="text-3xl font-bold"
                  >
                    {"Mudar meu plano"}
                  </DialogTitle>
                  <DialogContent className="">
                    <div className="flex gap-3">
                      <PlanCard
                        price={40}
                        title="Entrega no Pátio"
                        description="Você leva seu balde com os resíduos no nosso pátio para compostagem"
                      />
                      <PlanCard
                        price={80}
                        title="Coleta Mensal"
                        listItem={[
                          "Balde de 16L",
                          "1 Coleta por semana",
                          "1 Recompensa mensal",
                        ]}
                      />
                      <PlanCard
                        price={100}
                        title="Coleta Mensal Bambona"
                        listItem={[
                          "Bambona de 30L",
                          "1 Coleta por semana",
                          "1 Recompensa mensal",
                        ]}
                      />
                    </div>
                  </DialogContent>
                </div>
              </Dialog>
            </Card>
          </div>
          <div className="mt-3 bg-[url('../../../../public/images/logo.png')]">
            <Card
              className="p-5"
            >
              <h2 className="text-xl font-bold">Cancelar minha assinatura</h2>
              <p className="text-sm">
                Ao cancelar sua assinatura o seu plano ainda estara sendo válido
                até o dia da sua renovação
              </p>

              <Button variant="outlined" color="error" className="mt-3">
                Cancelar assinatura
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
