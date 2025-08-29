What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?
Answer 01: 
getElementById:  we can get  java script element by its  ID that we have declared.
getElementsByClassName: its a  method in JavaScript which is  a DOM (Document Object Model) method used to select HTML elements based on their class name.

querySelector: its a also a method is a method available on Document and Element objects that allows for the selection of the first element within the specified scope that matches a given CSS selector.

querySelectorAll:  Its an another method in JavaScript is a powerful tool for selecting elements from the Document Object Model (DOM) using CSS selectors. It returns a static NodeList object containing all elements that match the specified group of selectors.

Answer 02:
The document.createElement() method is used to create a new HTML element. It takes a string representing the tag name of the element you want to create (e.g., 'div', 'p', 'span', 'li').
or Inserting the Element into the DOM:
Once created, the new element needs to be inserted as a child of an existing element in the DOM. Several methods can be used for this:
appendChild(): Appends the new element as the last child of a specified parent element.


Answer 03:
Event bubbling is the default mechanism in JavaScript where an event triggered on a nested element propagates upwards through its ancestors in the DOM tree, allowing handlers on parent elements to also execute. When a user clicks an inner element, the event first runs the handler on that specific element, then on its parent, its grandparent, and so on, until it reaches the document root. This process is analogous to a ripple effect in a pond and enables event delegation, where a single event listener on a parent can manage events from many child elements.

Answer 04:

Event delegation is a powerful technique that simplifies event handling, improves performance, and enhances the flexibility of your code. By leveraging the event bubbling mechanism, you can efficiently manage events on a group of elements rather than dealing with each one individually.

Answer 05:

preventDefault() and stopPropagation() are distinct methods used in JavaScript event handling to control event behavior, but they address different aspects of an event.
event.preventDefault()
This method is used to prevent the default action associated with an event from occurring.