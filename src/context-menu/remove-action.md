# Remove Action

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Basic" />

To remove an existing action from the context menu, we need to delete that action from a group.

## Remove Widget Action

In the example below, we'll remove the `widget-action` action from the `custom-widget-actions` group located in the `widget` context menu:

```js
elementor.hooks.addFilter( 'elements/context-menu/groups', ( customGroups, elementType ) => {

	if ( 'widget' === elementType ) {
		customGroups.forEach( ( group ) => {
			if ( 'custom-widget-actions' === group.name ) {
				const actionIndex = group.actions.findIndex( ( action ) => 'widget-action' === action.name );
				if ( actionIndex > -1 ) {
					group.actions.splice( actionIndex, 1 );
				}
			}
		} );
	}

	return customGroups;

} );
```

## Remove Column Action

Now we'll remove the `column-action` action from the `custom-column-actions` group located in the `column` context menu:

```js
elementor.hooks.addFilter( 'elements/context-menu/groups', ( customGroups, elementType ) => {

	if ( 'column' === elementType ) {
		customGroups.forEach( ( group ) => {
			if ( 'custom-column-actions' === group.name ) {
				const actionIndex = group.actions.findIndex( ( action ) => 'column-action' === action.name );
				if ( actionIndex > -1 ) {
					group.actions.splice( actionIndex, 1 );
				}
			}
		} );
	}

	return customGroups;

} );
```

## Remove Section Action

Next we'll remove the `section-action` action from the `custom-section-actions` group located in the `section` context menu:

```js
elementor.hooks.addFilter( 'elements/context-menu/groups', ( customGroups, elementType ) => {

	if ( 'section' === elementType ) {
		customGroups.forEach( ( group ) => {
			if ( 'custom-section-actions' === group.name ) {
				const actionIndex = group.actions.findIndex( ( action ) => 'section-action' === action.name );
				if ( actionIndex > -1 ) {
					group.actions.splice( actionIndex, 1 );
				}
			}
		} );
	}

	return customGroups;

} );
```
