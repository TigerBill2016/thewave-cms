import React, { PureComponent } from 'react'
import { Table, Tag, message, Button } from 'antd'
import moment from 'moment'
import styles from './index.css'
import { queryMessage } from '../../services/api'

class Message extends PureComponent {
    state = {
        data: [],
    }

    componentDidMount() {
        this.fetch()
    }

    fetch = () => {
        queryMessage().then(response => {
            this.setState({
                data: response
            })
        })
    }

    handleSingle = (id, event) => {
        event.stopPropagation()
        queryMessage({ type: 'handleSingle', id }).then(response => {
            message.success(response.msg)
            this.fetch()
        })
    }

    handleAll = (id) => {
        queryMessage({ type: 'handleAll' }).then(response => {
            message.success(response.msg)
            this.fetch()
        })
    }

    render() {
        return (<div>
            <h3 className="page-head">
                <div className="title">消息通知</div>
                <Button type="primary" className={styles.btn} onClick={this.handleAll}>全部处理</Button>
            </h3>
            <Table
                columns={this.columns}
                dataSource={this.state.data}
                rowKey="_id"
            />
        </div>)
    }
    columns = [
        {
            title: '标题',
            dataIndex: 'title',
        },
        {
            title: '消息内容',
            dataIndex: 'message',
        },
        {
            title: '客户姓名',
            dataIndex: 'username',
        },
        {
            title: '别墅门牌',
            dataIndex: 'number',
        },
        {
            title: '入住人数',
            dataIndex: 'person',
        },
        {
            title: '状态',
            dataIndex: 'isRemind',
            render: (text, record) => {
                if (text) {
                    return <Tag color="#87d068">已查看</Tag>
                } else {
                    return (<div>
                        <Tag color="#2db7f5">未查看</Tag>
                        <a onClick={this.handleSingle.bind(null, record._id)} style={{ marginLeft: '8px' }}>处理</a>
                    </div>)
                }
            }
        },
        {
            title: '日期',
            dataIndex: 'date',
            render(text) {
                return (
                    <div>{moment(text).format('YYYY-MM-DD HH:mm:ss')}</div>
                )
            }
        },
    ]
}

export default Message