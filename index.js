//var proxy = "https://cors-anywhere.herokuapp.com/";

function fetchQuote() { fetch('https://api.quotable.io/random').then(response =>{
    return response.json()
}).then(data =>{
    console.log(data);
    display(data);
}).catch(error =>{
    console.log(error);
});
}

fetchQuote();
function display(data){
    let container = document.getElementById('container');
    container.innerHTML = "";
    // let quoteRow = document.createElement('div');
    // quoterow.className = 'row';

    let quote = document.createElement('h4');
    quote.className = 'quote-text';
    quote.innerHTML = `<blockquote>${data.content}</blockquote>`;
    
    let authorRow = document.createElement('div');
    authorRow.className = 'row justify-content-end';
    
    let author = document.createElement('div');
    author.className = 'col s12';

    let authorName = document.createElement('h4');
    authorName.innerText = `- ${data.author}`;
    authorName.style.textAlign = "right";
    
    author.append(authorName);
    authorRow.append(author);
    container.append(quote,authorRow);
}


document.getElementById('new-quote').addEventListener('click', e =>{
    fetchQuote();   
})