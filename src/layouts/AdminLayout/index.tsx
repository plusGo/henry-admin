import React, { FC, useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import Loading from '@/components/Loading';

const { Header, Sider, Content } = Layout;

const AdminLayout: FC = (props) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="w-screen h-screen">
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="relative"
      >
        <div className="text-white text-3xl flex items-center justify-center py-8 font-bold">
          {collapsed ? 'H' : 'Henry Admin'}
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            欢迎
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            功能管理
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
        </Menu>
        {React.createElement(
          collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: ' absolute bottom-10 left-10 cursor-pointer text-white',
            style: { color: '#fff' },
            onClick: () => setCollapsed(!collapsed),
          },
        )}
      </Sider>
      <Layout>
        <Header className="bg-white shadow h-20"></Header>
        <Content className="overflow-auto">
          <Loading />
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
