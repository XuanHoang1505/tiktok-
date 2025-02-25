import classNames from 'classnames/bind';
import { IoIosCloseCircleOutline, IoMdDownload, IoIosSearch } from "react-icons/io";

import styles from './Header.module.scss'
import images from '~/assets/images';

const cx = classNames.bind(styles)
function Header() {
    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <img src={images.logo} alt="Tiktok"/>
            <div className={cx('search')}>
                <input placeholder='Search accounts and videos' spellCheck='false'/>
                <button className={cx('clear')}>
                    <IoIosCloseCircleOutline />
                </button>
                <IoMdDownload className={cx('loading')}/>
                <button className={cx('search-btn')}>
                    <IoIosSearch />
                </button>
            </div>
            <div className={cx('action')}>

            </div>
        </div>
    </header>
}

export default Header;
