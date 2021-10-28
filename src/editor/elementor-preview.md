# Elementor Preview

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Basic" />

Preview is the area that displays a live preview of the page currently being edited. It is rendered by a JavaScript engine, typically without loading from the server side. In other words, this is the area where you can see what the site will look like.

![Elementor Preview](/assets/img/elementor-preview.png)

## Extending the Preview

The preview area is part of [the editor](./elementor-editor). This means that it inherits some editing features, allowing users to control look and feel. Developers can use those features to extend the preview. For example:

* [Inline Editing](/widgets/rendering-inline-editing) - When developing [Elementor widgets](/widgets/), you can make the element editable from preview.
* [Context Menu](/context-menu/) - When right-clicking the element in preview you can add action links to the contextual popup.
* **Edit Buttons** - When hovering over the element in preview, you can add new edit buttons.
