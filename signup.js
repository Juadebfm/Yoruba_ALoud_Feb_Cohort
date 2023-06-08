//Step 1- get all the neccessary elements
const signUpBtn = document.getElementById("SignUp");
const getName = document.getElementById("name");
const getEmail = document.getElementById("email");
const getPassword = document.getElementById("password");
const getConfirmPassword = document.getElementById("confirmPassword");

//add a text to the button
signUpBtn.innerText = "Sign Up";

//add event listener to the button
signUpBtn.addEventListener("click", (event) => {
  event.preventDefault();

  //checks if any of the fields are empty
  if (
    getName.value === "" ||
    getEmail.value === "" ||
    getPassword.value === "" ||
    getConfirmPassword.value === ""
  ) {
    Swal.fire({
      icon: "info",
      text: "All fields are required!",
      confirmButtonColor: "#2D85DE",
    });
    signUpBtn.style.fontStyle = "italic";
    signUpBtn.disabled = "true";
  }

  //check if the confirm password is equal to the password
  if (getConfirmPassword !== getPassword) {
    Swal.fire({
      icon: "info",
      text: "Password do not match",
      confirmButtonColor: "#2D85DE",
    });
    signUpBtn.style.fontStyle = "italic";
    signUpBtn.disabled = "true";
  } else {
    // now append the values of the inputs to the form data
    const signUpData = new FormData();
    signUpData.append("name", getName);
    signUpData.append("email", getEmail);
    signUpData.append("password", getPassword);
    signUpData.append("password_confirmation", getConfirmPassword);

    // provide the body information for the API
    const signUpRequirement = {
      method: "POST",
      body: signUpData,
    };
  }

  //get the api url
  const url = "https://pluralcodesandbox.com/yorubalearning/api/register_admin";

  fetch(url, signUpRequirement)
    .then((response) => response.json())
    .then((result) => {
      if (result.status === "success") {
        Swal.fire({
          icon: "success",
          text: `${result.message}`,
          confirmButtonColor: "#2D85DE",
        });
        setTimeout(() => {
          location.href = "./index.html";
        }, 3000);
      } else {
        Swal.fire({
          Icon: "info",
          text: "Registration Unsuccessful!",
          confirmButtonColor: "#2D85DE",
        });
        signUpBtn.innerHTML = "Try Again";
      }
    })
    .catch((error) => console.log("error", error));
});
