import Link from "next/link";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io"; // Import Arrow icons

const MobileResponsiveNav = () => {
  const menuItems = [
    {
      title: "All Jewellery",
      submenus: [
        {
          title: "Category",
          links: [
            "Necklaces",
            "Earrings",
            "Bangles",
            "Mangalsutra",
            "Rings",
            "Chains",
            "Nose Pins",
          ],
        },
        { title: "Gender", links: ["Men", "Women"] },
        { title: "Price Band", links: ["Low", "Medium", "High"] },
      ],
    },
    {
      title: "Gold",
      submenus: [
        {
          title: "Category",
          links: [
            "Necklaces",
            "Earrings",
            "Bangles",
            "Mangalsutra",
            "Rings",
            "Chains",
            "Nose Pins",
          ],
        },
        { title: "Gender", links: ["Men", "Women"] },
        { title: "Price Band", links: ["Low", "Medium", "High"] },
      ],
    },
    {
      title: "Diamond",
      submenus: [
        {
          title: "Category",
          links: [
            "Necklaces",
            "Earrings",
            "Bangles",
            "Mangalsutra",
            "Rings",
            "Chains",
            "Nose Pins",
          ],
        },
        { title: "Gender", links: ["Men", "Women"] },
        { title: "Price Band", links: ["Low", "Medium", "High"] },
      ],
    },
    {
      title: "Earrings",
      submenus: [
        {
          title: "Category",
          links: [
            "Necklaces",
            "Earrings",
            "Bangles",
            "Mangalsutra",
            "Rings",
            "Chains",
            "Nose Pins",
          ],
        },
        { title: "Gender", links: ["Men", "Women"] },
        { title: "Price Band", links: ["Low", "Medium", "High"] },
      ],
    },
    {
      title: "Rings",
      submenus: [
        {
          title: "Category",
          links: ["Engagement Rings", "Wedding Rings", "Fashion Rings"],
        },
        {
          title: "Material",
          links: ["Gold Rings", "Diamond Rings", "Platinum Rings"],
        },
        {
          title: "Price Band",
          links: ["Under $1000", "$1000 - $5000", "Above $5000"],
        },
      ],
    },
    {
      title: "Necklaces",
      submenus: [
        {
          title: "Material",
          links: ["Gold Necklaces", "Diamond Necklaces", "Silver Necklaces"],
        },
        {
          title: "Style",
          links: ["Pendant Necklaces", "Choker Necklaces", "Chain Necklaces"],
        },
        {
          title: "Occasion",
          links: ["Wedding Necklaces", "Everyday Wear", "Party Wear"],
        },
      ],
    },
    {
      title: "Bracelets",
      submenus: [
        {
          title: "Material",
          links: ["Gold Bracelets", "Diamond Bracelets", "Silver Bracelets"],
        },
        {
          title: "Style",
          links: ["Bangle Bracelets", "Chain Bracelets", "Cuff Bracelets"],
        },
        {
          title: "Occasion",
          links: ["Formal Bracelets", "Casual Bracelets", "Party Bracelets"],
        },
      ],
    },
    {
      title: "Earrings",
      submenus: [
        {
          title: "Material",
          links: ["Gold Earrings", "Diamond Earrings", "Silver Earrings"],
        },
        {
          title: "Style",
          links: ["Stud Earrings", "Hoop Earrings", "Drop Earrings"],
        },
        {
          title: "Occasion",
          links: ["Wedding Earrings", "Daily Wear Earrings", "Party Earrings"],
        },
      ],
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState(
    Array(menuItems.length).fill(false)
  );
  const [openSubmenus, setOpenSubmenus] = useState(
    Array(menuItems.length).fill(null)
  );

  const toggleMenu = (index) => {
    setOpenMenus((prev) => {
      const newOpenMenus = [...prev];
      newOpenMenus[index] = !newOpenMenus[index];
      return newOpenMenus;
    });
  };

  const toggleSubmenu = (index, submenuIndex) => {
    setOpenSubmenus((prev) => {
      const newOpenSubmenus = [...prev];
      newOpenSubmenus[index] =
        newOpenSubmenus[index] === submenuIndex ? null : submenuIndex;
      return newOpenSubmenus;
    });
  };

  return (
    <div className="md:w-auto w-full flex justify-between items-center relative p-5 sm:hidden pt-[100px]">
      <div
        className="fixed top-0 right-0 m-4 p-2 cursor-pointer z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <RxCross2 size={25} /> : <IoMenu size={25} />}
      </div>

      {isOpen && (
        <ul className="md:hidden bg-white w-full h-full fixed top-0 left-0 py-8 pl-4 z-40">
          {menuItems.map((item, index) => (
            <li key={index} className="block py-2">
              <div className="flex justify-between items-center">
                <div
                  className="cursor-pointer flex items-center"
                  onClick={() => toggleMenu(index)}
                >
                  {openMenus[index] ? (
                    <IoIosArrowUp size={20} />
                  ) : (
                    <IoIosArrowDown size={20} />
                  )}
                  <Link
                    href={`/${item.title.toLowerCase().replace(/\s+/g, "")}`}
                    className="block py-2 px-3 ml-2"
                  >
                    {item.title}
                  </Link>
                </div>
              </div>
              {openMenus[index] && (
                <ul className="pl-4">
                  {item.submenus.map((submenu, subIndex) => (
                    <li key={subIndex} className="py-1">
                      <div
                        className="cursor-pointer flex items-center"
                        onClick={() => toggleSubmenu(index, subIndex)}
                      >
                        {openSubmenus[index] === subIndex ? (
                          <IoIosArrowUp size={20} />
                        ) : (
                          <IoIosArrowDown size={20} />
                        )}
                        <strong>{submenu.title}</strong>
                      </div>
                      {openSubmenus[index] === subIndex && (
                        <ul className="pl-4">
                          {submenu.links.map((link, linkIndex) => (
                            <li key={linkIndex} className="py-1">
                              <Link
                                href={`/${link
                                  .toLowerCase()
                                  .replace(/\s+/g, "")}`}
                                className="block py-1 px-3"
                              >
                                {link}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MobileResponsiveNav;
