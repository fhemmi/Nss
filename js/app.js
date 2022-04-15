// SLIDEDOWN FUNCTION

 $(document).ready(function(){
   $("#slide").ready(function(){
     $("#slideDown").slideDown("slow");
     console.log("js is workimg");
   });
 });



function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}




// let form = document.getElementById("form");
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let password2 = document.getElementById("password2");
let form = document.getElementById("form");
let bodr = document.getElementById("bodr");
let small = document.querySelector("small");
let address = document.getElementById("address");
let phone = document.getElementById("phone");
let textarea = document.getElementById("textarea");

// show error input message 

 function showError(input, message){
    let formControl = input.parentElement;
    formControl.className = "form-controlly error";
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// show sucess outline border\

function showSuccess(input) {

      // bodr.classList= "";
      // bodr.classList.add( "black");
      let formControl = input.parentElement;
      formControl.className = "form-controlly success";
    }
    

//     function phonenumber(input)
// {
//       var phoneno= /^\d{10}$/;
//       if(input.value.match(phoneno)){
//           showError(input, "please input a valid number")
//       }else{
//         showSuccess();
//             // return false;
//             }
//     }
    







// checkrequired field
function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim() === "" ) {
            showError(input, `${getFieldName(input)}  is required`)
        }else {
        	showSuccess(input)
        }
    })
}


// check if email is vaild
function checkEmail(input){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
          showSuccess(input)
    }else{
        showError(input, "Email is not valid");
    }
}







// checkinput length
function checkLength(input, min, max){
   if (input.value.length < min) {
    showError(input, ` ${getFieldName(input)}  must be at least ${min} characters`)
   }else if(input.value.length > max){
  showError(input, ` ${getFieldName(input)}  must be at less than ${max} characters`)
   }else{
    showSuccess(input);
   }
}

// check password match
// function checkPasswordMatch(input1, input2) {
//     if (input1.value !== input2.value ) {
//         showError(input2, "passwords do not match")
//     }
    
// }



// function checkPasswordIsPassword(input){
//       if (input.value === "password" ) {
//         showError(input, "password cannot be password")
//       }
// }


// function checkPasswordIsPassword2(input2){
//       if (input2.value === "password") {
//         showError(input2, "password cannot be password")
//       }
// }

function checktextArea(input) {
	if (textarea.value.trim()  === "") {
		showError(input, 'Field cannot be blank');
	}else{
		showSuccess();
	}
}






// get fieldname

function getFieldName(input){
   return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
// add event listener

form.addEventListener("submit", function(e) {
  e.preventDefault();


//   console.log(username.value);

checkRequired([username, address, phone, textarea, email]);
checkLength(username, 3, 15);
// checkLength(password, 6, 25);
// checkLength(password2, 6, 25);
checkEmail(email);
checktextArea(textarea);
// phonenumber(phone);
// checkPasswordMatch(password, password2);
// checkPasswordIsPassword(password);
// checkPasswordIsPassword2(password2);
// checkAddress()

// checkReqired2([username, email, password, password2]);
// darkmode();
});






 














