// assets
import {
  IconMoneybag,
  IconDog,
  IconBriefcase,
  IconHanger,
  IconBurger,
  IconBallFootball,
  IconPlane,
  IconCameraStar,
  IconCodeAsterix,
  IconForbid,
  IconClock12,
  IconMovie,
  IconMusic,
  IconScale,
  IconBuildingChurch,
  IconPlanet,
} from '@tabler/icons-react';
import { store } from '../store/store';
import { setCategories} from '../store/categories/actions';
import { getCategories } from '../lib/jokes.actions';



// constant
const icons = {
  animal: IconDog,
  career: IconBriefcase,
  celebrity: IconCameraStar,
  dev: IconCodeAsterix,
  explicit: IconForbid,
  fashion: IconHanger,
  food: IconBurger,
  history: IconClock12,
  money: IconMoneybag,
  movie: IconMovie,
  music: IconMusic,
  political: IconScale,
  religion: IconBuildingChurch,
  science:  IconPlanet,
  sport: IconBallFootball,
  travel: IconPlane
};

// ==============================|| JOKES & MIXOLOGY MENU ITEMS ||============================== //


const categories = await getCategories();
store.dispatch(setCategories(categories));

const jokes = {
  id: 'jokes',
  title: 'Chuck Norris',
  type: 'group',
  children: [
    {
      id:'random',
      title: 'Random Joke',
      type: 'item',
      url: '/jokes/random',
    },
    {
      id:'all-categories',
      title: 'Jokes Categories',
      type: 'item',
      url: '/jokes/categories',
    },
    {
      id: 'jokes-category',
      title: 'Jokes by Category',
      type: 'collapse',
      children: categories.map((category) => ({
        id: `joke-${category}`,
        title: category.charAt(0).toUpperCase() + category.slice(1),
        type: 'item',
        url: `/jokes/${category}`,
        icon: icons[category],
        target: true,
      }))
    },
    {
      id:'cocktails',
      title: 'Mixology',
      type: 'item',
      url: '/cocktails',
    },
  ]
};

export default jokes;

