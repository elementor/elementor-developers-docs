# Experiment Activation

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Advanced" />

Elementor provides a access to new and experimental features before they're officially released. Experiment can be activated from the admin panel or from the command line using the `experiments activate` command.

## Command

```bash
wp elementor experiments activate <experiment-name>
```

## Arguments

`<experiment-name>`

_(Required)_ The name of the experiment.

## Usage Examples

```bash
wp elementor experiments activate container
```

This command will activate the `container` experiment.
