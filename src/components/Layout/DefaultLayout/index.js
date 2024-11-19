import Header from '~/components/Layout/components/Header';
import Sidebar from './Sidebar';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
const DefaultLayout = ({ children }) => {
    const cx = classNames.bind(styles);
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={styles.container}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
};
export default DefaultLayout;
