import FilterOptions from "@/components/filter-options"
import GrocerySchedule from "@/components/grocery-schedule"
import AllStores from "@/components/all-stores"
import GroceryEssentials from "@/components/grocery-essentials"

export default function Grocery() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 pt-16">
      <FilterOptions isGrocery={true} />
      <GrocerySchedule />
      <AllStores />
      <div className="mt-4 text-sm text-gray-600">
        <a href="#" className="hover:underline">
          Pricing and Fees
        </a>
      </div>
      <GroceryEssentials />
    </div>
  )
}
