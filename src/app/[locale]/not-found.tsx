// `app/[locale]/[...rest]/page.tsx`
// is necessary for this page to render.
export default function NotFoundPage() {
  return (
    <main className="flex flex-col items-center">
      <h1 className="max-w-[460px]">Not Found</h1>
      <p className="text-2xl">Sorry, the page you&apos;re looking for can&apos;t be found.</p>
    </main>
  );
}
