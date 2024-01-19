import Link from "next/link";
import DeliveryCard from "../card/DeliveryCard";
import MainCard from "../card/MainCard";

const property = [
  {
    title: "배달",
    description: "세상은 넓고 맛집은 없다.",
    imageURL: "/images/1.png",
  },
  {
    title: "B마트",
    description: "장보기도 더 빠르게",
    imageURL: "/images/2.jpeg",
  },
  {
    title: "배민스토어",
    description: "배달은 지금 옵니다",
    imageURL: "/images/6.gif",
  },
];

export default function MainSection() {
  return (
    <section className="h-full flex flex-col">
      <div className="flex">
        {property.map((value: any, index: number) => (
          <MainCard key={index} property={value} />
        ))}
      </div>
      <DeliveryCard />
    </section>
  );
}
