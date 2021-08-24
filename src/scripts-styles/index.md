# Scripts & Styles

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

Just like WordPress, Elementor has special hooks to register custom scripts and styles. It's very important to use the correct hook in order to improve site performance. Using Elementor recommendations and best practices helps Elementor enqueue files dynamically only when they are used, reducing performance impact.

## Static vs. Dynamic Loading

Some scripts should always be loaded, others only when used. For example, editor scripts should always be loaded, while widget scripts should should only be loaded when they are being used. Elementor allows developers the freedom of choosing either method. 

Each script and stylesheet increases the page size. This is why it is best practice to register assets and let Elementor decide whether or not to load them. Elementor checks to see if the page uses an element requiring your script, and only then it is loaded.

## Frontend Scripts & Styles

Learn more about registering new scripts and styles to frontend pages:

* [Frontend Scripts](./frontend-scripts)
* [Frontend Styles](./frontend-styles)

## Editor Scripts & Styles

Learn more about registering new scripts and styles to the [Elementor Editor](/editor/elementor-panel):

* [Editor Scripts](./editor-scripts)
* [Editor Styles](./editor-styles)

## Preview Scripts & Styles

Learn more about registering new scripts and styles to [Elementor preview](/editor/elementor-preview):

* [Preview Scripts](./preview-scripts)
* [Preview Styles](./preview-styles)

## Widget Scripts & Styles

Learn more about registering custom scripts and styles to [Elementor widgets](/widgets/):

* [Widget Scripts](./widget-scripts)
* [Widget Styles](./widget-styles)

## Controls Scripts & Styles

Learn more about registering custom scripts and styles to [Elementor controls](/controls/):

* [Control Scripts](./control-scripts)
* [Control Styles](./control-styles)
