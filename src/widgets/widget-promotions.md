# Widget Promotions

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

<img :src="$withBase('/assets/img/elementor-widget-promotion.png')" alt="Elementor Widget Promotion" style="float: right; width: 300px; margin-left: 20px; margin-bottom: 20px;">

Elementor widgets have two builtin location in the widget panel for promotions and upsells.

The first option is a simple "Need Help?" url which is an external link with general information about the widget.

The second option is a call-to-action area with offers to upgrade to premium widgets/products/services.

## Widget Help URL

Help links displayed at the bottom of the widget panel bellow all the sections. This is a builtin feature providing the user consistent user experience across all Elementor widgets.

Each widget have the option to set an external link containing general information about that specific widget and instruction how to use it.

```php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	public function get_custom_help_url(): string {
		return 'https://example.com/widget-name';
	}

}
```

## Widget Promotion

Promotions are a way for freemium plugins to offer upsells to upgrade to premium widgets/products/services. Widget promotions displayed at the bottom of the widget panel.

```php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function get_upsale_data(): array {
		return [
			'condition' => ! \Elementor\Utils::has_pro(),
			'image' => esc_url( ELEMENTOR_ASSETS_URL . 'images/go-pro.svg' ),
			'image_alt' => esc_attr__( 'Upgrade', 'textdomain' ),
			'title' => esc_html__( 'Promotion heading', 'textdomain' ),
			'description' => esc_html__( 'Get the premium version of the widget and grow your website capabilities.', 'textdomain' ),
			'upgrade_url' => esc_url( 'https://example.com/upgrade-to-pro/' ),
			'upgrade_text' => esc_html__( 'Upgrade Now', 'textdomain' ),
		];
	}

}
```

This is the place to emphasize that the promotion is set on a specific widget. It allows addon developers to create a custom CTA to promote a premium version of that widget.

There is an option to conditionally hide/display this promotion if some conditions are met. For example, Elementor uses widget promotions only when Elementor Pro is not active, therefore paying customers don't see widget promotions.
