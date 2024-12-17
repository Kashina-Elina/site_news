import Link from "next/link";

export default function Home() {
  return (
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
