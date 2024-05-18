"use client";

import { ChartsXAxis, LineChart } from "@mui/x-charts";
import { HeaderHome } from "../components/header";
import Pickups from "../components/pickups";

export default function Dashboard() {
  return (
    <main className="flex flex-col w-full bg-green-600">
      <HeaderHome isLoggedin={true} />
      <div className="w-10/12 lg:w-8/12 md:flex  justify-between mx-auto h-[calc(100vh-5.25em)] py-5">
        <div className="w-full">
          <div className="w-full h-fit bg-slate-100 rounded-md p-5 shadow-md shadow-emerald-800">
            <div className="flex justify-between">
              <p className="text-center mt-2 font-bold">Produtividade</p>
              <p className="text-center mt-2 font-mono">Kg/Coleta</p>
            </div>
            <hr className="border-green-800" />
            <LineChart
              xAxis={[{ data: [1, 2, 3, 5, 8, 10], label: "Coleta" }]}
              yAxis={[
                {
                  label: "Kg",
                },
              ]}
              series={[
                {
                  data: [2, 5.5, 2, 8.5, 1.5, 5],
                },
              ]}
              height={240}
              grid={{ vertical: true, horizontal: true }}
            />
          </div>
          <div className="mt-5 w-full h-fit bg-slate-100 rounded-md p-5 shadow-md shadow-emerald-800">
            <p className="mb-2 font-bold">Próxima coleta</p>
            <p>Terça-feira, 19 de Setembro</p>
          </div>
          <div className="mt-5 w-full h-fit bg-slate-100 rounded-md p-5 shadow-md shadow-emerald-800">
            <p className="mb-2 font-bold">Prêmios</p>
            <div className="p-2 bg-white rounded-md">
              <div className="gap-2">
                <div className="flex gap-3 mb-2">
                  <p>codColeta:</p>
                  <p>3128791372</p>
                </div>
                <p className="font-medium">Recebidos:</p>
                <ul className="list-inside">
                  <li className="list-disc">
                    Blusa WasteGreen Urban
                  </li>
                  <li className="list-disc">
                    Sementes Coentro
                  </li>
                  <li className="list-disc">
                    Pá de jardim
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 w-full md:mt-0  p-5 bg-slate-100 rounded-md md:ms-10 shadow-md shadow-emerald-800">
          <p className="w-full text-center font-bold text-xl">
            Últimas Coletas
          </p>
          <hr className="border-green-800 my-3" />
          <ul>
            <li className="shadow-sm">
              <Pickups
                codColeta={3128791372}
                dataColeta={"23/02/2023"}
                barris={3}
                pontuacao={1500}
              />
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
