"use client";

import PlusIcon from "../assets/icons/plus.svg";
import MinusIcon from "../assets/icons/minus.svg";
import { useState } from "react";
import clsx from "clsx";

interface AccordionItemProps {
  question: string;
  answer: string;
}

const AccordionItem = ({ question, answer }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/30 py-7">
      <div
        className="flex items-center hover:cursor-pointer "
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex-1 text-lg font-bold">{question}</span>
        {isOpen ? <MinusIcon /> : <PlusIcon />}
      </div>
      <div className={clsx("mt-4", { hidden: !isOpen })}>{answer}</div>
    </div>
  );
};

export default AccordionItem;
