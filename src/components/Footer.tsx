import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { LocaleProps } from "../types";

export default function Footer({ params: { locale } }: LocaleProps) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Footer");

  return (
    <footer className="flex justify-center p-2">
      <p>&copy; 2024 Brainy. {t("copyright")}.</p>
    </footer>
  );
}
