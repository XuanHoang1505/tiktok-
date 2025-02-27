// import PropTypes from 'prop-types';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FaCheckCircle } from 'react-icons/fa';

import styles from './SuggestedAccounts.module.scss';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (attrs) => (
        <div tabIndex="-1" {...attrs}>
            <PopperWrapper>
                <AccountPreview />
            </PopperWrapper>
        </div>
    );
    return (
        <div>
            <Tippy interactive placement="bottom" delay={[800, 0]} offset={[-20, 0]} render={renderPreview}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/4ec4af123468a13832c03b2e5e60c754~tplv-tiktokx-cropcenter:720:720.jpeg?dr=14579&nonce=54125&refresh_token=124a6ac3c88c7112e6476660afb5c503&x-expires=1740834000&x-signature=b36%2B8M8KQYdHLZ8ZD3wZPVmjpKM%3D&idc=my&ps=13740610&shcp=81f88b70&shp=a5d48078&t=4d5b0474"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>nxhoangnxhoang</strong>
                            <FaCheckCircle className={cx('check')} />
                        </p>
                        <p className={cx('name')}>Nguyễn Xuân Hoàng</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

// AccountItem.propTypes = {};

export default AccountItem;
