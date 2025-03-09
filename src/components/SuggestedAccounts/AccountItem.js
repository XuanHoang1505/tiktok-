// import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { FaCheckCircle } from 'react-icons/fa';
import { Wrapper as PopperWrapper } from '~/components/Popper';

import AccountPreview from './AccountPreview';
import styles from './SuggestedAccounts.module.scss';
import PropTypes from 'prop-types';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountItem({ data = [] }) {
    const renderPreview = (attrs) => (
        <div tabIndex="-1" {...attrs}>
            <PopperWrapper>
                <AccountPreview data={data} />
            </PopperWrapper>
        </div>
    );
    return (
        <div>
            <Tippy interactive placement="bottom" delay={[800, 0]} offset={[-20, 0]} render={renderPreview}>
                <div className={cx('account-item')}>
                    <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>{data.nickname}</strong>
                            {data.tick && <FaCheckCircle className={cx('check')} />}
                        </p>
                        <p className={cx('name')}>{`${data.first_name} ${data.last_name}`}</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {
    data: PropTypes.array,
};

export default AccountItem;
