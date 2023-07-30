import Link from "next/link"; // import link

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl font-bold">Homepage</h1>
      <Link href="/u">Users</Link> {/* creating a users branch */}
    </main>
  );
}
