import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import { HeaderOnly } from '~/components/Layout';

const publicRouters = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/:username', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
];
const privateRouters = [];
export { publicRouters, privateRouters };
