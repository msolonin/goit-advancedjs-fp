import { request } from './services/api-service';

const BACKUP_QUOTE = {
  quote:
    'Unfortunately, there was an error on the server, but as they say: "Even in failure, wisdom finds its voice."',
  author: 'Team "Your Enegry"',
};

(async () => {
  const quoteFromStorage = getQuoteFromStorage();

  let quote = BACKUP_QUOTE.quote;
  let author = BACKUP_QUOTE.author;

  if (
    validateStorageQuote(quoteFromStorage) &&
    isTodayDate(quoteFromStorage.date)
  ) {
    quote = quoteFromStorage.quote;
    author = quoteFromStorage.author;
  } else {
    try {
      const response = await request('quote');
      quote = response.quote;
      author = response.author;
      localStorage.setItem(
        'quote',
        JSON.stringify({ ...response, date: new Date() })
      );
    } catch (error) {
      console.log(error);
    }
  }

  renderQuote(quote, author);
})();

function renderQuote(quote, author) {
  const quoteNode = document.querySelector('.quote-desc');
  const authorNode = document.querySelector('.quote-author');

  quoteNode.textContent = quote;
  authorNode.textContent = author;
  quoteNode.classList.remove('skeleton');
  authorNode.classList.remove('skeleton');
}

function getQuoteFromStorage() {
  let quoteFromStorage;

  try {
    quoteFromStorage = JSON.parse(localStorage.getItem('quote'));
  } catch (error) {
    console.error(error);
  }

  return quoteFromStorage;
}

function validateStorageQuote(quote) {
  return (
    quote &&
    typeof quote?.quote === 'string' &&
    typeof quote?.author === 'string' &&
    typeof quote?.date === 'string'
  );
}

function isTodayDate(date) {
  let dateFromStorage = new Date(date);
  let today = new Date();

  today.setHours(0, 0, 0, 0);
  dateFromStorage.setHours(0, 0, 0, 0);

  return dateFromStorage.getTime() === today.getTime();
}
