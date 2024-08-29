import { request } from './services/api-service';

(async () => {
  const quoteDescNode = document.querySelector('.quote-desc');
  const quoteAuthorNode = document.querySelector('.quote-author');

  let quote =
    'Unfortunately, there was an error on the server, but as they say: "Even in failure, wisdom finds its voice."';
  let author = 'Team "Your Enegry"';

  const quoteFromLocalStorage = JSON.parse(localStorage.getItem('quote'));
  if (
    quoteFromLocalStorage &&
    typeof quoteFromLocalStorage?.quote === 'string' &&
    typeof quoteFromLocalStorage?.author === 'string' &&
    typeof quoteFromLocalStorage?.date === 'string'
  ) {
    console.log('LocalStorage');
    quote = quoteFromLocalStorage.quote;
    author = quoteFromLocalStorage.author;
  } else {
    try {
      console.log('FETCH');
      const data = await request('quote');

      quote = data.quote;
      author = data.author;

      localStorage.setItem(
        'quote',
        JSON.stringify({
          ...data,
          date: new Date(),
        })
      );
    } finally {
      quoteDescNode.textContent = quote;
      quoteAuthorNode.textContent = author;
    }
  }
})();
