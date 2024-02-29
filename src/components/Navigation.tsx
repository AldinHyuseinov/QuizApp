import LocaleSwitcher from "./LocaleSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";
import Logo from "./Logo";
import { LocaleProps } from "../types";
import { unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";

export default function Navigation({ params: { locale } }: LocaleProps) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Navigation");

  return (
    <header className="container max-w-full flex justify-around items-center p-4 shadow-md dark:shadow-gray-700">
      <Logo />

      <nav>
        <ul className="flex gap-4 items-center">
          <li>
            <p className="sr-only">{t("label")}</p>
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
