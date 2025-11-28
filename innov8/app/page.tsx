"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      router.push("/home");
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-8">
          <Image
            src="/images/innov8logo black.png"
            alt="Innov8 Logo"
            width={200}
            height={80}
            priority
            className="object-contain"
          />
          <div className="flex gap-2">
            <div className="h-3 w-3 animate-bounce rounded-full bg-black [animation-delay:-0.3s]"></div>
            <div className="h-3 w-3 animate-bounce rounded-full bg-black [animation-delay:-0.15s]"></div>
            <div className="h-3 w-3 animate-bounce rounded-full bg-black"></div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
