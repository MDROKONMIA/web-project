import React from 'react'
import { AddButton, ButtonGroup, HorizontalLine } from '../utilities';
import { FiClock } from 'react-icons/fi';
import { BsUpcScan } from 'react-icons/bs';
import { ImCross } from 'react-icons/im';
import Checkbox from '@mui/material/Checkbox';
// import Button from '@mui/material/Button'
import { Button } from '../utilities';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
export const PickUpPage = () => {
    return (
        <>

            <div className="w-full p-6">
                <div className="w-full relative card">
                    <div className='absolute top-3 right-3'>
                        <button> <ImCross size={"1.2rem"} /></button>
                    </div>
                    <div className="w-full p-4">
                        <h3 className='text-xl font-bold text-slate-600'>Pick up items</h3>
                        <p>Select items that are going out</p>
                    </div>
                    <HorizontalLine />
                    <div className=" w-full p-4 pl-6">
                        <button className="text-primary pr-2">Select All</button>
                        <button className="text-primary border-l-2 pl-2">Clear All</button>
                    </div>
                    <HorizontalLine />



                    <section>
                        <div className="flex mb-2 items-center w-full border-b-2 cursor-pointer hover:shadow-md justify-between">
                            <div className="flex items-center">
                                <div className="pr-1 flex items-center">
                                    <Checkbox {...label} /><FiClock size={"1.2rem"} />
                                </div>
                                <div className="font-extrabold text-black tracking-wide">
                                    rrr
                                </div>
                            </div>
                            <div className='p-1'>
                                <AddButton contained > + Add Product</AddButton>
                            </div>
                        </div>

                        <div className="pl-6 flex mb-2 items-center w-full border-b-2 cursor-pointer hover:shadow-md justify-between h-20">
                            <div className="flex items-center">
                                <div className="pr-1 flex items-center">
                                    <Checkbox {...label} /><FiClock size={"1.2rem"} />
                                </div>
                                <div className="font-extrabold text-black tracking-wide">
                                    rrr
                                </div>
                            </div>
                            <div className='p-1'>
                                <ButtonGroup>
                                    <Button className="pl-2 pr-2">1</Button>
                                    <Button >
                                        <div className='h-4 text-sm border-b-2'>+</div>
                                        <div className='h-4 text-sm'>-</div>
                                    </Button >
                                </ButtonGroup>
                            </div>
                        </div>

                        <div className="pl-6 flex mb-2 items-center w-full border-b-2 cursor-pointer hover:shadow-md justify-between h-20">
                            <div className="flex items-center">
                                <div className="pr-1 flex items-center">
                                    <Checkbox {...label} /><FiClock size={"1.2rem"} />
                                </div>
                                <div className="">
                                    <div className="font-extrabold text-black tracking-wide">
                                        rrr
                                    </div>
                                    <AddButton contained>+add procedure</AddButton>
                                </div>
                            </div>
                            <div className='p-1'>
                                <ButtonGroup>
                                    <Button className="pl-2 pr-2">1</Button>
                                    <Button >
                                        <div className='h-4 text-sm border-b-2'>+</div>
                                        <div className='h-4 text-sm'>-</div>
                                    </Button >
                                </ButtonGroup>
                            </div>
                        </div>
                    </section>
                    <section className="w-full">
                        <div className="flex justify-between items-center p-2">
                            <div className="">
                                <AddButton outlined className="p-2 flex ">
                                    <BsUpcScan size={"1.4rem"} className="pr-2" />scan barcodes
                                </AddButton>
                            </div>
                            <div className="flex gap-x-2">
                                <AddButton outlined className="p-2">cancel</AddButton>
                                <AddButton contained className="p-2 bg-amber-500">Pick Up Items</AddButton>

                            </div>
                        </div>

                    </section>


                </div>
            </div>
        </>
    )
}
