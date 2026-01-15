import React from 'react';

export default function App() {
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
                        href="/bg.png"
                        width="100%"
                        height="100%"
                        preserveAspectRatio="xMidYMid slice"
                        mask="url(#viMask)"
                    />
                </svg>
            </div>
        </>
    );
}
