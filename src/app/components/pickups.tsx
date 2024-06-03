type PickupProps = {
  codColeta: number;
  dataColeta: String;
  barris: number;
  pontuacao: number;
};

export default function Pickups({
  codColeta,
  dataColeta,
  barris,
  pontuacao,
}: PickupProps) {
  return (
    <div className="bg-white p-3 my-5 grid grid-cols-2 gap-4 content-between items-center rounded-md text-xs">
      <div className="flex justify-between items-center">
        <span>Código da coleta:</span>
        <span className="font-semibold">{codColeta}</span>
      </div>
      <div className="flex justify-between">
        <span>Data da coleta: </span>
        <span className="font-semibold">{dataColeta}</span>
      </div>

      <div className="flex justify-between">
        <span>Barris: </span>
        <span className="font-semibold">{barris}</span>
      </div>
      <div className="flex justify-between">
        <span>Pontuação: </span>
        <span className="font-semibold">{pontuacao}</span>
      </div>
    </div>
  );
}
