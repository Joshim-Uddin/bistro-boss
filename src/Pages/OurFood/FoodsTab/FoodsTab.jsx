import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SaladTab from "./SaladTab";
import PizzaTab from "./PizzaTab";
import SoupTab from "./SoupTab";
import DessertsTab from "./DessertTab";
import DrinksTab from "./DrinksTab";

const FoodsTab = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <Tabs
      defaultIndex={tabIndex}
      onSelect={(index) => setTabIndex(index)}
      className="jar my-12"
    >
      <TabList className="tabs uppercase flex items-center justify-center">
        <Tab className="tab tab-lifted">Salad</Tab>
        <Tab className="tab tab-lifted ">Pizza</Tab>
        <Tab className="tab tab-lifted">Soups</Tab>
        <Tab className="tab tab-lifted">Desserts</Tab>
        <Tab className="tab tab-lifted">Drinks</Tab>
      </TabList>

      <TabPanel>
        <SaladTab />
      </TabPanel>
      <TabPanel>
        <PizzaTab />
      </TabPanel>
      <TabPanel>
        <SoupTab />
      </TabPanel>
      <TabPanel>
        <DessertsTab />
      </TabPanel>
      <TabPanel>
        <DrinksTab />
      </TabPanel>
    </Tabs>
  );
};

export default FoodsTab;
