import Image from 'next/image'
import { Inter } from 'next/font/google';
import { BsTwitter , BsBell, BsEnvelope, BsBookmark } from "react-icons/bs";
import { BiHomeCircle ,BiHash, BiUser ,BiMoney } from "react-icons/bi";
import { SlOptions } from "react-icons/sl";
import React from "react"
import FeedCard from "@/components/FeedCard";

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
    title : 'Blue',
    icon : <BiMoney/>
  },
  {
    title : 'Profile',
    icon : <BiUser/>
  },
  {
    title : 'More',
    icon : <SlOptions/>
  },
]


export default function Home() {
  return (
    <div>
    <div className="grid grid-cols-12 h-screen w-screen pl-56">
      <div className='col-span-3 pt-1 ml-12'>
        <div className='text-2xl h-fit w-fit rounded-full hover:bg-gray-900  p-3 cursor-pointer transition-all pl-4'>
          <BsTwitter ></BsTwitter>
        </div>
        <div className='mt-4 text-xl font-semibold pr-4'>
          <ul>
            {SidebarMenuItems.map((item) => (
              <li className="flex justify-start items-center  hover:bg-gray-900 px-3 py-3 w-fit rounded-full gap-4 mt-2 cursor-pointer" key={item.title}>
                <span>{item.icon}</span>
                <span>{item.title}</span>
              </li>
            )
              )}
          </ul>
          <div className='mt-5 px-3'>
          <button className='bg-[#1d9bf0] px-4 py-3 w-full rounded-full mt-4 text-lg font-semibold'>Tweet</button>
          </div>
        </div>
      </div>

      <div className='col-span-5 border-r-[0.2px] border-l-[0.2px] border border-gray-600'>
        <FeedCard></FeedCard>
        <FeedCard></FeedCard>
        <FeedCard></FeedCard>
        <FeedCard></FeedCard>
        <FeedCard></FeedCard>
      </div>
      <div className='col-span-4'></div>
    </div>
    </div>
      )
}
