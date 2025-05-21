//   const plans = [
//     {
//       name: "Bronze",
//       price: "$9.99",
//       period: "/month",
//       features: [
//         "Basic feature access",
//         "Email support",
//         "Limited storage (10GB)",
//         "Community forum access",
//         "Up to 5 projects"
//       ],
//       popular: false,
//       bgColor: "bg-amber-700",
//       borderColor: "border-amber-700",
//       textColor: "text-amber-700"
//     },
//     {
//       name: "Silver",
//       price: "$19.99",
//       period: "/month",
//       features: [
//         "All Bronze features",
//         "Priority email support",
//         "Medium storage (50GB)",
//         "Basic analytics",
//         "Up to 20 projects"
//       ],
//       popular: false,
//       bgColor: "bg-gray-400",
//       borderColor: "border-gray-400",
//       textColor: "text-gray-400"
//     },
//     {
//       name: "Gold",
//       price: "$49.99",
//       period: "/month",
//       features: [
//         "All Silver features",
//         "Phone & email support",
//         "Large storage (200GB)",
//         "Advanced analytics",
//         "Unlimited projects",
//         "API access"
//       ],
//       popular: true,
//       bgColor: "bg-yellow-500",
//       borderColor: "border-yellow-500",
//       textColor: "text-yellow-500"
//     },
//     {
//       name: "Diamond",
//       price: "$99.99",
//       period: "/month",
//       features: [
//         "All Gold features",
//         "24/7 dedicated support",
//         "Unlimited storage",
//         "Premium analytics dashboard",
//         "Unlimited projects",
//         "API access",
//         "Priority feature requests",
//         "Account manager"
//       ],
//       popular: false,
//       bgColor: "bg-blue-400",
//       borderColor: "border-blue-400",
//       textColor: "text-blue-400"
//     }
//   ];


// const Pricing = () => {


//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
//             Pricing Plans
//           </h1>
//           <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
//             Choose the perfect plan for your needs
//           </p>
//         </div>

//         <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
//           {plans.map((plan, index) => (
//             <div 
//               key={index}
//               className={`relative rounded-lg border-2 ${plan.borderColor} shadow-lg overflow-hidden ${
//                 plan.popular ? "transform scale-105 z-10" : ""
//               }`}
//             >
//               {plan.popular && (
//                 <div className={`absolute top-0 right-0 px-4 py-1 ${plan.bgColor} text-white text-xs font-bold tracking-wide transform translate-x-2 translate-y-2 rotate-12`}>
//                   POPULAR
//                 </div>
//               )}
//               <div className="p-6">
//                 <h3 className={`text-2xl font-bold ${plan.textColor} mb-2`}>
//                   {plan.name}
//                 </h3>
//                 <div className="mb-6">
//                   <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
//                   <span className="text-lg font-medium text-gray-500">{plan.period}</span>
//                 </div>
//                 <ul className="space-y-3 mb-8">
//                   {plan.features.map((feature, idx) => (
//                     <li key={idx} className="flex items-start">
//                       <svg className={`h-5 w-5 ${plan.textColor} mr-2`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                       </svg>
//                       <span className="text-gray-700">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//                 <button
//                   className={`w-full py-3 px-6 rounded-md ${plan.bgColor} hover:${plan.bgColor} text-white font-semibold transition duration-200`}
//                 >
//                   Get Started
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-16 text-center">
//           <h2 className="text-2xl font-bold text-gray-900 mb-4">Need something custom?</h2>
//           <p className="text-lg text-gray-600 mb-6">
//             We offer enterprise solutions tailored to your specific requirements.
//           </p>
//           <button className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
//             Contact Sales
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Pricing;



const plans = [
  {
    name: "Bronze",
    price: "$9.99",
    period: "/month",
    features: [
      "Basic feature access",
      "Email support",
      "Limited storage (10GB)",
      "Community forum access",
      "Up to 5 projects"
    ],
    popular: false,
    bgColor: "bg-amber-700",
    borderColor: "border-amber-700",
    textColor: "text-amber-400"
  },
  {
    name: "Silver",
    price: "$19.99",
    period: "/month",
    features: [
      "All Bronze features",
      "Priority email support",
      "Medium storage (50GB)",
      "Basic analytics",
      "Up to 20 projects"
    ],
    popular: false,
    bgColor: "bg-gray-400",
    borderColor: "border-gray-400",
    textColor: "text-gray-300"
  },
  {
    name: "Gold",
    price: "$49.99",
    period: "/month",
    features: [
      "All Silver features",
      "Phone & email support",
      "Large storage (200GB)",
      "Advanced analytics",
      "Unlimited projects",
      "API access"
    ],
    popular: true,
    bgColor: "bg-yellow-500",
    borderColor: "border-yellow-500",
    textColor: "text-yellow-300"
  },
  {
    name: "Diamond",
    price: "$99.99",
    period: "/month",
    features: [
      "All Gold features",
      "24/7 dedicated support",
      "Unlimited storage",
      "Premium analytics dashboard",
      "Unlimited projects",
      "API access",
      "Priority feature requests",
      "Account manager"
    ],
    popular: false,
    bgColor: "bg-blue-500",
    borderColor: "border-blue-500",
    textColor: "text-blue-300"
  }
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl animate-fade-in">Flexible Pricing Plans</h1>
          <p className="mt-5 max-w-2xl mx-auto text-xl text-gray-300 animate-fade-in-delay">
            Choose a plan that fits your business and unlock the potential of premium tools.
          </p>
          <p className="mt-4 italic text-gray-400">“The best investment you can make is in yourself.” – Warren Buffett</p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 animate-slide-up">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-xl border-2 ${plan.borderColor} shadow-2xl bg-gray-800 hover:scale-105 transform transition duration-300 ease-in-out overflow-hidden`}
            >
              {plan.popular && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-3 py-1 text-xs font-bold rounded-full shadow-md">
                  POPULAR
                </div>
              )}
              <div className="p-6">
                <h3 className={`text-2xl font-bold ${plan.textColor} mb-3`}>{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                  <span className="text-lg font-medium text-gray-400">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className={`h-5 w-5 ${plan.textColor} mr-2`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-md ${plan.bgColor} hover:brightness-110 text-white font-semibold transition duration-300`}>Get Started</button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center animate-fade-in-delay-2">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Whether you're starting out or scaling up, our pricing plans are built to empower your journey. Enjoy unmatched flexibility, expert support, and a feature-rich experience.
          </p>
          <button className="mt-8 px-6 py-3 border border-indigo-600 text-indigo-300 hover:bg-indigo-700 hover:text-white rounded-md transition duration-300">
            Talk to Sales
          </button>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 1s ease-in-out;
        }
        .animate-fade-in-delay {
          animation: fadeIn 1.5s ease-in-out;
        }
        .animate-fade-in-delay-2 {
          animation: fadeIn 2s ease-in-out;
        }
        .animate-slide-up {
          animation: slideUp 1s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Pricing;
