'use client'
import * as React from 'react';
import PriceComponent from "@/components/priceComponent";


function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className={"text-3xl text-gray-600"}>
        Anda sudah Login<br/>
        Selamat Datang, Divar
      </div>
    </main>
  );
}

export default Dashboard;
