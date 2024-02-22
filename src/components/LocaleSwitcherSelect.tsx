"use client";

import { ChangeEvent, useTransition } from "react";
import { useParams } from "next/navigation";
import { LocaleSwitcherSelectProps } from "../types";
import { useRouter, usePathname } from "../navigation";

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label,
}: LocaleSwitcherSelectProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  const onSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = event.target.value;

    startTransition(() => {
      router.replace(
        // @ts-expect-error
        { pathname, params },
        { locale: nextLocale }
      );
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
