'use client'
import * as React from 'react';
import PriceComponent from "@/components/priceComponent";


function Pricing() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between sm:p-24">
      <PriceComponent title={"TIER 1 / Basic"} price={200000} features={["Mencatat barang masuk","Mencatat barang keluar", "Mencatat hasil keuntungan"]}/>
      <PriceComponent title={"TIER 2 / Business"} price={500000} features={["Mencatat barang masuk dan keluar","Mencatat Keuntungan", "Dapat menganalisa hasil penjualan dengan chart", "Support 7x24 Jam"]}/>
      <PriceComponent title={"TIER 3 / Entrepreneur"} price={700000} features={["Mencatat barang masuk dan keluar","Mencatat Keuntungan", "Dapat menganalisa hasil penjualan dengan chart", "Support 7x24 Jam", "Export data ke Excel", "AI Prediksi penghasilan"]}/>
    </main>
  );
}

export default Pricing;
