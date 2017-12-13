# Equal Height Masonry Feed

This code sets block elements to equal heights unique to their row. I find myself needing this in feeds of content where I have a large number of elements that need to be listed together in a single container. 

It requires block elements under ".equal-heights-container" to have a Bootstrap column class and to include the class "block" on the element that the height will get set to. Updated for Bootstrap v4.


```
<ul class="equal-heights-container row">
	<li class="col-md-4 col-sm-6">
		<div class="block" style="height: 250px;">
			<p>Your content here</p>
		</div>
	</li>
	<li class="col-md-4 col-sm-6">
		<div class="block" style="height: 250px;">
			<p>This content is a lot longer than the other content, and its container would not normally be equal to the element sharing its row.</p>
		</div>
	</li>
	<li class="col-md-4 col-sm-6">
		<div class="block" style="height: 150px;">
			<p>Your content here</p>
		</div>
	</li>
	<li class="col-md-4 col-sm-6">
		<div class="block" style="height: 150px;">
			<p>Your content here</p>
		</div>
	</li>
</ul>
```

Try it on JSFiddle: https://jsfiddle.net/meganthecoder/0334pf77/
