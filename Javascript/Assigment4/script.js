// Question 1
function retrieveValue(){
    var value = document.getElementById("question-1").value;
    alert("Your value is " + value);
}

// Question 2

function setDefaultValue(){
    var setValue = document.getElementById("question-2").value;
    document.getElementById("question-numebr2").value = setValue;
}


// Question 3

function changeParagraph(){
    var paragraph = document.getElementById("old-paragraph");
    // console.log(paragraph);
    paragraph.innerText = "Hello this is new text  with a great confidence"
}

// Question 4

function changeImage(){
    var imageAdress = document.getElementById("image-1");
    console.log(imageAdress)
    imageAdress.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL6bmlIucVIfLAFFsZQ6A51YM3JwBOCMoryw&s"
}

// Question 5

function swapImage(){
    var image1 = document.getElementById("image-1");
    // console.log(image1)
    var image2 = document.getElementById("image-2");
    // console.log(image2)
    image1.src = image2.src;
    image2.src = image1.src;
}

// Question 7 ....hamara is k bger b kam ho gya

// function changeBackground(){
//     var imageBackground = document.getElementById("para");
//     imageBackground.style.backgroundColor = yellow;   
// }


// Question 8

function changeFontSize(){
    var paras = document.getElementById("paragraphs");
    var fonts = paras.getElementsByTagName("p");
    // var fontSize = "18px";
    
    for (var i = 0; i < fonts.length; i++) {
        fonts[i].style.fontSize = "18px";
    }
}


// Question 9

function getElements(){
    var someList = document.getElementById("specificList");
    // console.log(div)
    var colorCode = document.getElementById("colorName").value;
    // console.log(colorCode)
    var allList = someList.getElementsByTagName("li");
    console.log(allList);

    for (var i = 0; i < 3 && i < allList.length; i++) {
        allList[i].style.color = colorCode;
}
}

