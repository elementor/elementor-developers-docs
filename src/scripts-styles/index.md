# Scripts & Styles

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

Just like WordPress, Elementor has special hooks to register custom scripts and styles. It's very important to use the correct hook to improve site performance. Using Elementor recommendations and best practice helps Elementor enqueue files dynamically only when they are used, reducing performance impact.

## Static vs. Dynamic Loading

Some scripts should be always loaded, others only when used. Elementor allows developers the freedom of choosing either way. A good example is the Editor vs Widgets. Editor scripts should always be loaded. Widgets scripts, on the other hand, should be loaded on the frontend only if the widget is being used.

Each script and stylesheet increases the page size. This is why you should register assets and let Elementor decide whether to enqueue them. Elementor checks if the page uses an element requiring your script, and only then they are being loaded.

## Frontend Scripts & Styles

Register new scripts and styles to frontend pages using Elementor:

* [Frontend Scripts](./frontend-scripts)
* [Frontend Styles](./frontend-styles)

## Editor Scripts & Styles

Register new scripts and styles to [Elementor Editor](/editor/elementor-panel):

* [Editor Scripts](./editor-scripts)
* [Editor Styles](./editor-styles)

## Preview Scripts & Styles

Register new scripts and styles to [Elementor Preview](/editor/elementor-preview):

* [Preview Scripts](./preview-scripts)
* [Preview Styles](./preview-styles)

## Widget Scripts & Styles

Register custom scripts and styles on [Elementor Widgets](/widgets/):

* [Widget Scripts](./widget-scripts)
* [Widget Styles](./widget-styles)

## Controls Scripts & Styles

Register custom scripts and styles on [Elementor Controls](/controls/):

* [Control Scripts](./control-scripts)
* [Control Styles](./control-styles)
