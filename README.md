# Equal Height Masonry Feed

Quick jQuery code that finds the height of elements per row under class="equal-heights-container" and sets each row to its unique tallest height. I find myself needing this in content feeds where I have a large number of elements that need to be listed together in a single container. Requires block elements under ".equal-heights-container" to have a Bootstrap column class.


```
<ul class="equal-heights-container row">
	<li class="col-md-6">
		<p>Your content here</p>
	</li>
	<li class="col-md-6">
		<p>This content is a lot longer than the other content, and its container would not normally be equal to the element sharing its row.</p>
	</li>
	<li class="col-md-6">
		<p>Your content here</p>
	</li>
	<li class="col-md-6">
		<p>Your content here</p>
	</li>
</ul>
```

https://jsfiddle.net/meganthecoder/0334pf77/
