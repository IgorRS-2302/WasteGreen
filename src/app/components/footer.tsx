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
        <ul>
          <li>Rua dos Taldos, N° 39 - Recife</li>
          <li>+55 (81) 98349-2515</li>
          <li>@wastegreen</li>
          <li>+55 (81) 98349-2515</li>
        </ul>
      </div>
    </footer>
  );
}
