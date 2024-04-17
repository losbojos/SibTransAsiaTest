import './index.scss';
import ForismaticApiInstance from './ForismaticApi.js';

function setMargin(event) {
  const element = event.target;  
  const height = element.clientHeight;
  const marginBottomValue = 55 - (height / 2);
  element.style.marginBottom = `${marginBottomValue}px`;
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
  button.addEventListener('click', function() {


    ForismaticApiInstance.getQuote()
    .then(result => {
       console.log('result:', result);
     })
     .catch(error => {
       console.log('error:', error);
    });    

    
  });  

});