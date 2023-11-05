import { Select, Spin, Tabs, TabsProps, Typography } from 'antd';

import useFilesStore from 'src/store/files';
import FileCardList from '../FileCardList';

import styles from './styles.module.scss';
import noData from 'src/assets/icons/no-data.svg';
import { useEffect, useState } from 'react';

const SearchResult = () => {
  const [format, setFormat] = useState<string | undefined>(undefined);
  const [filter, setFilter] = useState<string | undefined>(undefined);
  const { data, searchValue, isLoading, searchFiles } = useFilesStore();
  const totalFilesLength = data.files?.length + data.videos?.length;

  const handleFilterChange = (value: string) => {
    if (value) {
      setFilter(value);
    }
  };

  const handleFormatChange = (value: string) => {
    if (value) {
      setFormat(value);
    }
  };

  useEffect(() => {
    if (!!format || !!filter) {
      searchFiles(searchValue, filter ?? '', format ?? '');
    }
  }, [format, filter]);

  return isLoading ? (
    <div className='spin'>
      <Spin />
    </div>
  ) : (
    <div className={styles.searchResult}>
      <Typography.Title level={2}>Home</Typography.Title>
      <div>
        <Select
          placeholder='Filter'
          optionFilterProp='children'
          value={filter}
          style={{ width: 120, marginRight: 10 }}
          onChange={handleFilterChange}
          options={[
            { value: 'all', label: 'All' },
            { value: 'file', label: 'File' },
            { value: 'video', label: 'Video' },
          ]}
        />
        <Select
          placeholder='File Format'
          optionFilterProp='children'
          value={format}
          style={{ width: 120 }}
          onChange={handleFormatChange}
          options={[
            { value: 'pdf', label: '.pdf' },
            { value: 'csv', label: '.csv' },
            { value: 'xlsx', label: '.xlsx' },
            { value: 'docx', label: '.docx' },
            { value: 'yaml', label: '.yaml' },
          ]}
        />
      </div>
      {data.files?.length > 0 || data.videos?.length > 0 ? (
        <div>
          <div className={styles.header}>
            <Typography.Title level={2}>"{searchValue}"</Typography.Title>
            <Typography>Found {totalFilesLength} search results</Typography>
          </div>
          <FileCardList />
        </div>
      ) : (
        <div className={styles.noData}>
          <Typography.Title level={4}>No data found.</Typography.Title>
          <img src={noData} alt='No data' />
        </div>
      )}
    </div>
  );
};

export default SearchResult;
