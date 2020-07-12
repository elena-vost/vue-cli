import User from './componets/user/User.vue';
import Home from './componets/Home.vue';
import UserStart from './componets/user/UserStart.vue';
import UserDetail from './componets/user/UserDetail.vue';
import UserEdit from './componets/user/UserEdit.vue';

export const routes = [
    { path: '', component: Home },
    { path: '/user', component: User, children: [
        { path: '', component: UserStart },
        { path: ':id', component: UserDetail },
        { path: ':id/edit', component: UserEdit }
    ] }
];