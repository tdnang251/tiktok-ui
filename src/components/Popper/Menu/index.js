import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import { Wrapper as PopperWrapper } from '../../Popper'
import styles from './Menu.module.scss'
import MenuItem from './MenuItem';

const cx = classNames.bind(styles)

function Menu({ children, items = [] }) {

    const renderItem = () => {
        return items.map((item, index) => (
            <MenuItem key={index} data={item} />
        ))
    }

    return (
        <Tippy
            interactive
            delay={[0,700]}
            placement="bottom-end"
            render={attrs => (
                <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {renderItem()}
                    </PopperWrapper>
                </div>
            )}

        >
            {children}
        </Tippy>
    );
}

export default Menu;