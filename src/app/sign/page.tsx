import Logo from "../components/logo";
import Link from "next/link";

export default function Sign() {
  return (
    <div className="flex h-lvh bg-slate-50">
      <div className="bg-white flex flex-wrap m-auto gap-5 border w-2/3 max-w-xl shadow rounded-md p-10">
        <div className="m-auto h-10">
        <Logo/>
        </div>
        <div className="flex flex-wrap w-full ">
          <fieldset className="w-full">
            <label htmlFor="">Email</label>
            <input type="text" className="border p-2 my-2 w-full rounded-md" />
          </fieldset>
          <fieldset className="w-full">
            <label htmlFor="">Senha</label>
            <input type="text" className="border p-2 my-2 w-full rounded-md" />
          </fieldset>
        </div>
        <div className="flex flex-wrap w-full gap-4">
          <div className="w-full flex ">
            <button className="border bg-green-600 text-white m-auto px-5 py-2 rounded-md">
              Entrar
            </button>
          </div>
          <div className="w-full flex  items-center gap-1 justify-center">
            <span className="text-sm text-center">Não tem conta?</span>
            <Link href={'/signup'} className="text-sm text-green-700">Cadastre-se</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
