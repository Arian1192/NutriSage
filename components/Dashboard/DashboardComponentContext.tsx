"use client";
import { createContext, useContext } from "react";
import { Props } from "../../types/Props";
import { DashboardComponentBigCalendar } from "./DashboardComponentBigCalendar";
import { DashboardComponentCardWidget } from "./DashboardComponentCardWidget";
import { SimpleBarCharts } from "../Charts/SimpleBarCharts";
import { StackedAreaChart } from "../Charts/StackedAreaChart";
import { DashboardComponentCurrentDiet } from "./DashboardComponentCurrentDiet";

export const DashboardContext = createContext(null);

export const DashboardComponent = ({ children }: Props) => {
  return (
    <DashboardContext.Provider value={null}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error(
      "useDashboard must be used within an DashboardContextProvider"
    );
  }
  return context;
};

DashboardComponent.Calendar = DashboardComponentBigCalendar;
DashboardComponent.CardWidget = DashboardComponentCardWidget;
DashboardComponent.BarChart = SimpleBarCharts;
DashboardComponent.StackerAreaChart = StackedAreaChart;
DashboardComponent.CurrentDiet = DashboardComponentCurrentDiet;
