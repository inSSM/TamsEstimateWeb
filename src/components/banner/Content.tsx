import React from 'react';

interface ContentProps{
    title : string;
    content : string;
    location? : string;
}


const Content = (props : ContentProps) => {
    return (
        <div className='flex flex-col py-4 w-auto h-1/6 bg-gray-100 px-2 mx-4 my-4 rounded-2xl'>
            <p className="text-bold text-xl">{props.title}</p>
            <p className="pt-1">{props.content}</p>
        </div>
    )

}
export default Content;