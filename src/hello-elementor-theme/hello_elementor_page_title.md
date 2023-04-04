# Page Title

The theme displays the `<h1>` page title above the content area. Developers can override this using a filter hook in a child-theme. This is useful when using page builders to style the entire page, titles included.

## Hook Details

* **Hook Type:** Filter Hook
* **Hook Name:** `hello_elementor_page_title`
* **Default Value:** `true`

The hook controls whether the theme should display the `<h1>` page title above the content area. By default it's set to `true`,  however developers can prevent the theme from displaying the page title.

Page builders, like Elementor, have the option to hide the title. In most cases it's done using CSS, but the HTML code remains. This hook removed the HTML from the page completely.

## Usage

To prevent the theme from displaying the `<h1>` page title, use the following hook in a child-theme `functions.php` file:

```php
add_filter( 'hello_elementor_page_title', '__return_false' );
```
