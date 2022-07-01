let library = []
let book;

document.querySelector('.new-book-btn').addEventListener('click', () => {
    document.querySelector('.book-info').style.display = 'flex';
});

const close = () => document.querySelector('.book-info').style.display = 'none'

document.querySelector('#close').addEventListener('click', close);

class Book {
    constructor(title, author, pages, read){
        this.title = formEl.title.value;
        this.author = formEl.author.value;
        this.pages = formEl.pages.value;
        this.read = formEl.read.checked;
    }
};

const addBook = (ev) => {
    ev.preventDefault(); //to prevent it from submitting data
    book = new Book;
    library.push(book);
    document.querySelector('form').reset();
    render()
    close();
};

function childrenRemover(){
    let parent = document.getElementById('book-cards')
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

function render(){
    childrenRemover();
    for(i in library){
        cardMaker(library[i])
    }
}


const cardMaker = (item) => {
    let newCard = document.createElement('article');
    newCard.setAttribute('id', 'book-card')
    let newBookTitle = document.createElement('h2');
    let newAuthor = document.createElement('p');
    let newPage = document.createElement('p');
    let readStatBtn = document.createElement('button');
    readStatBtn.setAttribute('id', 'read-btn');
    let removeBtn = document.createElement('button');
    removeBtn.setAttribute('class', 'remove-btn');
    
    newBookTitle.textContent = item.title;
    newAuthor.textContent = `by ${item.author}`;
    newPage.textContent = `${item.pages} pages`;
    if (item.read === true){
        readStatBtn.textContent = 'Read';
        readStatBtn.style.backgroundColor = 'green';
    }else{
        readStatBtn.textContent = 'Not read';
        readStatBtn.style.backgroundColor = 'grey';
    };

    document.getElementById('book-cards').appendChild(newCard)
    newCard.appendChild(newBookTitle);
    newCard.appendChild(newAuthor);
    newCard.appendChild(newPage);
    newCard.appendChild(readStatBtn);
    newCard.appendChild(removeBtn);
    
    readStatBtn.addEventListener('click', () => {
        item.read = !item.read;
        render()
    });
    
    removeBtn.addEventListener('click', () => {
        library.splice(library.indexOf(item), 1)
        render()
    });
    
};



document.querySelector('.add-btn').addEventListener('click', addBook)

   

//function to remove the card