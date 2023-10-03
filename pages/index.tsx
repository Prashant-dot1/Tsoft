import Image from 'next/image'
import { Inter } from 'next/font/google';
import { BsTwitter , BsBell, BsEnvelope, BsBookmark } from "react-icons/bs";
import { BiHomeCircle ,BiHash, BiUser } from "react-icons/bi";
import React from "react"

const inter = Inter({ subsets: ['latin'] })


interface TwitterSidebarButton {
  title : string
  icon : React.ReactNode
}

const SidebarMenuItems : TwitterSidebarButton[] = [
  {
    title : 'Home',
    icon : <BiHomeCircle/>
  },
  {
    title : 'Explore',
    icon : <BiHash/>
  },
  {
    title : 'Notifications',
    icon : <BsBell/>
  },
  {
    title : 'Messages',
    icon : <BsEnvelope/>
  },
  {
    title : 'Bookmarks',
    icon : <BsBookmark/>
  },
  {
    title : 'Profile',
    icon : <BiUser/>
  },
]


export default function Home() {
  return (
    <div className={inter.className}>
    <div className="grid grid-cols-12 h-screen w-screen pl-48">
      <div className='col-span-3 pt-3'>
        <div className='text-3xl h-fit w-fit rounded-full hover:bg-gray-900  p-3 cursor-pointer transition-all'>
          <BsTwitter ></BsTwitter>
        </div>
        <div className='mt-4 text-2xl font-semibold pr-4'>
          <ul>
            {SidebarMenuItems.map((item) => (
              <li className="flex justify-start items-center  hover:bg-gray-900 px-5 py-2 w-fit rounded-full gap-4 mt-2 cursor-pointer" key={item.title}>
                <span>{item.icon}</span>
                <span>{item.title}</span>
              </li>
            )
              )}
          </ul>
          <div className='mt-5 px-3'>
          <button className='bg-[#1d9bf0] p-4 w-full rounded-full mt-4 text-lg font-semibold'>Tweet</button>
          </div>
        </div>
      </div>

      <div className='col-span-6 border-r-[0.2px] border-l-[0.2px] border-gray-500'></div>
      <div className='col-span-3'></div>
    </div>
    </div>
      )
}
