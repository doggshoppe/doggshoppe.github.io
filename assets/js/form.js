
const init = function() {
    document.getElementById('button-submit').addEventListener('click', sendMessage);
  
}

const sendMessage = function(ev) {
    
    
       
    var formObject = document.getElementById("contact-form-03");


    var temp_body = {};
    for (let i = 0; i < formObject.length; i++) {
        temp_body[formObject.elements[i].name] = formObject.elements[i].value;
    }
    console.log(temp_body);

    let text = 'Name: ' + temp_body.name + '\n' + 'Email: ' + temp_body.email + '\n' + 'Message: ' + temp_body.message + '\n' +  'Event Type: ' + temp_body.orderby;
    
    console.log(text)
    
    let body = {
        to: 'blake@smithstudios.ca',
        from: 'website-contact@smithstudios.ca',
        text: text
    }
    let url = "https://er868qs1ji.execute-api.ca-central-1.amazonaws.com/dev/";
    
    fetch(url, {
      method: "POST", 
      body: JSON.stringify(body)
    }).then(res => {
      console.log("Request complete! response:", res);
    });

    /*
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);


    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");


    xhr.send(JSON.stringify(body));

    */
    
}

document.addEventListener('DOMContentLoaded', init);