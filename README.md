# LiteBox
#### v0.1.1
LiteBox is designed to be super easy to use.  It integrates with jQuery and automates everything for you.

## Perks:

- LiteBox adds the `.LiteBox()` method to the `jQuery.fn` object.  Usage thus becomes as simple as `$('.my-selector').LiteBox()`.
- The JavaScript file is all that's required.  LiteBox will automatically inject a CSS blob onto your page to style all its lightboxes.
- LiteBox is perfectly responsive.  It works on all screen sizes on all modern browsers.

## Example Usage
### HTML:

```
	<a class="litebox-trigger" href="/path/to/file.html">Click Me</a>
```

### JavaScript:

```
	$('.litebox-trigger').LiteBox();
```

LiteBox will automatically pull the contents for each lightbox from the file specified by the `href` attribute on the `a` tag.
