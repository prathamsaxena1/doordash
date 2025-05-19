import Image from "next/image"
import { Heart, ChevronRight, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

const restaurants = [
  {
    name: "7-Eleven",
    rating: 4.3,
    reviews: "(200+)",
    distance: "1.7 mi",
    time: "42 min",
    delivery: "A$0 delivery fee",
    sponsored: true,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "McDonald's",
    rating: 3.8,
    reviews: "(200+)",
    distance: "0.4 mi",
    time: "34 min",
    delivery: "A$0 delivery fee",
    sponsored: false,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Hungry Jacks",
    rating: 4.0,
    reviews: "(200+)",
    distance: "3.8 mi",
    time: "54 min",
    delivery: "A$0 delivery fee",
    sponsored: false,
    image: "/placeholder.svg?height=200&width=200",
  },
]

export default function NationalFavorites() {
  return (
    <div className="py-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">National favourites</h2>
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {restaurants.map((restaurant) => (
          <div key={restaurant.name} className="relative border border-gray-200 rounded-lg overflow-hidden">
            <div className="relative h-48 w-full">
              <Image src="/placeholder.svg?height=200&width=200" alt={restaurant.name} fill className="object-cover" />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start">
                <h3 className="font-bold">{restaurant.name}</h3>
                <Button variant="ghost" size="icon" className="rounded-full -mr-2 -mt-2">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <span className="font-bold">{restaurant.rating}</span>
                <span className="text-gray-500">{restaurant.reviews}</span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-500">{restaurant.distance}</span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-500">{restaurant.time}</span>
              </div>
              <div className="text-sm text-gray-500 mt-1">{restaurant.delivery}</div>
              {restaurant.sponsored && <div className="text-xs text-gray-500 mt-2">Sponsored</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
