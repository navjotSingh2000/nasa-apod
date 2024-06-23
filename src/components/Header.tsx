import Link from "next/link";
export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="max-w-2xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-sm font-bold">
          NASA Astronomy Picture of the Day
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a
                href="https://github.com/navjotSingh2000/nasa-apod"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-gray-400"
              >
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
