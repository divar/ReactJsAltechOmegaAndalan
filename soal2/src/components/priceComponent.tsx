'use client'
import * as React from 'react';

export default function PriceComponent({title, features, price}: {
  features: string[],
  title: string,
  price: number,
}) {
  let priceFormatted = new Intl.NumberFormat('en-US').format(price);

  return (
    <div className="mx-auto max-w-7xl w-full px-6 lg:px-8">
      <div className="mx-auto mt-16 bg-white max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
        <div className="p-8 sm:p-10 lg:flex-auto">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900">{title}</h3>
          <p className="mt-6 text-base leading-7 text-gray-600">User akan mendapatkan fitur {title}</p>
          <div className="mt-10 flex items-center gap-x-4">
            <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">fitur yang didapat</h4>
            <div className="h-px flex-auto bg-gray-100"></div>
          </div>
          <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
            {
              features.map((feature, index) => (
                <li key={index} className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clip-rule="evenodd"/>
                  </svg>
                  {feature}
                </li>
              ))
            }
          </ul>
        </div>
        <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
          <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
            <div className="mx-auto max-w-xs px-8">
              <p className="text-base font-semibold text-gray-600">Bayar sekali, pakai selamanya</p>
              <p className="mt-6 flex items-baseline justify-center gap-x-2">
                <span className="text-4xl font-bold tracking-tight text-gray-900">IDR {priceFormatted}</span>
              </p>
              <a href="#"
                 className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Dapatkan
                Sekarang</a>
              <p className="mt-6 text-xs leading-5 text-gray-600">invoice dan faktur tersedia untuk memudahkan reimbursement</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
