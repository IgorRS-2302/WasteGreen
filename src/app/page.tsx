import Image from "next/image";
import { HeaderHome } from "./components/header";
import { Footer } from "./components/footer";
import Banner from "../assets/banner.png";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <main className="flex bg-slate-50 flex-col items-center justify-between text-white">
      <HeaderHome />
      <div className="w-full relative">
        <Image
          className="object-fill w-full max-h-[85vh]"
          src={Banner}
          alt="Banner"
        />
        <span
          style={{ fontFamily: "Londrina Solid" }}
          className="absolute top-6 left-10 w-3/6 sm:text-xs md:text-4xl md:top-32"
        >
          O caminho sustentável para o seu resíduo orgânico
        </span>
        <span className="absolute bottom-16 left-10 w-4/6 text-xs md:text-xl md:bottom-32">
          Transforme restos em recursos. Recicle seus compostos orgânicos!
        </span>
        <Button className="absolute bottom-4 left-10 text-xs bg-white text-green-500 rounded-lg p-2 font-semibold md:text-md md:bottom-16">
          Conheça nossos planos
        </Button>
      </div>
      <div className="h-lvh w-full bg-cyan-400"></div>
      <Footer />
    </main>
  );
}
