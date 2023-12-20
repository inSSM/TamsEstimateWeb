import React from 'react';

interface BannerProps{
    title: string;
    iconPath?: string;
}

const Banner = (props: BannerProps) => {
    return (
    <div className='flex justify-center items-center w-auto h-1/6 max-h-20 text-center text-gray-500 bg-gray-200 text-2xl font-black'>
        <p className="flex flex-row items-end pl-8">{props.title}
        <img src={props.iconPath} alt="" className="h-5 w-auto pl-1"/>
        </p>
    </div>
    );
};

export default Banner;