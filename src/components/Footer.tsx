import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Footer({ params: { locale } }: LocaleProps) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Footer");

  return (
    <footer className="flex justify-center">
      <p>&copy; 2024 Trivia. {t("copyright")}.</p>
    </footer>
  );
}
