import Image from "next/image"
import Link from "next/link"

const foodCategories = [
  { name: "Fast Food", image: "/placeholder.svg?height=120&width=120" },
  { name: "Breakfast", image: "/placeholder.svg?height=120&width=120" },
  { name: "Burgers", image: "/placeholder.svg?height=120&width=120" },
  { name: "Coffee", image: "/placeholder.svg?height=120&width=120" },
  { name: "Sushi", image: "/placeholder.svg?height=120&width=120" },
  { name: "Healthy", image: "/placeholder.svg?height=120&width=120" },
  { name: "Chicken", image: "/placeholder.svg?height=120&width=120" },
  { name: "Comfort Food", image: "/placeholder.svg?height=120&width=120" },
  { name: "Desserts", image: "/placeholder.svg?height=120&width=120" },
  { name: "Asian", image: "/placeholder.svg?height=120&width=120" },
  { name: "Bubble Tea", image: "/placeholder.svg?height=120&width=120" },
  { name: "Pizza", image: "/placeholder.svg?height=120&width=120" },
  { name: "Smoothie", image: "/placeholder.svg?height=120&width=120" },
  { name: "Bakery", image: "/placeholder.svg?height=120&width=120" },
  { name: "Salad", image: "/placeholder.svg?height=120&width=120" },
  { name: "Steak", image: "/placeholder.svg?height=120&width=120" },
  { name: "Vegan", image: "/placeholder.svg?height=120&width=120" },
  { name: "Vietnamese", image: "/placeholder.svg?height=120&width=120" },
  { name: "Southern", image: "/placeholder.svg?height=120&width=120" },
  { name: "Japanese", image: "/placeholder.svg?height=120&width=120" },
  { name: "Barbecue", image: "/placeholder.svg?height=120&width=120" },
  { name: "Latin American", image: "/placeholder.svg?height=120&width=120" },
  { name: "Sandwiches", image: "/placeholder.svg?height=120&width=120" },
  { name: "Pho", image: "/placeholder.svg?height=120&width=120" },
  { name: "Korean", image: "/placeholder.svg?height=120&width=120" },
  { name: "Thai", image: "/placeholder.svg?height=120&width=120" },
  { name: "Middle Eastern", image: "/placeholder.svg?height=120&width=120" },
  { name: "Ramen", image: "/placeholder.svg?height=120&width=120" },
]

export default function FoodExplorer() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
      {foodCategories.map((category) => (
        <Link
          key={category.name}
          href={`/category/${category.name.toLowerCase().replace(" ", "-")}`}
          className="border border-gray-200 rounded-lg overflow-hidden"
        >
          <div className="p-4">
            <div className="text-sm font-medium mb-2">{category.name}</div>
            <div className="relative h-24 w-full">
              <Image
                src="/placeholder.svg?height=120&width=120"
                alt={category.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
