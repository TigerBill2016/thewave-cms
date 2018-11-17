import React, { PureComponent } from 'react'
import { Table } from 'antd'
import moment from 'moment'
import { queryBus } from '../../services/api'

class Bus extends PureComponent {
    state = {
        data: [],
    }

    componentDidMount() {
        queryBus().then(response => {
            this.setState({
                data: response
            })
        })
    }

    render() {
        return (<div>
            <h3>预约班车</h3>
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
                if(text === 'market'){
                    return 'Central商场'
                }
                if(text === 'villas'){
                    return '去别墅'
                }
                return text
            }
        },
        {
            title: '乘车时间',
            dataIndex: 'time',
        },
        {
            title: '乘车人数',
            dataIndex: 'member',
        },
        {
            title: '总价(泰铢)',
            dataIndex: 'price',
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

export default Bus