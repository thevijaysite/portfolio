import logodesign from "./logo-desing-images/logo-desing.png";
import across from "./logo-desing-images/across.jpg";
import chat from "./logo-desing-images/chat.jpg";
import music from "./logo-desing-images/music.jpg";
import health from "./logo-desing-images/health.jpg";
import business from "./logo-desing-images/business.jpg";
import cosmic from "./logo-desing-images/cosmic.jpg";
import imageText from "./logo-desing-images/imageText.jpg";
import hoppoe from "./logo-desing-images/hoppoe.jpg";
import smooky from "./logo-desing-images/smooky.jpg";
import modern from "./logo-desing-images/modern.jpg";
import movie from "./logo-desing-images/movie.jpg";
import jadayu from "./logo-desing-images/jadayu.jpg";
import be from "./logo-desing-images/be.jpg";
import boffin from "./logo-desing-images/boffin.jpg";
import natural from "./logo-desing-images/natural.jpg";
import nextTask from "./logo-desing-images/nextTask.jpg";
import nitro from "./logo-desing-images/nitro.jpg";
import one from "./logo-desing-images/one.jpg";
import q from "./logo-desing-images/q.jpg";
import spm from "./logo-desing-images/spm.jpg";
import txtil from "./logo-desing-images/txtil.jpg";
import vijay from "./logo-desing-images/vijay.jpg";
import Ymono from "./logo-desing-images/y-mono.jpg";
import Musiccase from "./uxui-images/music.jpg";
import NextTaskcase from "./uxui-images/nextTask.jpg";
import NFT from "./uxui-images/NFT.jpg";
import BusinessGrowth from "./uxui-images/businessgrowth.jpg";
import Banking from "./uxui-images/banking.jpg";
import Foodordering from "./uxui-images/foodordering.jpg";
import Healthy from "./uxui-images/healthy.jpg";
import movierate from "./uxui-images/movierate.jpg";
import eLearning from "./uxui-images/eLearning.jpg";
import searchnscore from "./uxui-images/searchnscore.jpg";
import pedsEndo from "./uxui-images/pedsEndo.jpg";
import hightech from "./uxui-images/hightech.jpg";
import humin from "./uxui-images/humin.jpg";
import Floppy from "./illustrations/floppy.svg";
import Burgger from "./illustrations/burger.svg";
import aex from "./illustrations/aex.svg";
import Four from "./illustrations/4.jpg";
import archery from "./illustrations/archery.svg";
import bag from "./illustrations/bag.svg";
import bigGun from "./illustrations/big-gun.svg";
import boat from "./illustrations/boat.svg";
import camera from "./illustrations/camera.svg";
import catus from "./illustrations/catus.svg";
import coffee from "./illustrations/coffee.svg";
import dustbin from "./illustrations/dustbin.svg";
import gameJiostick from "./illustrations/game-jiostick.svg";
import gamePlayer from "./illustrations/game-player.svg";
import graphicsDesing from "./illustrations/graphics-design.svg";
import hat from "./illustrations/hat.svg";
import iceCream from "./illustrations/ice-cream.svg";
import laptopWarning from "./illustrations/laptop-warning.svg";
import lemon from "./illustrations/lemon.svg";
import loadTruck from "./illustrations/load-truck.svg";
import lock from "./illustrations/lock.svg";
import map from "./illustrations/map.svg";
import microscope from "./illustrations/microscope.svg";
import monitorSpeaker from "./illustrations/monitor-speaker.svg";
import movieCamera from "./illustrations/movie-camera.svg";
import Notebook from "./illustrations/notebook.svg";
import paintWall from "./illustrations/paint-wall.svg";
import Pencile from "./illustrations/pencile.svg";
import personChair from "./illustrations/person-chir.svg";
import personWallet from "./illustrations/person-wallet.svg";
import popeye from "./illustrations/popeye.svg";
import rocket from "./illustrations/rocket.svg";
import scetoor from "./illustrations/scetoor.svg";
import stopWatch from "./illustrations/stop-watch.svg";
import tabelt from "./illustrations/tabelt.svg";
import tent from "./illustrations/tent.svg";
import thermometter from "./illustrations/thermometter.svg";
import umberla from "./illustrations/umberla.svg";
import Usb from "./illustrations/usb-cards.svg";
import walkitakei from "./illustrations/walkitakei.svg";
import Wallet from "./illustrations/wallet.svg";
import { useState } from "react";

