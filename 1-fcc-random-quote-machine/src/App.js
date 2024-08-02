import React from 'react';
import { useEffect, useState } from "react";

function App(){
  const[quotes, setQuotes] =  useState({})

  useEffect(()=>{
    getQuote();

  },[]);

  const getQuote = () => {
    fetch('https://dummyjson.com/quotes')
    .then((response) => { 
      return response.json();
    })
    .then((data) => {
      setQuotes({
        text : data.quote,
        author : data.author,
      });
    });
  };

  return (
  <div className='App'>
    <div id='quote-box'>
      <p id='text'>{quotes.text}</p>
      <p id='author'>{quotes.author}</p>
      <button id='new-quote'onClick={getQuote}> New Quote </button>   
      <a id="tweet-quote"  href="https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=%22It%20is%20not%20what%20you%20do%20for%20your%20children%2C%20but%20what%20you%20have%20taught%20them%20to%20do%20for%20themselves%2C%20that%20will%20make%20them%20successful%20human%20beings.%22%20Ann%20Landers">
            <i class="fa fa-twitter"></i>
        </a>

        <a id="tumblr-quote" href="https://www.tumblr.com/widgets/share/tool?posttype=quote&amp;tags=quotes,freecodecamp&amp;caption=Ann%20Landers&amp;content=It%20is%20not%20what%20you%20do%20for%20your%20children%2C%20but%20what%20you%20have%20taught%20them%20to%20do%20for%20themselves%2C%20that%20will%20make%20them%20successful%20human%20beings.&amp;canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&amp;shareSource=tumblr_share_button" >
            <i class="fa fa-tumblr"></i>
          </a>
          
    </div>
  </div>
  );
}
export default App;
