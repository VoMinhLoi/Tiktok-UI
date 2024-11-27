import styles from './AccountPreview.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://scontent.fdad7-1.fna.fbcdn.net/v/t1.6435-9/161957969_1051139288711176_7404328044789997673_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=94e2a3&_nc_ohc=YxZ-UfKlMyEQ7kNvgE6qdDR&_nc_zt=23&_nc_ht=scontent.fdad7-1.fna&_nc_gid=Aai0gAgqdnl24kSwQMQ6OIk&oh=00_AYAEH_b0eQY6fxGxu0UrUJcIobPV7A8IfxeAmLVbNO3bdw&oe=6764FF24"
                />
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>quocnguyenphu</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Quốc Nguyễn Phú</p>
                <div className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Likes</span>
                </div>
            </div>
        </div>
    );
}
export default AccountPreview;
