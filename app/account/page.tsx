import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Image from "next/image"

export default function Account() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-6 pt-16">
      <h1 className="text-3xl font-bold mb-6">Account</h1>

      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 rounded-full p-4">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                stroke="#666"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                stroke="#666"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-bold">Sign in</h2>
            <p className="text-gray-500">Sign in to view your saved addresses and payment methods</p>
          </div>
          <Button className="ml-auto bg-[#ff3008] hover:bg-[#e02b07] text-white rounded-full px-6">Sign in</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-bold mb-4">Account settings</h2>
          <ul className="space-y-4">
            <li className="flex items-center justify-between">
              <span>Personal information</span>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </li>
            <li className="flex items-center justify-between">
              <span>Saved addresses</span>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </li>
            <li className="flex items-center justify-between">
              <span>Payment methods</span>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </li>
            <li className="flex items-center justify-between">
              <span>Communication preferences</span>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-bold mb-4">Support</h2>
          <ul className="space-y-4">
            <li className="flex items-center justify-between">
              <span>Get help with an order</span>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </li>
            <li className="flex items-center justify-between">
              <span>Help Center</span>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </li>
            <li className="flex items-center justify-between">
              <span>Terms of Service</span>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </li>
            <li className="flex items-center justify-between">
              <span>Privacy Policy</span>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </li>
          </ul>
        </div>
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
