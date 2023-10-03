import React from 'react';
import Image from 'next/image';
import {BiMessageRounded , BiUpload} from "react-icons/bi"
import {AiOutlineRetweet , AiOutlineHeart} from "react-icons/ai"

const FeedCard: React.FC = () => {
    return (
    <div className='border border-r-0 border-l-0 border-b-0 border-gray-600 p-5 hover:bg-slate-900 cursor-pointer transition-all'>
        <div className='grid grid-cols-12 gap-3'>
            <div className='col-span-1'>
                <Image src='https://avatars.githubusercontent.com/u/68995253?v=4' alt='my-image' height={50} width={50} className='rounded-full'></Image>
            </div>
            <div className='col-span-11'>
                <h5>Prashant</h5>
                <p>
                    asckndsacicdcnniondknd
                    almcdsncndmk dsnv
                    dsnvidsnv
                </p>
                <div className='flex justify-between mt-5 text-xl items-center w-[80%]'>
                    <div>
                        <BiMessageRounded/> 
                    </div>
                    <div>
                        <AiOutlineRetweet/>
                    </div>
                    <div>
                        <AiOutlineHeart/>
                    </div>
                    <div>
                        <BiUpload/>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default FeedCard;