import React from "react";
import {WidgetProvider} from "./Context/WidgetContext";

import {useXML} from "@powerdashboards/utils";

/**
 * Interface: WidgetProperties
 * ---------------------------
 * Represents the properties required to define a widget. These properties
 * map directly to the fields in the `power_widget` table, providing
 * a structured and type-safe way to interact with widget data.
 *
 * Properties:
 * -----------
 * - `power_widgetsid` (string):
 *   Unique identifier for the widget. Essential for distinguishing
 *   between multiple widgets in the system.
 *
 * - `power_name` (string):
 *   The display name of the widget. Helps users identify the widget's purpose.
 *
 * - `power_description` (string):
 *   A brief explanation of the widget's functionality or role.
 *
 * - `power_code` (string):
 *   XML content defining the widget's layout or structure.
 *   Used internally to generate the widget's template.
 *
 * - `power_actions` (string):
 *   XML content specifying the actions or operations the widget can perform.
 *
 * Usage:
 * ------
 * This interface is integral to ensuring that widget-related data is properly
 * typed and validated within the application. By adhering to this structure,
 * developers can streamline the creation and management of widgets.
 */

interface WidgetProperties {
 power_widgetsid: string;
 power_name: string;
 power_description: string;
 power_xml_header: string;
 power_xml_elements: string;
 power_xml_footer: string;
 power_actions: string;
}

class WidgetElement {
 private id: string;
 private properties: WidgetProperties;
 private template: XMLDocument | null;
 private actions: XMLDocument | null;

 constructor(properties: WidgetProperties) {
  this.properties = properties;
  this.id = this.properties.power_widgetsid;

  const {document: template} = useXML(this.properties.power_xml_header + this.properties.power_xml_elements + this.properties.power_xml_footer);
  const {document: actions} = useXML(this.properties.power_actions);

  this.template = template;
  this.actions = actions;

  this.init();
 }

 private init(): void {
  /**
   *
   * Initializes the widget instance. This method sets up any necessary
   * configurations or preparations required for the widget to function
   * correctly.
   *
   * This is a private method, invoked internally during the construction
   * of the `WidgetElement` class. It is intended to handle setup operations
   * such as:
   * - Preparing the widget template from the provided XML data.
   * - Parsing the actions XML to configure interactive behaviors.
   *
   * Extend this method to include additional initialization logic if needed,
   * such as setting up event listeners, applying default styles, or
   * pre-fetching data for the widget.
   */
 }

 public render(): React.JSX.Element {
  return (
   <WidgetProvider value={{id: this.id, template: this.template, actions: this.actions}}>
    <div>
     <span>Welcome to PowerDashboards!</span>
     <span>You can create your own Widget!</span>
     <span>Read Documentation: </span>
    </div>
   </WidgetProvider>
  );
 }
}

const Widget: React.FunctionComponent<WidgetProperties> = (props: WidgetProperties) => new WidgetElement(props).render();

export default Widget;
