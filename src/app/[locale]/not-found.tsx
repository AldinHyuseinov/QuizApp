import { useTranslations } from "next-intl";

// `app/[locale]/[...rest]/page.tsx`
// is necessary for this page to render.
export default function NotFoundPage() {
  const t = useTranslations("NotFoundPage");

  return (
    <main className="flex flex-col items-center">
      <h1 className="max-w-[460px]">{t("title")}</h1>
      <p className="text-2xl">{t("paragraph")}</p>
    </main>
  );
}
