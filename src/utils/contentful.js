import { createClient } from 'contentful';

const client = createClient({
  space: 'stjy307y3wj0',
  accessToken: '6762def0bcd0ce026042e11460ffbb611396a4709c76a6ac0a9a86b4a8db2969',
});

export const getEntry = entry => client.getEntry(entry);

export const getEntries = options => client.getEntries(options);
