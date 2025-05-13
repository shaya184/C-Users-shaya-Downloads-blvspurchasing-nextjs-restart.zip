"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/background-vendor.jpg"
          alt="Warehouse Background"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
      </div>

      <div className="p-8 space-y-6 text-center">
        <h1 className="text-5xl font-bold text-gray-900">BLVSPURCHASING</h1>
        <p className="text-lg text-gray-700">Streamlined Vendor Relations</p>
        <Tabs defaultValue="shipping" className="max-w-3xl mx-auto">
          <TabsList className="justify-center">
            <TabsTrigger value="shipping">Shipping Policy</TabsTrigger>
            <TabsTrigger value="return">Return Policy</TabsTrigger>
            <TabsTrigger value="discount">Discount Policy</TabsTrigger>
          </TabsList>

          <TabsContent value="shipping" className="bg-white/90 p-6 rounded-xl mt-4">
            <h2 className="text-2xl font-semibold mb-2">Shipping Policy</h2>
            <p>
              All vendors are required to ship items within 2 business days. Tracking
              numbers must be provided upon dispatch. For bulk orders, prior coordination
              is required.
            </p>
          </TabsContent>

          <TabsContent value="return" className="bg-white/90 p-6 rounded-xl mt-4">
            <h2 className="text-2xl font-semibold mb-2">Return Policy</h2>
            <p>
              Products may be returned within 30 days of receipt. Returns must be in
              original packaging and condition. RMA numbers must be obtained prior to
              sending returns.
            </p>
          </TabsContent>

          <TabsContent value="discount" className="bg-white/90 p-6 rounded-xl mt-4">
            <h2 className="text-2xl font-semibold mb-2">Discount Policy</h2>
            <p>
              Discounts are available for high-volume purchasing or long-term vendor
              relationships. Please contact our purchasing team to learn more about
              eligibility and structure.
            </p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
