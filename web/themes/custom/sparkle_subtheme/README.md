# Sparkle_Subtheme #

`npm install` to setup SASS stack for theming. `gulp watch` to compile SASS as you go. See README for subtheme "Sparkle Motion" for more.

jquery 3, jquery-throttle-debounce, what-input.js, and normalize.css 7 are already included by Sparkle Motion. See sparkle_motion.libraries.yml and sparkle_motion.info.yml in Sparkle Motion for more details. SVG white and black versions of Font Awesome icons are included in Sparkle Motion's images/ directory for easy access.

Make sure to *Change Theme Name* and *Update Logo & Images*, as described in the sections below:

## Change Theme Name ##

Update the following filenames, changing `sparkle_subtheme` with the name of your theme:

1. `sparkle_subtheme.info.yml` - Change this file's name, also update the theme name inside of this file.
1. `sparkle_subtheme.libraries.yml` - Change this file's name, also update the theme name inside of this file.
1. Update the theme name in "Drupal.behaviors.sparkle_subtheme" in `js/main.js`


## Update browserconfig.xml and manifest.json ##

Change `sparkle_subtheme` to the name of your theme in these files.


## Update Logo & Images ##

Add custom `favicon.ico`, `logo.svg`, and `screenshot.png`. Update the browser specific app icons in images/favicons/ and also update the browserconfig.xml and manifest.json to reflect these changes, if any. Some of these images are also referenced in the <head> of `templates/layout/html.html.twig`.
