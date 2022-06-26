import React from 'react'
import { BiSearch } from 'react-icons/bi';
import { FiClock } from 'react-icons/fi';
import { useState } from 'react';
import { AddButton } from '../utilities';

const FilterResultArry = [
  {title:"Clock"},
  {title:"Clock"},
  {title:"Clock"},
  {title:"Clock"},
  {title:"Miloy"},
  {title:"Rokon"},
]
export const FilterData = () => {
    const [filterData, setFilterData] = useState();
    const handleChange = (event) => {
      event.preventDefault(); 
      const regex = new RegExp(event.target.value, 'i'); 
      const filterData = FilterResultArry.filter(({title}) => {
        return (title.match(regex));
      })
      setFilterData(filterData);
    }
    return (
      <div className="p-2">
        <div className="rounded-md border-2  border-sky-300  ">
          <div className="flex p-2 items-center w-full border-b-2 border-b-sky-300">
            <div className="p-1">
              {<BiSearch size="1.3rem" className="opacity-30" />}
            </div>
            <div className="h-full w-full">
              <input
                className="h-full w-full outline-none text-gray-600"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="p-2">
            <div className="p-2 w-full">
              Showing{" "}
              <span className="font-medium">
                1-{filterData?.length> 4 ? 4 : filterData?.length}
              </span>{" "}
              of <span>{filterData?.length}</span>:
            </div>
            <div className="pl-3">
              {filterData?.map((item, index) => {
                while (index < 4) {
                  return (
                    <div className="flex mb-2 items-center w-full cursor-pointer hover:shadow-md justify-between">
                      <div className="flex items-center">
                        <div className="pr-1">
                          <FiClock size={"2rem"} />
                        </div>
                        <div className="text-left pl-2 ">
                          <div className="font-extrabold text-black tracking-wide">
                            {item.title}
                          </div>
                          <span className="text-yellow-700">0 Available</span>
                        </div>
                      </div>
                      <div className="flex rounded-lg bg-blue-800 h-8 w-32 items-center">
                         <AddButton title="Product"/>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    );
}
