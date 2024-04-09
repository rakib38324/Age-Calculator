import Image from "next/image";
import TitleWave from "./title-waive";
import AgeCalculator from "./age-calculator";

export default function Home() {
  return (
    <main className="text-3xl text-center font-bold my-10">
      <TitleWave />
      <AgeCalculator />
    </main>
  );
}
