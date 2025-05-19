import FoodCategories from "@/components/food-categories"
import FilterOptions from "@/components/filter-options"
import PromoBanners from "@/components/promo-banners"
import NationalFavorites from "@/components/national-favorites"

export default function Home() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 pt-16">
      <FoodCategories />
      <FilterOptions />
      <PromoBanners />
      <NationalFavorites />
    </div>
  )
}
