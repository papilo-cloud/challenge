# ASSETS FOR THE DECEMBER #CODING360CHALLENGE 

This guide is intended to assist both newbies and seasoned veterans.

> **Notes:** The JSON files in this GitHub gist were primarily grouped depending on the locations (where they can be utilized). The only exception is the `marketplace.json` file, where you can find  the _featured products_ that can be used on the _home page_

## HOW TO USE

- Select the JSON file you wish to use. In my case, I chose the `carousel.json` .
- In the file section's top-right corner, select the "Raw" button. This will take you to another website that displays the raw **URL** of the **JSON** file.
- Copy this page's **URL**.
- Fetch from within your editor and use as you like.
 
Here's how i would go about fetching said **URL**

```js
// assign the url to a variable
const URL = https://gist.githubusercontent.com/eniiku/65a95533de1f005eee35d5eb91f3e141/raw/439bc2dd8693b490539eae236918f4a53dd17457/carousel.json

//fetch contents of the url
fetch(URL)
	.then(response => response.json())
	.then((auctionData) => console.log(auctionData));
```

Of course, this is just one way to go about it. <br>Let me know how you'd approach this by leaving a comment below with your preferred method, and there you have it! Have fun coding!