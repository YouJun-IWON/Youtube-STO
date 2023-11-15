import fs from 'fs';
import path from 'path';
import { faker } from '@faker-js/faker';

import { labels, priorities, statuses } from './data';

const tasks = Array.from({ length: 100 }, () => ({
  id: faker.number.int(1000),
  title: faker.person.fullName(),
  image: faker.image.avatar(),
  price: faker.commerce.price({ min: 10000, max: 20000 }),
  rate: faker.number.float({ min: -99, max: 99, precision: 0.01 }),
  date: faker.date.between({
    from: '2024-01-01T00:00:00.000Z',
    to: '2025-01-01T00:00:00.000Z',
  }),
  status: faker.helpers.arrayElement(statuses).value,
  label: faker.helpers.arrayElement(labels).value,
  priority: faker.helpers.arrayElement(priorities).value,
  marketCapa: faker.commerce.price({ min: 100000000, max: 200000000 }),
  transaction: faker.commerce.price({ min: 1000000, max: 2000000 }),
  like: faker.number.int({ min: 0, max: 1 }),
}));

fs.writeFileSync(
  path.join(__dirname, 'tasks.json'),
  JSON.stringify(tasks, null, 2)
);

console.log('✅ Tasks data generated.');
