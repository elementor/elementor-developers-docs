# Remove Action

xxx

## Remove Widget Action

Remove existing action.

```js {1}
elementor.hooks.addFilter( 'elements/widget/contextMenuGroups', ( groups, view ) => {
   groups.forEach( ( group ) => {
      if ( 'general' === group.name ) {
         const duplicateActionIndex = group.actions.findIndex( ( action ) => 'duplicate' === action.name );
         group.actions.splice( duplicateActionIndex, 1 );
      }
   } );
   return groups;
} );
```

## Remove Column Action

```js {1}
elementor.hooks.addFilter( 'elements/column/contextMenuGroups', ( groups, view ) => {

} );
```

## Remove Section Action

```js {1}
elementor.hooks.addFilter( 'elements/section/contextMenuGroups', ( groups, view ) => {

} );
```
