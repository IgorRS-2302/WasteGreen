import { ArrowForwardRounded } from "@mui/icons-material";
import { Button } from "@mui/material";

interface ICardData {
  title: string;
  price: number;
  description?: string;
  listItem?: string[];
}

export default function PlanCard({
  title,
  price,
  description,
  listItem,
}: ICardData) {
  return (
    <div className="grid bg-gradient-to-br from-green-500 from-40% green-600 to-green-700 p-5 rounded-md w-screen">
      <div className="mx-auto text-white h-1/12">
        <p className="w-full text-center mb-3 text-lg font-bold h-1/12">
          {title}
        </p>
        <div className="flex items-center justify-center mb-3">
          <sup className="">R$</sup>
          <p className="text-5xl">{price}</p>
          <sub>/Mês</sub>
        </div>
      </div>
      <div className="my-3">
        <div className=" text-white font-medium text-center">
          {description ? <p>{description}</p> : null}
        </div>
        <div className=" text-white font-medium text-center">
          {listItem ? (
            <ul className="list-inside">
              {listItem.map((item) => (
                <li className="list-disc" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
      <div className="h-10 self-end">
        <Button
          variant="contained"
          size="large"
          className="bg-white hover:bg-slate-50 text-green-700 capitalize w-full flex gap-2"
        >
          <span>Contrar agora</span>
          <ArrowForwardRounded />
        </Button>
      </div>
    </div>
  );
}
