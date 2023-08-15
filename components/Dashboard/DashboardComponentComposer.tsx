import React from "react";
import { DashboardComponent } from "./DashboardComponentContext";
import { DashboardComponentContainer } from "./DashboardComponentContainer";

export const DashboardComponentComposer = () => {
  return (
    <DashboardComponent>
      <DashboardComponentContainer />
    </DashboardComponent>
  );
};
