import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { UploadIcon, MessageIcon, ActivityIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
import { Link } from 'react-router-dom';
import config from '~/config';
const MENU_ITEM = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];
const Header = () => {
    const cx = classNames.bind(styles);

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    };
    const currentUser = true;
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'User profile',
            to: '/@vominhloi',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Coins',
            to: '/coins',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEM,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];
    return (
        <header className={styles.wrapper}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo')}>
                    <img src={images.logo} alt="logo-tiktok" />
                </Link>
                {/* Search */}
                <Search />
                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Upload video" placement="bottom" deplay={[0, 200]}>
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Message" placement="bottom" deplay={[0, 200]}>
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Activity" placement="bottom" deplay={[0, 200]}>
                                <button className={cx('action-btn')}>
                                    <ActivityIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEM} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src="https://scontent.fdad7-1.fna.fbcdn.net/v/t1.6435-9/161957969_1051139288711176_7404328044789997673_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=94e2a3&_nc_ohc=YxZ-UfKlMyEQ7kNvgE6qdDR&_nc_zt=23&_nc_ht=scontent.fdad7-1.fna&_nc_gid=Aai0gAgqdnl24kSwQMQ6OIk&oh=00_AYAEH_b0eQY6fxGxu0UrUJcIobPV7A8IfxeAmLVbNO3bdw&oe=6764FF24"
                                className={cx('user-avatar')}
                                alt="Vo Minh Loi"
                                fallback="https://fullstack.edu.vn/assets/f8-icon-lV2rGpF0.png"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
};

export default Header;
