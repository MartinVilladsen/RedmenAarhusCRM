import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, User } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-2 px-2">
        <Link href="/">
            <Image
              src="/rflogo.png"
              alt="Redmen Family"
              width={64}
              height={64}
              className="rounded-full"
            />
        </Link>

        <div className="flex items-center space-x-4">
        <Button size="lg" variant="destructive" className="uppercase tracking-wide">
          Matchday
        </Button>
          <Link href="/login">
              <User className="h-5 w-5 mx-auto" />
              <span className="text-sm font-medium">Log Ind</span>
          </Link>
          <button
            aria-label="Main menu"
            className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
          >
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>
    </header>
  );
}
