"use client"
import { createContext, useContext } from "react";
import { Props } from "../../types/Props";

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
