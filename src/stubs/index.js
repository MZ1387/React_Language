import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

var mock = new MockAdapter(axios);

mock.onGet('/api/cards').reply(200, require('../stubs/stub_cards.js'));
mock.onGet('/api/categories').reply(200, require('../stubs/stub_categories.js'));
mock.onGet('/api/letters').reply(200, require('../stubs/stub_letters.js'));
mock.onGet('/api/lessons').reply(200, require('../stubs/stub_lessons.js'));
