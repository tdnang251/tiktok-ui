import PropTypes from "prop-types"
import classNames from "classnames/bind";
import { Link } from 'react-router-dom'
import styles from "./Button.module.scss"

const cx = classNames.bind(styles)

function Button({ to, href, primary = false, outline = false, small = false, text = false, large, disabled = false, rounded = false, className, children, leftIcon, rightIcon, onClick, ...passProps }) {
    let Comp = 'button'
    const props = {
        onClick,
        ...passProps
    }

    // Remove event listener when button is disbaled
    if (disabled) {
        Object.keys(props).forEach(key => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key]
            }
        })
    }

    if (to) {
        props.to = to
        Comp = Link
    } else {
        props.href = href
        Comp = 'a'
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        small,
        large,
        text,
        disabled,
        rounded,
    })

    return (
        <Comp className={classes} {...props}>
            {leftIcon && (<span className={cx('icon')}>{leftIcon}</span>)}
            <span className={cx('title')}>{children}</span>
            {rightIcon && (<span className={cx('icon')}>{rightIcon}</span>)}
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    small: PropTypes.bool,
    text: PropTypes.bool,
    large: PropTypes.bool,
    disabled: PropTypes.bool,
    rounded: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    onClick: PropTypes.func,
}

export default Button;