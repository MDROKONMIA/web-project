import React from "react";
import { BredCrumsHeaderLine } from "../utilities";
import { BsPencilFill } from "react-icons/bs";

import { Link } from 'react-router-dom';

export const InvoicePage = () => {
  const tableData = [
    {
      bundlename: "Bronse bundle",
      BndlItems: [
        { name: "mobile", price: "50tk" },
        { name: "laptop", price: "50tk" },
        { name: "watch", price: "50tk" },
      ],
      price: "150tk",
      total: "150tk"
    }
  ]
  return (
    <>

      <div className="p-4">
        <div className="card p-4">
          {/* ##################### Information section ##############  */}
          <section className="grid grid-cols-2">
            <div>
              <div className="text-xl font-semibold">George</div>
              <div className="text-start pl-2 text-slate-600">
                <div className="flex leading-6 items-center">
                  <BsPencilFill size="0.8rem" />
                  <p className="pl-2">I love you</p>
                </div>
                <p className="leading-6">SR12AT SundarTand Choose One.....</p>
                <p className="leading-6">SR12AT SundarTand Choose One.....</p>
                <p className="leading-6">SR12AT SundarTand Choose One.....</p>
              </div>
              <div className="w-full mt-5">
                <div className="text-xl font-semibold">Phone:</div>
                <p>+44696969696969</p>
              </div>
              <div className="w-full text-2xl font-semibold mt-8">
                <span className="text-slate-600">Invoice</span> #Pro forma
              </div>
            </div>

            <div>
              <div className="text-xl font-semibold">Haha ok</div>
              <div className="text-start pl-2 text-slate-600">
                <p className="leading-6">United Kingdom</p>
                <p className="leading-6">+447734321134</p>
                <p className="leading-6">133t8omans@gmail.com</p>
              </div>

              <div className="mt-20">
                <div className="flex items-center">
                  <span className="text-md font-semibold text-slate-600">
                    Pickup:
                  </span>
                  <span className="pl-5">06-06-2002 20:25 AM</span>
                </div>
                <div className="flex items-center">
                  <span className="text-md font-semibold text-slate-600">
                    Return:
                  </span>
                  <span className="pl-5">06-06-2002 20:25 AM</span>
                </div>
              </div>
            </div>
          </section>

          {/* ################################ Table section #################  */}
          <section>
            <ul role="table">
              <li role="row" className="grid grid-cols-12 items-center h-12 border-b-2 shadow justify-around font-semibold text-slate-600">
                <div></div>
                <div className="col-span-8" role="columnheader"></div>
                <div>Price</div>
                <div>Tax</div>
                <div>Total</div>
              </li>

              {tableData?.map((item) => {
                return (
                  <>
                    <li role="row" className="grid grid-cols-12 items-center h-12  justify-around font-semibold text-slate-600">
                      <span className="text-center">{item.pkgNumber || "1x"}</span>
                      <div className="col-span-8"> {item.bundlename}</div>
                      <div>{item.price || " "}</div>
                      <div>{item.tax || " "}</div>
                      <div>{item.total || ""}</div>
                    </li>
                    {item.BndlItems?.map((subitem) => {
                      return (
                        <li role="row" className="grid grid-cols-12 items-center h-12 justify-around text-slate-600">
                          <span className="text-center">{subitem.pkgNumber || "1x"}</span>
                          <div className="col-span-8"> {subitem.name}</div>
                          <div>{subitem.price || " "}</div>
                          <div>{subitem.tax || " "}</div>
                          <div>{subitem.total || ""}</div>
                        </li>
                      )
                    })}

                  </>
                )
              })}
            </ul>
            <Link className="text-primary underline" to={""}>Inser a reference</Link>
          </section>
          {/* ########################### Price Calculation ########################  */}
          <section className="w-full mt-5">
            <div className="w-full flex justify-end">
              <div className="w-1/4">
                <div className="grid grid-cols-2 gap-x-12 shadow">
                  <div className="text-end font-semibold text-slate-600">Subtotal:</div>
                  <div>150tk</div>
                </div>
                {/* ############### Tax ################################  */}
                <div className="grid grid-cols-2 gap-x-12 shadow mt-4">
                  <div className="text-end font-bold whitespace-nowrap text-slate-600">Total Tax Include:</div>
                  <div>00tk</div>
                  <div className="text-end font-semibold text-slate-600">Subtotal:</div>
                  <div>00tk</div>
                </div>
                {/* ############################ Paid #####################################  */}
                <div className="grid grid-cols-2 gap-x-12 shadow mt-4">
                  <div className="text-end font-semibold text-slate-600">Paid:</div>
                  <div>00tk</div>
                  <div className="text-end font-bold text-slate-600">Outstanding:</div>
                  <div>00tk</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
