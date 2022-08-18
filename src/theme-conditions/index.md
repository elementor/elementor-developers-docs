# Theme Conditions

<Badge type="tip" vertical="top" text="Elementor Pro" /> <Badge type="warning" vertical="top" text="Intermediate" />

**Elementor Pro 2.0** introduced condition based template display mechanism, which allows users to specify where to display the template. The builtin conditions covers most of the native *WordPress Template Hierarchy*, but sometimes you need more control with more specific conditions.

<img :src="$withBase('/assets/img/elementor-theme-conditions.png')" alt="Theme Conditions">

Elementor Pro provides a set of tools for external developers to create and register custom theme conditions.

## Condition Usage

Conditions are used in Elementor **Theme Builder**, Elementor **Popups** and Elementor **Custom Code**. Conditions determine where templates are displayed in the site, where popups are embed and where code snippets are included.

When defining the display conditions, multiple conditions can be selected by clicking the "*Add Condition*" button. In addition, conditions can be either included or excluded, thus creating complex display rules.

<img :src="$withBase('/assets/img/elementor-theme-conditions-include-exclude.png')" alt="Include/Exclude Theme Conditions">

## Managing Conditions

External developers can register new conditions. Learn more how to do that:

* [Add New Condition](./add-new-condition/)

## Creating Conditions

Learn more about the condition anatomy and how to create your own:

* [Condition Structure](./condition-structure/)
* [Condition Group Type](./condition-group-type/)
* [Condition Data](./condition-data/)
* [Condition Check](./condition-check/)
* [Sub Conditions](./sub-conditions/)

## Code Examples

Check out how easy it is to add new conditions:

* [Simple Example](./simple-example/)
