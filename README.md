# Event Listeners

## Event Listeners ELI5

Imagine you're at a party and you want to know when someone says your name. You can ask a friend to listen for your name, and when they hear it, they can tell you. In JavaScript, `event listeners` work similarly.

An `event listener` is like a friend who's listening for something to happen. When you add an `event listener` to an `HTML element`, you're telling JavaScript to "listen" for a specific event, such as a `click` or a `key` press, on that `element`. When that event happens, JavaScript will `call` the `function` you've specified, just like your friend would tell you when someone said your name.

For example, imagine you have a button on your web page, and *you want to do something when someone clicks on it.* You can add an event listener to the button that listens for a `click` event, and then specify the `function` you want to run when the `click` happens. This `function` might change the color of the button or display a message on the screen.

## Intro

In JavaScript, an `event listener` is a method/function that waits for a specific event to occur on an `HTML element` and then performs a specified action in response to that event. `Event listeners` allow you to create dynamic and interactive web pages by responding to user actions, such as `clicks` or `keystrokes`.

## Event Listener Example

```js
// Get the HTML element
let myButton = document.querySelector("#myButton");

// Add an event listener to the element
myButton.addEventListener("click", function() {
  // Perform the desired action when the event occurs
  console.log("Button clicked!");
});

```

In this example, we first retrieve an HTML element with the `querySelector()` method, and then add an `event listener` to the element using the `addEventListener()` method.

The first `argument` of the `addEventListener()` method is the event to listen for, in this case, a `click event`.

The second `argument` is the `function` to `call` when the `event` occurs.

You can also add `event listeners` to other types of `HTML elements`, such as `text inputs` or `select dropdowns`, and respond to different types of `events`, such as `key presses` or `mouse movements`. `Event listeners` are a powerful tool for creating interactive web pages that respond to user actions in real-time.

## Challenge

Create an accordion on your webpage, an accordion is a box with a header that when you click on the header the content appears below, for reference see [BootStrap Accordion](https://getbootstrap.com/docs/5.0/components/accordion/)

### Requirements

The accordion must respond to click events and reveal a body of text.