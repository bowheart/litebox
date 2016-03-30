# LiteBox

[![GitHub license](https://img.shields.io/github/license/bowheart/litebox.svg)]()

LiteBox is a lightweight, jQuery-dependent lightbox library designed to be super easy to use.  It integrates with jQuery and automates everything for you.

## Coolness Factors:

- LiteBox adds the `.LiteBox()` method to the `jQuery.fn` object.  Usage thus becomes as simple as

```javascript
$('.my-selector').LiteBox()
```

- The JavaScript file is all that's required.  LiteBox will automatically inject a (super small) CSS blob onto your page to style all its lightboxes.

- LiteBox is perfectly responsive.  It works on all screen sizes on all modern browsers.

- LiteBox can be made to lazy-load the contents of its lightboxes.

- Default sizes make for some easy plug-and-play.

- Per-litebox CSS classes and low-qualified default selectors make customization a cinch.

## Example Usage
#### HTML:

```html
	<a class="litebox-trigger" href="/path/to/file.html">Click Me</a>
```

#### JavaScript:

```javascript
	$('.litebox-trigger').LiteBox();
```

LiteBox will automatically pull the contents for each lightbox from the file specified by the `href` attribute on the trigger element (in this case, the `<a>` tag).

## Customization
#### In the HTML:

There are 3 `data-` attributes that you can add to the trigger element:

- `data-size`.  Apply this to give the generated LiteBox a CSS class of `litebox-[size here]`.  There are 5 default sizes that ship with LiteBox: `xs | sm | md | lg | xl`.  These will apply a 16:9 ratio width and height to the generated LiteBox.  You can, as always, override these sizes or supply your own.  LiteBox will use whatever you give it.

- `data-class`.  This is for when you really need some customization.  The generated lightbox will receive the value of this property as a CSS class that you can target and style to your heart's content.
> **Inside Tip** -- All LiteBox styles use single-level CSS class selectors, making it super easy to out-qualify them with your own CSS.  LiteBox also puts its styles at the very beginning of your page's `<head>` tag, ensuring that all your styles come after them and, therefore, override them.

- `data-template`.  Example: `data-template="#tpl-id"` where `#tpl-id` is the CSS selector of an element on your page (such as a `<script type="text/template" id="tpl-id">...</script` tag) wherein are found the contents of the lightbox.  This replaces the `href` attribute on the trigger element.  When this is specified, LiteBox will pull the contents from `$('#tpl-id').html()`, instead of HTTP-requesting the page.  **This replaces the `href` property.**

#### In the CSS:

LiteBox allows you to easily override its default styles.  Additionally, a `data-class` attribute on the trigger element allows per-lightbox customization.  Here are some notes on styling the lightboxes:

- To change the default size (on larger screens) of a lightbox, modify the `height` or `width` CSS properties.

- To change the responsiveness of the lightbox, modify the `max-height` or `max-width` properties.  These properties should remain percentages, but you can do what you want ;)

## Additionally

You can give an element `class="litebox-close | litebox-x"` in the contents of your LiteBox.  Any such elements will close the LiteBox when clicked.

## Changelog

- **0.3.0** -- Added the three `data` attributes (size, class, and template).  Added top and bottom text faders, and improved the look in general.

- **0.4.0** -- Added 2 more default sizes (xs and xl), moved them all to a 16:9 ratio.  Made everything more mobile friendly, and especially more compatible with iOS.

## Issues

Issues may be submitted at https://github.com/bowheart/litebox/issues

Also, of course, feel free to fork and pull request.  Happy coding!

## License
(The MIT License)

Copyright (c) 2016 Joshua Claunch (bowheart)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
