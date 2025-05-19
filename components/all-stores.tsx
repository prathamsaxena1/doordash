import Image from "next/image"
import { Heart, Info } from "lucide-react"
import { Button } from "@/components/ui/button"

const stores = [
  {
    name: "Spudshed Fresh Food Market",
    time: "43 min",
    delivery: "A$0 delivery fee",
    open: true,
    openTime: "",
    image: "/placeholder.svg?height=80&width=80",
    inStorePrice: true,
    discount: "",
  },
  {
    name: "IGA Supermarket",
    time: "",
    delivery: "A$0 delivery fee",
    open: false,
    openTime: "Opens Sat at 6:00 AM",
    image: "/placeholder.svg?height=80&width=80",
    inStorePrice: false,
    discount: "15% off, up to A$12",
  },
  {
    name: "Coles",
    time: "",
    delivery: "A$0 delivery fee",
    open: false,
    openTime: "Opens Sat at 8:00 AM",
    image: "/placeholder.svg?height=80&width=80",
    inStorePrice: false,
    discount: "",
  },
  {
    name: "IGA Supermarket",
    time: "",
    delivery: "A$0 delivery fee",
    open: false,
    openTime: "Opens Sat at 7:30 AM",
    image: "/placeholder.svg?height=80&width=80",
    inStorePrice: false,
    discount: "",
  },
  {
    name: "Bully Butcher",
    time: "",
    delivery: "A$0 delivery fee",
    open: false,
    openTime: "Opens Sat at 7:00 AM",
    image: "/placeholder.svg?height=80&width=80",
    inStorePrice: false,
    discount: "",
  },
  {
    name: "Five Star Meat & Poultry",
    time: "",
    delivery: "A$0 delivery fee",
    open: false,
    openTime: "Opens Sat at 8:00 AM",
    image: "/placeholder.svg?height=80&width=80",
    inStorePrice: false,
    discount: "",
  },
  {
    name: "Dessert Co.",
    time: "",
    delivery: "A$0 delivery fee",
    open: false,
    openTime: "Opens Sat at 10:00 AM",
    image: "/placeholder.svg?height=80&width=80",
    inStorePrice: false,
    discount: "",
  },
]

export default function AllStores() {
  return (
    <div className="py-6">
      <h2 className="text-2xl font-bold mb-4">All Stores</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stores.map((store) => (
          <div key={store.name + store.openTime} className="border border-gray-200 rounded-lg p-4">
            <div className="flex gap-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-100">
                <Image src="/placeholder.svg?height=64&width=64" alt={store.name} fill className="object-cover" />
              </div>

              <div className="flex-1">
                {store.openTime && <div className="text-sm text-[#ff3008] font-medium mb-1">{store.openTime}</div>}
                <div className="flex justify-between">
                  <h3 className="font-medium">{store.name}</h3>
                  <Button variant="ghost" size="icon" className="rounded-full -mr-2 -mt-2">
                    <Heart className="h-5 w-5" />
                  </Button>
                </div>

                {store.open ? (
                  <div className="text-sm text-gray-500">{store.time}</div>
                ) : (
                  <div className="text-sm text-gray-500">Closed</div>
                )}

                <div className="text-sm text-gray-500">{store.delivery}</div>

                {store.inStorePrice && (
                  <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                    <Info className="h-3 w-3" />
                    In-store prices
                  </div>
                )}

                {store.discount && <div className="text-sm text-[#ff3008] mt-1">{store.discount}</div>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
