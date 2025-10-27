"use client";

import { useRouter, usePathname } from "next/navigation";
import { Home, Wallet, PlusCircle, TrendingUp, Gift } from "lucide-react";
import { cn } from "@/lib/utils";

const BottomNavigation = () => {
  const router = useRouter();
  const pathname = usePathname();

  // Planner financeiro navigation
  const navItems = [
    {
      label: "Home",
      icon: Home,
      path: "/",
      active: pathname === "/",
    },
    {
      label: "Income",
      icon: PlusCircle,
      path: "/renda",
      active: pathname.includes("/renda"),
    },
    {
      label: "Buckets",
      icon: Wallet,
      path: "/baldes",
      active: pathname.includes("/baldes"),
    },
    {
      label: "Progress",
      icon: TrendingUp,
      path: "/progress",
      active: pathname.includes("/progress"),
    },
    {
      label: "Bonus",
      icon: Gift,
      path: "/bonus",
      active: pathname.includes("/bonus"),
    },
  ];

  return (
    <nav className="w-full bg-background/95 backdrop-blur-md border-t border-border/50">
      <div className="max-w-lg mx-auto flex justify-around items-center px-4 py-3 bottom-nav-safe">
        {navItems.map((item) => (
          <button
            key={item.path}
            onClick={() => router.push(item.path)}
            className={cn(
              "relative flex flex-col items-center justify-center p-2.5 rounded-xl transition-all duration-300 min-w-[70px] group",
              item.active
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {/* Active indicator */}
            {item.active && (
              <div className="absolute inset-0 bg-primary/10 rounded-xl blur-sm" />
            )}

            <div
              className={cn(
                "relative transition-all duration-300",
                item.active
                  ? "transform scale-110"
                  : "group-hover:transform group-hover:scale-105"
              )}
            >
              <item.icon
                size={22}
                className={cn(
                  "transition-all duration-300",
                  item.active
                    ? "text-primary"
                    : "text-muted-foreground group-hover:text-foreground"
                )}
                strokeWidth={item.active ? 2.5 : 2}
              />
            </div>
            <span
              className={cn(
                "text-xs mt-1.5 font-medium transition-all duration-300",
                item.active
                  ? "text-primary"
                  : "text-muted-foreground group-hover:text-foreground"
              )}
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavigation;