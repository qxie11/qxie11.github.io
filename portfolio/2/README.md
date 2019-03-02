# Bike Online Shop 
- Thats one of my favourite personal projects that I've done. Took me more than a month but would say its really worth it. Used SASS pre-proccessor and Vanilla Javascript.

## Getting Started
- When you download/clone the repo you will need to instal the node_modules folder which will make the setup for your sass pre-processor. 
`npm install` 
After that you need to call the function so it will keep watching for new changes
`npm run compile`
I'm also using `live-server` mode that helps me to see my changes faster. 
- All of the icons I used are from [FontAwesome](https://fontawesome.com/)

### Sections I'm proud of and issues I faced
There is quite a lot in this website that is happening especially for a self-though like me. Here I will explain whats happening, few javascript tricks I learned during the journey and also the reason why few of the links might not be working.

1. Why few of the links on the navigaton and filter/sort items is not working? 
- I've tried to make it as complex as I could and to push my skills but unfortunatelly the code went messy and lots of things started to break. The first idea I had was to create something that will sort all of the items and you can filter them by different classnames, values etc. After multiple attempts and feedback from `freeCodeCamp` and few `gitter` groups, I was told that if I'm building only the UI(User Interface) the filtering/sorting effects will be done from the `server-side`. 

2. List of the things I've build and I'm proud of
	1. [Homepage](https://dbsimeonov.github.io/bike-shop/) design and functionallity:
 		- As I mentioned above I tried to use only vanilla javascript and I think that everything thats on the page works really smooth. The slider works really good and can be navigation with pagination as well. When you scroll down you can see a slider/carousel which was done with plain javascript and animated with `translate:transform()`
 		- Need to mention that I'm proud of the `mobile-nav` and `log-in`, `cart` popups, which have really friendly and enjoyable animation.
 	2.[Lookbook](https://dbsimeonov.github.io/bike-shop/lookbook-inside.html) popovers:
		- Here I'm guilty using friends help but wanted to create something different than the usual css tricks. We created a `data.json` file which stores all of the information about each popup and we created a `html template` which will be called each time the function is triggered with the values of our `json` file.
		- Really proud of the effect and from the approach applied.
	3. [Accessories](https://dbsimeonov.github.io/bike-shop/accessories.html) design:
		- Most of my time was spend on this page trying to create different animations, functionallity and pretty much testing my skills. The sorting `radio` and `checkboxes` are not working, also the `filter` by price and name. 
		- Focused more on the design view so on tablet/desktop devices, created different view from `list/grid` which is user friendly and on mobile devices limits it only to `list` view.
	4. [Contact Us](https://dbsimeonov.github.io/bike-shop/contactus.html) validation:
		- It was my first time trying to validate a form custom. It was fun and created a small `tooltip` with css which indicates errors.
	5. [Our Stores](https://dbsimeonov.github.io/bike-shop/ourstores.html) view:
		- Nothing speciall happening on this page, just enjoying the nice and clean design. Also used `table` tag to make the working hours align properly.
	6. [Footer](https://dbsimeonov.github.io/bike-shop/) :
		- The footer which includes a small input for newsletter subscription is as good on small devices as its on large ones. 



// If you have any questions, tips, feedback or anything related to my projects, I will be really happy to discus further.


