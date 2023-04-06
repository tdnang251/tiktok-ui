import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"

import { Wrapper as PopperWrapper } from '../Popper';
import styles from "./SuggestAccounts.module.scss"
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles)

function AccountItem() {

    const renderPreview=(props)=>{
        return(
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview/>
                </PopperWrapper>

            </div>
        )
    }

    return (
        <div>
            <Tippy
                interactive
                delay={[800, 0]}
                offset={[-20,0]}
                placement="bottom"
                render={renderPreview}
            >
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src=""
                        alt="abc"
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>tranvanteo</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Tran Van Teo</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default AccountItem;