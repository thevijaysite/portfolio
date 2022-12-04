import vijayLogo from "./headerImages/vijayLogo.svg";
import LinkedIn from "./headerImages/LinkedIn.svg";
import Behance from "./headerImages/behance.svg";
import document from "./headerImages/document.svg";
import cv from "./headerImages/CV.pdf"

const header = () => {
    return (
        <div>
            <div className="py-7 mx-auto px-2 sm:px-6 lg:px-24">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div>
                            <img className="px-3 h-14 w-auto lg:block" src={vijayLogo }  alt="the vijay "/>
                        </div>                  
                    </div>
                    <div className="absolute inset-y-0 right-0 flex gap-5 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <a className="flex gap-1 animate-bounce hover:opacity-70" href={cv} target="_blank"> 
                            <img className="w-8" src={document}/>
                            <h1 className="font-poppins py-2 text-white text-md ">Resume</h1>
                        
                        </a>
                        <div className="flex gap-5">
                            <a href="https://www.linkedin.com/in/vijayuxuidesigner/" target="_blank"> <img className="w-5 hover:opacity-70" src={LinkedIn}/></a>
                            <a href="https://www.behance.net/thevijay" target="_blank"> <img className="w-6 hover:opacity-70" src={Behance}/></a>
                            
                        </div>
                    </div>
                </div>
                <hr className="my-3 h-px bg-gray-200 border-0 dark:bg-gray-700"/>
                

            </div>
            <div className="absolute z-[1] w-[5%] h-[25%] blue__gradient" />
        </div>
        
    );
};


export default header;
