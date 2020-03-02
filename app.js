document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
    const number = document.querySelector('input[type=number]').value;
    
    const xhr = new XMLHttpRequest();

    xhr.open('GET', `https://api.icndb.com/jokes/random/${number}`, true);

    xhr.onload = function() {
        if(this.status === 200){
            const jokes = JSON.parse(this.responseText);
            
            let output = '';
            if(jokes.type === 'success' && number != "" && number == 1){
                document.querySelector('#heading').innerHTML = "Joke";
                jokes.value.forEach(function (joke) {               
                    console.log(joke);
                    output += `
                    
                    <li class="list-group-item"></strong> ${joke.joke}</strong></li>
                    `;
                
                })
             } else if (jokes.type === 'success' &&  number != '' && number >= 2) {
                document.querySelector('#heading').innerHTML = "Jokes";
                jokes.value.forEach(function (joke) {               
                    output += `
                    
                    <li class="list-group-item"></strong> ${joke.joke}</strong></li>
                    `;
                
                })
             }
             
             else {
                document.querySelector('#heading').innerHTML = "Something went wrong";
             }
                              
             document.querySelector('.jokes').innerHTML = output;                  
        }
    }

    xhr.send();
    e.preventDefault();
}
