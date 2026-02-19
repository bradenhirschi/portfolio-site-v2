import { LucideArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mb-16">
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-zinc-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-zinc-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-zinc-800 dark:hover:text-zinc-100"
            rel="noopener noreferrer"
            target="_blank"
            href="/rss"
          >
            <LucideArrowUpRight />
            <p className="ml-2 h-7">rss</p>
          </a>
        </li>
      </ul>
      <p className="mt-8 text-zinc-600 dark:text-zinc-300">
        © {new Date().getFullYear()} bradenhirschi.com
      </p>
    </footer>
  )
}
