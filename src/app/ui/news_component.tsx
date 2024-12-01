import React from "react";
import Link from "next/link";
import { getAllNews } from "../lib/data";
import { news } from "@prisma/client";

export default function NewsComponent({
  newsData,
  isOneNews,
}: {
  newsData: news[];
  isOneNews: boolean;
}) {
  return (
    <div className="grid grid-cols-1 gap-4">
      {newsData.map((elem) => (
        <Link href={`/news/${elem.id}`} key={elem.id} className={"group"}>
          <div key={elem.id} className="bg-gray-700 rounded-lg shadow-sm p-6">
            <div className="font-bold">Мяу, {elem.title}</div>
            {isOneNews && (
              <div>
                <div>Data: {elem.date.toDateString()}</div>
                <div>Excerpt: {elem.excerpt}</div>
                <div>Text: {elem.text}</div>
              </div>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const newsData = await getAllNews();
  return { props: { newsData } };
}
