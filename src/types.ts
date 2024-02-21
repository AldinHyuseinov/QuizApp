import { ReactNode } from "react";

export type LocaleProps = {
  params: { locale: string };
};

export type LocaleSwitcherSelectProps = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export type MetadataProps = {
  children: ReactNode;
  params: { locale: string };
};
