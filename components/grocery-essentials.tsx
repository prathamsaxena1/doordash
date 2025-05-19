import Image from "next/image"
import { Info, ChevronRight, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function GroceryEssentials() {
  return (
    <div className="py-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-bold">Grocery Essentials</h2>
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <span>From Spudshed Fresh Food Market</span>
            <span className="text-xs">•</span>
            <span>43 min</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
            <Info className="h-3 w-3" />
            In-store prices
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a href="#" className="text-sm font-medium">
            See All
          </a>
          <div className="flex gap-1">
            <Button variant="outline" size="icon" className="rounded-full bg-white">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full bg-white">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="relative h-32 w-full">
              <Image src="/placeholder.svg?height=128&width=128" alt="Grocery item" fill className="object-contain" />
            </div>
            <div className="p-3">
              <div className="font-bold text-sm">$3.99</div>
              <div className="text-sm text-gray-700 line-clamp-2">Grocery Item {item}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
