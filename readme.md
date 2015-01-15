WP Dashboard SVG
=======

A demo of using an SVG sprite for the WordPress admin icons.

> What does this process look like?

SVGs live in the `icons/src` directory, and can be edited directly here. (No more waiting for font merges)

Generate a single SVG sprite using [svgstore](https://www.npmjs.com/package/grunt-svgstore) in Grunt, pulled from the source folder. _Check out the generated demo (icons/sprite-demo.html) for a quick intro to using the individual SVGs from the sprite._

Replace the current markup for dashicons in the admin menu with SVG's `use`, so we reference the external SVG sprite.

Check it out "in action" (static HTML) here: http://ryelle.github.io/WP-Dashboard-SVG/
