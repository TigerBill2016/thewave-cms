import React, { PureComponent } from 'react'
import { Layout, Menu } from 'antd'
import Link from 'umi/link';
import styles from './index.css';

const MenuItem = Menu.Item;
const { Header, Content, Sider } = Layout;

class BasicLayout extends PureComponent {
  render() {
    return (
      <Layout>
        <Header className={styles.normal}>
          <h1 className={styles.title}>Yay! Welcome to The Wave!</h1>
        </Header>
        <Layout>
          <Sider>
            <Menu mode="inline"
              defaultSelectedKeys={['breakfast']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <MenuItem key="breakfast">
                <Link to="/breakfast">预约早餐</Link>
              </MenuItem>
              <MenuItem key="transfer">
                <Link to="/transfer">接送机</Link>
              </MenuItem>
            </Menu>
          </Sider>
          <Content>
            {this.props.children}
          </Content>
        </Layout>
      </Layout>

    );
  }
}

export default BasicLayout;
