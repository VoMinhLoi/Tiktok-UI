import styles from './Button.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function Button({ onClick, to, href, children, primary, ...passProps }) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    if (to) {
        Comp = 'Link';
        props.to = to;
    } else if (href) {
        Comp = 'a';
        props.href = href;
    }
    const classes = cx('wrapper', {
        primary,
    });
    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
