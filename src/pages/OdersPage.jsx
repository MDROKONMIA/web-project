import React from 'react'
import { NavLink } from 'react-router-dom';
import { AddButton, DropDown, HorizontalLine, UpDownButtonTogether } from '../utilities'
import { OrdersPageSideBar } from './Orders/OrdersPageSideBar';
import { ButtonGroup, Button } from '../utilities';
import { AiOutlineLeft, AiOutlineRight, } from 'react-icons/ai';
import Checkbox from '@mui/material/Checkbox';
import SplitButton from '../components/SpliteButton';

export const OdersPage = () => {
    const activeStyle = "border-b-2 border-blue-500 text-xl text-black font-bold"
    return (
        <> <div className='fixed top-0 left-0 border-r-2 border-slate-500' style={{ width: '220px' }} >

            <OrdersPageSideBar />
        </div>
            <section className='p-5' style={{ marginLeft: "220px" }}>

                <div className="w-full inline-block p-1 text-lg text-semibold text-slate-600">

                    <button className="p-2" >
                        <NavLink to="/oders" className={({ isActive }) => isActive ? activeStyle : undefined}> All </NavLink>
                    </button>
                    <button className="p-2" >
                        <NavLink to="/oders-1" className={({ isActive }) => isActive ? activeStyle : undefined}>Upcomming</NavLink>
                    </button>
                    <button className="p-2" >
                        <NavLink to="/oders=2" className={({ isActive }) => isActive ? activeStyle : undefined}>Late</NavLink>
                    </button>
                    <button className="p-2" >
                        <NavLink to="/oders-3" className={({ isActive }) => isActive ? activeStyle : undefined}>With Storage</NavLink>
                    </button>
                </div>
                <HorizontalLine />

                <div className="flex w-full items-center h-20 border-b-2">
                    <div className="w-40">
                        <DropDown title="All time">
                            <option>Weakly</option>
                            <option>Mothely</option>
                            <option>Daily</option>
                        </DropDown>
                    </div>
                    <div className="w-full inline items-center">
                        <button className='text-slate-600 font-bold pl-2'>0 selcted orders</button>
                        <button className='text-blue-600 font-bold pl-2'>Select All 1 order</button>
                        <div className="float-right">
                            <ButtonGroup>
                                <Button><AiOutlineLeft size="1.2rem" /></Button>
                                <Button>1</Button >
                                <Button ><AiOutlineRight size="1.2rem" /></Button >
                            </ButtonGroup>
                        </div>
                        <div className='text-black float-right pr-2'>Showing 1 of 1:</div>
                    </div>
                </div>



                <div className="gap-y-2 grid">
                    <ul className='border-2 border-slate-500 rounded-sm'>
                        <li role="row" className="grid grid-cols-12 items-center h-12  justify-around font-semibold text-slate-600">
                            <span className="text-center"><Checkbox /></span>
                            <div className="flex text-xl items-center"> #
                                <UpDownButtonTogether />
                            </div>
                            <div className='flex col-span-4'>customer  <UpDownButtonTogether /> </div>
                            <div className='flex'>Status  <UpDownButtonTogether /> </div>
                            <div className='flex'>Pickup <UpDownButtonTogether /> </div>
                            <div className='flex'>Return  <UpDownButtonTogether /> </div>
                            <div className='flex'>Price  <UpDownButtonTogether /> </div>
                            <div className='flex col-span-2'>Payment  <UpDownButtonTogether /> </div>
                        </li>
                    </ul>

                    <ul className='border-2 border-slate-500 rounded-sm'>
                        <li role="row" className="grid grid-cols-12 items-center h-12  justify-around font-semibold text-slate-600">
                            <span className="text-center"><Checkbox /></span>
                            <div className="flex text-xl items-center"> #2
                                <UpDownButtonTogether />
                            </div>
                            <div className='flex col-span-4'>George </div>
                            <div className='flex pl-2 pr-2'><AddButton outlined className={"rounded-full"} >Mixed</AddButton></div>
                            <div className='flex text-red-600'>01-06-2011</div>
                            <div className='flex'>01-06-2011</div>
                            <div className='flex'>2000tk</div>
                            <div className='flex col-span-2'><SplitButton /></div>
                        </li>
                    </ul>
                </div>
                <div className="w-full mt-4">
                    <div className="float-right">
                        <ButtonGroup>
                            <Button><AiOutlineLeft size="1.2rem" /></Button>
                            <Button>1</Button >
                            <Button ><AiOutlineRight size="1.2rem" /></Button >
                        </ButtonGroup>
                    </div>
                    <div className='text-black float-right pr-2'>Showing 1 of 1:</div>
            </div>
            </section>

        </>
    )
}
