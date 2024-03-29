import classNames from "classnames/bind"
import config from "../../../config"
import Menu, { MenuItem } from "./Menu"
import styles from "./Sidebar.module.scss"
import { HomeIcon, UserGroupIcon, LiveIcon, HomeActiveIcon, UserGroupActiveIcon, LiveActiveIcon } from "../../../components/Icons"
import SuggestAccounts from "../../../components/SuggestAccounts"

const cx = classNames.bind(styles)

function Sidebar() {
    return <aside className={cx('wrapper')}>
        <Menu>
            <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon/>} activeIcon={<HomeActiveIcon/>}/>
            <MenuItem title="Following" to={config.routes.following} icon={<UserGroupIcon/>} activeIcon={<UserGroupActiveIcon/>}/>
            <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon/>} activeIcon={<LiveActiveIcon/>}/>
        </Menu>

        <SuggestAccounts label="Suggest Accounts"/>

        <SuggestAccounts label="Following Accounts"/>
    </aside>
}

export default Sidebar;