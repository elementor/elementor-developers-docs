# Experiment Deactivation

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Advanced" />

Elementor users can access experimental features which have not been officially released. Those experiments can be deactivated from the admin panel or from the command line using the `experiments deactivate` command.

## Command

```bash
wp elementor experiments deactivate <experiment-name>
```

## Arguments

`<experiment-name>`

_(Required)_ The name of the experiment.

## Usage Examples

```bash
wp elementor experiments deactivate container
```

This command will deactivate the `container` experiment.
