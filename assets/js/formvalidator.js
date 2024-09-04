// window.addEventListener('load', () => {
//     refreshEmailForm();
// });


// const refreshEmailForm = () =>{
//     emailObject = new Object();

//     document.getElementById("inputSenderName").classList.remove('is-valid','is-invalid');
//     document.getElementById("inputSenderEmail").classList.remove('is-valid','is-invalid');
//     document.getElementById("inputEmailSubject").classList.remove('is-valid','is-invalid');
//     document.getElementById("inputEmailMessage").classList.remove('is-valid','is-invalid');
//     document.getElementById("inputSenderName").value = '';
//     document.getElementById("inputSenderEmail").value = '';
//     document.getElementById("inputEmailSubject").value = '';
//     document.getElementById("inputEmailMessage").value = '';
    
// }



const checkFormErrors = () => {
    let errors = '';
    if (emailObject.sendername == null) {
        errors = errors + "Please enter a your name..!\n";
        inputSenderName.classList.add('is-invalid');
    }
    if (emailObject.senderemail == null) {
        errors = errors + "Please enter a your email..!\n";
        inputSenderEmail.classList.add('is-invalid');
    }
    if (emailObject.subject == null) {
        errors = errors + "Please enter a subject..!\n";
        inputEmailSubject.classList.add('is-invalid');
    }
    if (emailObject.message == null) {
        errors = errors + "Please enter a message..!\n";
        inputEmailMessage.classList.add('is-invalid');
    }
    return errors;
}




const submitEmail = () => {
    const errors = checkFormErrors();
    if (errors == '') {
        const senderEmail = emailObject.senderemail;
        const senderName = emailObject.sendername;
        const emailSubject = emailObject.subject;
        const emailMessage = emailObject.message;
        // console.log(senderEmail);
        // console.log(senderName);
        // console.log(emailSubject);
        // console.log(emailMessage);
        
        Email.send({
            Host: "smtp.gmail.com",
            Username: "smtcomputerstore@gmail.com",
            Password: "Admin12@987",
            To: 'sadeeshamanujaya99@gmail.com',
            From: senderEmail,
            Subject: emailSubject,
            Body: "Name : "+ senderName +".\n" + emailMessage,
        })
    } else {
        alert("Form has following errors : \n" + errors)
    }
}

// document.getElementById("sendEmailBtn").addEventListener('click',()=>{
//     submitEmail();
// });

const textValidator = (fieldID, pattern,object,property)=>{
    const regPattern = new RegExp(pattern);
    if(fieldID.value !== ''){
        if (regPattern.test(fieldID.value)){
            fieldID.classList.add('is-valid');
            fieldID.classList.remove('is-invalid');
            window[object][property] = fieldID.value;

            //generate calling Name options
        }else{
            fieldID.classList.remove('is-valid');
            fieldID.classList.add('is-invalid');
            window[object][property] = null;
        }
    }else{
        fieldID.classList.remove('is-valid');
        fieldID.classList.remove('is-invalid');
        window[object][property] = null;
    }
}


const openFileWithHtmlContent = () => {

    // Open a new window with limited features
    const windowFeatures = "menubar=no,toolbar=no,location=no,status=no,scrollbars=yes,resizable=yes,width=900,height=600";
    const newWindow = window.open("", "_blank", windowFeatures);

    //console.log('PDF - true ');
    const additionalHtmlContent = `
    <html>
    <head>
        <title>File Preview</title>
    </head>
    <body>
        <div id="printableContent"><img src="assets/sadeeshaMResumePng.png" width="800px" height="auto" style="border: 2px solid; margin-left: 15px;"></div>
    </body>
    </html> `;

    newWindow.document.write(additionalHtmlContent);

    newWindow.document.close();
}