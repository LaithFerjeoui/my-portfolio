import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white ">
      <div className="container p-12 flex justify-between">
       
          <img src="./images/logo.png" alt="logo" className="md:w-[6%] lg:w-[3%] w-[10%] h-[10%]"/>
       
          <p className="text-slate-600 mt-3">Whatsapp: <span className="text-[#acb6be]">+216-94-418-796</span> </p>
      
        
        
      </div>
    </footer>
  );
};

export default Footer;
