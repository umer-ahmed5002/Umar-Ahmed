function homePage(){
    window.location.href = 'index.html'
}


function submit(){

        let name = document.querySelector("#name").value
        let email = document.querySelector("#email").value
        let message = document.querySelector("#message").value

        let body = `Email: ${email} "<br/>" Name: ${name} "<br/>" Message: ${message}`


        
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "umarahmed1234509876@gmail.com",
        Password : "C35F3820DC3134C889FBEBCEACC4A9E28B7C",
        To : 'umarahmed1234509876@gmail.com',
        From : "umarahmed1234509876@gmail.com",
        Subject : "This is the subject",
        Body : body
    }).then(
      message =>{ 
        alert('Email has been sent')
        document.querySelector("#name").value = ''
        document.querySelector("#email").value = ''
        document.querySelector("#message").value = ''
    }
    )
    .catch(err => alert(err));
}


