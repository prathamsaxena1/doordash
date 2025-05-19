import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Sidebar from "@/components/sidebar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DoorDash Food Delivery & Takeout - From Restaurants Near You",
  description: "DoorDash - Order food delivery or takeout from restaurants near you",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex flex-1">
            <div className="w-[220px] fixed top-16 bottom-0 overflow-y-auto border-r border-gray-200">
              <Sidebar />
            </div>
            <div className="ml-[220px] flex-1 flex flex-col">
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
