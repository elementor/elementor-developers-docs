# Date Time Control

<img :src="$withBase('/assets/img/controls/control-date-time.png')" alt="Date Time Control" style="float: right;">

Elementor date time control displays a date/time picker field based on the [Flatpickr](https://flatpickr.js.org/) library.

The control is defined in `Control_Date_Time` class which extends `Base_Data_Control` class.

When using this control, the `type` should be set to `\Elementor\Controls_Manager::DATE_TIME` constant.

## Arguments

<table>
	<thead>
		<tr>
			<th>Name</th>
			<th>Type</th>
			<th>Default</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>type</code></td>
			<td><code>string</code></td>
			<td>date_time</td>
			<td>The type of the control.</td>
		</tr>
		<tr>
			<td><code>label</code></td>
			<td><code>string</code></td>
			<td></td>
			<td>The label that appears above of the field.</td>
		</tr>
		<tr>
			<td><code>description</code></td>
			<td><code>string</code></td>
			<td></td>
			<td>The description that appears below the field.</td>
		</tr>
		<tr>
			<td><code>show_label</code></td>
			<td><code>bool</code></td>
			<td>true</td>
			<td>Whether to display the label.</td>
		</tr>
		<tr>
			<td><code>label_block</code></td>
			<td><code>bool</code></td>
			<td>true</td>
			<td>Whether to display the label in a separate line.</td>
		</tr>
		<tr>
			<td><code>separator</code></td>
			<td><code>string</code></td>
			<td>default</td>
			<td>Set the position of the control separator. Available values are <code>default</code>, <code>before</code>, <code>after</code> and <code>none</code>. <code>default</code> will position the separator depending on the control type. <code>before</code> / <code>after</code> will position the separator before/after the control. <code>none</code> will hide the separator.</td>
		</tr>
		<tr>
			<td><code>picker_options</code></td>
			<td><code>array</code></td>
			<td>enableTime:true,<br>
				minuteIncrement:1
			</td>
			<td>The picker <a href="https://chmln.github.io/flatpickr/options/" target="_blank" rel="noopener">configurations</a>.</td>
		</tr>
		<tr>
			<td><code>default</code></td>
			<td><code>string</code></td>
			<td></td>
			<td>Default date/time in MySQL format (<code>YYYY-mm-dd HH:ii</code>).</td>
		</tr>
	</tbody>
</table>

## Return Value

(_`string`_) The chosen date/time in MySQL format (`YYYY-mm-dd HH:ii`).

## Usage

```php {14-20,28-29,31,37-42}
<?php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function register_controls() {

		$this->start_controls_section(
			'content_section',
			[
				'label' => esc_html__( 'Content', 'textdomain' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'due_date',
			[
				'label' => esc_html__( 'Due Date', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::DATE_TIME,
			]
		);

		$this->end_controls_section();

	}

	protected function render() {
		$settings = $this->get_settings_for_display();
		$due_date = strtotime( $this->get_settings( 'due_date' ) );
		$due_date_in_days = $due_date / DAY_IN_SECONDS;
		?>
		<p><?php printf( esc_html__( 'Something will happen in %s days.', 'textdomain' ), $due_date_in_days ); ?></p>
		<?php
	}

	protected function content_template() {
		?>
		<#
		var due_date = new Date( settings.due_date ),
		    now_date = new Date(),
		    due_date_in_days = Math.floor( ( due_date - now_date ) / 86400000 ); // 86400000 milliseconds in one Day.
		#>
		<p> Something will happen in {{{ due_date_in_days }}} days. </p>
		<?php
	}

}
```
