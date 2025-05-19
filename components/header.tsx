"use client"

import { useState } from "react"
import { Search, MapPin, Bell, ShoppingCart, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [location, setLocation] = useState("Delhi6 Sweets & Savou")

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-[1200px] mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="/" className="text-[#ff3008] font-bold text-2xl tracking-tight">
            DOORDASH
          </a>
          <div className="relative flex-1 max-w-[480px]">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search DoorDash"
              className="w-full py-2 pl-10 pr-4 border border-gray-200 rounded-full bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" className="flex items-center gap-1 text-sm font-medium">
            <MapPin className="h-5 w-5" />
            {location}
            <ChevronDown className="h-4 w-4" />
          </Button>
          <Button variant="default" className="bg-[#191919] hover:bg-black text-white rounded-full">
            Delivery
          </Button>
          <Button variant="ghost" className="text-black rounded-full">
            Pickup
          </Button>
          <Button variant="ghost" className="relative p-2 rounded-full">
            <Bell className="h-5 w-5" />
            <span className="absolute top-0 right-0 h-5 w-5 bg-[#ff3008] text-white text-xs flex items-center justify-center rounded-full">
              1
            </span>
          </Button>
          <Button variant="ghost" className="relative p-2 rounded-full">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute top-0 right-0 h-5 w-5 bg-[#ff3008] text-white text-xs flex items-center justify-center rounded-full">
              0
            </span>
          </Button>
        </div>
      </div>
    </header>
  )
}
