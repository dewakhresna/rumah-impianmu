import { Geist, Geist_Mono } from "next/font/google";
import { Button } from "@heroui/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black">
      <Button color="primary">Button</Button>
    </main>
  );
}
