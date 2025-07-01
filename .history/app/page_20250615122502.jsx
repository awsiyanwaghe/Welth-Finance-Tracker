import HeroSection from "@/components/hero";

export default function Home() {
  return (
    <div className="mt-40">
      <HeroSection/>

      <section>
        <div>
          <div>
            {stats}
          </div>
        </div>
      </section>

    </div>
  );
}
