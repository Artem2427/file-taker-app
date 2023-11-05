import { useEffect } from 'react';
import { Layout, Input, Button } from 'antd';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';

import useFilesStore from 'src/store/files';
import useDebounce from 'src/hooks/useDebounce';
// import { useDebounce } from "@uidotdev/usehooks";

import styles from './styles.module.scss';
import circleQuestion from 'src/assets/icons/circle-question.svg';
import bellNotification from 'src/assets/icons/bell-notification.svg';
import avatar from 'src/assets/images/Avatar.png';

const { Header: AntHeader } = Layout;

const Header = () => {
  const { searchFiles, searchValue, setSearchValue } = useFilesStore();
  const debouncedValue = useDebounce(searchValue, 500);

  useEffect(() => {
    searchFiles(searchValue, '', '');
  }, [debouncedValue]);

  const onChange = (input: any) => {
    setSearchValue(input.currentTarget.value);
  };

  return (
    <AntHeader className={styles.header}>
      <div className={styles.flexWrapper}>
        <Input
          prefix={<SearchOutlined />}
          placeholder='Search'
          className={styles.searchBox}
          onChange={onChange}
        />
        <div className={styles.actions}>
          <img src={circleQuestion} alt='Questions' />
          <img src={bellNotification} alt='Notifications' />
          <Button type='primary' className={styles.button}>
            <PlusOutlined />
          </Button>
        </div>
        <img src={avatar} alt='Avatar' className={styles.avatar} />
      </div>
    </AntHeader>
  );
};

export default Header;
