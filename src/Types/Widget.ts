/* Widget represents a record in the "widget" table with associated properties. */
type Widget = {
  // The unique identifier for the widget.
  power_widgetsid: string; 
  // The name of the widget.
  power_name: string; 
  // A description providing additional details about the widget.
  power_description: string; 
  // A collection of related resources for the widget, connecting it to the "widget resources" table.
  power_widget_resources_widget_power_widgets: WidgetResource[]; 
};

/* A WidgetResource represents a record in the "widget resources" table, linked to a Widget. */
type WidgetResource = {
  // The type of the web resource, represented as a numeric value.
  power_webresource_type: number; 
  // The date when the resource was created.
  createdon: Date; 
  // The status code indicating the state of the resource.
  statuscode: number; 
  // The unique identifier for the widget resource.
  power_widget_resourcesid: string; 
  // The path or identifier for the associated web resource.
  power_webresource: string;
};

export type { Widget, WidgetResource };
