import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleQuestion, faCircleXmark, faEllipsisVertical, faKeyboard, faLanguage, faMagnifyingGlass, faSpinner } from "@fortawesome/free-solid-svg-icons"
import classNames from "classnames/bind"
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import Button from "../../../Button";
import images from "../../../../assets/images"
import styles from "./Header.module.scss"
import { Wrapper as PopperWrapper } from "../../../Popper"
import AccountItem from "../../../AccountItem";
import Menu from "../../../Popper/Menu";

const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: "Language",
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

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        }, 0)
    }, []);

    return <header className={cx("wrapper")}>
        <div className={cx("inner")}>
            <div className={cx("logo")}>
                <img src={images.logo} alt="Tiktok" />
            </div>
            <div>
                <Tippy
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
                </Tippy>
            </div>
            <div className={cx("action")}>
                <Button text>Upload</Button>
                <Button primary>Log in</Button>

                <Menu
                    items={MENU_ITEMS}
                >
                    <button className={cx('more-btn')}><FontAwesomeIcon icon={faEllipsisVertical} /></button>
                </Menu>
            </div>

        </div>
    </header>
}

export default Header;