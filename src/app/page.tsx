import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <div className="w-full max-w-5xl flex flex-col items-center justify-center min-h-screen">
        {/* Logo at the top */}
        <div className="mb-12 relative">
          <Image
            src="/logo.jpg"
            alt="Texas Web Craft Logo"
            width={200}
            height={80}
            priority
            className="rounded-3xl"
          />
        </div>

        {/* Coming Soon Text */}
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 animate-pulse">Coming Soon</h1>
        <p className="text-xl md:text-2xl text-center text-muted-foreground max-w-md ">
          We're crafting something amazing for you. Stay tuned!
        </p>
      </div>
    </main>
  );
}
