import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center space-y-4 max-w-md">
        <h1 className="text-6xl font-bold">404</h1>
        <h2 className="text-2xl font-bold">Page Not Found</h2>
        <p className="text-xl mb-8">Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
        <Button asChild>
          <Link href="/">Go Home</Link>
        </Button>
      </div>
    </div>
  );
}
