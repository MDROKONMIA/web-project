import React from 'react'

 
export const CustomSelectDropdown = (props) => { 
    const { labelName } = props;
    return (
        <>
                <div className="p-3 ">
                    <div className="font-bold text-slate-600 text-base tracking-wid">{labelName}:</div> 
                    <div className="flex  w-full rounded-lg border-2 border-gray-300 flex-nowrap">
                        <div className="flex items-center w-full">
                            <label className='p-2 whitespace-nowrap text-slate-500 font-bold'>DD-MM-YYYY</label>
                            <div className="h-full w-full bg-slate-200 rounded-r-md ">
                                <select className='h-full w-full outline-none font-bold text-gray-600 bg-transparent'>
                                    <option className="font-bold text-slate-500">rokon</option>
                                    <option className="font-bold text-slate-500">rokon1</option>
                                    <option className="font-bold text-slate-500">rokon2</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div> 
        </>
    )
}
