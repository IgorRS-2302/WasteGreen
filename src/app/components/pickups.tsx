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
    <div className="bg-white p-3 my-5 flex gap-4 content-between items-center rounded-md text-xs">
      <div className="w-2/3 flex flex-col gap-1">
        <div className="flex justify-between">
          <span>Código da coleta:</span>
          <span className="font-semibold">{codColeta}</span>
        </div>
        <div className="flex justify-between">
          <span>Data da coleta: </span>
          <span className="font-semibold">{dataColeta}</span>
        </div>
      </div>
      <div className="w-1/3 flex flex-col gap-2">
        <div className="flex justify-between">
          <span>Barris: </span>
          <span className="font-semibold">{barris}</span>
        </div>
        <div className="flex justify-between">
          <span>Pontuação: </span>
          <span className="font-semibold">{pontuacao}</span>
        </div>
      </div>
    </div>
  );
}
