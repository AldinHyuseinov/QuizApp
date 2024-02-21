import Link from "next/link";
import LocaleSwitcher from "./LocaleSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Navigation() {
  return (
    <header className="container mx-auto flex justify-between p-4">
      <Link href="/">Trivia</Link>

      <nav>
        <ul className="flex gap-4 items-center">
          <li>
            <p className="sr-only">Toggle theme</p>
            <ThemeSwitcher />
          </li>
          <li>
            <LocaleSwitcher />
          </li>
        </ul>
      </nav>
    </header>
  );
}
