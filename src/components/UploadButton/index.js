import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import style from './UploadButton.module.scss';

const cx = classNames.bind(style);

function UploadButton() {
    return (
        <div className={cx('wrapper')}>
            <FontAwesomeIcon className={cx('plus')} icon={faPlus} />
            <span className={cx('title')}>Upload</span>
        </div>
    );
}

export default UploadButton;
