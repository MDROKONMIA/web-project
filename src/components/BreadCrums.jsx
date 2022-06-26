import React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../utilities';



function MyBreadcrumbs(props) {
    let location = useLocation();
    let navigate = useNavigate();
    const pathname = location.pathname.split("/").filter(x => x);
    const BreadCrumbDisabled = pathname[0] === undefined || pathname[0] === 'home';
    return (
        <div className={`${BreadCrumbDisabled ? "hidden" : ""} h-12 shadow-md border-b-2 border-slate-100 p-2 w-full`}>
            <div className="text-2xl font-bold text-gray-500 opacity-95">
               
                {/* <Link onClick={() => nevigate("/home")} className="cursor-pointer">Home</Link> */}
                <button onClick={()=>navigate("/order")}>Order #</button>
                    {
                        pathname.map((name, index) => {
                            const routeTo = `${pathname.slice(0, index + 1).join("/")}`;
                            const isLast = index === pathname.length - 1;
                            return (
                                isLast ? (`> ${name}`) :
                                    (<button onClick={() => navigate(routeTo)}>`&gt; ${name }`</button>)
                            )
                        })
                    }
 
            </div>
        </div>
    );
}
export default MyBreadcrumbs;