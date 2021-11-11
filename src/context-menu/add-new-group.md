# Add New Group

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Basic" />

To add a new group to the context menu, we need to define a new group object and insert it into the relevant menu type (i.e. widget, column or section).

## Add New Widget Group

In the example below, we'll add a new group to the `widgets` context menu. This group will add new actions only when right-clicking widgets in the preview.

```js
elementor.hooks.addFilter( 'elements/context-menu/groups', ( customGroups, elementType ) => {

	const newGroup = {
		name: 'custom-widget-actions',
		actions: [
			{
				name: 'widget-action-1',
				icon: 'eicon-alert',
				title: 'Widget Action 1',
				isEnabled: () => true,
				callback: () => console.log( 'Test 1' ),
			},
			{
				name: 'widget-action-2',
				icon: 'eicon-alert',
				title: 'Widget Action 2',
				isEnabled: () => true,
				callback: () => console.log( 'Test 2' ),
			}
        ],
	}

	if ( 'widget' === elementType ) {
		customGroups.push( newGroup );
	}

	return customGroups;

} );
```

## Add New Column Group

Now we'll add a new group to the `column` context menu.

```js
elementor.hooks.addFilter( 'elements/context-menu/groups', ( customGroups, elementType ) => {

	const newGroup = {
		name: 'custom-column-actions',
		actions: [
			/* Actions */
		],
	}

	if ( 'column' === elementType ) {
		customGroups.push( newGroup );
	}

	return customGroups;

} );
```

## Add New Section Group

Next we'll add a new group to the `section` context menu.

```js
elementor.hooks.addFilter( 'elements/context-menu/groups', ( customGroups, elementType ) => {

	const newGroup = {
		name: 'custom-section-actions',
		actions: [
			/* Actions */
		],
	}

	if ( 'section' === elementType ) {
		customGroups.push( newGroup );
	}

	return customGroups;

} );
```
