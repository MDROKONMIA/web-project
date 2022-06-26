import React from 'react' 
import Checkbox from '@mui/material/Checkbox';
import { BiExit } from "react-icons/bi";
import { AiOutlineBars, AiFillCalendar } from "react-icons/ai";
import { AddButton, IconWithText, ToggleButton } from "../../utilities";

const SideItemList = [
    { name: "Concept", value: "0" },
    { name: "Reserved", value: "0" },
    { name: "Pickup", value: "0" },
    { name: "Returned", value: "0" },
    { name: "Archived", value: "0" },
    { name: "Canceled", value: "0" },
]


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
export const OrdersPageSideBar = () => {

    return (
        <>
            {/* ##################### sidebar ##################### */}

            {SideItemList.map((item) => {
                return (
                    <div className="flex  items-center">
                        <Checkbox {...label} />
                        <div className="flex w-full justify-between">
                            <span className='font-bold text-lg text-slate-600'>{item.name}</span>
                            <span className='pr-1 text-lg'>({item.value})</span>
                        </div>
                    </div>
                )
            })}
            <ToggleButton header={<IconWithText
                icon={<AiOutlineBars size={"1.5rem"} />}
                title={"Payment Status"}
            />}>
                {SideItemList.map((item) => {
                    return (
                        <div className="flex  items-center">
                            <Checkbox {...label} />
                            <div className="flex w-full justify-between">
                                <span className='font-bold text-lg text-slate-600'>{item.name}</span>
                                <span className='pr-1 text-lg'>({item.value})</span>
                            </div>
                        </div>
                    )
                })}
            </ToggleButton>

            <ToggleButton header={<IconWithText
                icon={<AiFillCalendar size={"1.5rem"} />}
                title={"Show all range"}
            />}>
                <p>Showing: <span className='text-lg font-semibold'>All times</span></p>
            </ToggleButton>
            <div className="w-full gap-y-2 mt-3 grid justify-center">
                <AddButton outlined><BiExit size={"1.2rem"} className="mr-1" />Export</AddButton>
            </div>

        </>
    )
}
