import React from 'react'; 
import MyBreadcrumbs from './BreadCrums';
import { Outlet } from 'react-router-dom';

export const LayOut = (props) => {
    const { side} = props; 
    let sidebarCss = "";
    side === "right" ? sidebarCss += "right-0 border-l-4" : sidebarCss += "left-0 border-r-4";
    let main = {
        padding: "0px 0px",
    }
    side === "right" ? main.marginRight = "224px" : main.marginLeft = "224px"; 
    return (
        <>
            <div className={`border-slate-500 w-56  h-full fixed top-0  bg-white overflow-hidden z-10 ${sidebarCss}`} >
                {props.children}
            </div>
            <div style={main}>

                <MyBreadcrumbs />
                <Outlet />
            </div>
        </>

    )
};

