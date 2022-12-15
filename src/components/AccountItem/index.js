import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx("wrapper")}>
            <img className={cx("avatar")}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/fc6b354591c8d0e52298cb865f15be01~c5_300x300.webp?x-expires=1671278400&x-signature=YYty92ckpxrAsAU4yD3DmbtaP0o%3D"
                alt="abc"
            />
            <div className={cx("info")}>
                <h4 className={cx("name")}>
                    <span>
                        Nguyen Van A
                    </span>
                    <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
                </h4>
                
                <span className={cx("username")}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;