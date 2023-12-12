import fs from 'fs';
import path from 'path';
import { faker } from '@faker-js/faker';

import { labels, priorities, statuses } from './data';

const tasks = Array.from({ length: 8 }, () => ({
  id: faker.number.int(1000),
  title: faker.person.fullName(),
  image: faker.image.url(),
  raise: faker.commerce.price({ min: 500000, max: 5000000 }),
  rate: faker.number.float({ min: -99, max: 99, precision: 0.01 }),
  date: faker.date.between({
    from: '2024-01-01T00:00:00.000Z',
    to: '2025-01-01T00:00:00.000Z',
  }),
  status: faker.helpers.arrayElement(statuses).value,
  hardcap: faker.datatype.boolean(0.6),
  wlstage: faker.datatype.boolean(0.6),
}));

fs.writeFileSync(
  path.join(__dirname, 'tasks.json'),
  JSON.stringify(tasks, null, 2)
);

console.log('✅ Tasks data generated.');

// : player1Deck.split(',').length === 7 &&
//         player2Deck.split(',').length === 7 &&
//         centerDeck.split(',').length === 37 &&
//         showDeck.split(',').length === 1 ? (
//         <FirstTurn
//           player1Deck={player1Deck.split(',')}
//           player2Deck={player2Deck.split(',')}
//           centerDeck={centerDeck.split(',')}
//           showDeck={showDeck.split(',')}
//           member={currentMember}
//           otherMember={otherMember}
//           chatId={conversation.id}
//           type='conversation'
//           apiUrl='/api/direct-messages'
//           paramKey='conversationId'
//           paramValue={conversation.id}
//           socketUrl='/api/socket/direct-messages'
//           socketQuery={{
//             conversationId: conversation.id,
//           }}
//         />
//       )

//        {player1Deck === '' &&
//       player2Deck === '' &&
//       centerDeck === '' &&
//       showDeck === '' ? (
//         <StartGame
//           showDeck={showDeck}
//           centerDeck={centerDeck}
//           member={currentMember}
//           profileAddress={profile.address}
//           name={otherMember.profile.name}
//           chatId={conversation.id}
//           type='conversation'
//           apiUrl='/api/direct-messages'
//           paramKey='conversationId'
//           paramValue={conversation.id}
//           socketUrl='/api/socket/direct-messages'
//           socketQuery={{
//             conversationId: conversation.id,
//           }}
//         />
//       ) :

//        {data?.pages[0].items.length === 0 ? <div>effff</div> :  <div>wefwe</div>}
