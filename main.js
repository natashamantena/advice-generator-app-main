
fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => {

        document.getElementById("advice-id").innerHTML = `Advice #${data.slip.id}`;
        document.getElementById("advice-text").innerHTML = `"${data.slip.advice}"`;
    })
    .catch(error => console.error(error));



