import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import ArrowDropUp from "@mui/icons-material/ArrowDropUp";
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import { useState } from "react";
export const Button = (props) => {
    const { outlined, className } = props;
    let css = "";
    if (outlined) css += "border-slate-300 border-2 "
    return (
        <button className={`rounded-md justify-center flex cursor-pointer p-1 font-semibold ${css} ${className}`} style={{ minWidth: "64px" }}>
            {props.children}
        </button>
    );
};

// Create horizontal line
export const HorizontalLine = () => {
    return (
        <div className="border-b-2 border-gray-300">
            <hr />
        </div>
    );
};

// Select Drowpdown
export const DropDown = (props) => {
    const { title } = props;
    return (
        <div className="w-full bg-slate-50 rounded-lg border-2 h-10 ">
            <select className="h-full pl-2 w-full outline-none font-bold text-gray-600 bg-transparent">
                <option className="font-bold text-slate-500">{title}</option>
                {props.children ||
                    <>
                        <option className="font-bold text-slate-500">rokon1</option>
                        <option className="font-bold text-slate-500">rokon2</option>
                    </>}
            </select>
        </div>
    );
};

export const ButtonWithIcon = (propps) => {
    const { icon, rounded, title } = propps;

    return (
        <button className={`flex text-center p-2  text-slate-600 hover:bg-primary font-semibold w-full ${rounded ? rounded : "rounded"}`}>
            {icon} <span className="pl-2">{title || "All mails"}</span>
        </button>
    );
};
export const IconWithText = (props) => {
    const { icon, title } = props;
    return (
        <>
            <button className={`flex text-center p-2  items-center text-slate-600 font-semibold w-full`}>
                {icon} <span className="pl-2">{title || "Title"}</span>
            </button>
        </>
    )
}
export const ToggleButton = (props) => {
    const { header } = props;
    const [isToggle, setIsToggle] = useState(true);
    const toggleButtonHandler = () => {
        setIsToggle(!isToggle);
    };
    return (
        <div className="w-full">
            <div className="border-t-2  border-b-2  h-12 border-slate-500">
                <div onClick={toggleButtonHandler} className="flex pl-3 items-center h-full bg-white text-slate-600 font-bold cursor-pointer justify-between">
                    <span className="">{header}</span>
                    <span className="font-extrabold">
                        {isToggle ? (
                            <ArrowDropDown />
                        ) : (
                            <ArrowDropUp />
                        )}
                    </span>
                </div>
            </div>
            {isToggle && props.children}


        </div>
    );
};

export const AddButton = (props) => {
    const { contained, outlined, className } = props;
    const style = {
        fontWeight: 500,
        fontSize: "0.875rem",
        lineHeight: 1.75,
        letterSpacing: "0.02857em",
        textTransform: "uppercase",
        minWidth: "64px",
        padding: " 6px 16px",
    }
    let css = "";
    if (contained) css += "bg-primary text-gray-200";
    if (outlined) css += "border-2 text-black";
    return (
        <button className={` ${css} rounded-md flex justify-center items-center border-slate-400  uppercase tracking-wider w-full ${className}`} style={style}>
            {props.children}
        </button>
    );
};

export const BredCrumsHeaderLine = () => {
    return (
        <div className="h-12 shadow-md border-b-2 border-slate-100 p-2 w-full">
            <span className="text-2xl font-bold text-gray-500 opacity-95">
                HeaderLine &nbsp; #
            </span>
        </div>
    );
};

export const ButtonGroup = (props) => {
    const { children } = props;
    const cldLength = children.length;
    return (
        <div className="border-2 flex rounded-lg items-center">
            {cldLength>0 && children.map((item, index) => {
                if (index < cldLength - 1) return (<><div className="border-r-2 border-slate-400">{item}</div></>);
                return item;
            })} 
            {!cldLength>0 && children}

        </div>
    )

};


export const UpDownButtonTogether = () => {
    return (
        <>
            <div className="flex-col flex pl-2">
                <button><AiFillCaretUp size={"0.75rem"}/></button>
                <button><AiFillCaretDown size={"0.75rem"}/></button>
            </div>
        </>
    )
}