import Link from "next/link";
import React, { useState } from "react";

const menuItems = [
  {
    title: "All Jewellery",
    submenus: [
      { title: "Category", links: ["Necklaces", "Earrings", "Bangles", "Mangalsutra", "Rings", "Chains", "Nose Pins"] },
      { title: "Gender", links: ["Men", "Women"] },
      { title: "Price Band", links: ["Low", "Medium", "High"] }
    ]
  },
  {
    title: "Gold",
    submenus: [
      { title: "Category", links: ["Necklaces", "Earrings", "Bangles", "Mangalsutra", "Rings", "Chains", "Nose Pins"] },
      { title: "Gender", links: ["Men", "Women"] },
      { title: "Price Band", links: ["Low", "Medium", "High"] }
    ]
  },
  {
    title: "Diamond",
    submenus: [
      { title: "Category", links: ["Necklaces", "Earrings", "Bangles", "Mangalsutra", "Rings", "Chains", "Nose Pins"] },
      { title: "Gender", links: ["Men", "Women"] },
      { title: "Price Band", links: ["Low", "Medium", "High"] }
    ]
  },
  {
    title: "Earrings",
    submenus: [
      { title: "Category", links: ["Necklaces", "Earrings", "Bangles", "Mangalsutra", "Rings", "Chains", "Nose Pins"] },
      { title: "Gender", links: ["Men", "Women"] },
      { title: "Price Band", links: ["Low", "Medium", "High"] }
    ]
  },
  {
    title: "Rings",
    submenus: [
      { title: "Category", links: ["Engagement Rings", "Wedding Rings", "Fashion Rings"] },
      { title: "Material", links: ["Gold Rings", "Diamond Rings", "Platinum Rings"] },
      { title: "Price Band", links: ["Under $1000", "$1000 - $5000", "Above $5000"] }
    ]
  },
  {
    title: "Necklaces",
    submenus: [
      { title: "Material", links: ["Gold Necklaces", "Diamond Necklaces", "Silver Necklaces"] },
      { title: "Style", links: ["Pendant Necklaces", "Choker Necklaces", "Chain Necklaces"] },
      { title: "Occasion", links: ["Wedding Necklaces", "Everyday Wear", "Party Wear"] }
    ]
  },
  {
    title: "Bracelets",
    submenus: [
      { title: "Material", links: ["Gold Bracelets", "Diamond Bracelets", "Silver Bracelets"] },
      { title: "Style", links: ["Bangle Bracelets", "Chain Bracelets", "Cuff Bracelets"] },
      { title: "Occasion", links: ["Formal Bracelets", "Casual Bracelets", "Party Bracelets"] }
    ]
  },
  {
    title: "Earrings",
    submenus: [
      { title: "Material", links: ["Gold Earrings", "Diamond Earrings", "Silver Earrings"] },
      { title: "Style", links: ["Stud Earrings", "Hoop Earrings", "Drop Earrings"] },
      { title: "Occasion", links: ["Wedding Earrings", "Daily Wear Earrings", "Party Earrings"] }
    ]
  }
];

const NavBar = () => {
  const [currentDropdown, setCurrentDropdown] = useState(null);
  const [hoverTimeout, setHoverTimeout] = useState(null);



  const handleMouseEnter = (index) => {
    clearTimeout(hoverTimeout);
    setCurrentDropdown(index);
  };
  
  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setCurrentDropdown(null);
    }, 200);
    setHoverTimeout(timeout);
  };

  return (
    <div className="">
      <ul className=" w-full z-50 p-3 shadow md:flex justify-around cursor-pointer text-base relative hidden">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="relative cursor-pointer"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex justify-between items-center">
             <Link href={`/shop/${item.title}`}>{item.title}</Link>
            </div>
            {currentDropdown === index && (
              <div
                className="p-4 bg-white absolute flex flex-auto space-x-16 rounded-md shadow-md top-9"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {item.submenus.map((submenu, subIndex) => (
                  <ul key={subIndex} className="mb-4">
                    <li className="font-semibold">{submenu.title}</li>
                    {submenu.links.map((link, linkIndex) => (
                      <li key={linkIndex} className="hover:text-red-700">
                        <Link href={`/shop/${link}`}>{link}</Link>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
