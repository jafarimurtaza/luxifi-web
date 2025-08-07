// "use client"

// import { motion } from "framer-motion"

// function FloatingPaths({ position }) { // Removed type annotation for position
//   const paths = Array.from({ length: 36 }, (_, i) => ({
//     id: i,
//     d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
//       380 - i * 5 * position
//     } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
//       152 - i * 5 * position
//     } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
//       684 - i * 5 * position
//     } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
//     color: `rgba(15,23,42,${0.1 + i * 0.03})`,
//     width: 0.5 + i * 0.03,
//   }))

//   return (
//     <div className="absolute inset-0 pointer-events-none">
//       <svg className="w-full h-full text-[#FFD700]" viewBox="0 0 696 316" fill="none">
//         <title>THE ULTIMATE HOME WIFI EXPERIENCE</title>
//         <defs>
//           <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
//             <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
//             <feMerge>
//               <feMergeNode in="blur" />
//               <feMergeNode in="SourceGraphic" />
//             </feMerge>
//           </filter>
//         </defs>
//         {paths.map((path) => (
//           <motion.path
//             key={path.id}
//             d={path.d}
//             stroke="currentColor"
//             strokeWidth={path.width}
//             strokeOpacity={0.4 + path.id * 0.03}
//             filter="url(#glow)"
//             initial={{ pathLength: 0.3, opacity: 0.6 }}
//             animate={{
//               pathLength: 1,
//               opacity: [0.4, 0.7, 0.4],
//               pathOffset: [0, 1, 0],
//             }}
//             transition={{
//               duration: 20 + Math.random() * 10,
//               repeat: Number.POSITIVE_INFINITY,
//               ease: "linear",
//             }}
//           />
//         ))}
//       </svg>
//     </div>
//   )
// }

// export default function BackgroundPaths({
//   title = "THE ULTIMATE HOME WIFI EXPERIENCE",
// }) { // Removed type annotation for title
//   const words = title.split(" ")

//   return (
//     <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
//       <div className="absolute inset-0">
//         <FloatingPaths position={1} />
//         <FloatingPaths position={-1} />
//       </div>

//       <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 2 }}
//           className="max-w-4xl mx-auto"
//         >
//           <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tighter">
//             {words.map((word, wordIndex) => (
//               <span key={wordIndex} className="inline-block mr-4 last:mr-0">
//                 {word.split("").map((letter, letterIndex) => (
//                   <motion.span
//                     key={`${wordIndex}-${letterIndex}`}
//                     initial={{ y: 100, opacity: 0 }}
//                     animate={{ y: 0, opacity: 1 }}
//                     transition={{
//                       delay: wordIndex * 0.1 + letterIndex * 0.03,
//                       type: "spring",
//                       stiffness: 150,
//                       damping: 25,
//                     }}
//                     className="inline-block text-transparent bg-clip-text
//                                         bg-gradient-to-r from-white to-white/80"
//                   >
//                     {letter}
//                   </motion.span>
//                 ))}
//               </span>
//             ))}
//           </h1>

//           <div
//             className="inline-block group relative bg-gradient-to-b from-black/10 to-white/10
//                         dark:from-white/10 dark:to-black/10 p-px rounded-2xl backdrop-blur-lg
//                         overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
//           >
//             <button
//               variant="ghost"
//               className="rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md
//                             bg-neutral-900/90 hover:bg-neutral-800/90 text-white border border-[#FFD700]/30
//                             hover:shadow-lg hover:shadow-[#FFD700]/20 transition-all duration-300
//                             group-hover:-translate-y-0.5"
//             >
//               <span className="opacity-90 group-hover:opacity-100 transition-opacity">Discover Excellence</span>
//               <span
//                 className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5
//                                 transition-all duration-300"
//               >
//                 →
//               </span>
//             </button>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   )
// }

"use client";

import { motion } from "framer-motion";

function FloatingPaths({ position }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(15,23,42,${0.1 + i * 0.03})`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full text-white"
        viewBox="0 0 696 316"
        fill="none"
      >
        <title>THE ULTIMATE HOME WIFI EXPERIENCE</title>
        <p></p>
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.3 + path.id * 0.03}
            filter="url(#glow)"
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export default function BackgroundPaths({
  title = "THE ULTIMATE HOME WIFI EXPERIENCE",
}) {
  const words = title.split(" ");

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 tracking-tighter">
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mr-4 last:mr-0">
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={`${wordIndex}-${letterIndex}`}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: wordIndex * 0.1 + letterIndex * 0.03,
                      type: "spring",
                      stiffness: 150,
                      damping: 25,
                    }}
                    className="inline-block text-transparent bg-clip-text 
                                        bg-gradient-to-r from-white to-white/80"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          <div
            className="inline-block group relative bg-gradient-to-b from-black/10 to-white/10 
                        dark:from-white/10 dark:to-black/10 p-px rounded-2xl backdrop-blur-lg 
                        overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <button className="btn btn-xl btn-primary">
              <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                BOOK A CONSULTATION{" "}
              </span>
              <span
                className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 
                                transition-all duration-300"
              >
                →
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
