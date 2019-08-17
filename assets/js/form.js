
const init = function() {
    document.getElementById('button-submit').addEventListener('click', sendMessage);
  
}

const sendMessage = function(ev) {
    
   
    var formObject = document.getElementById("contact-form-03");

    var temp_body = {};
    for (let i = 0; i < formObject.length; i++) {
        temp_body[formObject.elements[i].name] = formObject.elements[i].value;
    }

    let text = 'Name: ' + temp_body.name + '\n' + 'Email: ' + temp_body.email + '\n' + 'Event Type: ' + temp_body.orderby + '\n' + 'Message: ' + temp_body.message  ;
    
    let body = {
        to: 'doggshoppetoronto@gmail.com',
        from: 'website-contact-page@smithstudios.ca',
        text: text,
        subject: 'New Message from Website'
    }
    let url = "https://er868qs1ji.execute-api.ca-central-1.amazonaws.com/dev/";
    
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    var data = JSON.stringify(body);
    xhr.send(data);
    alert("Message Sent!");
    /*
    fetch(url, {
      method: "POST", 
      body: JSON.stringify(body),
    headers: {
        //'Content-Type': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    }).then(res => {
      console.log("Request complete! response:", res);
    });

 
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);


    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");


    xhr.send(JSON.stringify(body));

    */
    
}

document.addEventListener('DOMContentLoaded', init);