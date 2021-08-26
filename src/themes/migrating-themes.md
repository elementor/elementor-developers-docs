# Migrating Themes

Now we'll see how to support [Elementor locations](./theme-locations) in your theme. The logic behind the process is simple, you just need to wrap your code with an Elementor function/hook that checks to see if the user prefers using the Elementor template or the original theme design.

There are two ways to support Elementor locations - you can either use custom Elementor _functions_ or _hooks_. Both ways will work. With hooks, the entire logic is in the `functions.php` file. With functions the checks are inside the theme files.

## Live Example

In the following, we'll look at some examples of theme migration:

* [Original Theme](./original-theme)
* [Migrating Themes with Functions](./migrating-themes-with-hooks)
* [Migrating Themes with Hooks](./migrating-themes-with-functions)
