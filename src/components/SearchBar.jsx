import React from 'react';
import { BiSearch } from 'react-icons/bi';

export const SearchBar = (props) => {
    const { rightIcons } = props;
    console.log(rightIcons);
    return (
        <>
            <div className="searchBar">
                <div className="flex p-2 items-center w-full">
                    <div className='p-1 '>{<BiSearch size="1.3rem" className='opacity-30' />}</div>
                    <div className="h-full w-full"><input className='h-full w-full outline-none text-gray-600' /></div>
                </div>

                <div className="flex items-center">
                    {rightIcons?.map((items) => { 
                        return (
                            <button className='p-1 h-full border-l-2 border-slate-700'>{items}</button>
                    )
                    })} 
                </div>
            </div>
        </>
    )
}
