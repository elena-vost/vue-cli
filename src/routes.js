import User from './componets/user/User.vue';
import Home from './componets/Home.vue';

export const routes = [
    { path: '', component: Home },
    { path: '/user', component: User }
];