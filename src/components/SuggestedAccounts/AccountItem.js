import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './SuggestedAccounts.module.scss';
import classNames from 'classnames/bind';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://scontent.fdad7-1.fna.fbcdn.net/v/t1.6435-9/161957969_1051139288711176_7404328044789997673_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=94e2a3&_nc_ohc=YxZ-UfKlMyEQ7kNvgE6qdDR&_nc_zt=23&_nc_ht=scontent.fdad7-1.fna&_nc_gid=Aai0gAgqdnl24kSwQMQ6OIk&oh=00_AYAEH_b0eQY6fxGxu0UrUJcIobPV7A8IfxeAmLVbNO3bdw&oe=6764FF24"
                alt="avatar"
            />
            <div className={cx('item-infor')}>
                <p className={cx('nickname')}>
                    <strong>Vo Minh Loi</strong>
                    <span className={cx('check')}>
                        <FontAwesomeIcon icon={faCheckCircle} />
                    </span>
                </p>
                <p className={cx('name')}>Võ Minh Lợi</p>
            </div>
        </div>
    );
}

export default AccountItem;
