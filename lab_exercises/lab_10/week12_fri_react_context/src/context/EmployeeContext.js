import React from "react";
const EmplyoyeeContext = React.createContext();
const EmployeeProvider = EmplyoyeeContext.Provider;
const EmployeeConsumer = EmplyoyeeContext.Consumer;

export default EmplyoyeeContext;
export { EmployeeProvider, EmployeeConsumer };