// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const headerBox = document.createElement("div"),
    headerDate = document.createElement("span"),
    headerH1 = document.createElement("h1"),
    headerTemp = document.createElement("span");

    headerBox.appendChild(headerDate);
    headerBox.appendChild(headerH1);
    headerBox.appendChild(headerTemp);

    headerBox.classList.add("header");
    headerDate.classList.add("date");
    headerTemp.classList.add("temp");

    headerDate.textContent = "MARCH 28, 2019";
    headerH1.textContent = "Lambda Times";
    headerTemp.textContent = "98°";

    return headerBox;
}

const headerCont = document.querySelector(".header-container");

headerCont.appendChild(Header());


