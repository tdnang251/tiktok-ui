import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRightFromBracket, faCircleQuestion, faCircleXmark, faCoins, faEllipsisVertical, faGear, faKeyboard, faLanguage, faMagnifyingGlass, faSpinner, faUser } from "@fortawesome/free-solid-svg-icons"
import classNames from "classnames/bind"
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Button from "../../../Button";
import images from "../../../../assets/images"
import styles from "./Header.module.scss"
import { Wrapper as PopperWrapper } from "../../../Popper"
import AccountItem from "../../../AccountItem";
import Menu from "../../../Popper/Menu";
import { UploadIcon } from "../../../Icons";
import Image from "../../../Image";

const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: "Language",
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: "English",
                },
                {
                    code: 'vi',
                    title: "Tieng Viet",
                }
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
    const [searchResult, setSearchResult] = useState([])

    const currentUser = true

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        }, 0)
    }, []);

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
                <img src={images.logo} alt="Tiktok" />
            </div>
            <div>
                <HeadlessTippy
                    interactive
                    visible={searchResult.length > 0}
                    render={attrs => (
                        <div className={cx("search-result")} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx("search-title")}>
                                    Accounts
                                </h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}

                >
                    <div className={cx("search")}>
                        <input placeholder="Search accounts and videos" />
                        <button className={cx("clear")}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
                        <button className={cx("search-btn")}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadlessTippy>
            </div>
            <div className={cx("actions")}>
                {
                    currentUser ?
                        (
                            <>
                                <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                                    <button className={cx('acion-btn')}>
                                        <UploadIcon />
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
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/7c520f5b1b7d0e446aa982353e422894~c5_100x100.jpeg?x-expires=1671379200&x-signature=aTJ%2Bu342kUd366mZg0YP7V4Uidw%3D"
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