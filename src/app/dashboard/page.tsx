import { HeaderHome } from "../components/header";
import Pickups from "../components/pickups";

export default function Dashboard() {
  return (
    <main className="flex flex-col w-full">
      <HeaderHome isLoggedin={true} />
      <div className="md:flex h-full">
        <div className="min-[120px]:h-screen md:max-h-[92.3vh] md:w-7/12 bg-green-500"></div>
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
