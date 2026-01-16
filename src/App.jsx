import React, { useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import 'remixicon/fonts/remixicon.css';

export default function App() {
    let [showContent, setShowContent] = useState(false);

    // First intro animation
    useGSAP(() => {
        const tl = gsap.timeline();

        tl.to('.vi-mask-group', {
            rotate: 10,
            duration: 2,
            ease: 'Power4.easeInOut',
            transformOrigin: '50% 50%',
        }).to('.vi-mask-group', {
            scale: 10,
            duration: 2,
            delay: -1.8,
            ease: 'Expo.easeInOut',
            transformOrigin: '50% 50%',
            opacity: 0,
            onUpdate: function () {
                if (this.progress() >= 0.9) {
                    document.querySelector('.svg').remove();
                    setShowContent(true);
                    this.kill();
                }
            },
        });
    });

    // Landing section animation
    useGSAP(() => {
        if (!showContent) return;

        gsap.to('.main', {
            scale: 1,
            rotate: 0,
            duration: 2,
            delay: '-1',
            ease: 'Expo.easeInOut',
        });

        gsap.to('.sky', {
            scale: 1.1,
            rotate: 0,
            duration: 2,
            delay: '-.8',
            ease: 'Expo.easeInOut',
        });

        gsap.to('.bg', {
            scale: 1.1,
            rotate: 0,
            duration: 2,
            delay: '-.8',
            ease: 'Expo.easeInOut',
        });

        gsap.to('.charater', {
            scale: 1.4,
            x: '-50%',
            bottom: '-25%',
            rotate: 0,
            duration: 2,
            delay: '-.8',
            ease: 'Expo.easeInOut',
        });

        gsap.to('.text', {
            scale: 1,
            rotate: 0,
            duration: 2,
            delay: '-.8',
            ease: 'Expo.easeInOut',
        });

        gsap.to('.logo18', {
            scale: 1,
            rotate: 0,
            duration: 2,
            delay: '-.8',
            ease: 'Expo.easeInOut',
        });

        const main = document.querySelector('.main');

        main?.addEventListener('mousemove', function (e) {
            const XMove = (e.clientX / window.innerWidth - 0.5) * 40;

            gsap.to('.main .text', {
                x: `${XMove * 0.4}%`,
            });
            gsap.to('.sky', {
                x: XMove,
            });
            gsap.to('.bg', {
                x: XMove * 0.7,
            });
        });
    }, [showContent]);

    return (
        <>
            {/* Website intro part */}
            <div className="svg flex items-center justify-center fixed top-0 left-0 z-50 w-full h-screen overflow-hidden bg-black">
                <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
                    <defs>
                        <mask id="viMask">
                            <rect width="100%" height="100%" fill="black" />
                            <g className="vi-mask-group">
                                <text
                                    x="50%"
                                    y="50%"
                                    fontSize="250px"
                                    fontFamily="Arial black"
                                    fill="white"
                                    textAnchor="middle"
                                    dominantBaseline="middle"
                                >
                                    VI
                                </text>
                            </g>
                        </mask>
                    </defs>
                    <image
                        href="./bg.png"
                        width="100%"
                        height="100%"
                        preserveAspectRatio="xMidYMid slice"
                        mask="url(#viMask)"
                    />
                </svg>
            </div>

            {/* Full landing part */}
            {showContent && (
                <div className="w-full overflow-hidden">
                    <div className="main w-full scale-[1.7] rotate-[-10deg]">
                        {/* Landing top part */}
                        <div className="landing w-full h-screen bg-black">
                            <div className="navbar absolute z-10 top-0 left-0 w-full py-10 px-12">
                                <div className="logo flex gap-4">
                                    <div className="lines flex flex-col gap-1">
                                        <div className="line w-25 h-1 bg-white"></div>
                                        <div className="line w-15 h-1 bg-white"></div>
                                        <div className="line w-8 h-1 bg-white"></div>
                                    </div>
                                    <h3 className="text-3xl leading-none -mt-2.25 text-white">
                                        Rockstar
                                    </h3>
                                </div>
                            </div>
                            <div className="imagediv relative overflow-hidden w-full h-screen">
                                <img
                                    className="sky absolute top-0 left-0 w-full h-full scale-[1.5] rotate-[-20deg] object-cover"
                                    src="./sky.png"
                                    alt=""
                                ></img>
                                <img
                                    className="bg absolute top-0 left-0 w-full h-full scale-[1.8] rotate-3 object-cover"
                                    src="./bg.png"
                                    alt=""
                                ></img>
                                <img
                                    className="logo18 absolute bottom-[26%] left-[60%] z-20 w-[5%] scale-[1.8] rotate-[-20deg] object-cover"
                                    src="./logo18.png"
                                    alt=""
                                ></img>
                                <div className="text text-white absolute flex flex-col gap-1.5 top-12 left-1/2 -translate-x-1/2 scale-[1.4] rotate-[-10deg]">
                                    <h3 className="text-[7rem] leading-none -ml-30">
                                        grand
                                    </h3>
                                    <h3 className="text-[7rem] leading-none -ml-10">
                                        theft
                                    </h3>
                                    <h3 className="text-[7rem] leading-none -ml-30">
                                        auto
                                    </h3>
                                </div>
                                <img
                                    className="charater absolute -bottom-[150%] left-1/2 w-[28%] scale-[3] rotate-[-20deg]"
                                    src="./girlbg.png"
                                    alt=""
                                ></img>
                                <div className="btmbar absolute bottom-0 left-0 text-white w-full py-10 px-12 bg-linear-to-t from-black to-transparent">
                                    <div className="flex gap-2 items-center">
                                        <i className="text-lg ri-arrow-down-line"></i>
                                        <h3 className="text-md font-[Helvetica_Now_Display] font-bold">
                                            Scroll Down
                                        </h3>
                                    </div>

                                    <img
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-14"
                                        src="./ps5.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Landing bottom part */}
                        <div className="w-full h-screen flex items-center justify-center bg-black">
                            <div className="cntnr flex text-white w-full h-[80%]">
                                <div className="leftimg relative w-1/2 h-full">
                                    <img
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] scale-[1.3]"
                                        src="./sidech.png"
                                        alt=""
                                    />
                                </div>
                                <div className="rightimg w-[40%] py-16">
                                    <h1 className="text-5xl leading-8">Still Running,</h1>
                                    <h1 className="text-7xl">Not Hunting</h1>
                                    <p className="mt-8 text-xl font-[Helvetica_Now_Display] leading-5">
                                        Lorem, ipsum dolor sit amet consectetur
                                        adipisicing elit. Laudantium quos
                                        officiis incidunt id! Reiciendis,
                                        laborum quibusdam obcaecati eius ullam
                                        dicta omnis id corrupti? Pariatur et nam
                                        assumenda dicta adipisci debitis nostrum
                                        quasi maiores veritatis? Assumenda?
                                    </p>
                                    <p className="mt-2 text-xl font-[Helvetica_Now_Display] leading-5">
                                        Lorem, ipsum dolor sit amet consectetur
                                        adipisicing elit. Placeat et nobis
                                        fugit, cupiditate perspiciatis fuga
                                        neque.
                                    </p>
                                    <button className="bg-yellow-500 px-16 py-6 text-black text-2xl mt-8">
                                        Download Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
