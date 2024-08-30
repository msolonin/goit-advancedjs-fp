import { request } from './services/api-service';

const BACKUP_QUOTE = {
  text: 'Unfortunately, there was an error on the server, but as they say: "Even in failure, wisdom finds its voice."',
  author: 'Team "Your Enegry"',
};

// Main
const quoteFromStorage = getQuoteFromStorage();
const quote = {
  text: BACKUP_QUOTE.text,
  author: BACKUP_QUOTE.author,
};

if (
  isQuoteFromStorageValid(quoteFromStorage) &&
  isTodayDate(quoteFromStorage.date)
) {
  quote.text = quoteFromStorage.text;
  quote.author = quoteFromStorage.author;
} else {
  try {
    await fetchAndSaveQuote(quote);
  } catch (error) {
    console.log(error);
  }
}

renderQuote(quote);

// Utils
async function fetchAndSaveQuote(quote) {
  const response = await request('quote');
  quote.text = response.quote;
  quote.author = response.author;
  localStorage.setItem(
    'quote',
    JSON.stringify({
      text: response.quote,
      author: response.author,
      date: new Date(),
    })
  );
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

function renderQuote(quote) {
  const quoteNode = document.querySelector('.quote-desc');
  const authorNode = document.querySelector('.quote-author');

  quoteNode.textContent = quote.text;
  authorNode.textContent = quote.author;
  quoteNode.classList.remove('skeleton');
  authorNode.classList.remove('skeleton');
}

function isQuoteFromStorageValid(quote) {
  return (
    quote &&
    typeof quote?.text === 'string' &&
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
