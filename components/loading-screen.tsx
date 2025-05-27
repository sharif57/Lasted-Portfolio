// "use client"

// import { useEffect, useState } from "react"

// export default function LoadingScreen() {
//   const [progress, setProgress] = useState(0)

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setProgress((prev) => {
//         if (prev >= 100) {
//           clearInterval(interval)
//           return 100
//         }
//         return prev + 2
//       })
//     }, 50)

//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
//       <div className="text-center space-y-8">
//         {/* Logo or Brand */}
//         <div className="animate-pulse">
//           <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center">
//             <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
//           </div>
//         </div>

//         {/* Loading Text */}
//         <div className="space-y-4">
//           <h1 className="text-4xl font-bold text-white animate-fade-in">Welcome</h1>
//           <p className="text-blue-200 text-lg animate-fade-in delay-300">Loading your experience...</p>
//         </div>

//         {/* Progress Bar */}
//         <div className="w-64 mx-auto">
//           <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
//             <div
//               className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transition-all duration-300 ease-out"
//               style={{ width: `${progress}%` }}
//             ></div>
//           </div>
//           <p className="text-white/70 text-sm mt-2">{progress}%</p>
//         </div>

//         {/* Animated Dots */}
//         <div className="flex justify-center space-x-2">
//           <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
//           <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-100"></div>
//           <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-200"></div>
//         </div>
//       </div>
//     </div>
//   )
// }
// "use client"

// import type React from "react"

// import { useEffect, useState } from "react"
// import { Code, Palette, Zap, CheckCircle } from "lucide-react"

// interface LoadingStep {
//   icon: React.ElementType
//   text: string
//   completed: boolean
// }

// export default function LoadingScreen({ isComplete }: { isComplete: boolean }) {
//   const [progress, setProgress] = useState(0)
//   const [currentStep, setCurrentStep] = useState(0)
//   const [steps, setSteps] = useState<LoadingStep[]>([
//     { icon: Code, text: "Initializing...", completed: false },
//     { icon: Palette, text: "Loading projects...", completed: false },
//     { icon: Zap, text: "Preparing experience...", completed: false },
//     { icon: CheckCircle, text: "Almost ready...", completed: false },
//   ])

//   useEffect(() => {
//     const stepDurations = [500, 800, 600, 700]
//     let totalTime = 0

//     stepDurations.forEach((duration, index) => {
//       totalTime += duration
//       setTimeout(() => {
//         setCurrentStep(index + 1)
//         setSteps((prev) => prev.map((step, i) => (i <= index ? { ...step, completed: true } : step)))
//       }, totalTime)
//     })

//     // Progress animation
//     const progressInterval = setInterval(
//       () => {
//         setProgress((prev) => {
//           if (prev >= 100) {
//             clearInterval(progressInterval)
//             return 100
//           }
//           return prev + 1
//         })
//       },
//       stepDurations.reduce((a, b) => a + b, 0) / 100,
//     )

//     return () => clearInterval(progressInterval)
//   }, [])

//   return (
//     <div
//       className={`fixed inset-0 z-50 transition-all duration-800 ${isComplete ? "opacity-0 scale-110" : "opacity-100 scale-100"}`}
//     >
//       {/* Animated Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
//         <div
//           className="absolute inset-0 opacity-20"
//           style={{
//             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%239C92AC' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//           }}
//         ></div>

//         {/* Floating Elements */}
//         <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
//         <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
//         <div className="absolute bottom-32 left-40 w-3 h-3 bg-indigo-400 rounded-full animate-bounce"></div>
//         <div className="absolute bottom-20 right-20 w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-1000"></div>
//       </div>

//       <div className="relative z-10 flex items-center justify-center min-h-screen p-8">
//         <div className="text-center space-y-12 max-w-md w-full">
//           {/* Logo/Name Section */}
//           <div className="space-y-6">
//             <div className="relative">
//               <div className="w-24 h-24 mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full p-1 animate-spin-slow">
//                 <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center">
//                   <span className="text-2xl font-bold text-white font-playfair">SM</span>
//                 </div>
//               </div>
//               <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
//             </div>

//             <div className="space-y-2">
//               <h1 className="text-4xl md:text-5xl font-bold text-white font-playfair tracking-wide">Sharif Mahamud</h1>
//               <p className="text-blue-200 text-lg font-light tracking-wider">
//                 Full Stack Developer & Creative Designer
//               </p>
//             </div>
//           </div>

//           {/* Loading Steps */}
//           <div className="space-y-6">
//             <div className="space-y-4">
//               {steps.map((step, index) => (
//                 <div
//                   key={index}
//                   className={`flex items-center space-x-4 transition-all duration-500 ${
//                     index <= currentStep - 1 ? "opacity-100 translate-x-0" : "opacity-50 translate-x-4"
//                   }`}
//                 >
//                   <div
//                     className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
//                       step.completed
//                         ? "bg-green-500 text-white"
//                         : index === currentStep
//                           ? "bg-blue-500 text-white animate-pulse"
//                           : "bg-slate-700 text-slate-400"
//                     }`}
//                   >
//                     <step.icon className="w-4 h-4" />
//                   </div>
//                   <span
//                     className={`text-sm transition-colors duration-300 ${
//                       step.completed ? "text-green-400" : "text-slate-300"
//                     }`}
//                   >
//                     {step.text}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             {/* Progress Bar */}
//             <div className="space-y-3">
//               <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
//                 <div
//                   className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-300 ease-out relative"
//                   style={{ width: `${progress}%` }}
//                 >
//                   <div className="absolute inset-0 bg-white opacity-30 animate-pulse"></div>
//                 </div>
//               </div>
//               <div className="flex justify-between text-xs text-slate-400">
//                 <span>Loading Portfolio</span>
//                 <span>{progress}%</span>
//               </div>
//             </div>
//           </div>

//           {/* Animated Quote */}
//           <div className="opacity-70">
//             <p className="text-slate-300 text-sm italic font-light">
//               {"Crafting digital experiences with passion and precision"}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

import React from "react";

export default function LoadingStep() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-green-500">
      <div className="loader">
        <div className="truckWrapper">
          <div className="truckBody">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 198 93"
              className="trucksvg"
            >
              <path
                stroke-width="3"
                stroke="#282828"
                fill="#F83D3D"
                d="M135 22.5H177.264C178.295 22.5 179.22 23.133 179.594 24.0939L192.33 56.8443C192.442 57.1332 192.5 57.4404 192.5 57.7504V89C192.5 90.3807 191.381 91.5 190 91.5H135C133.619 91.5 132.5 90.3807 132.5 89V25C132.5 23.6193 133.619 22.5 135 22.5Z"
              ></path>
              <path
                stroke-width="3"
                stroke="#282828"
                fill="#7D7C7C"
                d="M146 33.5H181.741C182.779 33.5 183.709 34.1415 184.078 35.112L190.538 52.112C191.16 53.748 189.951 55.5 188.201 55.5H146C144.619 55.5 143.5 54.3807 143.5 53V36C143.5 34.6193 144.619 33.5 146 33.5Z"
              ></path>
              <path
                stroke-width="2"
                stroke="#282828"
                fill="#282828"
                d="M150 65C150 65.39 149.763 65.8656 149.127 66.2893C148.499 66.7083 147.573 67 146.5 67C145.427 67 144.501 66.7083 143.873 66.2893C143.237 65.8656 143 65.39 143 65C143 64.61 143.237 64.1344 143.873 63.7107C144.501 63.2917 145.427 63 146.5 63C147.573 63 148.499 63.2917 149.127 63.7107C149.763 64.1344 150 64.61 150 65Z"
              ></path>
              <rect
                stroke-width="2"
                stroke="#282828"
                fill="#FFFCAB"
                rx="1"
                height="7"
                width="5"
                y="63"
                x="187"
              ></rect>
              <rect
                stroke-width="2"
                stroke="#282828"
                fill="#282828"
                rx="1"
                height="11"
                width="4"
                y="81"
                x="193"
              ></rect>
              <rect
                stroke-width="3"
                stroke="#282828"
                fill="#DFDFDF"
                rx="2.5"
                height="90"
                width="121"
                y="1.5"
                x="6.5"
              ></rect>
              <rect
                stroke-width="2"
                stroke="#282828"
                fill="#DFDFDF"
                rx="2"
                height="4"
                width="6"
                y="84"
                x="1"
              ></rect>
            </svg>
          </div>
          <div className="truckTires">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 30 30"
              className="tiresvg"
            >
              <circle
                stroke-width="3"
                stroke="#282828"
                fill="#282828"
                r="13.5"
                cy="15"
                cx="15"
              ></circle>
              <circle fill="#DFDFDF" r="7" cy="15" cx="15"></circle>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 30 30"
              className="tiresvg"
            >
              <circle
                stroke-width="3"
                stroke="#282828"
                fill="#282828"
                r="13.5"
                cy="15"
                cx="15"
              ></circle>
              <circle fill="#DFDFDF" r="7" cy="15" cx="15"></circle>
            </svg>
          </div>
          <div className="road"></div>

          <svg
            xmlSpace="preserve"
            viewBox="0 0 453.459 453.459"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
            id="Capa_1"
            version="1.1"
            fill="#000000"
            className="lampPost"
          >
            <path
              d="M252.882,0c-37.781,0-68.686,29.953-70.245,67.358h-6.917v8.954c-26.109,2.163-45.463,10.011-45.463,19.366h9.993
c-1.65,5.146-2.507,10.54-2.507,16.017c0,28.956,23.558,52.514,52.514,52.514c28.956,0,52.514-23.558,52.514-52.514
c0-5.478-0.856-10.872-2.506-16.017h9.992c0-9.354-19.352-17.204-45.463-19.366v-8.954h-6.149C200.189,38.779,223.924,16,252.882,16
c29.952,0,54.32,24.368,54.32,54.32c0,28.774-11.078,37.009-25.105,47.437c-17.444,12.968-37.216,27.667-37.216,78.884v113.914
h-0.797c-5.068,0-9.174,4.108-9.174,9.177c0,2.844,1.293,5.383,3.321,7.066c-3.432,27.933-26.851,95.744-8.226,115.459v11.202h45.75
v-11.202c18.625-19.715-4.794-87.527-8.227-115.459c2.029-1.683,3.322-4.223,3.322-7.066c0-5.068-4.107-9.177-9.176-9.177h-0.795
V196.641c0-43.174,14.942-54.283,30.762-66.043c14.793-10.997,31.559-23.461,31.559-60.277C323.202,31.545,291.656,0,252.882,0z
M232.77,111.694c0,23.442-19.071,42.514-42.514,42.514c-23.442,0-42.514-19.072-42.514-42.514c0-5.531,1.078-10.957,3.141-16.017
h78.747C231.693,100.736,232.77,106.162,232.77,111.694z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
