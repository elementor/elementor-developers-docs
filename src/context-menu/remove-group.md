# Remove Group

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Basic" />

To remove groups from the context menu, we need to check if the group exist in the relevant menu type and delete that group from a context menu. This will delete the entire group with all the actions assigned to this group.

## Remove Widget Group

In the example below, we'll remove the `custom-widget-actions` group from the `widgets` context menu:

```js
elementor.hooks.addFilter( 'elements/context-menu/groups', ( customGroups, elementType ) => {

	if ( 'widget' === elementType ) {
		const groupIndex = customGroups.findIndex( ( group ) => 'custom-widget-actions' === group.name );
		if ( groupIndex > -1 ) {
			customGroups.splice( groupIndex, 1 );
		}
	}

	return customGroups;

} );
```

## Remove Column Group

Now we'll remove the `custom-column-actions` group from the `columns` context menu:

```js
elementor.hooks.addFilter( 'elements/context-menu/groups', ( customGroups, elementType ) => {

	if ( 'column' === elementType ) {
		const groupIndex = customGroups.findIndex( ( group ) => 'custom-column-actions' === group.name );
		if ( groupIndex > -1 ) {
			customGroups.splice( groupIndex, 1 );
		}
	}

	return customGroups;

} );
```

## Remove Section Group

Next we'll remove the `custom-section-actions` group from the `section` context menu:

```js
elementor.hooks.addFilter( 'elements/context-menu/groups', ( customGroups, elementType ) => {

	if ( 'section' === elementType ) {
		const groupIndex = customGroups.findIndex( ( group ) => 'custom-section-actions' === group.name );
		if ( groupIndex > -1 ) {
			customGroups.splice( groupIndex, 1 );
		}
	}

	return customGroups;

} );
```
