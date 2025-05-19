"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Home, ShoppingBag, Package, Coffee, Heart, Gift, Search, FileText, User } from "lucide-react"

export default function Sidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  const menuItems = [
    { name: "Home", icon: Home, path: "/" },
    { name: "Grocery", icon: ShoppingBag, path: "/grocery" },
    { name: "Retail", icon: Package, path: "/retail" },
    { name: "Browse All", icon: Search, path: "/browse" },
    { name: "Orders", icon: FileText, path: "/orders" },
    { name: "Account", icon: User, path: "/account" },
  ]

  return (
    <nav className="flex flex-col gap-1 px-2 pt-4">
      {menuItems.map((item) => {
        const Icon = item.icon
        const active = isActive(item.path)

        return (
          <Link
            key={item.name}
            href={item.path}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg ${
              active ? "bg-[#fff8f7] text-[#ff3008]" : "hover:bg-gray-100"
            }`}
          >
            <Icon className="h-5 w-5" />
            <span className="font-medium">{item.name}</span>
          </Link>
        )
      })}
    </nav>
  )
}
