import { CheckIcon } from '@heroicons/react/solid';
import { Product } from '@stripe/firestore-stripe-payments';
import Head from 'next/head'
import Link from 'next/link';
import { useState } from 'react';
import useAuth from '../hooks/useAuth';
import Table from './Table';
 

interface Props {
    products: Product[];
}

function Plans({ products }) {
  const { logout } = useAuth()
  //Piece of state for selectedPlan, and by default we want premium to be selected when the user loads the page 
  const [selectedPlan, setSelectedPlan] = useState<Product | null>(products[2])

  return (
    <div className='flex'>
        <Head>
            <title>
            Home - Netflix
            </title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <header className="border-b border-white/10 bg-[#141414]">
        <Link href="/">
          <img
            src="https://rb.gy/ulxxee"
            alt="Netflix"
            width={150}
            height={90}
            className="cursor-pointer object-contain"
          />
        </Link>
        <button
          className="text-lg font-medium hover:underline"
          onClick={logout}
        >
          Sign Out
        </button>
      </header>

      <main className="mx-auto max-w-5xl px-5 pt-28 pb-12 transition-all md:px-10">
      <h1 className="mb-3 text-3xl font-medium">
          Choose the plan that's right for you
        </h1>
        <ul>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" /> Watch all you want.
            Ad-free.
          </li>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" /> Recommendations
            just for you.
          </li>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" /> Change or cancel
            your plan anytime.
          </li>
        </ul>

        <div  className='mt-4 flex flex-col space-y-4'>
            <div className='flex w-full items-center justify-end self-end md:w-3/5'>
                {products.map((product) => (
                  // if selectedPlan.id = product.id the product name will have a 100 opacity while all other product names will have 60% opacity
                    <div className={`planBox ${selectedPlan?.id === product.id ? "opacity-100" : "opacity-60"}`} key={product.id}
                    //change our piece of state to  different piece of state, so the user can click between product names and each product selected will have a 100 opacity
                    onClick={() => setSelectedPlan(product)}>
                        {product.name}
                    </div>
                ))}
            </div>
            <Table products={products}/>
        </div>
        <button>Subscribe</button>
      </main>
    </div>
  )
}

export default Plans