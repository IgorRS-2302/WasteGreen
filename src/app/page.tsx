import Image from "next/image";
import { HeaderHome } from "./components/header";
import { Footer } from "./components/footer";
import { Button } from "@mui/material";

//images
import Banner from "../assets/banner.png";
import ImgCompostagem from "../assets/compostagem.png";
import ImgParceiro from "../assets/filter.png";

// svgs
import ImgMissao from "../assets/ImageMissao.svg";
import Bambona from "../assets/bambona.svg";
import Pote from "../assets/bucket.svg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center text-white">
      <HeaderHome isLoggedin={false} />
      <div className="w-full relative">
        <Image
          className="object-fill w-full max-h-[50vh]"
          src={Banner}
          alt="Banner"
        />
        <span className="absolute w-1/3 text-5xl top-28 left-10 font-semibold">
          O caminho sustentável para o seu resíduo orgânico
        </span>
        <span className="absolute w-1/4 text-2xl top-72 left-10">
          Transforme restos em recursos. Recicle seus compostos orgânicos!
        </span>
        <Button className="absolute bottom-10 left-10 text-xs bg-green-500 text-white rounded-lg py-4 px-6 hover:bg-green-900">
          Conheça nossos planos
        </Button>
      </div>
      <div className="w-full flex p-10">
        <div className="text-black w-1/2 flex flex-col gap-6">
          <span className="font-semibold text-3xl">Nossa Missão</span>
          <span>
            Estamos trabalhando em um projeto inovador que visa reduzir a
            quantidade de resíduos orgânicos que são enviados para aterros
            sanitários, contribuindo para a diminuição da poluição ambiental,
            além de gerar um novo valor para o que seria um desperdício poder
            virar um benefício.
          </span>
        </div>
        <div className="flex items-center justify-center w-1/2">
          <Image src={ImgMissao} alt="Banner" />
        </div>
      </div>
      <div className="w-full relative">
        <Image
          className="object-fill w-full max-h-[30vh]"
          src={ImgCompostagem}
          alt="Banner"
        />
        <div className="w-1/2 flex flex-col gap-6 absolute top-10 p-10">
          <span className="font-semibold text-3xl">Compostagem</span>
          <span>
            A compostagem é um processo natural que transforma restos de
            alimentos e outros materiais orgânicos em um rico adubo, chamado de
            composto. Esse processo é realizado por microrganismos, como
            bactérias e fungos, que decompõem a matéria orgânica em um ambiente
            úmido e aerado.
          </span>
        </div>
      </div>
      <div className="w-full p-10">
        <div className="flex flex-col gap-16 text-black">
          <span className="text-center text-3xl font-semibold">
            Nossos Planos
          </span>
          <div className="flex justify-evenly">
            <Image src={Pote} alt={""} width={100}></Image>
            <Image src={Pote} alt={""} width={100}></Image>
            <Image src={Bambona} alt={""} width={100}></Image>
          </div>
        </div>
      </div>
      <div className="w-full relative">
        <Image
          className="object-fill w-full max-h-[30vh]"
          src={ImgParceiro}
          alt="Banner"
        />
        <div className="w-1/2 flex flex-col gap-6 absolute top-10 p-10">
          <span className="font-semibold text-3xl">
            Seja um estabelecimento parceiro
          </span>
          <span>
            Essa iniciativa é uma excelente oportunidade de se destacar como um
            estabelecimento preocupado com a responsabilidade ambiental, o que
            pode atrair clientes conscientes e leais, que valorizam essas
            práticas.
          </span>
        </div>
      </div>
      <Footer />
    </main>
  );
}