export default function TabsComponent() {
    const [openTab, setOpenTab] = useState(1);


    return (
        <div>

            <div className="w-full max-w-fit mx-auto mt-12 ">
                <div className="flex flex-col items-center justify-center ">
                    <div className="max-w-7xl items-stretch space-x-12 sm:flex-row">
                        <ul className="md:flex gap-2">
                            <li className="mr-2 mb-2">
                                <a
                                    href="#"
                                    onClick={() => setOpenTab(1)}
                                    className= {`w-52 rounded-lg inline-block py-5 font-poppins text-white text-md font- text-center ${openTab === 1 ? "bg-gradient-to-r from-pink-600 to-red-600 " : "border"} `}
                                >
                                    UX/UI Designs
                                </a>
                            </li>
                            <li className="mr-2 mb-2">
                                <a 
                                    href="#"
                                    onClick={() => setOpenTab(2)}
                                    className={`w-52 rounded-lg inline-block py-5 font-poppins text-white text-md text-center ${openTab === 2 ? "bg-gradient-to-r from-pink-600 to-red-600" : "border"}`}
                                    

                                >
                                Illustrations
                                </a>
                            </li>
                            <li className="mr-2 mb-2">
                                <a
                                    href="#"
                                    onClick={() => setOpenTab(3)}
                                    className={`w-52 rounded-lg inline-block py-5 font-poppins text-white text-md text-center ${openTab === 3 ? "bg-gradient-to-r from-pink-600 to-red-600" : "border"} `}


                                >
                                Logo Designs
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="p-3 mt-6 ">
                        <div className={openTab === 1 ? "block" : "hidden"} >
                            {" "}
                            <br/>
                            <ul className=" grid justify-center lg:grid-cols-3 md:grid-cols-1 py-5 lg:px-24 md:px-2 sm:px-2 gap-11">
                                {/* Logodesign */}
                                <div class="p-1">
                                    <div class="group relative block overflow-hidden rounded-md transition-all duration-500">
                                         <a href="/static/media/musicfullcase.2f0a851242ee2dcf1be6.png" target="_blank" class="lightbox transition-all duration-500 group-hover:scale-105 tobii-zoom" title="">
                                            <img className="hover:scale-95 ease-in duration-500" src={Musiccase}/>
                                         </a>
                                        <div class="absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-500 bg-white dark:bg-gradient-to-r from-pink-600 to-red-600 p-4 rounded shadow dark:shadow-gray-700">
                                            <h6 class="text-white font-poppins text-center text-sm">Click the Image to Full View</h6>
                                         </div>
                                    </div>
                                </div>
                                <div class="p-1">
                                    <div class="group relative block overflow-hidden rounded-md transition-all duration-500">
                                         <a href="/static/media/next-task.241f28869d8c0bfac927.png" target="_blank" class="lightbox transition-all duration-500 group-hover:scale-105 tobii-zoom" title="">
                                            <img className="hover:scale-95 ease-in duration-500" src={NextTaskcase}/>
                                         </a>
                                        <div class="absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-500 bg-white dark:bg-gradient-to-r from-pink-600 to-red-600 p-4 rounded shadow dark:shadow-gray-700">
                                            <h6 class="text-white font-poppins text-center text-sm">Click the Image to Full View</h6>
                                         </div>
                                    </div>
                                </div>
                                <div class="p-1">
                                    <div class="group relative block overflow-hidden rounded-md transition-all duration-500">
                                         <a href="/static/media/NFT-full.0387fcbfd8da8740f63a.jpg" target="_blank" class="lightbox transition-all duration-500 group-hover:scale-105 tobii-zoom" title="">
                                            <img className="hover:scale-95 ease-in duration-500" src={NFT}/>
                                         </a>
                                        <div class="absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-500 bg-white dark:bg-gradient-to-r from-pink-600 to-red-600 p-4 rounded shadow dark:shadow-gray-700">
                                            <h6 class="text-white font-poppins text-center text-sm">Click the Image to Full View</h6>
                                         </div>
                                    </div>
                                </div>
                                <div class="p-1">
                                    <div class="group relative block overflow-hidden rounded-md transition-all duration-500">
                                         <a href="/static/media/marketing.21ae609cf959bab995df.png" target="_blank" class="lightbox transition-all duration-500 group-hover:scale-105 tobii-zoom" title="">
                                            <img className="hover:scale-95 ease-in duration-500" src={BusinessGrowth}/>
                                         </a>
                                        <div class="absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-500 bg-white dark:bg-gradient-to-r from-pink-600 to-red-600 p-4 rounded shadow dark:shadow-gray-700">
                                            <h6 class="text-white font-poppins text-center text-sm">Click the Image to Full View</h6>
                                         </div>
                                    </div>
                                </div>
                                <div class="p-1">
                                    <div class="group relative block overflow-hidden rounded-md transition-all duration-500">
                                         <a href="/static/media/healthyFull.e6969f47055f790da319.jpg" target="_blank" class="lightbox transition-all duration-500 group-hover:scale-105 tobii-zoom" title="">
                                            <img className="hover:scale-95 ease-in duration-500" src={Healthy}/>
                                         </a>
                                        <div class="absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-500 bg-white dark:bg-gradient-to-r from-pink-600 to-red-600 p-4 rounded shadow dark:shadow-gray-700">
                                            <h6 class="text-white font-poppins text-center text-sm">Click the Image to Full View</h6>
                                         </div>
                                    </div>
                                </div>
                                <div class="p-1">
                                    <div class="group relative block overflow-hidden rounded-md transition-all duration-500">
                                         <a href="/static/media/elearning.65eaa5cc913daf2ae61a.png" target="_blank" class="lightbox transition-all duration-500 group-hover:scale-105 tobii-zoom" title="">
                                            <img className="hover:scale-95 ease-in duration-500" src={eLearning}/>
                                         </a>
                                        <div class="absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-500 bg-white dark:bg-gradient-to-r from-pink-600 to-red-600 p-4 rounded shadow dark:shadow-gray-700">
                                            <h6 class="text-white font-poppins text-center text-sm">Click the Image to Full View</h6>
                                         </div>
                                    </div>
                                </div>
                                <div class="p-1">
                                    <div class="group relative block overflow-hidden rounded-md transition-all duration-500">
                                         <a href="/static/media/bankingFull.eab626d7e39f824e25d7.jpg" target="_blank" class="lightbox transition-all duration-500 group-hover:scale-105 tobii-zoom" title="">
                                            <img className="hover:scale-95 ease-in duration-500" src={Banking}/>
                                         </a>
                                        <div class="absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-500 bg-white dark:bg-gradient-to-r from-pink-600 to-red-600 p-4 rounded shadow dark:shadow-gray-700">
                                            <h6 class="text-white font-poppins text-center text-sm">Click the Image to Full View</h6>
                                         </div>
                                    </div>
                                </div>
                                <div class="p-1">
                                    <div class="group relative block overflow-hidden rounded-md transition-all duration-500">
                                         <a href="/static/media/foodorderingFull.a6635a99b08769af1eb1.jpg" target="_blank" class="lightbox transition-all duration-500 group-hover:scale-105 tobii-zoom" title="">
                                            <img className="hover:scale-95 ease-in duration-500" src={Foodordering}/>
                                         </a>
                                        <div class="absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-500 bg-white dark:bg-gradient-to-r from-pink-600 to-red-600 p-4 rounded shadow dark:shadow-gray-700">
                                            <h6 class="text-white font-poppins text-center text-sm">Click the Image to Full View</h6>
                                         </div>
                                    </div>
                                </div>
                                <div class="p-1">
                                    <div class="group relative block overflow-hidden rounded-md transition-all duration-500">
                                         <a href="/static/media/searchnscore.b3e301eab690980476fc.png" target="_blank" class="lightbox transition-all duration-500 group-hover:scale-105 tobii-zoom" title="">
                                            <img className="hover:scale-95 ease-in duration-500" src={searchnscore}/>
                                         </a>
                                        <div class="absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-500 bg-white dark:bg-gradient-to-r from-pink-600 to-red-600 p-4 rounded shadow dark:shadow-gray-700">
                                            <h6 class="text-white font-poppins text-center text-sm">Click the Image to Full View</h6>
                                         </div>
                                    </div>
                                </div>
                                <div class="p-1">
                                    <div class="group relative block overflow-hidden rounded-md transition-all duration-500">
                                         <a href="/static/media/movierateFull.1fe76b2049bceb20e731.jpg" target="_blank" class="lightbox transition-all duration-500 group-hover:scale-105 tobii-zoom" title="">
                                            <img className="hover:scale-95 ease-in duration-500" src={movierate}/>
                                         </a>
                                        <div class="absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-500 bg-white dark:bg-gradient-to-r from-pink-600 to-red-600 p-4 rounded shadow dark:shadow-gray-700">
                                            <h6 class="text-white font-poppins text-center text-sm">Click the Image to Full View</h6>
                                         </div>
                                    </div>
                                </div>
                                <div class="p-1">
                                    <div class="group relative block overflow-hidden rounded-md transition-all duration-500">
                                         <a href="/static/media/centerforpedsendo.b0a4de7679c7984c0688.png" target="_blank" class="lightbox transition-all duration-500 group-hover:scale-105 tobii-zoom" title="">
                                            <img className="hover:scale-95 ease-in duration-500" src={pedsEndo}/>
                                         </a>
                                        <div class="absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-500 bg-white dark:bg-gradient-to-r from-pink-600 to-red-600 p-4 rounded shadow dark:shadow-gray-700">
                                            <h6 class="text-white font-poppins text-center text-sm">Click the Image to Full View</h6>
                                         </div>
                                    </div>
                                </div>
                                <div class="p-1">
                                    <div class="group relative block overflow-hidden rounded-md transition-all duration-500">
                                         <a href="/static/media/hiTech.02c323f940deef20a295.jpg" target="_blank" class="lightbox transition-all duration-500 group-hover:scale-105 tobii-zoom" title="">
                                            <img className="hover:scale-95 ease-in duration-500" src={hightech}/>
                                         </a>
                                        <div class="absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-500 bg-white dark:bg-gradient-to-r from-pink-600 to-red-600 p-4 rounded shadow dark:shadow-gray-700">
                                            <h6 class="text-white font-poppins text-center text-sm">Click the Image to Full View</h6>
                                         </div>
                                    </div>
                                </div>
                                <div class="p-1">
                                    <div class="group relative block overflow-hidden rounded-md transition-all duration-500">
                                         <a href="/static/media/huminn.888ef2ed87a126ec9b06.jpg" target="_blank" class="lightbox transition-all duration-500 group-hover:scale-105 tobii-zoom" title="">
                                            <img className="hover:scale-95 ease-in duration-500" src={humin}/>
                                         </a>
                                        <div class="absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-500 bg-white dark:bg-gradient-to-r from-pink-600 to-red-600 p-4 rounded shadow dark:shadow-gray-700">
                                            <h6 class="text-white font-poppins text-center text-sm">Click the Image to Full View</h6>
                                         </div>
                                    </div>
                                </div>
                            </ul>
                        </div>
                        <div className={openTab === 2 ? "block" : "hidden"}>
                            <ul className=" grid justify-center lg:grid-cols-3 md:grid-cols-2 py-11 lg:px-24 md:px-2 sm:px-2 sm:grid-cols-1 gap-11">
                                    {/* Logodesign */}
                                    <img className="hover:scale-95 ease-in duration-500" src={Floppy} alt="" />
                                    <img className="hover:scale-95 ease-in duration-500" src={Burgger} alt="" />
                                    <img className="hover:scale-95 ease-in duration-500" src={aex} alt="" />
                                    <img className="hover:scale-95 ease-in duration-500" src={archery} alt="" />
                                    <img className="hover:scale-95 ease-in duration-500" src={bag} alt="" />
                                    <img className="hover:scale-95 ease-in duration-500" src={bigGun} alt="" />
                                    <img className="hover:scale-95 ease-in duration-500" src={boat} alt="" />
                                    <img className="hover:scale-95 ease-in duration-500" src={camera} alt="" />
                                    <img className="hover:scale-95 ease-in duration-500" src={catus} alt="" />
                                    <img className="hover:scale-95 ease-in duration-500" src={coffee} alt="" />
                                    <img className="hover:scale-95 ease-in duration-500" src={dustbin} alt="" />
                                    <img className="hover:scale-95 ease-in duration-500" src={gameJiostick} alt="" />
                                    <img className="hover:scale-95 ease-in duration-500" src={gamePlayer} alt="" />
                                    <img className="hover:scale-95 ease-in duration-500" src={graphicsDesing} alt="" />
                                    <img className="hover:scale-95 ease-in duration-500" src={hat} alt="" />
                                    <img className="hover:scale-95 ease-in duration-500" src={iceCream} alt="" />
                                    <img className="hover:scale-95 ease-in duration-500" src={laptopWarning} alt="" />
                                    <img className="hover:scale-95 ease-in duration-500" src={lemon} alt="" />
                                    <img className="hover:scale-95 ease-in duration-500" src={loadTruck} alt="" />
                                    <img className="hover:scale-95 ease-in duration-500" src={lock} alt="" />
                                    <img className="hover:scale-95 ease-in duration-500" src={map} alt="" />
                                    <img className="hover:scale-95 ease-in duration-500" src={microscope} alt="" />
                                    <img className="hover:scale-95 ease-in duration-500" src={Pencile} alt="" />
                                    <img className="hover:scale-95 ease-in duration-500" src={personChair} alt="" />
                                    <img className="hover:scale-95 ease-in duration-500" src={monitorSpeaker} alt="" />
                                    <img className="hover:scale-95 ease-in duration-500" src={movieCamera} alt="" />
                                    <img className="hover:scale-95 ease-in duration-500" src={Notebook} alt="" />
                                    <img className="hover:scale-95 ease-in duration-500" src={paintWall} alt="" />
                                    <img className="hover:scale-95 ease-in duration-500" src={personWallet} alt="" />
                                    <img className="hover:scale-95 ease-in duration-500" src={popeye} alt="" />
                                    <img className="hover:scale-95 ease-in duration-500" src={rocket} alt="" />
                                    <img className="hover:scale-95 ease-in duration-500" src={scetoor} alt="" />
                                    <img className="hover:scale-95 ease-in duration-500" src={stopWatch} alt="" />
                                    <img className="hover:scale-95 ease-in duration-500" src={tabelt} alt="" />
                                    <img className="hover:scale-95 ease-in duration-500" src={tent} alt="" />
                                    <img className="hover:scale-95 ease-in duration-500" src={thermometter} alt="" />
                                    <img className="hover:scale-95 ease-in duration-500" src={umberla} alt="" />
                                    <img className="hover:scale-95 ease-in duration-500" src={Usb} alt="" />
                                    <img className="hover:scale-95 ease-in duration-500" src={walkitakei} alt="" />
                                    <img className="hover:scale-95 ease-in duration-500" src={Wallet} alt="" />
                                    <img className="hover:scale-95 ease-in duration-500" src={Four} alt="" />

                                    </ul>
                        </div>
                        <div className={openTab === 3 ? "block" : "hidden"}>
                            
                            <ul className=" grid justify-center lg:grid-cols-3 md:grid-cols-2 py-11 lg:px-24 sm:grid-cols-1 gap-11">
                                {/* Logodesign */}
                                <img className="hover:scale-95 ease-in duration-500" src={across} alt="" />
                                <img className="hover:scale-95 ease-in duration-500" src={chat} alt="" />
                                <img className="hover:scale-95 ease-in duration-500" src={music} alt="" />
                                <img className="hover:scale-95 ease-in duration-500" src={health} alt="" />
                                <img className="hover:scale-95 ease-in duration-500" src={business} alt="" />
                                <img className="hover:scale-95 ease-in duration-500" src={cosmic} alt="" />
                                <img className="hover:scale-95 ease-in duration-500" src={imageText} alt="" />
                                <img className="hover:scale-95 ease-in duration-500" src={hoppoe} alt="" />
                                <img className="hover:scale-95 ease-in duration-500" src={smooky} alt="" />
                                <img className="hover:scale-95 ease-in duration-500" src={modern} alt="" />
                                <img className="hover:scale-95 ease-in duration-500" src={movie} alt="" />
                                <img className="hover:scale-95 ease-in duration-500" src={jadayu} alt="" />
                                <img className="hover:scale-95 ease-in duration-500" src={be} alt="" />
                                <img className="hover:scale-95 ease-in duration-500" src={boffin} alt="" />
                                <img className="hover:scale-95 ease-in duration-500" src={natural} alt="" />
                                <img className="hover:scale-95 ease-in duration-500" src={nextTask} alt="" />
                                <img className="hover:scale-95 ease-in duration-500" src={nitro} alt="" />
                                <img className="hover:scale-95 ease-in duration-500" src={one} alt="" />
                                <img className="hover:scale-95 ease-in duration-500" src={q} alt="" />
                                <img className="hover:scale-95 ease-in duration-500" src={spm} alt="" />
                                <img className="hover:scale-95 ease-in duration-500" src={txtil} alt="" />
                                <img className="hover:scale-95 ease-in duration-500" src={vijay} alt="" />
                                <img className="hover:scale-95 ease-in duration-500" src={Ymono} alt="" />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}