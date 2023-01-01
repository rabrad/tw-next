import Image from "next/image";

export default function index() {
  return (
    <div className="max-w-sm ">
      <div className="mx-auto overflow-hidden rounded-xl border-2 bg-white selection:max-w-md">
        <div className="flex-col md:flex">
          <div className="flex-1">
            <Image
              className="w-full object-cover "
              src="/food.jpeg"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div className="p-4">
            <a
              href="#"
              className="block text-2xl font-semibold leading-tight text-black hover:underline"
            >
              Meet & Treat
            </a>
            <div className="mt-1 text-sm font-light uppercase tracking-wide text-secondary">
              47 verfügbar
            </div>
            <p className="mt-2 text-black">
              Looking to take your team away on a retreat to enjoy awesome food
              and take in some sunshine? We have a list of places to do just
              that.
            </p>
            <div className="mt-4 flex w-fit items-center justify-center rounded-full border-2  border-secondary py-1 px-4 ">
              <p className="text-secondary">500 pt.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
