import { FaTruck } from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa";
import { LuRotateCcw } from "react-icons/lu";
import { FaHeadphones } from "react-icons/fa6";

export default function Features() {
  const features = [
    {
      icon: <FaTruck />,
      title: "Free Shipping",
      description: "On orders over 500 EGP",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-500",
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure Payment",
      description: "100% secure transactions",
      iconBg: "bg-green-50",
      iconColor: "text-green-500",
    },
    {
      icon: <LuRotateCcw />,
      title: "Easy Returns",
      description: "14-day return policy",
      iconBg: "bg-orange-50",
      iconColor: "text-orange-500",
    },
    {
      icon: <FaHeadphones />,
      title: "24/7 Support",
      description: "Dedicated support team",
      iconBg: "bg-purple-50",
      iconColor: "text-purple-500",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex items-center gap-4 hover:shadow-md transition-shadow duration-300"
            >

              {/* Icon */}
              <div
                className={`w-12 h-12 shrink-0 rounded-full flex items-center justify-center text-xl ${feature.iconBg} ${feature.iconColor}`}
              >
                {feature.icon}
              </div>

              {/* Text */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900">
                  {feature.title}
                </h3>

                <p className="text-xs text-gray-500 mt-1">
                  {feature.description}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}