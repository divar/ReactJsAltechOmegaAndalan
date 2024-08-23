'use client'
import * as React from 'react';
import {useState} from 'react'
import {useRouter} from "next/navigation";
import {Dialog, DialogBackdrop, DialogPanel, Radio, RadioGroup} from '@headlessui/react'

export default function Header() {
  const router                              = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [modalOpen, setModalOpen]           = useState(false)
  const [formLogin, setFormLogin] = useState({
    email: '',
    password: ''
  });
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormLogin({
      ...formLogin,
      [e.target.name]: e.target.value
    });
  };
  const submit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (formLogin.email === "divarart@gmail.com" && formLogin.password === "123456") {
      router.push('/dashboard')
      closeModal()
    }
  };
  const openModal                           = () => {
    setModalOpen(true);
    setMobileMenuOpen(false)
  }
  const closeModal                          = () => setModalOpen(false);

  return (
    <div className="p-6 align-middle">
      <header className="flex mt-8">
        <nav className="w-full flex flex-row-reverse items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:hidden">
            <button type="button" onClick={() => setMobileMenuOpen(true)}
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex  lg:justify-end">
            <button onClick={openModal} className={"font-bold text-blue-400 border-blue-400 pl-10 pt-2 pb-2 pr-10 border-2 rounded-lg"}>Login</button>
          </div>
          <div className="hidden lg:flex lg:flex-1 justify-end lg:mr-7 lg:gap-x-12">
            <button onClick={() => router.push('/contact')} className={"lg:basis-52 font-bold text-2xl"}>Contact</button>
            <button onClick={() => router.push('/pricing')} className={"lg:basis-52 font-bold text-2xl"}>Pricing</button>
            <button onClick={() => router.push('/about')} className={"lg:basis-52 font-bold text-2xl"}>About</button>
          </div>
          <div className="flex lg:basis-52 text-2xl">
            <button onClick={() => router.push('/')} className="-m-1.5 p-1.5 font-bold text-white inline-flex">
              <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt=""/>
              <span className={"hidden lg:block ml-5"}>Home</span>
            </button>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50"/>
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <button onClick={() => {
                    setMobileMenuOpen(false);
                    router.push('/');
                  }}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >home
                  </button>
                  <button onClick={() => {
                    setMobileMenuOpen(false);
                    router.push('/contact');
                  }}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-gray-900 hover:bg-gray-50">Contact
                  </button>
                  <button onClick={() => {
                    setMobileMenuOpen(false);
                    router.push('/pricing');
                  }}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-gray-900 hover:bg-gray-50">Pricing
                  </button>
                  <button onClick={() => {
                    setMobileMenuOpen(false);
                    router.push('/about');
                  }}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-gray-900 hover:bg-gray-50">About
                  </button>
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    onClick={openModal}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <Dialog open={modalOpen} onClose={closeModal} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in md:block"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex sm:min-h-full mt-32 md:mt-0 items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
            <DialogPanel
              transition
              className="flex w-full transform text-left text-base transition data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in md:my-8 md:max-w-2xl md:px-4 data-[closed]:md:translate-y-0 data-[closed]:md:scale-95 lg:max-w-4xl"
            >
              <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8 rounded-2xl bg-opacity-90">
                <button
                  type="button"
                  onClick={closeModal}
                  className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                >
                  <span className="sr-only">Close</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>

                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                      alt="Your Company"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      className="mx-auto h-10 w-auto"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                      Masuk ke dalam akun anda
                    </h2>
                  </div>

                  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form method="POST" onSubmit={submit} className="space-y-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                          Email
                        </label>
                        <div className="mt-2">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            value={formLogin.email}
                            onChange={handleChange}
                            required
                            autoComplete="email"
                            className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between">
                          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                            Password
                          </label>
                          <div className="text-sm">
                            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                              Forgot password?
                            </a>
                          </div>
                        </div>
                        <div className="mt-2">
                          <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            value={formLogin.password}
                            onChange={handleChange}
                            autoComplete="current-password"
                            className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div>
                        <button
                          type="submit"
                          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Sign in
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
      {/*<div>
       <div className={"flex flex-row flex-row-reverse mt-8"}>
       <div className={"basis-52 text-2xl"} style={{cursor: 'pointer'}}>
       <a onClick={() => router.push('/about')} className={"font-bold text-blue-400 border-blue-400 pl-10 pt-2 pb-2 pr-10 border-2 rounded-lg"}>Login</a>
       </div>
       <div className={"basis-52 text-2xl"} style={{cursor: 'pointer'}}>
       <a onClick={() => router.push('/contact')} className={"font-bold"}>Contact</a>
       </div>
       <div className={"basis-52 text-2xl"} style={{cursor: 'pointer'}}>
       <a onClick={() => router.push('/pricing')} className={"font-bold"}>Pricing</a>
       </div>
       <div className={"basis-52 text-2xl"} style={{cursor: 'pointer'}}>
       <a onClick={() => router.push('/about')} className={"font-bold"}>About</a>
       </div>
       <div className={"basis-6/12 text-2xl"} style={{cursor: 'pointer'}}>
       <a onClick={() => router.push('/')} className={"font-bold text-white"}>Home</a>
       </div>
       </div>
       </div>*/}
    </div>
  );
}
