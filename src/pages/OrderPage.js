import React from 'react';
import { Link } from 'react-router-dom';
import { BiUserPlus, BiCart } from 'react-icons/bi';
import { CustomSelectDropdown } from '../components/customeSelectDropdown';
import { SearchBar } from '../components/SearchBar';
import { Button, DropDown, HorizontalLine} from '../utilities';

export const OrderPage = () => {
    return (
        <>
            <section>
                <div className='w-full flex flex-nowrap items-stretch'>
                    <div className='w-1/2 p-3'>
                        <div className='card h-96'>
                            <div className="p-3 ">
                                <div className="font-bold text-lg tracking-wid">Coustomer:</div>

                                <SearchBar rightIcons={[
                                    <BiCart size={"1.5rem"} className="opacity-75" />,
                                    <BiUserPlus size={"1.5rem"} className="opacity-75" />,
                                ]} />

                            </div>
                            <HorizontalLine />
                            <div className='w-full flex'>
                                <div className="w-1/2">
                                    {<CustomSelectDropdown labelName={"Pickup"} />}
                                </div>
                                <div className="w-1/2">
                                    {<CustomSelectDropdown labelName={"Return"} />}
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='w-1/2 p-3'>
                        <div className='card h-96'>
                            <div className="p-3 flex justify-between">
                                <div className="font-bold text-lg tracking-wid">Informnation:</div>
                                <div className='flex items-center '>
                                    <a href='/' className='text-blue-600 font-normal pr-2'>Manage router</a>
                                    <Button />
                                </div>
                            </div>
                            {/* {Horizontal line} */}
                            <HorizontalLine />
                            <div className='flex items-stretch w-full justify-evenly'>
                                <span>you don't have any components</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="p-3">
                    <div className="card">
                        <div className='p-3 w-full'>
                            <SearchBar rightIcons={[<BiCart size={"1.3rem"} />]} />
                        </div>
                        <div className='flex items-center h-64 justify-center'>
                            <span>There are no items</span>
                        </div>

                        <HorizontalLine />
                        <div className="p-3 w-full flex justify-between">
                            <div className="w-64">
                                <DropDown title={"AddCustome Line"} />
                            </div>
                            <div className="grid grid-cols-2 gap-3 font-bold">
                                <div className="text-end text-slate-600">
                                    <span>Sub total:&nbsp;</span>
                                </div>
                                <span>100tk</span>
                                <div className='text-blue-500 leading-8 text-end'>Add Discount:</div>
                                <div className=""><input className='outline-none' /></div>
                                <div className='text-blue-500 leading-8 text-end'>Add Discount:</div>
                                <div className=""><input className='outline-none' /></div>
                                <div className='text-blue-500 leading-8 text-end'>Add Discount:</div>
                                <div><span className='font-extrabold tracking-wider'>100tk</span></div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
