import Image from 'next/image'
import { Inter } from 'next/font/google';
import { BsTwitter , BsBell, BsEnvelope, BsBookmark } from "react-icons/bs";
import { BiHomeCircle ,BiHash, BiUser ,BiMoney } from "react-icons/bi";
import { SlOptions } from "react-icons/sl";
import React, { useCallback } from "react"
import FeedCard from "@/components/FeedCard";
import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import toast from 'react-hot-toast/headless';
import { gqlClient } from '@/clients/api';
import { verifyUserGoogleTokenQuery } from '@/graphql/query/user';
import { useCurrentUser } from '@/hooks/user';
import { useQueryClient } from '@tanstack/react-query';

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

  const {user} = useCurrentUser();
  const queryClient = useQueryClient();
  console.log(user);

  const handleLoginWithGoogle = useCallback(async (cred : CredentialResponse) => {
    const googleToken = cred.credential;
    if(!googleToken) toast.error(`Google token not found`);

    const {verifyGoogleToken} = await gqlClient.request(verifyUserGoogleTokenQuery , { token : googleToken});

    toast.success('Verified');
    console.log(verifyGoogleToken);

    if(verifyGoogleToken) {
      window.localStorage.setItem('__tsoftToken',verifyGoogleToken);
      await queryClient.invalidateQueries(["current-user"]);
    }
  },[queryClient]);

  return (
    <div>
    <div className="grid grid-cols-12 h-screen w-screen pl-56">
      <div className='col-span-3 pt-1 ml-12 relative'>
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

        {user && (
          <div className='absolute bottom-5 flex gap-2 items-center bg-slate-800 px-3 py-2 rounded-full'>
          {user && user.profileImageURL && (
            <Image className="rounded-full" src={user?.profileImageURL} alt="user-image" height={50} width={50}/>
          )}
          <div>
            <h3 className='text-xl'>{user.firstName} {user.lastName}</h3>
          </div>
        </div>)}
      </div>

      <div className='col-span-5 border-r-[0.2px] border-l-[0.2px] border border-gray-600'>
        <FeedCard></FeedCard>
        <FeedCard></FeedCard>
        <FeedCard></FeedCard>
        <FeedCard></FeedCard>
        <FeedCard></FeedCard>
      </div>
      <div className='col-span-4'>
        {!user && (<div className='border p-5 bg-slate-700 rounded-lg'>
          <h1 className='my-2 text-xl'>New To Tsoft ?</h1>
          <GoogleLogin
              onSuccess={handleLoginWithGoogle}
            />
        </div>)}
      </div>
    </div>
    </div>
      )
}
