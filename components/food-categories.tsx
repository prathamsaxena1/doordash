import Image from "next/image"
import Link from "next/link"

const categories = [
  { name: "Fast Food", icon: "/icons/fast-food.png" },
  { name: "Breakfast", icon: "/icons/breakfast.png" },
  { name: "Burgers", icon: "/icons/burger.png" },
  { name: "Coffee", icon: "/icons/coffee.png" },
  { name: "Sushi", icon: "/icons/sushi.png" },
  { name: "Healthy", icon: "/icons/healthy.png" },
  { name: "Chicken", icon: "/icons/chicken.png" },
  { name: "Comfort Food", icon: "/icons/comfort-food.png" },
  { name: "Desserts", icon: "/icons/desserts.png" },
  { name: "Asian", icon: "/icons/asian.png" },
  { name: "Bubble Tea", icon: "/icons/bubble-tea.png" },
  { name: "Pizza", icon: "/icons/pizza.png" },
  { name: "Smoothie", icon: "/icons/smoothie.png" },
  { name: "Bakery", icon: "/icons/bakery.png" },
]

export default function FoodCategories() {
  return (
    <div className="py-4 overflow-x-auto">
      <div className="flex gap-6 min-w-max">
        {categories.map((category) => (
          <div
            key={category.name}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-16 h-16 flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=64&width=64"
                alt={category.name}
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <span className="text-sm font-medium">{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
