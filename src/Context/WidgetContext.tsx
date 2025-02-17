import React, {createContext, useContext} from "react";

interface WidgetContextProps {
 id: string;
}

const WidgetContext = createContext<WidgetContextProps | undefined>(undefined);

export const useWidgetContext = () => {
 const context = useContext(WidgetContext);
 if (!context) {
  throw new Error("useWidgetContext must be used within a WidgetProvider");
 }
 return context;
};

interface WidgetProviderProps {
 value: WidgetContextProps;
 children: React.ReactNode;
}

export const WidgetProvider: React.FC<WidgetProviderProps> = ({value, children}) => (
 <WidgetContext.Provider value={value}>
  <div>{children}</div>
 </WidgetContext.Provider>
);
