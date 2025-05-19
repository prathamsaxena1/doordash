import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Orders() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-6 pt-16">
      <h1 className="text-3xl font-bold mb-6">Orders</h1>

      <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
        <div className="flex justify-center mb-4">
          <Image
            src="/placeholder.svg?height=120&width=120"
            alt="Empty orders"
            width={120}
            height={120}
            className="opacity-70"
          />
        </div>
        <h2 className="text-xl font-bold mb-2">No orders yet</h2>
        <p className="text-gray-500 mb-6">When you place your first order, it will appear here</p>
        <Button className="bg-[#ff3008] hover:bg-[#e02b07] text-white rounded-full px-6">Start shopping</Button>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Promotions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#f2eaff] rounded-lg overflow-hidden relative">
            <div className="p-6 max-w-[60%]">
              <h3 className="text-xl font-bold mb-2">Get 2,000 bonus Velocity Points + 1 Point per $1 spent*</h3>
              <p className="text-sm mb-4">
                Link Velocity account to start earning on eligible orders. Bonus Points offer ends 12/8.
              </p>
              <Button className="bg-[#ff3008] hover:bg-[#e02b07] text-white rounded-full">Link now</Button>
            </div>
            <div className="absolute right-0 top-0 h-full w-[40%]">
              <div className="relative h-full w-full">
                <Image src="/placeholder.svg?height=200&width=200" alt="Velocity" fill className="object-cover" />
              </div>
            </div>
          </div>

          <div className="bg-[#ff3008] rounded-lg overflow-hidden relative">
            <div className="p-6 max-w-[60%] text-white">
              <h3 className="text-xl font-bold mb-2">
                $15 Hunger Tamers for new DoorDash customers only. Use code: NEWHJ
              </h3>
              <p className="text-sm mb-4">Ends 30/6/25 or until max redemptions. 1 per customer. Fees apply.</p>
              <Button className="bg-white hover:bg-gray-100 text-black rounded-full">Order now</Button>
            </div>
            <div className="absolute right-0 top-0 h-full w-[40%]">
              <div className="relative h-full w-full">
                <Image src="/placeholder.svg?height=200&width=200" alt="Hungry Jacks" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
