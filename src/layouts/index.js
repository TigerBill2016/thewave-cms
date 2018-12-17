import React, { PureComponent } from 'react'
import { Layout, Menu, Badge } from 'antd'
import Link from 'umi/link';
import styles from './index.css';
import { queryMessage } from '../services/api'

const MenuItem = Menu.Item;
const { Header, Content, Sider, Footer } = Layout;

class BasicLayout extends PureComponent {
  state = {
    count: 0
  }

  componentDidMount() {
    this.fetch()
    this.timer = window.setInterval(() => {
      this.fetch()
    }, 1000 * 5)
  }

  componentWillUnmount() {
    window.clearInterval(this.timer)
  }

  fetch = () => {
    queryMessage({ type: 'count' }).then(response => {
      this.setState({
        count: response.count
      })
    })
  }

  render() {
    return (
      <Layout>
        <Header className={styles.normal}>
          <h1 className={styles.title}>Yay! Welcome to The Wave!</h1>
        </Header>
        <Layout>
          <Sider>
            <Menu
              mode="inline"
              theme="dark"
              defaultSelectedKeys={['']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <MenuItem key="message">
                <Link to="/message">
                  消息通知 <Badge count={this.state.count} />
                </Link>
              </MenuItem>
              <MenuItem key="breakfast">
                <Link to="/breakfast">预约早餐</Link>
              </MenuItem>
              <MenuItem key="transfer">
                <Link to="/transfer">接送机</Link>
              </MenuItem>
              <MenuItem key="bus">
                <Link to="/bus">预约班车</Link>
              </MenuItem>
            </Menu>
          </Sider>
          <Content className={styles.content}>
            {this.props.children}
            {/* <Footer className={styles.footer}>
              <p>Designed & Powerd by chenqiang</p>
              <p>Copyright© 2018-2019 www.timortb.cn</p>
              <a href="http://www.miibeian.gov.cn/" target="_blank">粤ICP备18138463号-1</a>
            </Footer> */}
          </Content>
        </Layout>
      </Layout>

    );
  }
}

export default BasicLayout;
