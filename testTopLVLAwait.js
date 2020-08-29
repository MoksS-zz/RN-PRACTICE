import axios from 'axios';

const response = await axios('https://quote-garden.herokuapp.com/api/v2/quotes/random');
console.log(response.data);


// do not forget to indicate "type": "module", in package.json