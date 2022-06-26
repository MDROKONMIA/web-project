import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { GrNotes } from "react-icons/gr";
import { AddButton, ButtonWithIcon, ToggleButton } from "../utilities";
import SplitButton from "./SpliteButton";
export const RightSideBar = () => {
  return (
    <>
      <div className="bg-gray-200 h-full">
        <div className="p-4">
          <div className="grid card bg-white">
            <div className="border-b-2 border-slate-500 w-full">
              <ButtonWithIcon
                icon={<AiOutlineMail size={"1.5rem"} />}
                rounded={"rounded-t"}
              />
            </div>
            <div className="border-b-2 border-slate-500 w-full">
              <ButtonWithIcon
                icon={<GrNotes size={"1.5rem"} />}
                rounded={" "}
              />
            </div>
            <div className="w-full">
              <ButtonWithIcon
                icon={<GrNotes size={"1.5rem"} />}
                rounded={"rounded-b"}
              />
            </div>
          </div>
        </div>

        <ToggleButton header={"Documents"}>
          <ButtonWithIcon
            icon={<GrNotes size={"1.5rem"} />}
            rounded={"rounded-none"}
          />
        </ToggleButton>
        <ToggleButton header={"Invoice"}>
          <ButtonWithIcon
            icon={<GrNotes size={"1.5rem"} />}
            rounded={"rounded-none"}
          />
        </ToggleButton>

        {/* ########### Payments ############### */}

        <ToggleButton header={"Payments"}>
          <div className="w-full flex pt-2 pb-2 justify-center">
            <SplitButton/>
          </div>
        </ToggleButton>

        <ToggleButton header={"Tags"}>
          <div className="w-full flex pt-2 pb-2 justify-center">
            <AddButton>+ Add Tags</AddButton>
          </div>
        </ToggleButton>

        <ToggleButton header={"Notes"}>
          <div className="w-full flex pt-2, justify-center">
            <form className="pt-2">
              <textarea className="border-2 border-slate-50 outline-none"></textarea>
            </form>
          </div>
        </ToggleButton>
      </div>
    </>
  );
};
