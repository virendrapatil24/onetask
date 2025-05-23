import EcosystemIcon from "../assets/icons/ecosystem.svg";

const features = [
  {
    title: "Integration Ecosystem",
    description:
      "Enhance your productivity by connecting with your tools, keeping your essentials in one place.",
  },
  {
    title: "Goal Setting and Tracking",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
  },
  {
    title: "Secure Data Encryption",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
  },
];

export const Features = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-5xl sm:text-6xl text-center font-bold">
          Everything you need
        </h2>
        <div className="sm:max-w-xl mx-auto">
          <p className="text-center text-xl text-white/70 mt-5">
            Enjoy customizable lists, team work tools, and smart tracking all in
            one place. Set tasks, get reminders, and see your progress simply
            and quickly.
          </p>
        </div>
        <div className="mt-16 flex flex-col sm:flex-row gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border border-white/30 px-5 sm:px-8 py-10 rounded-xl text-center sm:flex-1"
            >
              <div className="inline-flex h-14 w-14 bg-white text-black items-center justify-center rounded-lg">
                <EcosystemIcon />
              </div>
              <h3 className="mt-6 font-bold">{feature.title}</h3>
              <p className="mt-2 text-white/70 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
