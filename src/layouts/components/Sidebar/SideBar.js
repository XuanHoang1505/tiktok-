import config from '~/config';
import { useState, useEffect } from 'react';
import Menu, { MenuItem } from './Menu';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import {
    HomeIcon,
    UserGroupIcon,
    LiveIcon,
    UserGroupActiveIcon,
    HomeActiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import * as userService from '~/services/userService';

const cx = classNames.bind(styles);

const PER_PAGE = 5;

function Sidebar() {
    const [suggestedUsers, setSuggestedUsers] = useState([]);
    const [followedAccounts, setFollowedAccounts] = useState([]);

    useEffect(() => {
        userService
            .getSuggested({ page: 1, perPage: PER_PAGE })
            .then((data) => {
                setSuggestedUsers((prevUsers) => [...prevUsers, ...data]);
            })
            .catch((error) => console.log(error));
    }, []);
    useEffect(() => {
        userService
            .getFollowed(1)
            .then((data) => {
                setFollowedAccounts(data);
            })
            .catch((error) => console.log(error));
    });

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
                <SuggestedAccounts label="Suggested account" data={suggestedUsers} />
                <SuggestedAccounts label="Following accounts" data={followedAccounts} />
            </Menu>
        </aside>
    );
}

export default Sidebar;
