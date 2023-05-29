# Font Display

<Badge type="tip" vertical="top" text="Elementor Pro" /> <Badge type="warning" vertical="top" text="Basic" />

Elementor offers a filter hook that lets developers overwrite the "Custom Fonts" `font-display` value. In other words, you can control how font files are loaded and displayed by the browser.

## Hook Details

* **Hook Type:** Filter Hook
* **Hook Name:** `elementor_pro/custom_fonts/font_display`
* **Affects:** Frontend

## Font Display

The CSS `font-display` property defines how font files are loaded and displayed by the browser and can be set with one of the following values:

* **Default** – The font display strategy is defined by the browser.
* **Blocking** – Hides the text until the font has fully loaded.
* **Swap** – Use a fallback-font to display, until the font has fully loaded.
* **Fallback** – Hides the text for a minimal period and will use the font only if loaded within a few seconds.
* **Optional** – Hides the text for a minimal  period and will use the fallback-font unless the font is already fully loaded.

## Applying Font Display

### Google Fonts

It is possible to set the `font-display` value for "Google Fonts" from the WordPress admin. Simply go to **Elementor** → **Settings** → **Advanced** → **Google Fonts Load**.

### Custom Fonts

In order to overwrite the `font-display` value for "Custom Fonts", the following actions should be applied:

Add the following filter in the Elementor Pro plugin folder:

```php
/**
 * Control how font files are loaded and displayed by the browser.
 * Set the `font-display` property to `swap`.
 *
 * @since 1.0.0
 */
function update_font_display() {

	return 'swap'; // Or any other value.

}
add_filter( 'elementor_pro/custom_fonts/font_display', 'update_font_display' );
```

To regenerate CSS files from the admin (the value will be changed only after regenerating, go to **Elementor** → **Tools** → **General** → **Regenerate CSS**.
