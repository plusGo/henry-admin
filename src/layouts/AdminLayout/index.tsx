import React, { FC, useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Link } from 'umi';

const { Header, Sider, Content } = Layout;

const AdminLayout: FC = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout className="w-screen h-screen">
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="relative shadow-lg"
      >
        <div className="text-white text-3xl flex items-center justify-center py-8 font-bold">
          {collapsed ? 'H' : 'Henry Admin'}
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="/welcome">欢迎</Link>
          </Menu.Item>

          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            <Link to="/data-center/welcome">主数据管理</Link>
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
        <Header className="bg-white shadow-lg h-20"></Header>
        <Content className="overflow-auto flex items-center justify-center">
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
