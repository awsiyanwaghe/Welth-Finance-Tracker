import HeroSection from "@/components/hero";
import { statsData } from "@/data/landing";

export default function Home() {
  return (
    <div className="mt-40">
      <HeroSection/>

      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-">
            {statsData.map((statsData,index)=>(
              <div key={index}>
                <div>{statsData.value}</div>
                <div>{statsData.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
