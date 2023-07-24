"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-2 flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Image src="/3d-light.png" alt="3d-light" height="24" width="24"/>
        <span className="font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/" ? "text-foreground" : "text-foreground/60"
          )}
        >
         Monke 
        </Link>
        <Link
          href="/playground"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/playground")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Playground
        </Link>
      </nav>
    </div>
  )
}