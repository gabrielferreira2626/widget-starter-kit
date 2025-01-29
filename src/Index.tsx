import React from "react";
import {WidgetProvider} from "./Context/WidgetContext";
import {Widget} from "./Types/Index";

import './Index.css';

type Props = {
 props: Widget;
 template: XMLDocument;
};

class WidgetElement {
 private id: string;
 private properties: Widget;
 private template: XMLDocument;

 constructor(properties: Props) {
  this.id = properties.props.power_widgetsid;
  this.properties = properties.props;
  this.template = properties.template;

  this.init();
 }

 private async init(): Promise<void> {}

 public render(): React.JSX.Element {
  return (
   <WidgetProvider value={{id: this.id}}>
    <div className="w-full h-full my-background">
     <span>Welcome to PowerDashboards!</span>
     <span>You can create your own Widget!</span>
     <span>Read Documentation: </span>
    </div>
   </WidgetProvider>
  );
 }
}

const Component: React.FunctionComponent<Props> = (props) => {
 return new WidgetElement(props).render();
};

export default Component;
