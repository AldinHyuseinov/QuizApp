import { categories } from "@/src/categories";
import { LocaleProps } from "@/src/types";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

export default function IndexPage({ params: { locale } }: LocaleProps) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Index");

  return (
    // Todo:
    <main className="flex flex-col items-center mb-1 p-4">
      <header className="flex flex-col items-center">
        <h1>{t("title")}</h1>
        <p>{t("paragraph")}</p>
      </header>

      <section className="grid grid-cols-1 gap-3 lg:grid-cols-3 sm:grid-cols-2">
        {categories.map(({ id, imageSrc, category }) => (
          <Link key={id} href={`/${id}`}>
            <div className="flex flex-col items-center border rounded-lg overflow-hidden shadow-md dark:border-gray-700 dark:shadow-gray-700 hover:border-gray-700 hover:dark:border-slate-500 cursor-pointer">
              <Image
                src={imageSrc}
                alt={t(`categories.${category}.alt`)}
                width={250}
                height={180}
                className="aspect-[4/3]"
              />
              <p className="p-4">{t(`categories.${category}.translation`)}</p>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
