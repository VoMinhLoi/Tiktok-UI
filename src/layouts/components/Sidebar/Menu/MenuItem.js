import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function MenuItem({ to, title, icon, activeIcon }) {
    return (
        <NavLink
            to={to}
            className={(navObject) =>
                cx('menu-item', {
                    active: navObject.isActive,
                })
            }
        >
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('active-icon')}>{activeIcon}</span>
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    // icon: PropTypes.node.isRequired,
};

export default MenuItem;
