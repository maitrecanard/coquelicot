
const mail = {

    form : document.querySelector('.form-contact'),
    champ: document.querySelector('.form_opa'),
    message : document.querySelector('.message'),
    httpHeaders: new Headers(),
   
    

    apiUrl: "https://messenger.pension-le-coquelicot.fr/api/",
   

    uri : "sendmail",

    init: function() {
        mail.httpHeaders.append("Content-Type", "application/json");
        const submit = mail.form;
        submit.addEventListener('submit', mail.controlMail);
    },

    controlMail: function(event)
    {
        event.preventDefault();
      
        const name = document.querySelector('#message_name').value;
        const email = document.querySelector('#message_email').value;
        const message = document.querySelector('#message_content').value;

      
        
        if (!name || !email || !message ) 
        {
            const contentMessage = 'Veuillez renseigner tous les champs'
            mail.erreurMessage(contentMessage);
            
        } else {
            mail.wait();
            mail.sendMail(name,email,message);
        }
 
        
        
    },


    sendMail: function(name,email,message,token=1234)
    {
        const data = {
            "name" : name,
            "email" : email,
            "content" : message,
            "token" :token
        }

        const config = {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            headers: mail.httpHeaders,
            body: JSON.stringify(data)
        }

        const fullUrl = mail.apiUrl + mail.uri;
        fetch(fullUrl, config)
        .then(function(response){
    
            return  response.json();
        })
        .then(
            function(message)
            {
               mail.clearSuccessMessage();
               if (message.success)
               {
                    mail.successMessage(message.success);
                    mail.cleanForm();
               } else {
                   mail.erreurMessage(message.errors);
               }
            })
        .catch((error) => {
            mail.erreurMessage(error);
        });


        
    },

    erreurMessage: function(content) {

            mail.message.textContent = content;
        
       
        mail.champ.classList.add('start-message');
        mail.message.classList.remove('alert-success');
        mail.message.classList.add('alert-error');

        setTimeout(mail.clearErrorMessage, 2000);
    },
    wait: function() {
        mail.message.textContent = 'Veuillez patienter';
        mail.champ.classList.add('start-message');
        mail.message.classList.add('alert-success');

        setTimeout(mail.clearSuccessMessage, 5000);
    },

    successMessage: function(content) {
        mail.message.textContent = content + ' nous vous invitons à vérifier vos spams';
        mail.champ.classList.add('start-message');
        mail.message.classList.add('alert-success');

        setTimeout(mail.clearSuccessMessage, 5000);
    },

    clearErrorMessage: function() {
        mail.champ.classList.remove('start-message');
        mail.message.classList.remove('alert-error');

       
    },

    
    clearSuccessMessage: function() {
        mail.champ.classList.remove('start-message');
        mail.message.classList.remove('alert-success');

        
    },


    cleanForm: function()
    {
        const form = mail.form;
        form.reset();
    }

}

mail.init();