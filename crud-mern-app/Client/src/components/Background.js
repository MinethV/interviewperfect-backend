// import React, { useRef, useEffect } from 'react';
// import VantaGlobe from "vanta/src/vanta.globe";
// import CreateQuestion from './CreateQuestion'; // Import the CreateQuestion component
// import Questions from "../Questions";
//
// function BackgroundComponent() {
//     const backgroundRef = useRef(null);
//
//     useEffect(() => {
//         // Initialize Vanta.js effect
//         const vantaEffect = VANTA.GLOBE({
//             el: backgroundRef.current,
//             mouseControls: true,
//             touchControls: true,
//             gyroControls: false,
//             minHeight: 200.00,
//             minWidth: 200.00,
//             scale: 1.00,
//             scaleMobile: 1.00,
//             color: 0xdc3fff,
//             size: 1.10,
//             backgroundColor: 0xeaf9f9
//         });
//
//         // Cleanup function to remove Vanta.js effect when component unmounts
//         return () => {
//             if (vantaEffect) vantaEffect.destroy();
//         };
//     }
//
//     return (
//         <div ref={backgroundRef} style={{ width: '100%', height: '100vh' }}>
//             {/* Render the CreateQuestion component within the background */}
//             <CreateQuestion />
//         </div>
//     );
// };
//
// export default BackgroundComponent;
