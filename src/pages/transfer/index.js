import React, { PureComponent } from 'react'
import { Table } from 'antd'
import moment from 'moment'
import { queryTransfer } from '../../services/api'

class Transfer extends PureComponent {
    state = {
        data: [],
    }

    componentDidMount() {
        queryTransfer().then(response => {
            this.setState({
                data: response
            })
        })
    }

    render() {
        return (<div>
            <h3>接送机</h3>
            <Table
                columns={this.columns}
                dataSource={this.state.data}
                rowKey="guestid" 
            />
        </div>)
    }
    columns = [
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
            title: '目的地',
            dataIndex: 'destination',
            render(text){
                if(text === 'airport'){
                    return '机场'
                }
                if(text === 'villas'){
                    return '别墅'
                }
                return text
            }
        },
        {
            title: '接送时间',
            dataIndex: 'time',
        },
        {
            title: '航班号',
            dataIndex: 'flightNum',
        },
        {
            title: '备注',
            dataIndex: 'remark',
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

export default Transfer