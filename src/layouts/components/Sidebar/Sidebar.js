import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupActiveIcon,
    UserGroupIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';
const cx = classNames.bind(styles);
const Sidebar = () => {
    return (
        // <aside className={styles.wrapper}>
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title={'Home'} to={config.routes.home} icon={HomeIcon({})} activeIcon={HomeActiveIcon({})} />
                <MenuItem
                    title={'Following'}
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={UserGroupActiveIcon({})}
                />
                <MenuItem title={'Live'} to={config.routes.live} icon={<LiveIcon />} activeIcon={LiveActiveIcon({})} />
            </Menu>
            <SuggestedAccounts label={'Suggested Accounts'} />
            <SuggestedAccounts label={'Following Accounts'} />
        </aside>
    );
};

export default Sidebar;
