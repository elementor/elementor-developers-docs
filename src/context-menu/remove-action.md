# Remove Action

To remove an existing action from the context menu, we need to delete that action from a group.

## Remove Widget Action

In the example below, we'll remove the "duplicate" action from a widget "general" group:

```js {1}
elementor.hooks.addFilter( 'elements/widget/contextMenuGroups', ( groups, view ) => {

	groups.forEach( ( group ) => {
		if ( 'general' === group.name ) {
			const actionIndex = group.actions.findIndex( ( action ) => 'duplicate' === action.name );
			group.actions.splice( actionIndex, 1 );
		}
	} );

	return groups;

} );
```

## Remove Column Action

Now we'll remove the "add new column" action from a column "add" group:

```js {1}
elementor.hooks.addFilter( 'elements/column/contextMenuGroups', ( groups, view ) => {

	groups.forEach( ( group ) => {
		if ( 'addNew' === group.name ) {
			const actionIndex = group.actions.findIndex( ( action ) => 'addNew' === action.name );
			group.actions.splice( actionIndex, 1 );
		}
	} );

	return groups;

} );
```

## Remove Section Action

Now we'll remove the "save as template" action from a section "save" group:

```js {1}
elementor.hooks.addFilter( 'elements/section/contextMenuGroups', ( groups, view ) => {

	groups.forEach( ( group ) => {
		if ( 'save' === group.name ) {
			const actionIndex = group.actions.findIndex( ( action ) => 'save' === action.name );
			group.actions.splice( actionIndex, 1 );
		}
	} );

	return groups;

} );
```
