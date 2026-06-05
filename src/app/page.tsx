import Banner from "@/components/homePage/Banner";
import CardListing from "@/components/homePage/CardListing";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background ">
      <main>
        <Banner />
        <CardListing />
      </main>
    </div>
  )
}
