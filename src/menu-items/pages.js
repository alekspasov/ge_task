// assets
import { IconKey } from '@tabler/icons-react';

// constant
const icons = {
  IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  title: 'Pages',
  caption: 'Pages Caption',
  type: 'group',
  children: [
    {
      id: 'login3',
      title: 'Login',
      type: 'item',
      icon: icons.IconKey,
      url: '/login',
      target: true
    },
  ]
};

export default pages;
