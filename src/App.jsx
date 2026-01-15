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

    // animation
    useGSAP(() => {
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
                x: XMove * 0.7  ,
            });
        });
    }, [showContent]);

    return (
        <>
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

            {showContent && (
                <div className="main w-full">
                    <div className="landing w-full h-screen bg-black">
                        <div className="navbar absolute z-10 top-0 left-0 w-full py-16 px-16">
                            <div className="logo flex gap-6">
                                <div className="lines flex flex-col gap-2">
                                    <div className="line w-15 h-1.5 bg-white"></div>
                                    <div className="line w-10 h-1.5 bg-white"></div>
                                    <div className="line w-5 h-1.5 bg-white"></div>
                                </div>
                                <h3 className="text-4xl leading-none -mt-2.25 text-white">
                                    Rockstar
                                </h3>
                            </div>
                        </div>
                        <div className="imagediv relative overflow-hidden w-full h-screen">
                            <img
                                className="sky absolute top-0 left-0 w-full h-full scale-[1.3] object-cover"
                                src="./sky.png"
                                alt=""
                            ></img>
                            <img
                                className="bg absolute top-0 left-0 w-full h-full scale-[1.2] object-cover"
                                src="./bg.png"
                                alt=""
                            ></img>
                            <div className="text absolute flex flex-col gap-3 top-20 left-1/2 -translate-x-1/2 text-white">
                                <h3 className="text-[12rem] leading-none -ml-40">
                                    grand
                                </h3>
                                <h3 className="text-[12rem] leading-none -ml-20">
                                    theft
                                </h3>
                                <h3 className="text-[12rem] leading-none -ml-40">
                                    auto
                                </h3>
                            </div>
                            <img
                                className="character absolute -bottom-[25%] left-1/2 -translate-x-1/2 scale-[1.4]"
                                src="./girlbg.png"
                                alt=""
                            ></img>
                        </div>
                        <div className="btmbar absolute bottom-0 left-0 text-white w-full py-16 px-10 bg-linear-to-t from-black to-transparent">
                            <div className="flex gap-4 items-center">
                                <i className="text-4xl ri-arrow-down-line"></i>
                                <h3 className="text-2xl font-[Helvetica_Now_Display]">
                                    Scroll Down
                                </h3>
                            </div>

                            <img
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-22"
                                src="./ps5.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
