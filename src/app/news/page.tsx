"use server";
import { getAllNews } from "../lib/data";
import NewsComponent from "../ui/news_component";

export default async function Home() {
  const newsData = await getAllNews();
  // console.log(newsData[0]);
  return (
    <div
      className="bg-cover bg-no-repeat bg-center min-h-screen flex justify-center items-center"
      style={{ backgroundImage: "url('/bg-cat.jpg')" }}
    >
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <NewsComponent newsData={newsData} isOneNews={false} />
        </main>
      </div>
    </div>
  );
}
