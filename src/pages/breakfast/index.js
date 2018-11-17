import React, { PureComponent } from 'react'
import { Table } from 'antd'
import { queryBreakfast } from '../../services/api'

class Breakfast extends PureComponent {
    state = {
        data: [],
    }

    componentDidMount() {
        queryBreakfast().then(response => {
            console.log(response, typeof response)
            this.setState({
                data: response
            })
        })
    }

    render() {
        return (<div>
            Breakfast
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
            title: '早餐类型',
            dataIndex: 'food',
        },
        {
            title: '用餐时间',
            dataIndex: 'time',
        },
    ]
}

export default Breakfast