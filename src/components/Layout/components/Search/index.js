import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PobberWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SearchIcon } from '~/components/Icons';
const cx = classNames.bind(styles);
function Search() {
    const inputSearchValueRef = useRef();
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 2000);
    }, []);
    const hanldeSearch = (e) => {
        const userTypeSearchType = e.target.value;
        if (userTypeSearchType === '') setSearchResult([]);
        setSearchValue(userTypeSearchType);
    };
    const hanldeClearSearch = () => {
        setSearchValue('');
        setSearchResult([]);
        inputSearchValueRef.current.focus();
    };
    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => {
                return (
                    <div className={cx('search-result')} tabIndex={-1} {...attrs}>
                        <PobberWrapper>
                            <h1 className={cx('search-title')}>Accounts</h1>
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                        </PobberWrapper>
                    </div>
                );
            }}
            onClickOutside={() => {
                setShowResult(false);
            }}
        >
            <div className={cx('search')}>
                <input
                    ref={inputSearchValueRef}
                    value={searchValue}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onChange={hanldeSearch}
                    onFocus={() => {
                        setShowResult(true);
                    }}
                />
                {!!searchValue && (
                    <button className={cx('clear')} onClick={hanldeClearSearch}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}

                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
