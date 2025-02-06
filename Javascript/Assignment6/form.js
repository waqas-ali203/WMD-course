 function formValidation(){
   var name =  document.getElementById("full-name");
   var errorMessageName = document.getElementById("error-message-name");
if (name.value.length ===0){
  errorMessageName.textContent = "Input  cannot be empty";
  name.style.border = "2px solid red"; 
};
   var emailFormat =  document.getElementById("email-check");
   var errorMessageEmail = document.getElementById("error-message-email");
if (emailFormat.value.length ===0){
  errorMessageEmail.textContent = "please use (example@example.com) this format";
  emailFormat.style.border = "2px solid red"; 
};
   var addressCheck =  document.getElementById("address");
   var errorMessageAddress = document.getElementById("error-message-address");
if (addressCheck.value.length ===0){
  errorMessageAddress.textContent = "Please enter address";
  addressCheck.style.border = "2px solid red"; 
};

   var ageCheck =  document.getElementById("age");
   var errorMessageAge = document.getElementById("error-message-age");
if (ageCheck.value < 10 || ageCheck.value > 100){
  errorMessageAge.textContent = "Please enter age between 10 and 100 ";
  ageCheck.style.border = "2px solid red"; 
};
   var courseCheck =  document.getElementById("course");
   var errorMessageCourse = document.getElementById("error-message-course");
if (courseCheck.value ==""){
  errorMessageCourse.textContent = "An option other than the default (Select a course) must be selected";
  courseCheck.style.border = "2px solid red"; 
};
   var dateCheck =  document.getElementById("dob");
   var errorMessageDate = document.getElementById("error-message-date");
   var today = new Date();
if (dateCheck.value ==""){
  errorMessageDate.textContent = "Please enter date";
  dateCheck.style.border = "2px solid red"; 
}
else if (dateCheck.value > today){
  errorMessageDate.textContent = "Dont select future date";
  dateCheck.style.border = "2px solid red"; 
 }
 else{
  console.log("enter date");
 }
 };