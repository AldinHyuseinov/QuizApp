"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";
import { LocaleSwitcherSelectProps } from "../types";

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label,
}: LocaleSwitcherSelectProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const onSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = event.target.value;

    startTransition(() => {
      router.replace(nextLocale);
    });
  };

  return (
    <>
      <p className="sr-only">{label}</p>
      <select
        className="flex border rounded p-1"
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
    </>
  );
}
