const jishoApi = require('unofficial-jisho-api');
const jisho = new jishoApi();

jisho.searchForExamples('日').then(result => {
  console.log('Jisho Uri: ' + result.uri);
  console.log();

  for (let i = 0; i < 3; ++i) {
    let example = result.results[i];
    console.log(example.kanji);
    console.log(example.kana);
    console.log(example.english);
    console.log(JSON.stringify(example.pieces));
    console.log();
  }
});