
<!-- Markdown -->

#1.document.getElementById("id")

 Selects only one element with the given ID.
IDs are unique, so it will always return a single element (or null if not found).

#.document.getElementsByClassName("className")

 Selects all elements with the given class.
Returns a live HTMLCollection (not an array, but similar).
You must loop through it to access individual elements.

#.document.querySelector("selector")

 Selects the first matching element based on a CSS selector.

#.document.querySelectorAll("selector")

 Selects all matching elements based on a CSS selector.
Returns a static NodeList (not live like HTMLCollection). 

##2.Create a New Element
Use document.createElement();
Add content to the element You can use .textContent, .innerText, or .innerHTML

###3. What is Event Bubbling?

Event Bubbling is a process in JavaScript where an event triggered on a child element automatically propagates (“bubbles up”) to its parent elements, all the way up to the document.
Flow: Child → Parent → Grandparent → document
Most events like click, focus, keydown bubble by default.


####4. What is Event Delegation?

Event Delegation is a technique where instead of attaching event listeners to multiple child elements, attach a single listener to their parent.
This works because of Event Bubbling: when a child element is clicked, the event bubbles up to the parent, where you can handle it.

Inside the parent listener, check which child triggered the event using event.target.


#####5. event.preventDefault()

Purpose: Stops the default action of an element from happening.
It does not stop the event from bubbling.

event.stopPropagation()
Purpose: Stops the event from bubbling up (or capturing down).
It does not prevent the default action.