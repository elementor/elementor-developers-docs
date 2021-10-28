# Update Action

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Basic" />

To modify an existing action, we need to change the action object value in a specific entry.

## Update Widget Action

In the example below, we'll update the "duplicate" action of a widget:

```js {1}
elementor.hooks.addFilter( 'elements/widget/contextMenuGroups', ( groups, view ) => {

	groups.forEach( ( group ) => {
		if ( 'general' === group.name ) {
			group.actions.forEach( ( action ) => {
				if ( 'duplicate' === action.name ) {
					action.icon = 'eicon-code';
				}
			} );
		}
	} );

	return groups;

} );
```

## Update Column Action

Now we'll update the label of a "delete" action for a column:

```js {1}
elementor.hooks.addFilter( 'elements/column/contextMenuGroups', ( groups, view ) => {

	groups.forEach( ( group ) => {
		if ( 'delete' === group.name ) {
			group.actions.forEach( ( action ) => {
				if ( 'delete' === action.name ) {
					action.title = 'Remove';
				}
			} );
		}
	} );

	return groups;

} );
```

## Update Section Action

Now we'll update the "edit" action of an entire section:

```js {1}
elementor.hooks.addFilter( 'elements/section/contextMenuGroups', ( groups, view ) => {

	groups.forEach( ( group ) => {
		if ( 'general' === group.name ) {
			group.actions.forEach( ( action ) => {
				if ( 'edit' === action.name ) {
					action.icon = 'eicon-alert';
					action.title = 'Hellooo';
					action.callback = () => alert( 'bla bla' );
				}
			} );
		}
	} );

	return groups;

} );
```
