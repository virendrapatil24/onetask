import React from "react";

interface MenuLinksProps {
  href: string;
  text: string;
}

const MenuLinks = ({ href, text }: MenuLinksProps) => {
  return (
    <>
      <a
        href={href}
        className="text-white text-opacity-70 hover:text-opacity-100 transition duration-300 ease-in-out"
      >
        {text}
      </a>
    </>
  );
};

export default MenuLinks;
