// Question1 access child nodes

function allChildNodes(){

    var mainContainer = document.getElementById("main-container");
    console.log("All child node is ", mainContainer.childNodes);

    var listUpdate  = document.getElementById("firstList");
    listUpdate.textContent = " Your first list is updated"
}
allChildNodes();

  
// QUESTION2 access parent node
// function mainNode(){
//     var  ulNode = document.getElementById('list');
//     console.log("Parent node of ul:",ulNode.parentNode);

//     var listUpdate = ulNode.parentNode;
//     listUpdate.className += "newClass"
//     console.log(listUpdate)
// }
// mainNode();


// Question3

// function ManipulateValue(){
//     var heading = document.getElementById("headingDom");
//     console.log(heading.nodeName)
//     console.log(heading.nodeType)
//     console.log(heading.textContent)   // but when i use nodeValue give me null

//     heading.textContent = "HY I AM NEW VALUE OF HEADING" // cannot changing value with nodeVALUE
// }
// ManipulateValue();


// Question 4 

function imageFind(){
    var mainDiv = document.getElementById("main-container");
    var imageTag = mainDiv.getElementsByTagName("img");
    console.log(imageTag.length)
}
imageFind();

