# Editor Work Flow - Loading

The loading stage has several seperate proceses, one loads the Editor and the other loads the Document and the preview.

## Work Flow

* **Prepare Editor Config**

  * **Load post-meta Data** - PHP Check if there is post-meta called `elementor-data`.

  * **Load Document Type** - PHP Check post meta `elementor_template_type` to decide which document we are displaying. This will affect the controls to load.

* **Load Elementor Editor**

  * **Load Editor Config** - PHP outputs the entire config data in a JS variable called `var ElementorConfig`.

  * **General Loading Step** - JS. (not page spesific.) prepare all available widgets, dynamic-tags, icons, breakpoints, user permissions & capabilities, global settings and all the config needed to render the editor app. General sfuff not page specific. Page specific data include only the document info. (console: `elemntor.config`)

  * **Additional Loading Steps** - JS. Prepare page specific data. What document are we talking about, 

  * **Load Widgets Data** - JS. Then we load the elements data (=widgets). All the controls of the widgets, sections, columns, contaners. seperate load because it has lots of data.

  * **Heartbeat** - (lock from editing by other users). Enables Elementor to lock the editing screen to specific users.

* **Load Elementor Preview** - iframe with the url of the current page your are editing. loads without the post-content. rendering the theme with the content elements empty.

* **Attach document Elements into the Presview** - Then we take php represintation of the widget and inject the rendered HTML to the preview. To show you what the visitor sees.
