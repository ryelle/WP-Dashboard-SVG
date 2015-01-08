WP Dashboard SVG
=======

A demo of using an SVG sprite for the WordPress admin icons.

### Outline

> A quick draft of what should (probably) happen here. Note that these things can happen in tandem.

**[Done]** Generate a single SVG sprite using [svgstore](https://www.npmjs.com/package/grunt-svgstore) in Grunt, pulled from the [SVGs of Dashicons](https://github.com/melchoyce/dashicons/tree/master/svg). Check out the generated demo (icons/sprite-demo.html) for a quick intro to using the individual SVGs from the sprite.

**[In Progress]** Replace the current markup for dashicons in the admin menu with SVG's `use`, so we reference the external SVG sprite.

Browser test the proof of concept & add in IE fallback

Build out a demo plugin to test methods of adding pages, as a visual backwards compatibility test.

Adjust the Dashicons workflow to generate individual SVGs, named the icon name (the filename generates the ID in the sprite). *This may be a multi-step process?*

Move SVG-ification into core, where menus are generated.

Clean up CSS around dashicons-the-font (`.dashicons`), and set up for `.dashicon` the SVG.

Could there also be call for a "`get_icon`" function, which would be simpler than writing out the `<svg>` every time? Could also be used to standardize the way `submit_button` was/is.


