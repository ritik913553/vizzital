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
      textColor: "text-amber-700"
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
      textColor: "text-gray-400"
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
      textColor: "text-yellow-500"
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
      bgColor: "bg-blue-400",
      borderColor: "border-blue-400",
      textColor: "text-blue-400"
    }
  ];


const Pricing = () => {


  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Pricing Plans
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Choose the perfect plan for your needs
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-lg border-2 ${plan.borderColor} shadow-lg overflow-hidden ${
                plan.popular ? "transform scale-105 z-10" : ""
              }`}
            >
              {plan.popular && (
                <div className={`absolute top-0 right-0 px-4 py-1 ${plan.bgColor} text-white text-xs font-bold tracking-wide transform translate-x-2 translate-y-2 rotate-12`}>
                  POPULAR
                </div>
              )}
              <div className="p-6">
                <h3 className={`text-2xl font-bold ${plan.textColor} mb-2`}>
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                  <span className="text-lg font-medium text-gray-500">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className={`h-5 w-5 ${plan.textColor} mr-2`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 px-6 rounded-md ${plan.bgColor} hover:${plan.bgColor} text-white font-semibold transition duration-200`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need something custom?</h2>
          <p className="text-lg text-gray-600 mb-6">
            We offer enterprise solutions tailored to your specific requirements.
          </p>
          <button className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;