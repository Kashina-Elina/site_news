"use server";
import { getNewsById } from "../../lib/data";
import NewsComponent from "../../ui/news_component";

type tParams = Promise<{ slug: string[] }>;

export default async function Page({ params }: { params: tParams }) {
  console.log(params);
  const { slug } = await params;
  const newsData = await getNewsById(Number(slug));
  const newsArray = newsData ? [newsData] : [];

  return (
    <div
      className="bg-cover bg-no-repeat bg-center min-h-screen flex justify-center items-center"
      style={{ backgroundImage: "url('/bg-cat.jpg')" }}
    >
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <NewsComponent newsData={newsArray} isOneNews={true} />
        </main>
      </div>
    </div>
  );
}

// "use server";
// import { getNewsById } from "../../lib/data";
// import NewsComponent from "../../ui/news_component";

// // Параметры маршрута должны быть доступны синхронно
// export default async function Page({ params }: { params: { slug: string } }) {
//   // Логируем параметры
//   console.log(params);

//   // Без необходимости использовать await для params
//   const { slug } = params;

//   // Получаем данные новости по slug
//   const newsData = await getNewsById(Number(slug));

//   // Если данные есть, создаем массив, иначе пустой массив
//   const newsArray = newsData ? [newsData] : [];

//   return (
//     <div
//       className="bg-cover bg-no-repeat bg-center min-h-screen flex justify-center items-center"
//       style={{ backgroundImage: "url('/bg-cat.jpg')" }}
//     >
//       <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8">
//         <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//           <NewsComponent newsData={newsArray} isOneNews={true} />
//         </main>
//       </div>
//     </div>
//   );
// }

// "use server";
// import NewsComponent from "../../ui/news_component";
// import { getNewsById } from "../../";

// export default async function Page({ params }: { params: { slug: string } }) {
//   //console.log(params);
//   const { slug } = await params;
//   const newsData = await getNewsById(Number(slug));
//   const newsArray = newsData ? [newsData] : [];
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screnn p-8">
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <NewsComponent newsData={newsArray} isOneNews={true} />
//       </main>
//     </div>
//   );
// }
