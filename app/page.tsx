import Image from "next/image"
import styles from "./page.module.css"

export default function Home() {
  return (
    <div className="w-full bg-white">
      <main className="flex justify-center items-center m-auto h-auto flex-col py-40 ">
        <h1 className="text-3xl md:text-6xl lg:text-8xl font-thin text-black  text-center px-4">
          Welcome to <a href="https://nextjs.org">Next.js 13!</a>
        </h1>
        <p className="text-1xl md:text-3xl lg:text-4xl my-4 md:my-6 lg:my-6 text-gray-600 text-center px-4">
          A Tailwind Example with Next.js 13
        </p>
      </main>

      <footer className="flex flex-col justify-center items-center mx-auto max-w-md text-white">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          <span>
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              width={72}
              height={16}
              className="m-10"
            />
          </span>
        </a>
        <svg
          className="h-6 w-6 flex-none fill-yellow-50 stroke-yellow-500 stroke-2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="11" />
          <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
        </svg>
      </footer>
    </div>
  )
}
