import React from "react";
import Secondary from "../../../Shared/Secondary/Secondary";
import banner from "../../../assets/menu/banner3.jpg";
import "./DetailsMenu.css";
import OfferMenu from "../Offer/OfferMenu";
import DessertsMenu from "../DessertsMenu/DessertsMenu";
import PizzaMenu from "../PizzaMenu/PizzaMenu";
import SaladsMenu from "../SaladsMenu/SaladsMenu";
import SoupsMenu from "../SoupsMenu/SoupsMenu";

const DetailsMenu = () => {
  return (
    <>
      <Secondary
        img={banner}
        title="Our Menu"
        details="Would you like to try a dish?"
      />
      <OfferMenu />
      <DessertsMenu />
      <PizzaMenu />
      <SaladsMenu />
      <SoupsMenu />
    </>
  );
};

export default DetailsMenu;
