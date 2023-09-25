// // Select all the pre tags in the HTML document
// var preTags = document.getElementsByTagName("pre");

// // Loop through each pre tag
// for (var i = 0; i < preTags.length; i++) {
//   // Replace "&lt;" with "<" and "&gt;" with ">"
//   preTags[i].innerHTML = preTags[i].innerHTML
//     .replace(/&lt;/g, "<")
//     .replace(/&gt;/g, ">");

//   // Create a new div element for the output
//   var outputDiv = document.createElement("div");
//   outputDiv.className = "browser";

//   // Add the required HTML to the output div
//   outputDiv.innerHTML = `
//         <div class="tabs">
//             <div class="window-controls">
//                 <span class="close" title="Close"></span>
//                 <span class="maximize" title="Maximize"></span>
//                 <span class="minimize" title="Minimize"></span>
//             </div>
//             <div class="tab active">Out Put <span>&#x2715</span></div>
//         </div>
//         <div class="content">
//             ${preTags[i].innerHTML} <!-- Output Content for the active tab goes here -->
//         </div>`;

//   // Append the output div after the current pre tag
//   preTags[i].parentNode.insertBefore(outputDiv, preTags[i].nextSibling);
// }

// Select all the pre tags in the HTML document
var preTags = document.getElementsByTagName("pre");

// Loop through each pre tag
for (var i = 0; i < preTags.length; i++) {
  // Create a copy of the pre tag's content
  var preContent = preTags[i].innerHTML;

  // Replace "&lt;" with "<" and "&gt;" with ">" in the copy
  var modifiedContent = preContent.replace(/&lt;/g, "<").replace(/&gt;/g, ">");

  // Create a new div element for the output
  var outputDiv = document.createElement("div");
  outputDiv.className = "browser";

  // Add the required HTML to the output div
  outputDiv.innerHTML = `
        <div class="tabs">
            <div class="window-controls">
                <span class="close" title="Close"></span>
                <span class="maximize" title="Maximize"></span>
                <span class="minimize" title="Minimize"></span>
            </div>
            <div class="tab active">Out Put <span>&#x2715</span></div>
        </div>
        <div class="content">
            ${modifiedContent} <!-- Output Content for the active tab goes here -->
        </div>`;

  // Append the output div after the current pre tag
  preTags[i].parentNode.insertBefore(outputDiv, preTags[i].nextSibling);
}
