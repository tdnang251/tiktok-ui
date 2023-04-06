import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRightFromBracket, faCircleQuestion, faCoins, faEllipsisVertical, faGear, faKeyboard, faLanguage, faUser } from "@fortawesome/free-solid-svg-icons"
import classNames from "classnames/bind"
import Tippy from '@tippyjs/react';
import { Link } from "react-router-dom";

import config from '../../../config'
import Button from "../../../components/Button";
import images from "../../../assets/images"
import styles from "./Header.module.scss"
import Menu from "../../../components/Popper/Menu";
import { InboxIcon, MessageIcon, UploadIcon } from "../../../components/Icons";
import Image from "../../../components/Image";
import Search from "../Search";

const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: "English",
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: "English",
                },
                {
                    code: 'vi',
                    title: "Tiếng Việt",
                },
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: "Feedback and help",
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: "Keyboard shortcuts",
    },
]

function Header() {
    const currentUser = true

    //Handle logic
    const handleMenuChange = (menuItem) => {
        console.log(menuItem)
    }

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: "View profile",
            to: '/profile'
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: "Get coin",
            to: '/coin'
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: "Setting",
            to: '/setting'
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
            title: "Log out",
            to: '/logout',
            separate: true,
        },
    ]

    return <header className={cx("wrapper")}>
        <div className={cx("inner")}>
            <div className={cx("logo")}>
                <Link to={config.routes.home} className={cx("logo-link")}>
                    <img src={images.logo} alt="Tiktok" />
                    </Link>
            </div>

            <Search />

            <div className={cx("actions")}>
                {
                    currentUser ?
                        (
                            <>
                                <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                                    <button className={cx('acion-btn')}>
                                        <UploadIcon />
                                    </button>
                                </Tippy>
                                <Tippy delay={[0, 50]} content="Message" placement="bottom">
                                    <button className={cx('acion-btn')}>
                                        <MessageIcon />
                                    </button>
                                </Tippy>
                                <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                    <button className={cx('acion-btn')}>
                                        <InboxIcon />
                                        <span className={cx('badge')}>12</span>
                                    </button>
                                </Tippy>
                            </>
                        ) : (
                            <>
                                <Button text>Upload</Button>
                                <Button primary>Log in</Button>
                            </>
                        )
                }
                <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                    {
                        currentUser ? (
                            <Image
                                src=""
                                className={cx('user-avatar')}
                                alt="Nguyen Van A"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )
                    }
                </Menu>
            </div>


        </div>
    </header>
}

export default Header;