import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="h-screen flex justify-center items-center flex-col">
      <div className="flex justify-center">
        <div className="bg-amber-200 rounded-full max-w-fit">
          <img src="logo.png" alt="Logo" width="200px" />
        </div>
      </div>
      <div className="flex justify-center items-center flex-col font-bold text-stone-700">
        <h2 className="text-4xl">Taste Tsunami</h2>
        <h1 className="text-6xl">Coming Soon...</h1>
      </div>
    </div>
    </>
  );
}
