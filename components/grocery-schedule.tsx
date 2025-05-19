import Image from "next/image"
import { Button } from "@/components/ui/button"

const groceryStores = [
  { name: "Coles", logo: "/placeholder.svg?height=60&width=60" },
  { name: "Costco", logo: "/placeholder.svg?height=60&width=60" },
  { name: "Cole", logo: "/placeholder.svg?height=60&width=60" },
  { name: "IGA", logo: "/placeholder.svg?height=60&width=60" },
  { name: "Drakes", logo: "/placeholder.svg?height=60&width=60" },
  { name: "IGA", logo: "/placeholder.svg?height=60&width=60" },
]

export default function GrocerySchedule() {
  return (
    <div className="mt-4 bg-[#1a5c5b] rounded-lg overflow-hidden">
      <div className="p-6 text-white">
        <h2 className="text-xl font-bold mb-2">Schedule ahead on Doordash</h2>
        <p className="text-sm mb-4">
          Check out your favourite grocery stores and get essentials delivered first thing in the morning.
        </p>
        <Button className="bg-[#f7e9c0] hover:bg-[#f0e0b0] text-black rounded-full">Order now</Button>
      </div>

      <div className="flex flex-wrap justify-center gap-4 p-4">
        {groceryStores.map((store, index) => (
          <div
            key={`${store.name}-${index}`}
            className="bg-white rounded-full w-14 h-14 flex items-center justify-center"
          >
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt={store.name}
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
