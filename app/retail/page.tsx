import CategoryFilters from "@/components/category-filters"
import StoresNearYou from "@/components/stores-near-you"
import AllStores from "@/components/all-stores"

export default function Retail() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 pt-16">
      <h1 className="text-3xl font-bold my-6">Retail</h1>
      <CategoryFilters
        categories={[
          { name: "Flowers", href: "#" },
          { name: "Retail", href: "#" },
          { name: "Convenience", href: "#" },
        ]}
        showRating={true}
        showTime={true}
      />
      <StoresNearYou
        stores={[
          {
            name: "The Reject Shop",
            image: "/placeholder.svg?height=80&width=80",
            openTime: "Opens Sat at 8:50 AM",
            closed: true,
            delivery: "A$0 delivery fee",
            inStorePrice: true,
            discount: "",
          },
          {
            name: "Lush",
            image: "/placeholder.svg?height=80&width=80",
            openTime: "Opens Sat at 9:00 AM",
            closed: true,
            delivery: "A$0 delivery fee",
            inStorePrice: true,
            discount: "",
          },
          {
            name: "Coles",
            image: "/placeholder.svg?height=80&width=80",
            openTime: "Opens Sat at 8:00 AM",
            closed: true,
            delivery: "A$0 delivery fee",
            inStorePrice: false,
            discount: "",
          },
          {
            name: "Spudshed Fresh Food Market",
            image: "/placeholder.svg?height=80&width=80",
            openTime: "",
            time: "41 min",
            closed: false,
            delivery: "A$0 delivery fee",
            inStorePrice: true,
            discount: "",
          },
          {
            name: "IGA Supermarket",
            image: "/placeholder.svg?height=80&width=80",
            openTime: "Opens Sat at 6:00 AM",
            closed: true,
            delivery: "A$0 delivery fee",
            inStorePrice: false,
            discount: "15% off, up to A$12",
          },
          {
            name: "IGA Supermarket",
            image: "/placeholder.svg?height=80&width=80",
            openTime: "Opens Sat at 7:30 AM",
            closed: true,
            delivery: "A$0 delivery fee",
            inStorePrice: false,
            discount: "",
          },
          {
            name: "Reddy Express",
            image: "/placeholder.svg?height=80&width=80",
            openTime: "",
            time: "33 min",
            closed: false,
            delivery: "A$0 delivery fee",
            inStorePrice: true,
            discount: "",
          },
          {
            name: "Chemist Warehouse",
            image: "/placeholder.svg?height=80&width=80",
            openTime: "Opens Sat at 9:00 AM",
            closed: true,
            delivery: "A$0 delivery fee",
            inStorePrice: true,
            discount: "",
          },
        ]}
      />

      <div className="my-8 border border-gray-200 rounded-lg p-6">
        <h2 className="text-xl font-bold mb-2">See All Stores Nearby</h2>
        <p className="text-gray-600 text-sm mb-2">Gifts by San Churro, The Gift Shop by Coles, Hola, ...</p>
        <div className="flex justify-end">
          <div className="bg-gray-100 rounded-full p-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold my-6">All Stores</h2>
      <AllStores
        stores={[
          {
            name: "The Reject Shop",
            image: "/placeholder.svg?height=80&width=80",
            openTime: "Opens Sat at 8:50 AM",
            closed: true,
            delivery: "A$0 delivery fee",
            inStorePrice: true,
            discount: "",
          },
          {
            name: "Lush",
            image: "/placeholder.svg?height=80&width=80",
            openTime: "Opens Sat at 9:00 AM",
            closed: true,
            delivery: "A$0 delivery fee",
            inStorePrice: true,
            discount: "",
          },
          {
            name: "Coles",
            image: "/placeholder.svg?height=80&width=80",
            openTime: "Opens Sat at 8:00 AM",
            closed: true,
            delivery: "A$0 delivery fee",
            inStorePrice: false,
            discount: "",
          },
          {
            name: "Spudshed Fresh Food Market",
            image: "/placeholder.svg?height=80&width=80",
            openTime: "",
            time: "41 min",
            closed: false,
            delivery: "A$0 delivery fee",
            inStorePrice: true,
            discount: "",
          },
        ]}
      />
    </div>
  )
}
