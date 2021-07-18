# Update Action

xxx

## Update Widget Action

Update existing action.

```js {1}
elementor.hooks.addFilter( 'elements/widget/contextMenuGroups', ( groups, view ) => {
   groups.forEach( ( group ) => {
      if ( 'general' === group.name ) {
         group.actions.forEach( ( action ) => {
            if ( 'duplicate' === action.name ) {
               action.icon = 'eicon-alert';
               action.title = __( 'Hellooo', 'plugin-name' );
               action.callback = () => alert( 'bla bla' );
            }
         } );
      }
   } );
   return groups;
} );
```

## Update Column Action

```js {1}
elementor.hooks.addFilter( 'elements/column/contextMenuGroups', ( groups, view ) => {

} );
```

## Update Section Action

```js {1}
elementor.hooks.addFilter( 'elements/section/contextMenuGroups', ( groups, view ) => {

} );
```
