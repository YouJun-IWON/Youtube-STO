import fs from 'fs';
import path from 'path';
import { faker } from '@faker-js/faker';

import { labels, priorities, statuses } from './data';

const tasks = Array.from({ length: 100 }, () => ({
  id: faker.number.int(1000),
  title: faker.person.fullName(),
  image: faker.image.urlPicsumPhotos(),
  price: faker.commerce.price({ min: 10000, max: 20000 }),
  date: faker.date.between({ from: '2024-01-01T00:00:00.000Z', to: '2025-01-01T00:00:00.000Z' }),
  status: faker.helpers.arrayElement(statuses).value,
  label: faker.helpers.arrayElement(labels).value,
  priority: faker.helpers.arrayElement(priorities).value,
}));

fs.writeFileSync(
  path.join(__dirname, 'tasks.json'),
  JSON.stringify(tasks, null, 2)
);

console.log('✅ Tasks data generated.');
