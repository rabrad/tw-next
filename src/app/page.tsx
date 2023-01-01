import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full bg-white">
      <main className="m-auto flex h-auto flex-col items-center justify-center py-40 ">
        <h1 className="px-4 text-center text-3xl font-thin text-black  md:text-6xl lg:text-8xl">
          Welcome to <a href="/#">Next.js 13!</a>
        </h1>
        <p className="text-1xl my-4 px-4 text-center text-gray-600 md:my-6 md:text-3xl lg:my-6 lg:text-4xl">
          A Tailwind Example with Next.js 13
        </p>
      </main>
      <Footer />
    </div>
  );
}
