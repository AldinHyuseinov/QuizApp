import { Inter } from "next/font/google";
import "@/src/globals.css";
import Navigation from "@/src/components/Navigation";
import Footer from "@/src/components/Footer";
import { locales } from "@/src/config";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import clsx from "clsx";
import ThemeProvider from "../theme-provider";
import { MetadataProps } from "@/src/types";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({ params: { locale } }: Omit<MetadataProps, "children">) {
  const t = await getTranslations({ locale, namespace: "AppLayout" });

  return {
    title: t("title"),
    description: "Generated by create next app",
    icons: {
      icon: "../logo.svg",
    },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function AppLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={clsx(inter.className, "min-h-screen")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navigation params={{ locale }} />
          {children}
          <Footer params={{ locale }} />
        </ThemeProvider>
      </body>
    </html>
  );
}
