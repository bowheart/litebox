/**
 * LiteBox -- version 0.2.0 -- Jan. 22, 2016
 * 
 * Another library by Joshua Claunch
 *   https://github.com/bowheart
 *   https://gist.github.com/bowheart
 *
 * A jQuery-dependent lightbox library
 */
 (function($) {
	
	var LiteBox = function(triggerEl) {
		if (!triggerEl) {
			console.error('LiteBox Error: DOM element undefined.  Did you use $(document).ready(...) ?');
			return;
		}
		
		this.triggerEl = triggerEl = $(triggerEl);
		this.size = triggerEl.data('size') || 'md';
		this.class = (triggerEl.data('class') ? ' ' + triggerEl.data('class') : '');
		this.template = triggerEl.data('template');
		
		this.el = $(this.html); // generate the wrapping HTML
		this.loadContents(triggerEl.attr('href')); // load the content HTML
		
		// bind events
		this.bindOpen();
		this.bindClose();
	};
	LiteBox.prototype = {
	
		bindClose: function() {
			var self = this;
			self.el.one('click', function(event) {
				event.preventDefault();
				self.hide();
			}).one('click', '.litebox-x, .close', function(event) {
				event.preventDefault();
				self.hide();
			});
			self.el.find('.litebox-front').off('click').click(function(event) {
				event.stopPropagation();
			});
		},
		bindOpen: function() {
			var self = this;
			$(this.triggerEl).click(function(event) {
				event.preventDefault();
				$('body').append(self.el);
				self.show();
			});
		},
		
		hide: function() {
			var self = this;
			this.el.fadeOut(300, function() {
				$(this).remove();
				self.bindClose();
			});
		},
		
		loadContents: function(href) {
			var content = this.el.find('.litebox-content');
			
			this.template
				? content.html($(this.template).html())
				: content.load(href);
		},
		
		show: function() {
			this.el.hide().fadeIn(300);
		},
		
		
		get html() {
			return '<div class="litebox"><div class="litebox-front litebox-' + this.size + this.class + '"><span class="litebox-x">&times;</span><div class="litebox-content"><p>Error: The content could not be loaded.</p></div></div></div>';
		}
	};
	
	
	var css = '.litebox { overflow: hidden; position: fixed; top: 0; left: 0; text-align: center; height: 100%; width: 100%; z-index: 15; }'
			+ '.litebox:before { background: rgba(0,0,0,0.4); content: ""; cursor: pointer; position: absolute; top: -100%; left: -100%; height: 300%; width: 300%; }'
			+ '.litebox-front { background: #fff; box-shadow: 2px 2px 10px #000; box-sizing: border-box; display: inline-block; max-height: 94%; max-width: 94%; overflow: auto; padding: 20px; position: relative; text-align: left; vertical-align: middle; }'
			+ '.litebox-sm { height: 500px; width: 375px; }'
			+ '.litebox-md { height: 585px; width: 780px; }'
			+ '.litebox-lg { height: 750px; width: 1000px; }'
			+ '.litebox-x { color: rgba(0,0,0,0.7); cursor: pointer; font-family: arial; font-size: 32px; font-weight: bold; position: absolute; top: 10px; right: 20px; text-shadow: 0 0 rgba(255,255,255,0.5); }'
			+ '.litebox-x:hover { color: rgba(0,0,0,1); }'
			+ '.litebox:after { content: ""; display: inline-block; height: 100%; position: relative; vertical-align: middle; }'
	var blob = new Blob([css], {type: 'text/css'});
	$('head').prepend('<link rel="stylesheet" href="' + window.URL.createObjectURL(blob) + '">');
	
	// Expose this function to jQuery
	$.fn.LiteBox = function() {
		this.each(function() {
			new LiteBox(this); // create a new LiteBox for each element selected
		});
	};
	
}).call(window, jQuery);
