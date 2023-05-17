// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type CoffeeCategory =
  | "Tradicional"
  | "Gelado"
  | "Com Leite"
  | "Especial"
  | "Alcoólico";

interface CoffeeProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  categories: CoffeeCategory[];
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CoffeeProduct[]>
) {
  const coffees: CoffeeProduct[] = [
    {
      id: 1,
      name: "Expresso Tradicional",
      price: 9.9,
      description: "O tradicional café feito com água quente e grãos moídos",
      image: "/coffees/expresso.png",
      categories: ["Tradicional"],
    },
    {
      id: 2,
      name: "Expresso Americano",
      price: 9.9,
      description: "Expresso diluído, menos intenso que o tradicional",
      image: "/coffees/expresso-americano.png",
      categories: ["Tradicional"],
    },
    {
      id: 3,
      name: "Expresso Cremoso",
      price: 9.9,
      description: "Café expresso tradicional com espuma cremosa",
      image: "/coffees/expresso-cremoso.png",
      categories: ["Tradicional"],
    },
    {
      id: 4,
      name: "Expresso Gelado",
      price: 9.9,
      description: "Bebida preparada com café expresso e cubos de gelo",
      image: "/coffees/expresso-gelado.png",
      categories: ["Tradicional", "Gelado"],
    },
    {
      id: 5,
      name: "Café com Leite",
      price: 9.9,
      description: "Meio a meio de expresso tradicional com leite vaporizado",
      image: "/coffees/cafe-com-leite.png",
      categories: ["Tradicional"],
    },
    {
      id: 6,
      name: "Latte",
      price: 9.9,
      description:
        "Uma dose de café expresso com o dobro de leite e espuma cremosa",
      image: "/coffees/latte.png",
      categories: ["Tradicional", "Com Leite"],
    },
    {
      id: 7,
      name: "Capuccino",
      price: 9.9,
      description:
        "Bebida com canela feita de doses iguais de café, leite e espuma",
      image: "/coffees/capuccino.png",
      categories: ["Tradicional", "Com Leite"],
    },
    {
      id: 8,
      name: "Macchiato",
      price: 9.9,
      description:
        "Café expresso misturado com um pouco de leite quente e espuma",
      image: "/coffees/macchiato.png",
      categories: ["Tradicional"],
    },
    {
      id: 9,
      name: "Mocaccino",
      price: 9.9,
      description: "Café expresso com calda de chocolate, pouco leite e espuma",
      image: "/coffees/mochaccino.png",
      categories: ["Tradicional", "Com Leite"],
    },
    {
      id: 10,
      name: "Chocolate Quente",
      price: 9.9,
      description:
        "Bebida feita com chocolate dissolvido no leite quente e café",
      image: "/coffees/chocolate-quente.png",
      categories: ["Especial", "Com Leite"],
    },
    {
      id: 11,
      name: "Cubano",
      price: 9.9,
      description:
        "Drink gelado de café expresso com rum, creme de leite e hortelã",
      image: "/coffees/cubano.png",
      categories: ["Especial", "Alcoólico", "Gelado"],
    },
    {
      id: 12,
      name: "Havaiano",
      price: 9.9,
      description: "Bebida adocicada preparada com café e leite de coco",
      image: "/coffees/havaiano.png",
      categories: ["Especial"],
    },
    {
      id: 13,
      name: "Árabe",
      price: 9.9,
      description: "Bebida adocicada preparada com café e leite de coco",
      image: "/coffees/arabe.png",
      categories: ["Especial"],
    },
    {
      id: 14,
      name: "Irlandês",
      price: 9.9,
      description: "Bebida preparada com grãos de café árabe e especiarias",
      image: "/coffees/irlandes.png",
      categories: ["Especial", "Alcoólico"],
    },
  ];

  res.status(200).json(coffees);
}
