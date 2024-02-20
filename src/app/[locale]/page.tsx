import { LocaleProps } from "@/src/types";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function IndexPage({ params: { locale } }: LocaleProps) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Index");

  return (
    <main className="flex justify-center">
      <h1 className="text-4xl">{t("title")}</h1>
    </main>
  );
}
