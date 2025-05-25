import AccordionItem from "./AccordionItem";

const questions = [
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and bank transfers.",
  },
  {
    question: "How does the pricing work for teams?",
    answer:
      "Our pricing is based on the number of team members and the features you need. Please contact us for a custom quote.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time through your account settings.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes, we take data security very seriously and use industry-standard encryption to protect your information.",
  },
];

const FAQs = () => {
  return (
    <div className="bg-black text-white bg-gradient-to-t from-black to-[#5D2CA8]  py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-5xl sm:text-6xl font-bold text-center max-w-[648px] mx-auto">
          Frequently asked questions
        </h2>
        <div className="mt-12 max-w-[648px] mx-auto">
          {questions.map((item, index) => (
            <AccordionItem
              question={item.question}
              answer={item.answer}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
