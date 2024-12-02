import Link from "next/link";
// import AddNewsForm from "./ui/add_news_component";

export default function Home() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] ">
    <div
      className="bg-cover bg-no-repeat bg-center min-h-screen flex justify-center items-center"
      style={{ backgroundImage: "url('/bg-cat.jpg')" }}
    >
      <main className="flex flex-col justify-center items-center gap-8">
        <div className="flex justify-center items-center">
          <Link href="/news">
            <h1 className="text-black text-7xl font-bold p-4 border-4 border-black rounded-lg shadow-">
              Go to news page
            </h1>
          </Link>
        </div>
      </main>
    </div>
    // </div>
  );
}
