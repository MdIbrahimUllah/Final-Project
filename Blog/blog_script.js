function clickAlert() {
    
    alert("You are at the Home Page");
    // document.getElementById("body").style.backgroundColor = "orange";
    // alert("click home to go back to normal");
  
  }

  // creating a send-mail function
  function sendMail(){
    let parms={
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    }
    emailjs.send("service_x85q6i8", "template_fivsp3u", parms).then(alert("Email has been sent successfully!"))
}