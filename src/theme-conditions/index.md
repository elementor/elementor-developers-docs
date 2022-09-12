# Theme Conditions

<Badge type="tip" vertical="top" text="Elementor Pro" /> <Badge type="warning" vertical="top" text="Intermediate" />

**Elementor Pro 2.0** introduced a condition-based template display mechanism. This allows users to specify under what conditions a template will be displayed. The conditions built into the mechanism cover most of the native *WordPress Template Hierarchy*, but sometimes you need more control with more specific conditions.

<img :src="$withBase('/assets/img/elementor-theme-conditions.png')" alt="Theme Conditions">

Elementor Pro provides a set of tools for external developers to create and register custom theme conditions.

## Condition Usage

Conditions determine where templates are displayed on a site, where popups are embedded and where code snippets are included. These conditions are used in the Elementor **Theme Builder**, Elementor **Popups** and Elementor **Custom Code**. 

When defining the display conditions, multiple conditions can be selected by clicking the "*Add Condition*" button. These conditions can be either included or excluded, thus creating complex display rules.

<img :src="$withBase('/assets/img/elementor-theme-conditions-include-exclude.png')" alt="Include/Exclude Theme Conditions">

## Managing Conditions

External developers can register new conditions. Learn how to do that:

* [Add New Condition](./add-new-condition/)

## Creating Conditions

Learn more about condition anatomy and how to create your own:

* [Condition Structure](./condition-structure/)
* [Condition Group Type](./condition-group-type/)
* [Condition Data](./condition-data/)
* [Condition Check](./condition-check/)
* [Sub Conditions](./sub-conditions/)

## Code Examples

Check out how easy it is to add new conditions:

* [Simple Example](./simple-example/)
* [Advanced Example](./advanced-example/)
