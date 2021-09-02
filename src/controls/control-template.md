# Control Template

The template generates the final HTML displayed in the editor. The template uses JS to return data from the settings using the `data` JS object.

## Template Method

You can use the same JS templates to style the user interface. 
With JS templates we don’t need to retrieve data using a special function, Elementor does it for us. The data from the controls is stored in the `data` variable:

```php
<?php
class Elementor_Test_Control extends \Elementor\Base_Control {

	public function content_template() {
		$control_uid = $this->get_control_uid();
		?>

		<div class="elementor-control-field">

			<# if ( data.label ) {#>
				<label for="<?php echo $control_uid; ?>" class="elementor-control-title">{{{ data.label }}}</label>
			<# } #>

			<div class="elementor-control-input-wrapper elementor-control-unit-5 elementor-control-dynamic-switcher-wrapper">
				<input id="<?php echo $control_uid; ?>" type="{{ data.input_type }}" class="tooltip-target elementor-control-tag-area" data-tooltip="{{ data.title }}" title="{{ data.title }}" data-setting="{{ data.name }}" placeholder="{{ data.placeholder }}" />
			</div>

		</div>

		<# if ( data.description ) { #>
			<div class="elementor-control-field-description">{{{ data.description }}}</div>
		<# } #>

		<?php
	}

}
```
