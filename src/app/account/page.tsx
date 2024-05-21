import { Card } from "@mui/material";
import { HeaderHome } from "../components/header";

export default function AccountPage() {
  return (
    <main className="flex flex-col w-full bg-green-600">
      <HeaderHome isLoggedin={true} />
      <div className="w-10/12 lg:w-8/12 md:flex  justify-between mx-auto h-[calc(100vh-5.25em)] py-5">
        <div className="w-full">
            <Card className="w-full h-72">
            <div className="p-5">
                <h2 className="text-2xl font-bold">Informações da Conta</h2>
                <div>
                </div>
            </div>
            </Card>
        </div>
      </div>
    </main>
  );
}
