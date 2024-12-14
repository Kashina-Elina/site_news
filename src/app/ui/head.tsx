"use client";
import Link from "next/link";
export default function Head() {
  return (
    <div className="text-white flex flex-row font-bold bg-gray-700 min-h-12 justify-around">
      <div className="text-lg mt-2">
        <Link
          href="/"
          className="bg-transparent text-white py-2 px-6 rounded-lg font-semibold hover:bg-violet-600 "
        >
          Главная
        </Link>
      </div>
      <div className="text-lg mt-2">
        <Link
          href="/news"
          className="bg-transparent text-white py-2 px-6 rounded-lg font-semibold  hover:bg-violet-600 transition-colors"
        >
          Новости
        </Link>
      </div>
    </div>
  );
}
