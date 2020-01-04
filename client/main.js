$(document).ready(function() {

// get a quote from the server when the page loads and add it to the dom
  getQuote();

// when the user enters data and clicks submit, post the quote to the server
  $('#submit').click((e) => {
    e.preventDefault();
    let quote = $('input').val();
    addQuote(quote);
  });

  function getQuote(){
    //YOUR CODE HERE, Add a GET request
        // need to figure out what Data needs to send as the data for req
    $.get('http://localhost:3000/quotes', {}, function(quote) {
      console.log('inside return from get request:', quote)
      $(document).getElementById('quote').append(quote)
    }, 'text');
  }

  function addQuote(quote){
    //YOUR CODE HERE, Add a POST request
    $.post('http://localhost:3000/quotes', {data: quote}, function(quote) {
      console.log('inside return from post request:', quote)
      //$(document).getElementById('quote').append(quote)
    }, 'text');
  }
});
