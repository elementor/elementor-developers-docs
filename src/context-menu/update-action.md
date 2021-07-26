# Update Action

To modify an existing action we need to change the action object value in a specific entry.

## Update Widget Action

Update icon of the widget "duplicate" action:

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

Update the label of the column "delete" action:

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

Update the entire section "edit" action:

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
