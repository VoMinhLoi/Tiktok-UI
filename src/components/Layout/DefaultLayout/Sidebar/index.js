import { Link } from 'react-router-dom';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const Sidebar = () => {
    return (
        // <aside className={styles.wrapper}>
        <aside className={cx('wrapper')}>
            <Link to="/">Home</Link>
            <Link to="/following">Following</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/upload">Upload</Link>
        </aside>
    );
};

export default Sidebar;
