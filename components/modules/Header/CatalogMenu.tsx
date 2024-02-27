"use client";

import { $catalogMenuIsOpen, closeCatalogMenu } from "@/context/modals";
import useLang from "@/hooks/useLang";
import { useMenuAnimation } from "@/hooks/useMenuAnimation";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Header from "./Header";
import { removeOverflowHiddenFromBody } from "@/lib/utils/common";
import { useUnit } from "effector-react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import CatalogMenuButton from "./CatalogMenuButton";

const CatalogMenu = () => {
  const catalogMenuIsOpen = useUnit($catalogMenuIsOpen);
  const [showClothList, setShowClothList] = useState(false);
  const [showAccessoriesList, setShowAccessoriesList] = useState(false);
  const [showSouvenirsList, setShowSouvenirsList] = useState(false);
  const [showOfficeList, setShowOfficeList] = useState(false);
  const { lang, translations } = useLang();
  const { itemVariants, sideVariants, popupZIndex } = useMenuAnimation(
    2,
    catalogMenuIsOpen
  );

  const isMedia640 = useMediaQuery(640);

  const handleShowClothList = () => {
    setShowClothList(true);
    setShowAccessoriesList(false);
    setShowSouvenirsList(false);
    setShowOfficeList(false);
  };

  const handleShowAccessoriesList = () => {
    setShowAccessoriesList(true);
    setShowClothList(false);
    setShowSouvenirsList(false);
    setShowOfficeList(false);
  };

  const handleShowSouvenirsList = () => {
    setShowSouvenirsList(true);
    setShowAccessoriesList(false);
    setShowClothList(false);
    setShowOfficeList(false);
  };

  const handleShowOfficeList = () => {
    setShowOfficeList(true);
    setShowSouvenirsList(false);
    setShowAccessoriesList(false);
    setShowClothList(false);
  };

  const handleCloseMenu = () => {
    removeOverflowHiddenFromBody();
    closeCatalogMenu();
    setShowOfficeList(false);
    setShowSouvenirsList(false);
    setShowAccessoriesList(false);
    setShowClothList(false);
  };

  const items = [
    {
      name: translations[lang].main_menu.cloth,
      id: 1,
      items: [
        translations[lang].comparison["t-shirts"],
        translations[lang].comparison["long-sleeves"],
        translations[lang].comparison.hoodie,
        translations[lang].comparison.outerwear,
      ],
      handler: handleShowClothList,
    },
    {
      name: translations[lang].main_menu.accessories,
      id: 2,
      items: [
        translations[lang].comparison.bags,
        translations[lang].comparison.headdress,
        translations[lang].comparison.umbrella,
      ],
      handler: handleShowAccessoriesList,
    },
    {
      name: translations[lang].main_menu.souvenirs,
      id: 3,
      items: [
        translations[lang].comparison["business-souvenirs"],
        translations[lang].comparison["promotional-souvenirs"],
      ],
      handler: handleShowSouvenirsList,
    },
    {
      name: translations[lang].main_menu.office,
      id: 4,
      items: [
        translations[lang].comparison.notebook,
        translations[lang].comparison.pen,
      ],
      handler: handleShowOfficeList,
    },
  ];

  return (
    <div className="catalog-menu" style={{ zIndex: popupZIndex }}>
      <AnimatePresence>
        {catalogMenuIsOpen && (
          <motion.aside
            initial={{ width: 0 }}
            animate={{
              width: "calc(100% - 0px)",
            }}
            exit={{
              width: 0,
              transition: { delay: 0.7, duration: 0.3 },
            }}
            className="catalog-menu__aside"
          >
            <motion.div
              className="catalog-menu__inner"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              <img
                className="catalog-menu__bg"
                src="/img/menu-bg-small.png"
                alt="menu background"
              />
              <motion.button
                className="btn-reset catalog-menu__close"
                variants={itemVariants}
                onClick={handleCloseMenu}
              />
              <motion.h2
                variants={itemVariants}
                className="catalog-menu__title"
              >
                {translations[lang].main_menu.catalog}
              </motion.h2>
              <ul className="list-reset catalog-menu__list">
                {items.map(({ id, name, items, handler }) => {
                  const buttonProps = (isActive: boolean) => ({
                    handler: handler as VoidFunction,
                    name,
                    isActive,
                  });
                  return (
                    <motion.li
                      key={id}
                      variants={itemVariants}
                      className="catalog-menu__list__item"
                    >
                      {!isMedia640 && (
                        <>
                          {id === 1 && (
                            <CatalogMenuButton
                              {...buttonProps(showClothList)}
                            />
                          )}
                          {id === 2 && (
                            <CatalogMenuButton
                              {...buttonProps(showAccessoriesList)}
                            />
                          )}
                          {id === 3 && (
                            <CatalogMenuButton
                              {...buttonProps(showSouvenirsList)}
                            />
                          )}
                          {id === 4 && (
                            <CatalogMenuButton
                              {...buttonProps(showOfficeList)}
                            />
                          )}
                        </>
                      )}
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CatalogMenu;
