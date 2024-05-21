import { DateRangeSharp } from "@mui/icons-material";
import { HeaderHome } from "../components/header";
import { Button, Card, Input } from "@mui/material";
import { Footer } from "../components/footer";

export default function EmergencialPage() {
  return (
    <main className="flex flex-col w-full bg-green-600">
      <HeaderHome isLoggedin={true} />
      <div className="w-10/12 lg:w-8/12 md:flex  justify-between mx-auto h-[calc(100vh-5.25em)] py-5">
        <div className="mx-auto">
          <Card className="w-full h-fit bg-white">
            <div className="flex">
              <span className="mx-auto text-lg">Coleta Emergencial</span>
            </div>
            <div className="p-5">
              <p>Data da Coleta</p>
              <Input type="date" />
            </div>
            <div className="p-5">
              <p>
                Para solicitar uma coleta de emergência é necessário pagar uma
                taxa de R$15,00.
              </p>
              <Button
                variant="contained"
                className="bg-green-600 hover:bg-green-800"
              >
                <span>Solicitar Coleta</span>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}
