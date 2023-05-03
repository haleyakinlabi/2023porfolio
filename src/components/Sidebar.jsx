import React, { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus =[
    { title: 'Home', src: 'Home' },
    { title: 'Skills', src: 'Skills' },
    { title: 'Projects', src: 'Projects' },
    { title: 'Videos', src: 'Videos'},
    { title: 'Certificates', src: 'Certificates' },
    { title: 'Contact', src: 'Contact'},
    { title: 'LinkedIn', src: 'LinkedIn' }
  ]

  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-72" : "w-20"
        } duration-300 h-screen p-5 pt-8 bg-grey relative`}
      >
        <img
          src="https://img.icons8.com/?size=512&id=84&format=png"
          alt=""
          className={`absolute cursor-pointer rounded-full -right-3 top-9 w-8 h-8 border-2 border-grey bg-white ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
            <img src="https://img.icons8.com/?size=512&id=66734&format=png" alt="" className={`cursor-pointer duration-500 h-10 w-10`}/>
          <h1
            className={`text-white orgin-left font-medium text-x1 ${
              !open && "scale-0"
            }`}
          >
            Web-Developer
          </h1>
        </div>
        <ul className="pt-6">
            {Menus.map((menu, index) => (
                <li key={index} className={`text-black-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-darkgrey rounded-md`}>
                    <img src={`./assets/${menu.src}.png`} alt="" className='w-10'/>
                    <span className={`${!open && 'scale-0'} orgin-left duration-200`}>{menu.title}</span>
                </li>
            ))}
        </ul>
      </div>
      
    </div>
  );
};

export default Sidebar;
