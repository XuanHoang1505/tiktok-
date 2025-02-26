import routesConfig from '~/config/routes';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';

import { IoMdSettings } from 'react-icons/io';
import { FaBitcoin, FaKeyboard, FaQuestionCircle, FaSignInAlt, FaUser } from 'react-icons/fa';
import { CiMenuKebab } from 'react-icons/ci';
import { FaLanguage } from 'react-icons/fa6';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import { IoLogOut } from 'react-icons/io5';

import Image from '~/components/Image';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import Search from '../Search';
// import { data } from 'react-router-dom';
import 'tippy.js/dist/tippy.css';

const cx = classNames.bind(styles);

const MENU_ITEM = [
    {
        icon: <FaLanguage />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FaQuestionCircle />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FaKeyboard />,
        title: 'Keyboard shortcuts',
    },
];
function Header() {
    const currentUser = true;

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                //handle change
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FaUser />,
            title: 'View profile',
            to: '/@hoaa',
        },
        {
            icon: <FaBitcoin />,
            title: 'Get coin',
            to: '/coin',
        },
        {
            icon: <IoMdSettings />,
            title: 'Setting',
            to: '/setting',
        },
        ...MENU_ITEM,
        {
            icon: <IoLogOut />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={routesConfig.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>
                <Search />
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={200} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={200} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={200} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary leftIcon={<FaSignInAlt />}>
                                Log in
                            </Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEM} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/4ec4af123468a13832c03b2e5e60c754~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&nonce=16216&refresh_token=ffde8872a7e2bd19b8651f0d28e62a7c&x-expires=1740657600&x-signature=4%2FQeNKM3FifRyTOn7lpk1qU0ilo%3D&idc=my&ps=13740610&shcp=81f88b70&shp=a5d48078&t=4d5b0474"
                                className={cx('user-avatar')}
                                alt="Nguyen Xuan Hoang"
                                fallback="https://fullstack.edu.vn/assets/f8-icon-lV2rGpF0.png"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <CiMenuKebab />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
