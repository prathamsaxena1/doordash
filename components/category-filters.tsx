import { Button } from "@/components/ui/button"
import { ChevronDown, Star } from "lucide-react"

interface CategoryFiltersProps {
  categories: { name: string; href: string }[]
  showRating?: boolean
  showTime?: boolean
}

export default function CategoryFilters({ categories, showRating = false, showTime = false }: CategoryFiltersProps) {
  return (
    <div className="flex gap-2 py-4 overflow-x-auto">
      {categories.map((category) => (
        <Button key={category.name} variant="outline" className="rounded-full text-sm font-medium bg-white">
          {category.name}
        </Button>
      ))}

      {showRating && (
        <Button variant="outline" className="rounded-full text-sm font-medium bg-white flex items-center gap-1">
          Over 4.5
          <Star className="h-4 w-4" />
          <ChevronDown className="h-4 w-4" />
        </Button>
      )}

      {showTime && (
        <Button variant="outline" className="rounded-full text-sm font-medium bg-white">
          Under 30 min
        </Button>
      )}
    </div>
  )
}
