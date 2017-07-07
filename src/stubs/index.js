import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

var mock = new MockAdapter(axios);

mock.onGet('/cards').reply(200, require('../stubs/stub_cards.js'))
mock.onGet('/letters').reply(200, require('../stubs/stub_letters.js'))
