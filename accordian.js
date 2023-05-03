// select all the accordians on the page
const accordianWrapper = document.querySelectorAll(".accordianWrapper");

// do something with each accordian
accordianWrapper.forEach((accordian) => {
  // select the header and body for each accordian
  const header = accordian.querySelector(".accordianHeader");
  const body = accordian.querySelector(".accordianBody");

  // add an event listener to each header
  header.addEventListener("click", (event) => {
    event.target.nextElementSibling.classList.toggle("hide");
  });
});
