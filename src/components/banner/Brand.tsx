import React from 'react';

interface BrandProps{
    iconPath : string;
    name : string;
}

const Brand = (props : BrandProps) => {
    return (
        <div className="w-1/4 h-auto px-2 font-normal">
            <img src={props.iconPath} alt=""/>
            <p className="pt-1 text-center">{props.name}</p>
        </div>
    )

}
export default Brand;