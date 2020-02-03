function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
}

async function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let formText = document.getElementById('name').value;
    if(validURL(formText)){
        alert("Try a normal sentance. It's not for URL");
    }else{
        console.log("reading value: ",formText);
        await Client.checkForName(formText);
        setTimeout(function(){
            console.log("::: Text Submitted :::");
            fetch('http://localhost:8080/callit')
            .then(res => res.json())
            .then(function(res) {
                document.getElementById('results_text').innerHTML = `The message is: ${res.text}`;
                document.getElementById('results_subjectivity').innerHTML = `The message subjectivity is: ${res.subjectivity}`;
                document.getElementById('results_polarity').innerHTML = `The message polarity is: ${res.polarity}`;
                document.getElementById('results_polarity_confidence').innerHTML = `The message has polarity confidence of: ${res.polarity_confidence}`;
                document.getElementById('results_subjectivity_confidence').innerHTML = `The message has sujectivity confidence of: ${res.subjectivity_confidence}`;
            });
        },1500);    
    }
}

export { handleSubmit,validURL };

