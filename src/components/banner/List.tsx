import React from 'react';
import Brand from './Brand';

interface ContentProps{
    title : string;
}

const Content = (props : ContentProps) => {
    return (
        <div className="py-4 w-auto h-auto bg-white px-2 mx-4 my-4 rounded-2xl">
            <p className="text-bold text-xl">{props.title}</p>
            <div className="flex flex-row">
                <Brand iconPath="/images/brand/Hyundai.png" name="현대"></Brand>
                <Brand iconPath="/images/brand/Kia.png" name="기아"></Brand>
                <Brand iconPath="/images/brand/Genesis.png" name="제네시스"></Brand>
                <Brand iconPath="/images/brand/Chevrolet.png" name="쉐보레"></Brand>
            </div>
            <div className="flex flex-row">
                <Brand iconPath="/images/brand/BMW.png" name="BMW"></Brand>
                <Brand iconPath="/images/brand/Benz.png" name="벤츠"></Brand>
                <Brand iconPath="/images/brand/Audi.png" name="아우디"></Brand>
                <Brand iconPath="/images/brand/Volvo.png" name="볼보"></Brand>
            </div>
            <div className="pt-6">
                <button className="w-full py-4 bg-blue-800 text-white">더보기</button>
            </div>
        </div>
    )

}
export default Content;