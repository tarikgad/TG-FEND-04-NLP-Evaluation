const postData = async ( url = '', data = {})=>{
    console.log("first in postData");
    console.log("data is: ",data);
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try {
        const newData = await response.json();
        console.log("newData in POST is");
        console.log(newData);
        return newData;
    }
    catch(error) {
        console.log("error", error);
    }
};

function checkForName(inputText) {
    console.log("::: Running checkForName :::",inputText);
    
    postData('/add', {inputdata:inputText});
}

export { checkForName };