"use client";
import { BarChart, LineChart } from "@mui/x-charts";
import { HeaderHome } from "../components/header";
import Pickups from "../components/pickups";

export default function Dashboard() {
  return (
    <main className="flex flex-col w-full">
      <HeaderHome isLoggedin={true} />
      <div className="md:flex h-full">
        <div className="min-[120px]:h-screen md:max-h-[92.3vh] md:w-7/12 bg-green-500">
          <div className="w-full h-1/4 flex items-center justify-center gap-4">
            <div className="bg-white w-3/12 h-3/4 rounded-md flex flex-col gap-5 items-center justify-center p-2">
              <span>Coletas</span>
              <span className="font-semibold">10</span>
            </div>
            <div className="bg-white w-3/12 h-3/4 rounded-md flex flex-col gap-5 items-center justify-center p-2">
              <span>Pontuação</span>
              <span className="font-semibold">15.000</span>
            </div>
            <div className="bg-white w-3/12 h-3/4 rounded-md flex flex-col gap-5 items-center justify-center p-2">
              <span>Contribuição</span>
              <span className="font-semibold">30Kgs</span>
            </div>
          </div>
          <BarChart
            series={[
              { data: [35, 44, 24, 34] },
              { data: [51, 6, 49, 30] },
              { data: [15, 25, 30, 50] },
              { data: [60, 50, 15, 25] },
            ]}
            height={290}
            xAxis={[{ data: ["Q1", "Q2", "Q3", "Q4"], scaleType: "band" }]}
            margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
          />
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
                color: "white",
              },
            ]}
            className="w-full"
            height={300}
          />
        </div>
        <div className="md:max-h-[92.3vh] p-5 md:w-5/12 bg-gray-800 md:p-10">
          <span className="text-white text-xl">Últimas coletas</span>

          <div className="h-5/6 p-4 overflow-y-scroll md:my-8">
            <Pickups
              codColeta={3128791372}
              dataColeta={"23/02/2023"}
              barris={3}
              pontuacao={1500}
            />
            <Pickups
              codColeta={3128791372}
              dataColeta={"23/02/2023"}
              barris={3}
              pontuacao={1500}
            />
            <Pickups
              codColeta={3128791372}
              dataColeta={"23/02/2023"}
              barris={3}
              pontuacao={1500}
            />
            <Pickups
              codColeta={3128791372}
              dataColeta={"23/02/2023"}
              barris={3}
              pontuacao={1500}
            />
            <Pickups
              codColeta={3128791372}
              dataColeta={"23/02/2023"}
              barris={3}
              pontuacao={1500}
            />
            <Pickups
              codColeta={3128791372}
              dataColeta={"23/02/2023"}
              barris={3}
              pontuacao={1500}
            />
            <Pickups
              codColeta={3128791372}
              dataColeta={"23/02/2023"}
              barris={3}
              pontuacao={1500}
            />
            <Pickups
              codColeta={3128791372}
              dataColeta={"23/02/2023"}
              barris={3}
              pontuacao={1500}
            />
            <Pickups
              codColeta={3128791372}
              dataColeta={"23/02/2023"}
              barris={3}
              pontuacao={1500}
            />
            <Pickups
              codColeta={3128791372}
              dataColeta={"23/02/2023"}
              barris={3}
              pontuacao={1500}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
