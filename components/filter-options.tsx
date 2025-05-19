import { ChevronDown, Tag, Star, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FilterOptionsProps {
  isGrocery?: boolean
}

export default function FilterOptions({ isGrocery = false }: FilterOptionsProps) {
  return (
    <div className="flex gap-2 py-4 overflow-x-auto">
      <Button variant="outline" className="rounded-full text-sm font-medium bg-white">
        Under 30 min
      </Button>

      {!isGrocery && (
        <Button variant="outline" className="rounded-full text-sm font-medium bg-white flex items-center gap-1">
          Schedule
          <ChevronDown className="h-4 w-4" />
        </Button>
      )}

      {!isGrocery && (
        <Button variant="outline" className="rounded-full text-sm font-medium bg-white flex items-center gap-1">
          <Tag className="h-4 w-4" />
          Deals
        </Button>
      )}

      {!isGrocery && (
        <Button variant="outline" className="rounded-full text-sm font-medium bg-white">
          Pickup
        </Button>
      )}

      <Button variant="outline" className="rounded-full text-sm font-medium bg-white flex items-center gap-1">
        Over 4.5
        <Star className="h-4 w-4" />
        <ChevronDown className="h-4 w-4" />
      </Button>

      <Button variant="outline" className="rounded-full text-sm font-medium bg-white flex items-center gap-1">
        Price
        <ChevronDown className="h-4 w-4" />
      </Button>

      {!isGrocery && (
        <Button variant="outline" className="rounded-full text-sm font-medium bg-white flex items-center gap-1">
          <DollarSign className="h-4 w-4" />
          DashPass
        </Button>
      )}
    </div>
  )
}
