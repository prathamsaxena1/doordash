import BrowseCategories from "@/components/browse-categories"
import FoodExplorer from "@/components/food-explorer"

export default function Browse() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 pt-16">
      <h1 className="text-3xl font-bold mb-8">Browse</h1>
      <BrowseCategories />
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Explore Food Near You</h2>
        <FoodExplorer />
      </div>
    </div>
  )
}
