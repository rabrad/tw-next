import Footer from "@/components/Footer";
import Card from "@/components/Card";
import Link from "next/link";

export default function page() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden  ">
      <div className=" flex h-full max-w-7xl  flex-1 flex-col justify-center gap-2 self-auto py-4 px-4 sm:flex-row sm:gap-8 sm:px-20 sm:py-10">
        <aside className=" flex h-fit min-w-[150px] flex-col gap-y-4 pb-8 text-gray-800 ">
          <div className="cursor-pointer border-b border-gray-800 px-8 pb-2 hover:border-teal-600 hover:text-teal-600 hover:duration-300 hover:ease-in-out">
            <Link href="#" className="">
              Link 1
            </Link>
          </div>
          <div className="cursor-pointer border-b border-gray-800 px-8 pb-2 hover:border-teal-600 hover:text-teal-600 hover:duration-300 hover:ease-in-out">
            <Link href="#" className="">
              Link 2
            </Link>
          </div>
        </aside>
        <main>
          <div className="flex h-fit flex-col flex-wrap gap-4 sm:flex-row">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </main>
      </div>
      <div className="test">Tailwind custom classes</div>
      <Footer />
    </div>
  );
}
