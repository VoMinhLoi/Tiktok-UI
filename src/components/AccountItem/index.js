import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function AccountItem({ data, itemKey }) {
    return (
        <Link to={`/${data.nickname}`} className={cx('wrapper')} key={itemKey}>
            <Image src={data.avatar} alt="avatar" className={cx('avatar')} />
            <div className={cx('infor')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </h4>
                <p className={cx('dataname')}>{data.nickname}</p>
            </div>
        </Link>
    );
}

export default AccountItem;
