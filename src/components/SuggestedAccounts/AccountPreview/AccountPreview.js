import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';
import { FaCheckCircle } from 'react-icons/fa';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/4ec4af123468a13832c03b2e5e60c754~tplv-tiktokx-cropcenter:720:720.jpeg?dr=14579&nonce=54125&refresh_token=124a6ac3c88c7112e6476660afb5c503&x-expires=1740834000&x-signature=b36%2B8M8KQYdHLZ8ZD3wZPVmjpKM%3D&idc=my&ps=13740610&shcp=81f88b70&shp=a5d48078&t=4d5b0474"
                    alt=""
                />
                <Button primary className={cx('follow-btn')}>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>nxhoangnxhoang</strong>
                    <FaCheckCircle className={cx('check')} />
                </p>
                <p className={cx('name')}>Nguyễn Xuân Hoàng</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
