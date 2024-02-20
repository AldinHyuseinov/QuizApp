import Link from "next/link";
import LocaleSwitcher from "./LocaleSwitcher";

export default function Navigation() {
  return (
    <header className="container mx-auto flex justify-between p-4">
      <Link href="/">Trivia</Link>

      <nav>
        <ul className="flex gap-4 items-center">
          <li>Theme</li>
          <li>
            <LocaleSwitcher />
          </li>
        </ul>
      </nav>
    </header>
  );
}
