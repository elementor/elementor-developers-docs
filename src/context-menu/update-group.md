# Update Group

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Basic" />

To modify an existing group, we need to change the group object. 

## Update Widget Group

In the example below, we'll simply rename the group name inside the `widget` context menu, from `custom-widget-actions` to `new-name`:

```js
elementor.hooks.addFilter( 'elements/context-menu/groups', ( customGroups, elementType ) => {

	if ( 'widget' === elementType ) {
		customGroups.forEach( ( group ) => {
			if ( 'custom-widget-actions' === group.name ) {
				group.name = 'new-name';
			}
		} );
	}

	return customGroups;

} );
```

## Update Column Group

Next, we'll remove all the actions from the `column` context menu, inside the `custom-column-actions` group:

```js
elementor.hooks.addFilter( 'elements/context-menu/groups', ( customGroups, elementType ) => {

	if ( 'column' === elementType ) {
		customGroups.forEach( ( group ) => {
			if ( 'custom-column-actions' === group.name ) {
				group.actions = {};
			}
		} );
	}

	return customGroups;

} );
```

## Update Section Group

Now we'll update the `section` context menu. Inside the `custom-section-actions` group, we will change the icon of the `section-action-1` action:

```js
elementor.hooks.addFilter( 'elements/context-menu/groups', ( customGroups, elementType ) => {

	if ( 'section' === elementType ) {
		customGroups.forEach( ( group ) => {
			if ( 'custom-section-actions' === group.name ) {
				group.actions.forEach( ( action ) => {
					if ( 'section-action-1' === action.name ) {
						action.icon = 'eicon-code';
					}
				} );
			}
		} );
	}

	return customGroups;

} );
```
