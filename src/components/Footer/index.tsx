import Image from "next/image";
import styles from "./index.module.scss";

export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-md flex-col items-center justify-center text-white">
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
        className=" mt-8 h-6 w-6 fill-sky-100 stroke-sky-500 stroke-2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="11" />
        <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
      </svg>

      <div className={styles.description}>something</div>
    </footer>
  );
}
