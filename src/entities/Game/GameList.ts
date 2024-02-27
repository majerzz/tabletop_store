import { type TGame } from 'entities/Game/Game.type'
import screen1_1 from 'entities/Game/img/1terraformingMars/screen1.jpg'
import screen1_2 from 'entities/Game/img/1terraformingMars/screen2.jpg'

export const GameList: TGame[] = [
  {
    id: 1,
    title: 'Покорение Марса',
    description: 'В Покорение Марса игроки берут на себя роль корпораций, работающих вместе, чтобы терраформировать планету Марс, повышая температуру, добавляя в атмосферу кислород, покрывая поверхность планеты водой и создавая растительный и животный миры.',
    genre: 'Хуета',
    images: [screen1_1, screen1_2],
    price: 5870
  },
  {
    id: 2,
    title: 'Гномы вредители',
    description: 'Гномы-вредители (оригинальное название «Saboteur») — карточная настольная игра на тему золотодобычи, разработанная Фредериком Мойерсоном (Frederic Moyersoen) и выпущенная в 2004 году компанией Z-Man Games. В России локализована в 2010 году компанией «Стиль Жизни».',
    genre: 'Стратегия',
    images: [screen1_2, screen1_1],
    price: 3920
  },
  {
    id: 3,
    title: 'Гномы вредители',
    description: 'Еврик....',
    genre: 'Стратегия',
    images: [screen1_2, screen1_1],
    price: 5870
  },
  {
    id: 4,
    title: 'Тупое говно тупого говна',
    description: 'Еврик....',
    genre: 'Стратегия',
    images: [screen1_1, screen1_2],
    price: 5870
  },
  {
    id: 5,
    title: 'Тупое говно тупого говна',
    description: 'Еврик....',
    genre: 'Стратегия',
    images: [screen1_1, screen1_2],
    price: 5870
  }
]
