// "use server";
// import { getAllNews } from "../lib/data";
// import NewsComponent from "../ui/news_component";
// import AddNewsForm from "../ui/add_news_component";

// export default async function Home() {
//   const newsData = await getAllNews();
//   // console.log(newsData[0]);
//   return (
//     <div
//       className="bg-cover bg-no-repeat bg-center min-h-screen flex justify-center items-center"
//       style={{ backgroundImage: "url('/bg-cat.jpg')" }}
//     >
//       <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//         <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
//           <NewsComponent newsData={newsData} isOneNews={false} />
//           <div className="bg-gray-700 rounded-lg shadow-sm p-6">
//             <AddNewsForm />
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }
"use server";
import { getAllNews } from "../lib/data";
import NewsComponent from "../ui/news_component";
import AddNewsForm from "../ui/add_news_component";

export default async function Home() {
  const newsData = await getAllNews();

  return (
    <div
      className="bg-cover bg-no-repeat bg-center min-h-screen flex justify-center items-center bg-gray-200"
      // style={{ backgroundImage: "url('/bg-cat.jpg')" }}
    >
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center w-full max-w-4xl">
          {/* Компонент для отображения новостей */}
          <div className="w-full p-6 rounded-lg shadow-md bg-gray-700">
            <h1 className="text-center text-2xl font-bold mb-4 text-gray-700"></h1>
            <NewsComponent newsData={newsData} isOneNews={false} />
          </div>

          {/* Форма добавления новостей */}
          <div className="w-full bg-gray-700 p-6 rounded-lg shadow-md">
            <h2 className="text-center text-xl font-semibold mb-4 text-white"></h2>
            <AddNewsForm />
          </div>
        </main>
      </div>
    </div>
  );
}
