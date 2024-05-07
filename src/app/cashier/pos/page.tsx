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

const cardData: { [key: string]: CardProps[] } = {
  snacks: [
    {
      label: "Magic Treats",
      code: "ITMSC001",
      amount: "Rs. 290.00",
      discription: "Crispy, crunchy texture with No artificial flavors",
      icon: Activity,
    },
    {
      label: "Yummy Bites",
      code: "ITMSC002",
      amount: "Rs. 150.00",
      discription: "Delicious bites with a burst of flavor",
      icon: Activity,
    },
    {
      label: "Crunchy Paws",
      code: "ITMSC003",
      amount: "Rs. 210.00",
      discription: "Satisfying crunchiness for your furry friend",
      icon: Activity,
    },
    {
      label: "Puppy Delights",
      code: "ITMSC004",
      amount: "Rs. 180.00",
      discription: "Irresistibly tasty treats for your little one",
      icon: Activity,
    },
    {
      label: "Tasty Bones",
      code: "ITMSC005",
      amount: "Rs. 250.00",
      discription: "Bone-shaped treats packed with flavor",
      icon: Activity,
    },
    {
      label: "Savory Strips",
      code: "ITMSC006",
      amount: "Rs. 200.00",
      discription: "Succulent strips for a satisfying snack time",
      icon: Activity,
    },
    {
      label: "Chewy Chunks",
      code: "ITMSC007",
      amount: "Rs. 220.00",
      discription: "Chewy chunks that dogs love to sink their teeth into",
      icon: Activity,
    },
    {
      label: "Happy Tails",
      code: "ITMSC008",
      amount: "Rs. 170.00",
      discription: "Tail-wagging treats to make your pup smile",
      icon: Activity,
    },
    {
      label: "Pawsome Snacks",
      code: "ITMSC009",
      amount: "Rs. 190.00",
      discription: "Snacks that your furry friend will beg for",
      icon: Activity,
    },
    {
      label: "Bark Bites",
      code: "ITMSC010",
      amount: "Rs. 160.00",
      discription: "Bite-sized treats perfect for training or rewards",
      icon: Activity,
    },
  ],
  babyProducts: [
    {
      label: "Soft Blanket",
      code: "ITMBP001",
      amount: "Rs. 350.00",
      discription: "Cozy and warm blanket for your little one",
      icon: CreditCard,
    },
    {
      label: "Baby Onesie",
      code: "ITMBP002",
      amount: "Rs. 250.00",
      discription: "Cute and comfortable outfit for your baby",
      icon: CreditCard,
    },
    {
      label: "Soothing Teether",
      code: "ITMBP003",
      amount: "Rs. 150.00",
      discription: "Gentle teether to ease teething discomfort",
      icon: CreditCard,
    },
    {
      label: "Baby Bath Tub",
      code: "ITMBP004",
      amount: "Rs. 450.00",
      discription: "Safe and spacious tub for bathtime fun",
      icon: CreditCard,
    },
    {
      label: "Diaper Bag",
      code: "ITMBP005",
      amount: "Rs. 300.00",
      discription: "Stylish and practical bag to carry baby essentials",
      icon: CreditCard,
    },
    {
      label: "Baby Monitor",
      code: "ITMBP006",
      amount: "Rs. 600.00",
      discription: "Peace of mind with audio and video monitoring",
      icon: CreditCard,
    },
    {
      label: "Soft Toys Set",
      code: "ITMBP007",
      amount: "Rs. 200.00",
      discription: "Adorable plush toys for cuddling and play",
      icon: CreditCard,
    },
    {
      label: "Baby Food Blender",
      code: "ITMBP008",
      amount: "Rs. 350.00",
      discription: "Convenient blender for homemade baby food",
      icon: CreditCard,
    },
    {
      label: "Baby Carrier",
      code: "ITMBP009",
      amount: "Rs. 400.00",
      discription: "Comfortable carrier for keeping your baby close",
      icon: CreditCard,
    },
    {
      label: "Baby Nail Clippers",
      code: "ITMBP010",
      amount: "Rs. 100.00",
      discription: "Safe clippers designed for delicate baby nails",
      icon: CreditCard,
    },
  ],

  fashion: [
    {
      label: "Stylish Sunglasses",
      code: "ITMF001",
      amount: "Rs. 500.00",
      discription: "Fashionable shades to elevate your look",
      icon: Activity,
    },
    {
      label: "Classic Denim Jeans",
      code: "ITMF002",
      amount: "Rs. 1000.00",
      discription: "Timeless jeans for a versatile wardrobe staple",
      icon: Activity,
    },
    {
      label: "Elegant Dress",
      code: "ITMF003",
      amount: "Rs. 1200.00",
      discription: "Chic dress for any occasion",
      icon: Activity,
    },
    {
      label: "Comfortable Sneakers",
      code: "ITMF004",
      amount: "Rs. 800.00",
      discription: "Stylish sneakers for casual and active wear",
      icon: Activity,
    },
    {
      label: "Fashionable Handbag",
      code: "ITMF005",
      amount: "Rs. 700.00",
      discription: "Trendy bag to complement your outfit",
      icon: Activity,
    },
    {
      label: "Cozy Scarf",
      code: "ITMF006",
      amount: "Rs. 300.00",
      discription: "Soft scarf to keep you warm and stylish",
      icon: Activity,
    },
    {
      label: "Statement Necklace",
      code: "ITMF007",
      amount: "Rs. 450.00",
      discription: "Eye-catching necklace to add flair to any look",
      icon: Activity,
    },
    {
      label: "Formal Blazer",
      code: "ITMF008",
      amount: "Rs. 1500.00",
      discription: "Sharp blazer for a polished and professional appearance",
      icon: Activity,
    },
    {
      label: "Trendy Watch",
      code: "ITMF009",
      amount: "Rs. 600.00",
      discription: "Fashion-forward timepiece to complete your ensemble",
      icon: Activity,
    },
    {
      label: "Chic Ankle Boots",
      code: "ITMF010",
      amount: "Rs. 900.00",
      discription: "Sleek boots to add edge to your outfit",
      icon: Activity,
    },
  ],

  stationary: [
    {
      label: "Set of Colorful Pens",
      code: "ITMS001",
      amount: "Rs. 150.00",
      discription: "Vibrant pens for writing and drawing",
      icon: Users,
    },
    {
      label: "Notebook with Hardcover",
      code: "ITMS002",
      amount: "Rs. 200.00",
      discription: "Durable notebook with quality paper for note-taking",
      icon: Users,
    },
    {
      label: "Pack of Sticky Notes",
      code: "ITMS003",
      amount: "Rs. 100.00",
      discription: "Convenient sticky notes for reminders and messages",
      icon: Users,
    },
    {
      label: "Assorted Highlighters",
      code: "ITMS004",
      amount: "Rs. 120.00",
      discription: "Highlighters in various colors for organizing notes",
      icon: Users,
    },
    {
      label: "Mechanical Pencils",
      code: "ITMS005",
      amount: "Rs. 80.00",
      discription: "Refillable pencils for precise and neat writing",
      icon: Users,
    },
    {
      label: "Eraser and Sharpener Set",
      code: "ITMS006",
      amount: "Rs. 50.00",
      discription:
        "Essential tools for correcting mistakes and sharpening pencils",
      icon: Users,
    },
    {
      label: "Ruler with Metric and Imperial Measurements",
      code: "ITMS007",
      amount: "Rs. 70.00",
      discription: "Versatile ruler for accurate measurements",
      icon: Users,
    },
    {
      label: "Binder Clips Assortment",
      code: "ITMS008",
      amount: "Rs. 90.00",
      discription: "Assorted sizes of binder clips for organizing papers",
      icon: Users,
    },
    {
      label: "Transparent Tape Roll",
      code: "ITMS009",
      amount: "Rs. 40.00",
      discription: "Multipurpose tape for sealing and mending",
      icon: Users,
    },
    {
      label: "Desktop Organizer",
      code: "ITMS010",
      amount: "Rs. 180.00",
      discription: "Stylish organizer to keep your desk tidy",
      icon: Users,
    },
  ],
};

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("snacks");
  const [selectedItems, setSelectedItems] = useState<CardProps[]>([]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleCardClick = (card: CardProps) => {
    setSelectedItems([...selectedItems, card]);
  };

  const handleRemoveClick = (itemToRemove: CardProps) => {
    setSelectedItems(selectedItems.filter((item) => item !== itemToRemove));
  };

  const totalAmount = selectedItems.reduce((total, item) => {
    return total + parseFloat(item.amount.replace("Rs. ", ""));
  }, 0);

  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Point of Sales" />
      <section className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <CardContent className="lg:col-span-1">
          <CardContent>
            <section className="flex flex-col items-center p-10">
              <h2>Selected Items</h2>
              {selectedItems.map((item, index) => (
                <div key={index}>
                  <h3>
                    {item.label} : {item.amount}{" "}
                    <button onClick={() => handleRemoveClick(item)}>*</button>
                  </h3>
                </div>
              ))}
              <br></br>

              <h2>Total: Rs. {totalAmount.toFixed(2)}</h2>
              <br />
              <h4>Click (*) to remove the item</h4>
            </section>
          </CardContent>
        </CardContent>
        <CardContent className="lg:col-span-2">
          <section>
            <SubNav handleCategoryChange={handleCategoryChange} />
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {cardData[selectedCategory].map((d, i) => (
                <Card
                  key={i}
                  amount={d.amount}
                  discription={d.discription}
                  icon={d.icon}
                  label={d.label}
                  code={d.code}
                  onClick={() => handleCardClick(d)}
                />
              ))}
            </section>
          </section>
        </CardContent>
      </section>
    </div>
  );
}
