import Head from 'next/head'
import Image from 'next/image'

import Drawers from '../public/drawers.jpg'
import Avatar from '../public/avatar-michelle.jpg'

export default function Home() {
  return (
    <div className="px-8 mt-10">
      <Head>
        <title>Article Preview Component</title>
        <meta name="description" content="Open Components Ecosystem" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-auto lg:w-3/5 lg:flex lg:flex-row lg:h-auto">
        <Image
          className="rounded-t-md w-full h-48 lg:h-auto lg:w-2/5 lg:rounded-bl-md lg:rounded-tr-none"
          width={660}
          height={528}
          src={Drawers}
          alt="Drawers"
        />
        <div className="bg-white p-8 rounded-b-md lg:rounded-tr-md lg:rounded-bl-none">
          <h2 className="text-gray-700 font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </h2>
          <p className="text-sm text-gray-600 mt-4">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <div className="flex items-center mt-8">
            <div className="flex items-center">
              <Image
                className="w-10 h-10 rounded-full"
                src={Avatar}
                width={40}
                height={40}
                alt="avatar-michelle"
              />
              <div className="ml-4">
                <p className="text-gray-800 text-sm font-semibold">Michelle Appleton</p>
                <p className="text-gray-600 text-sm">28 Jun 2020</p>
              </div>
            </div>
            <div className="flex items-center justify-center w-8 h-8 ml-auto bg-gray-200 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
                <path
                  fill="#6E8098"
                  d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
