import Link from "next/link";

import { cn } from "@/lib/utils";
import { CardContent } from "@/components/Card";

export function SubNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <CardContent className="mb-5">
    <nav
      className={cn(
        "grid grid-cols-2 gap-4 lg:grid-cols-4 lg:space-x-6 ",
        className
      )}
      {...props}
    >
      <Link
        href="/anacksandconfectionery"
        className="text-sm font-bold transition-colors hover:text-primary"
      >
        Snacks & Confectionery
      </Link>
      <Link
        href="/babyproducts"
        className="text-sm font-bold text-muted-foreground transition-colors hover:text-primary"
      >
        Baby Products
      </Link>
      <Link
        href="/fashion"
        className="text-sm font-bold text-muted-foreground transition-colors hover:text-primary"
      >
        Fashion
      </Link>
      <Link
        href="/stationary"
        className="text-sm font-bold text-muted-foreground transition-colors hover:text-primary"
      >
        Stationary
      </Link>
    </nav>
    </CardContent>
  );
}
