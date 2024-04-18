import './index.scss';
import ForismaticApiInstance from './ForismaticApi.js';

function setMargin(event) {
  const element = event.target;  
  const height = element.clientHeight;
  const marginBottomValue = 55 - (height / 2);
  element.style.marginBottom = `${marginBottomValue}px`;
}

function addQuote(quote, author) {

  const cards = document.getElementById('quotes__cards');

  const newQuote = document.createElement('div');
  newQuote.className = 'quotes__card';
  const quoteText = document.createElement('p');
  quoteText.className = 'quotes__card-text';
  quoteText.textContent = quote;
  newQuote.appendChild(quoteText);

  if (author) {
    const quoteAuthor = document.createElement('p');
    quoteAuthor.className = 'quotes__card-auther';
    quoteAuthor.textContent = '© ' + author;
    newQuote.appendChild(quoteAuthor, );
  }

  let firstChild = cards.querySelector('.quotes__card');
  if (firstChild.id === 'quote-template'){
    firstChild.remove();
  } 

  cards.appendChild(newQuote);
}


document.addEventListener('DOMContentLoaded', function() {
  const elements = document.querySelectorAll('.catalog__card-img');
  
  elements.forEach(function(element) {
    if (element.complete) {
      setMargin({target: element});
    } else {
      element.addEventListener('load', setMargin);
    }
  });

  let button = document.getElementById('get_quote__button');
  button.addEventListener('click', function(event) {

    ForismaticApiInstance.getQuote()
    .then(result => {
      if (result.length > 0)
      {
        let aQuote = result[0];
        addQuote(aQuote.quote, aQuote.author);
        event.target.scrollIntoView({ behavior: 'smooth' });  
      }
      else {
        console.log('error:', 'something wrong, result.length <= 0');
        console.log('result: ', result);
      }
     })
     .catch(error => {
       console.log('error:', error);
    });
    
  });

});