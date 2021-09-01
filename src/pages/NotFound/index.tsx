import { Button, Result } from 'antd';
import React from 'react';
import { history } from 'umi';

const NoFoundPage: React.FC = () => {
  // if (history.location.pathname.indexOf('404') === -1) {
  //   history.push('/404');
  // }
  return (
    <Result
      status="404"
      title="404"
      subTitle="抱歉，您访问的页面不存在"
      extra={
        <Button type="primary" onClick={() => history.push('/')}>
          回到首页
        </Button>
      }
    />
  );
};

export default NoFoundPage;