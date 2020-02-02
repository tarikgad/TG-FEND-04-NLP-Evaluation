async function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let formText = document.getElementById('name').value;
    console.log("reading value: ",formText);
    await Client.checkForName(formText);
    setTimeout(function(){
        console.log("::: Text Submitted :::");
        fetch('/callit')
        .then(res => res.json())
        .then(function(res) {
            document.getElementById('results').innerHTML = `The message of: "${res.text}" is ${res.subjectivity} sentance and has ${res.polarity} polarity`;
        });
    },1500);
}

export { handleSubmit };

