import React, { FC, useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  DatabaseOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Link } from 'umi';

const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout;

const AdminLayout: FC = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout className="w-screen h-screen">
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        theme="light"
        className="relative shadow-lg"
      >
        <div className="text-3xl flex items-center justify-center py-8 font-bold">
          <div className="rounded-xl bg-gray-300 py-2 px-4 text-white">
            {collapsed ? 'H' : 'Henry Admin'}
          </div>
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={['data-center-application-list']}
          defaultOpenKeys={['data-center']}
        >
          <SubMenu
            key="data-center"
            icon={<DatabaseOutlined />}
            title="主数据中心"
          >
            <Menu.ItemGroup key="data-center-application" title="应用数据">
              <Menu.Item key="data-center-application-list">
                <Link to="/data-center/application/list">应用列表</Link>
              </Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup key="data-center-user" title="人员数据">
              <Menu.Item key="data-center-user-list">
                <Link to="/data-center/welcome">人员列表</Link>
              </Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
        </Menu>
        {React.createElement(
          collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: ' absolute bottom-10 left-10 cursor-pointer',
            style: { color: '#000' },
            onClick: () => setCollapsed(!collapsed),
          },
        )}
      </Sider>
      <Layout>
        <Header className="bg-white shadow-lg h-20"></Header>
        <Content className="overflow-auto">{props.children}</Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
