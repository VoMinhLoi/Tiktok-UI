import Tippy from '@tippyjs/react/headless';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);
const defaultFn = () => {};
function Menu({ children, items = [], onChange = defaultFn, hideOnClick = false }) {
    const [history, setHistory] = useState([{ data: items }]);
    const currentHistory = history[history.length - 1];
    const renderItems = () => {
        return currentHistory.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    data={item}
                    key={index}
                    onClick={() => {
                        if (isParent) setHistory((preHistory) => [...preHistory, item.children]);
                        else onChange(item);
                    }}
                />
            );
        });
    };
    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                {history.length > 1 && (
                    <Header
                        title={currentHistory.title}
                        onBack={() => {
                            setHistory((preHistory) => preHistory.slice(0, -1));
                        }}
                    />
                )}
                <div className={cx('menu-body')}>{renderItems()}</div>
            </PopperWrapper>
        </div>
    );
    const hanldeResetMenu = () => {
        setHistory((preHistory) => preHistory.slice(0, 1));
    };
    return (
        <Tippy
            interactive
            delay={[0, 200]}
            offset={[12, 8]}
            placement="bottom-end"
            render={renderResult}
            onHide={hanldeResetMenu}
            hideOnClick={hideOnClick}
        >
            {children}
        </Tippy>
    );
}
Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    onChange: PropTypes.func,
    hideOnClick: PropTypes.bool,
};
export default Menu;
