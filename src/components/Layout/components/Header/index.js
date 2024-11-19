import styles from './Header.module.scss';
import classNames from 'classnames/bind';
const Header = () => {
    const cx = classNames.bind(styles);
    return (
        <header className={styles.wrapper}>
            <div className={cx('inner')}>Header</div>
        </header>
    );
};

export default Header;
