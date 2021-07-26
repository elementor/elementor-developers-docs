# Migrating Themes

Now lets see how you can support [Elementor Locations](./theme-locations) in your theme. The logic behind the process is simple, you just need wrap your code with an Elementor functions/hooks that checks if the user prefers to use Elementor template or use the original theme design.

There are two ways to support Elementor locations, you can either use custom Elementor _functions_ or _hooks_. Both ways will work. With hooks, the entire logic is in the `functions.php` file. With functions the checks are inside the theme files.

## Live Example

Now lets migrate a sample theme:

* [Original Theme](./original-theme)
* [Migrating Themes with Functions](./migrating-themes-with-hooks)
* [Migrating Themes with Hooks](./migrating-themes-with-functions)
