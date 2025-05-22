// "use client"

// import { Phone } from "lucide-react"
// import styled from 'styled-components';

// export default function Header() {
//   return (
//     <div className="w-full py-2 text-primary-foreground bg-muted flex items-center justify-around p-4">
//       <div className="container flex items-center justify-between">
//         <StyledWrapper>
//         <div className="marquee">
//         <div className="marquee_header"></div>
//         <div className="marquee__inner">
//           <div className="marquee__group">
//             <h1>🔥🔥🔥</h1>
//             <h1>Free for the first 5 clients — just provide the domain.</h1>
//             <h1>🔥🔥🔥</h1>
//           </div>
//         </div>   
//       </div>
//       </StyledWrapper>
//       {/* <div className="flex items-center md:hidden s justify-center gap-2 ">
//           <Phone className="h-4 w-4" />
//           <span className="text-sm font-medium text-red-500">Call us: (555) 123-4567</span>
//         </div> */}
//       </div>
//       <div className=" items-center gap-2 mt-4 hidden md:flex">
//           <Phone className="h-4 w-4" />
//           <span className="text-sm font-medium text-red-500 text-nowrap">Call us: (555) 123-4567</span>
//         </div>
//     </div>
    
//   )
// }

// const StyledWrapper = styled.div`
//   .marquee {
//     overflow: hidden;
//     /* hide the scrolling overflow */
//     width: 100%;
//     -webkit-mask-image: linear-gradient(
//       to right,
//       transparent 0%,
//       black 10%,
//       black 90%,
//       transparent 100%
//     );
//     mask-image: linear-gradient(
//       to right,
//       transparent 0%,
//       black 10%,
//       black 90%,
//       transparent 100%
//     );
//   }
//   .marquee_header {
//     font-size: 35px;
//     font-weight: 800;
//     text-align: center;
//     margin-bottom: 20px;
//   }
//   .marquee__inner {
//     display: flex;
//     width: max-content;
//     animation: marquee 15s linear infinite;
//   }

//   .marquee__group {
//     display: flex;
//   }

//   .marquee__group span {
//     margin: 0 1.5rem;
//     white-space: nowrap;
//     background: #000000;
//     color: white;
//     padding: 4px 16px 4px 12px;
//     border-radius: 6px;
//     font-size: 1.2rem;
//   }

//   @keyframes marquee {
//     0% {
//       transform: translateX(0);
//     }
//     100% {
//       transform: translateX(-80%);
//     }
//   }`;