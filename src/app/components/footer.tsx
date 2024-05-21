import Image from "next/image";
import LogoWG from "../../assets/logo_wg.svg";

export function Footer() {
  return (
    <footer className="text-black flex justify-evenly p-10">
      <div className="w-1/4">
        <span>
          Equipe WasteGreen: Alípio Gomes, Andrezza Lavine, Igor Rodrigues, Jady
          Milena, João Gabriel, Kaiuá Aymara, Kennedy Mendes, Marllon dos
          Santos, Thyago Luiz, Wellington Michel.
        </span>
      </div>
      <div>
        <Image src={LogoWG} alt="Banner" />
      </div>
      <div className="w-1/4 text-center">
        <span>Redes socialis</span>
      </div>
    </footer>
  );
}
