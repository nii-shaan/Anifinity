import { useState } from "react";
import { Button } from "@/components/ui/button";

function Modal({ closeFunction }: { closeFunction: Function }) {
  const [checked, setChecked] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(true);

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => closeFunction(false), 2000);
  };
  return (
    <div
      className={`fixed inset-0 bg-[#111111f2] z-50 flex items-center justify-center ${
        visible ? "animate-fade-in" : "animate-fade-out"
      }`}
    >
      <div className="bg-[#080707] h-[800px] w-[95%] max-w-[800px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40">
        <div id="text" className="text-[#b1b1b1] text-xl p-10">
          <p>
            This project was created just for learning purposes to improve my
            skills in Web Development. It is not meant to stream content for
            profit or any commercial use. I respect the rights of the original
            owners and acknowledge that all content belongs to them. No
            copyrighted material is hosted on this site; everything here is just
            for demonstration and learning. I have taken care to ensure that no
            commercial advantage is gained from this project, and it is intended
            solely as a tool to enhance my coding abilities and understanding of
            web technologies.
          </p>
          <p className="mt-4">
            Please note that this site may sometimes have errors or go down. If
            you run into any issues, try refreshing the page. Your patience and
            understanding are greatly appreciated as I continue to develop and
            refine this project. Thank you for visiting and supporting my
            learning journey.
          </p>
          <div className="mt-5">
            <p className="text-green-400">
              Streaming was possible with help of:
            </p>
            <ul className="flex flex-col">
              <li
                className="cursor-pointer hover:underline inline bg-transparent w-[160px]"
                onClick={() =>
                  window.open("https://github.com/consumet/api.consumet.org")
                }
              >
                -Consumet API
              </li>
              <li
                className="cursor-pointer hover:underline inline w-[160px] "
                onClick={() =>
                  window.open("https://github.com/ghoshRitesh12/aniwatch-api")
                }
              >
                -Aniwatch API
              </li>
            </ul>
          </div>
        </div>
        <div
          id="checkBox"
          className={` flex items-center gap-x-5 pl-10 ${
            checked ? "text-[#5ae668]" : "text-[#fb4e4e]"
          }`}
        >
          <input
            type="checkbox"
            checked={checked}
            onChange={() => {
              setChecked((prev) => !prev);
            }}
            className="h-7 w-7"
          />
          <span className="text-2xl">I understand</span>
        </div>
        <div className=" w-full flex justify-center mt-14">
          <Button
            variant={"outline"}
            className="bg-transparent text-white text-2xl px-12 py-6"
            disabled={!checked}
            onClick={handleClose}
          >
            Okay
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
