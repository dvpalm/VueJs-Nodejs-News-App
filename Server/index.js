const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let news = [];

let urlAPI = 'https://newsapi.org/v2/everything?q=apple&from=2022-02-16&to=2022-02-16&sortBy=popularity&apiKey=eed23c4b4a74423abababde8cc78f44a';

fetch(urlAPI).then(response => response.json()).then((data) => {
     data.articles.forEach(function(article){
            if (article.author != null && article.author.split(' ').length -1 >=1 && article.author.split(' ').length -1 < 3) {
                news.push(article);
            }
    });
});

app.get('/news', (request, response) => {
    response.json(news);
});

app.get('/news/:title', (request, response) => {
    const title = request.params.title;
    let APIByTitle = 'https://newsapi.org/v2/everything?qInTitle=' + title + '&from=2022-02-16&to=2022-02-16&sortBy=popularity&apiKey=eed23c4b4a74423abababde8cc78f44a';

    fetch(APIByTitle).then(response => response.json()).then((data) => {
        response.json(data.articles);
    });
})

app.listen(3000, () => console.log('Server attivo sulla porta 3000'));