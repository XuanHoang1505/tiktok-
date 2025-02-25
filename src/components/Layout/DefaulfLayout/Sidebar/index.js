import styles from './Sidebar.module.scss'
import classNames from 'classnames';

const cx = classNames.bind(styles)

function Sidebar() {
    return <aside className={cx('wrapper')}>
        <h2>sidebar</h2>
    </aside>
}

export default Sidebar;
