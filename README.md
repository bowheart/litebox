# LiteBox
#### v0.2.0
LiteBox is a lightweight, jQuery-dependent lightbox library
LiteBox is designed to be super easy to use.  It integrates with jQuery and automates everything for you.

## Coolness Factors:

- LiteBox adds the `.LiteBox()` method to the `jQuery.fn` object.  Usage thus becomes as simple as `$('.my-selector').LiteBox()`.
- The JavaScript file is all that's required.  LiteBox will automatically inject a (super small) CSS blob onto your page to style all its lightboxes.
- LiteBox is perfectly responsive.  It works on all screen sizes on all modern browsers.
- LiteBox can be made to lazy-load the contents of its lightboxes.

## Example Usage
#### HTML:

```
	<a class="litebox-trigger" href="/path/to/file.html">Click Me</a>
```

#### JavaScript:

```
	$('.litebox-trigger').LiteBox();
```

LiteBox will automatically pull the contents for each lightbox from the file specified by the `href` attribute on the `a` tag.

## Customization
#### In the HTML:

There are 3 `data-` attributes that you can add to the trigger element:

- `data-size`.  Possible values: `sm | md | lg`.  Apply this to make the default size of the generated lightbox (on bigger screen sizes)...well...small, medium, or large.
- `data-class`.  This is for when you really need some customization.  The front of the generated lightbox will receive the value of this property as a CSS class that you can target and style to your heart's content.
> Inside Tip
> All LiteBox styles use single-level CSS class selectors, making it super easy to out-qualify them with your own CSS.  LiteBox also puts its styles at the very beginning of your page's `<head>` tag, ensuring that all your styles come after them and, therefore, override them.
- `data-template`.  Example: `data-template="#tpl-id"` where `#tpl-id` is the CSS selector of an element on your page (such as a `<script type="text/template" id="tpl-id">...</script` tag) wherein are found the contents of the lightbox.  This replaces the `href` attribute on the trigger element.  When this is specified, LiteBox will pull the contents from `$('#tpl-id').html()`, instead of HTTP-requesting the page.

#### In the CSS:

LiteBox allows you to easily override its default styles.  Additionally, a `data-class` attribute on the trigger element allows per-lightbox customization.  Here are some notes on styling the lightboxes:

- To change the default size (on larger screens) of a lightbox, modify the `height` or `width` CSS properties.
- To change the responsiveness of the lightbox, modify the `max-height` or `max-width` properties.  These properties should remain percentages, but you can do what you want ;)
