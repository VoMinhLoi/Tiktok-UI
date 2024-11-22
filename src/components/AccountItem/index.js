import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';
const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                src="https://scontent.fdad7-1.fna.fbcdn.net/v/t1.6435-9/161957969_1051139288711176_7404328044789997673_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=94e2a3&_nc_ohc=YxZ-UfKlMyEQ7kNvgE6qdDR&_nc_zt=23&_nc_ht=scontent.fdad7-1.fna&_nc_gid=Aai0gAgqdnl24kSwQMQ6OIk&oh=00_AYAEH_b0eQY6fxGxu0UrUJcIobPV7A8IfxeAmLVbNO3bdw&oe=6764FF24"
                alt="avatar"
                className={cx('avatar')}
            />
            <div className={cx('infor')}>
                <h4 className={cx('name')}>
                    <span>Võ Minh Lợi</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <p className={cx('username')}>VoMinhLoi</p>
            </div>
        </div>
    );
}

export default AccountItem;
