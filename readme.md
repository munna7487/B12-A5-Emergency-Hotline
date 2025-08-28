[live link](https://munna7487.github.io/B12-A5-Emergency-Hotline/)
1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
getElementById()
select a single element by its unique id.return a single elment or null (if it not found)
getElementsByClassName()
selects all element that have a given class.return a live html collectin
querySelector()
selects the first element that matches a css selector .return a single element or null
querySelectorAll()
select all element that mach a css selector.return a nodelist
2.How do you create and insert a new element into the DOM?
const new=document.createElement("p")
new.innerText="this is new bangladesh";
const title=document.getElementById('main-title)
title.append(new);
3.What is Event Bubbling and how does it work?
Event Bubbling is a concept of dom event flow where an event starts from the target element and then bubbles up through its ancestors
4.What is Event Delegation in JavaScript? Why is it useful?
Event Delegation is a javascript technique that uses event bubbling to handle events efficiently by placing a single event listener on a parent element which listens for events from its child element 
5.What is the difference between preventDefault() and stopPropagation() methods?
 preventDefault():stop the browser default action
 stopPropagation():stop the parent from reaching the parent