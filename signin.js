const signIn = document.getElementById("signIn");

signIn.innerText = "Sign In";

signIn.addEventListener("click", (event) => {
  event.preventDefault();

  //get values
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  //set the text of the button to loading
  signIn.innerText = "Loading...";
  signIn.classList.add("pulse");

  //checking
  if (email === "" || password === "") {
    Swal.fire({
      icon: "info",
      text: "All fields are required!",
      confirmButtonColor: "#2D85DE",
    });
    signIn.innerText = "Sign In";
    signIn.classList.remove("pulse");
  } else {
    const signInData = new FormData();
    signInData.append("email", email);
    signInData.append("password", password);

    const signReq = {
      method: "POST",
      body: signInData,
    };

    const URL = "https://pluralcodesandbox.com/yorubalearning/api/admin_login";

    fetch(URL, signReq)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);

        //weʻre getting a result object from the backend and we need to save that in our localstorage but we need to convert the onj to JSON so we can store it in our local storage
        localStorage.setItem("adminObj", JSON.stringify(result));

        //now we need to get it
        const getAdminObj = localStorage.getItem("adminObj");
        // we need to convert it back to JSON
        const adminObj = JSON.parse(getAdminObj);

        // now we check of the object has a particular value in this case email.
        if (adminObj.hasOwnProperty("email")) {
          location.href = "dashboard.html";
        } else {
          Swal.fire({
            icon: "warning",
            text: "Login Unsuccessful",
            confirmButtonColor: "#2D85DE",
          });
          signIn.innerText = "Sign In";
          signIn.classList.remove("pulse");
        }
      })
      .catch((error) => console.log("Error", error));
  }
});
