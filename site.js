
const movies = [
    {
        "title": "The Dark Knight",
        "author": "Jonathan Nolan, Christopher Nolan",
        "released": "07/18/2008",
        "genres": ["Action", "Crime", "Drama"]
    },
    {
        "title": "Point Break",
        "author": "W. Peter Iliff",
        "released": "07/12/1991",
        "genres": ["Action", "Crime", "Thriller"]
    },
    {
        "title": "Wall Street",
        "author": "Stanley Weiser, Oliver Stone",
        "released": "12/11/1987",
        "genres": ["Drama"]
    },
    {
        "title": "The Devil's Advocate",
        "author": "Jonathan Lemkin, Tony Gilroy",
        "released": "10/17/1997",
        "genres": ["Drama", "Mystery", "Thriller"]
    },
    {
        "title": "Goodfellas",
        "author": "Nicholas Pileggi, Martin Scorsese",
        "released": "09/19/1990",
        "genres": ["Biography", "Crime", "Drama"]
    }
]

const movieList = document.querySelector('#movies')

movies.forEach(movies => {
    const li = document.createElement('li') // create a new li element
    movieList.append(li) // append the li element to the ol element

    const {title, author, released, genres} = movies

    

    li.innerHTML =  `
    <span class="title">${title}</span>
    <span class="author">${author}</span>
    <span class="released">${released}</span>
    <ul></ul>
`
    const ul = li.querySelector('ul')
    genres.forEach(genre => {
        const genreLi = document.createElement('li')
        genreLi.textContent = genre
        ul.append(genreLi)
    })
})

document.addEventListener("DOMContentLoaded", function () {
    const key = "It's a secret to everybody."; 
    
    localStorage.setItem(key, 'The Legend of Zelda ');

});
