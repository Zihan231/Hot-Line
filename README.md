# Ans 01: 
getElementById, helps to find an element by it's unique ID. It returns one element that matched with the Id and On the other hand, getElementsByClassName, helps to find elements having the same class it returns an HTMLCollection. 
querySelector returns only the first element that match with the css selector and on the other hand, querySelectorAll returns a nodeList of all matched elements with the css selector.
# Ans 02:
to create new element into DOM we use document.createElement(''), for example: const newDiv = document.createElement('div'); this will create a new div element. Now to insert elements into DOM we use appendChild(). for example: const parentElement = document.getElementById('myParent'); parentElement.appendChild(newDiv); in the first line on code, we are getting the parent element and in 2nd line we are inserting the div element using appendChild(), that we created previously with createElement('div').
# Ans 03:
Event Bubbling is a process or mechanism where an event occcured in a child element propagates toward its parent element.  
### How it works: 
when a event triggers on an element, it bubbles up to the parent element of that child element. then to grandparent and so on. each parent with a listener for the event can handle it.
# Ans 04:
Event Delegation is a technique or process where we can add a single event listener to the parent element instead of adding event listener to each child elements. The parent element can handle the events triger on the child elements.
### How it works:
when an event triggers on a child element it bubbles up to the parent then to grandparent and so on. Now if we add an event listener to the parent or grandparent for the event triggers into the child element it will be handled by the parent instead of child element.
# Ans 05:
preventDefault() is used to prevent the default behaviour of any elements in java script. For example: if we use preventDefault(), for a form submit button it will not reload the page by clicking on it. On the other hand, stopPropagation() is used to stop the event bubble upward immediately. For example: Normally if an event tiggers into the child element it will starts to bubble toward it parents but if we use stopPropagation() the event will not bubble to its parent.
#

### Live Link: https://zihan231.github.io/Hot-Line/
