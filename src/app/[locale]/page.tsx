import { LocaleProps } from "@/src/types";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function IndexPage({ params: { locale } }: LocaleProps) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Index");

  return (
    // Todo:
    <main className="flex flex-col items-center">
      <h1>{t("title")}</h1>
      <p>{t("paragraph")}</p>
    </main>
  );
}
