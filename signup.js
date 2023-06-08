const signUpBtn = document.getElementById("SignUp");

signUpBtn.innerText = "Sign Up";

signUpBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const getName = document.getElementById("name").value;
  const getEmail = document.getElementById("email").value;
  const getPassword = document.getElementById("password").value;
  const getConfirmPassword = document.getElementById("confirmPassword").value;

  signUpBtn.innerText = "Loading";

  if (
    getName === "" ||
    getEmail === "" ||
    getPassword === "" ||
    getConfirmPassword === ""
  ) {
    // Display error message if any field is empty
    Swal.fire({
      icon: "info",
      text: "All fields are required!",
      confirmButtonColor: "#2D85DE",
    });
    signUpBtn.innerText = "Sign Up";
  } else if (getConfirmPassword !== getPassword) {
    // Display error message if passwords do not match
    Swal.fire({
      icon: "info",
      text: "Password does not match",
      confirmButtonColor: "#2D85DE",
    });
    signUpBtn.innerText = "Sign Up";
  } else {
    // Create a FormData object and append form data
    const signData = new FormData();
    signData.append("name", getName);
    signData.append("email", getEmail);
    signData.append("password", getPassword);
    signData.append("password_confirmation", getConfirmPassword);

    const signReq = {
      method: "POST",
      body: signData,
    };

    const url =
      "https://pluralcodesandbox.com/yorubalearning/api/register_admin";

    fetch(url, signReq)
      .then((response) => response.json())
      .then((result) => {
        if (result.status === "success") {
          Swal.fire({
            icon: "success",
            text: `${result.message}`,
            confirmButtonColor: "#2D85DE",
          });

          setTimeout(() => {
            location.href = "index.html";
          }, 3000);
        } else {
          Swal.fire({
            icon: "info",
            text: "Registration Unsuccessful!",
            confirmButtonColor: "#2D85DE",
          });
          signUpBtn.innerText = "Sign Up";
        }
      })
      .catch((error) => console.log("error", error));
  }
});
