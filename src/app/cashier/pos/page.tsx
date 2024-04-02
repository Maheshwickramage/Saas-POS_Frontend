/** @format */
"use client";

import PageTitle from "@/components/PageTitle";
import Image from "next/image";
import {
  DollarSign,
  Users,
  CreditCard,
  Activity,
  ChevronRightIcon,
} from "lucide-react";
import Card, { CardContent, CardProps } from "@/components/Card";
import BarChart from "@/components/BarChart";
import SalesCard, { SalesProps } from "@/components/SalesCard";
import { SubNav } from "./sub-nav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { any, string } from "zod";

const cardData: CardProps[] = [
  {
    label: "Chocolate Fingers",
    amount: "Rs. 380.00",
    discription: "A delicious and timeless Sri Lankan favourite",
    icon: DollarSign,
  },
  {
    label: "Mentos Mint",
    amount: "Rs. 100.00",
    discription: "Crispy, crunchy texture with No artificial flavours",
    icon: Users,
  },
  {
    label: "Lemon Puff",
    amount: "Rs. 130.00",
    discription: "Chocolate biscuits filled with delicious chocolate cream",
    icon: CreditCard,
  },
  {
    label: "Magic Treats",
    amount: "Rs. 290.00",
    discription: "Crispy, crunchy texture with No artificial flavours",
    icon: Activity,
  },
  {
    label: "Jumbo Peanut",
    amount: "Rs. 420.00",
    discription: "A delicious and timeless Sri Lankan favourite",
    icon: Users,
  },
  {
    label: "Cream Cracker",
    amount: "Rs. 480.00",
    discription: "Crispy, crunchy texture with No artificial flavours",
    icon: CreditCard,
  },
  {
    label: "Chocolate Cream",
    amount: "Rs. 405.00",
    discription: "Crispy, crunchy texture with No artificial flavours",
    icon: Activity,
  },
  {
    label: "Tikiri Marie",
    amount: "Rs. 330.00",
    discription: "Crispy, crunchy texture with No artificial flavours",
    icon: Users,
  },
  {
    label: "Sun Cracker",
    amount: "Rs. 110.00",
    discription: "A delicious and timeless Sri Lankan favourite",
    icon: CreditCard,
  },
  {
    label: "Magic Treats",
    amount: "Rs. 290.00",
    discription: "Crispy, crunchy texture with No artificial flavours",
    icon: Activity,
  },
  {
    label: "Mentos Mint",
    amount: "Rs. 100.00",
    discription: "Crispy, crunchy texture with No artificial flavours",
    icon: Users,
  },
  {
    label: "Jumbo Peanut",
    amount: "Rs. 420.00",
    discription: "A delicious and timeless Sri Lankan favourite",
    icon: CreditCard,
  },
  {
    label: "Cream Cracker",
    amount: "Rs. 480.00",
    discription: "Crispy, crunchy texture with No artificial flavours",
    icon: Activity,
  },
];

export default function Home() {
  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = (value: any) => {
    if (value === "=") {
      try {
        setInputValue(eval(inputValue).toString());
      } catch (error) {
        setInputValue("Error");
      }
    } else if (value === "C") {
      setInputValue("");
    } else if (value === "←") {
      setInputValue(inputValue.slice(0, -1));
    } else {
      setInputValue(inputValue + value);
    }
  };

  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Point of Sales" />
      <section className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <CardContent className="lg:col-span-1">
          <CardContent>
            <section className="flex flex-col items-center">
              <section className="flex flex-col items-center p-10">
                <Input type="text" value={inputValue} readOnly />
              </section>
              <section className="grid grid-cols-4 gap-4 lg:grid-cols-4 pb-10">
                <Button
                  variant="secondary"
                  onClick={() => handleButtonClick("7")}
                >
                  7
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => handleButtonClick("8")}
                >
                  8
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => handleButtonClick("9")}
                >
                  9
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => handleButtonClick("+")}
                >
                  +
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => handleButtonClick("4")}
                >
                  4
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => handleButtonClick("5")}
                >
                  5
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => handleButtonClick("6")}
                >
                  6
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => handleButtonClick("*")}
                >
                  *
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => handleButtonClick("1")}
                >
                  1
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => handleButtonClick("2")}
                >
                  2
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => handleButtonClick("3")}
                >
                  3
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => handleButtonClick("-")}
                >
                  -
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => handleButtonClick("0")}
                >
                  0
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => handleButtonClick("00")}
                >
                  00
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => handleButtonClick(".")}
                >
                  .
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => handleButtonClick("/")}
                >
                  /
                </Button>

                <Button variant="secondary" onClick={() => setInputValue("")}>
                  C
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => handleButtonClick("←")}
                >
                  ←
                </Button>
                <Button
                  variant="secondary"
                  className="col-span-2"
                  onClick={() => handleButtonClick("=")}
                >
                  =
                </Button>
              </section>
            </section>
          </CardContent>
        </CardContent>
        <CardContent className="lg:col-span-2">
          <section>
            <SubNav />
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {cardData.map((d, i) => (
                <Card
                  key={i}
                  amount={d.amount}
                  discription={d.discription}
                  icon={d.icon}
                  label={d.label}
                />
              ))}
            </section>
          </section>
        </CardContent>
      </section>
    </div>
  );
}
