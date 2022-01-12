import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamsMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamFooter from './components/teams/TeamFooter';
import UserFooter from './components/users/UserFooter';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      name: 'teams',
      path: '/teams',
      meta: { needAuth: true },
      components: { default: TeamsList, footer: TeamFooter },
      children: [
        {
          name: 'team-member',
          path: ':teamId',
          component: TeamsMembers,
          props: true,
        },
      ],
    }, // our-domain.com/teams => TeamsList
    {
      path: '/users',
      components: { default: UsersList, footer: UserFooter },
      beforeEnter(to, from, next) {
        console.log('before enter method');
        console.log(to, from);
        next();
      },
    },

    // { path: '/notFound', component: NotFound },
    { path: '/:notFound(.*)', component: NotFound }, // redirect: '/notFound' },
  ],
  linkActiveClass: 'active',
  scrollBehavior(_to, _from, savedPosition) {
    // console.log(to, from, savedPosition);
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

router.beforeEach(function (to, from, next) {
  console.log('Globle beforeEach');
  console.log(to, from);
  // if (to.name === 'team-member') {
  //   next();
  // } else {
  //   next({ name: 'team-member', params: { teamId: 't2' } });
  // }

  if (to.meta.needAuth) {
    console.log('Needs Auth!');
    next();
  } else {
    next();
  }
  next();
});

router.afterEach(function (to, from) {
  console.log('after Each');
  console.log(to, from);
});

const app = createApp(App);

app.use(router);

app.mount('#app');
