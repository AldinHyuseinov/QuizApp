import Link from "next/link";

export default function Navigation() {
  return (
    <header className="flex justify-between p-4">
      <Link href="/">Trivia</Link>

      <nav>
        <ul className="flex gap-4">
          <li>Theme</li>
          <li>Language</li>
        </ul>
      </nav>
    </header>
  );
}
