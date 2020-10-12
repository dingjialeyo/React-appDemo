import React, { Component } from 'react'
import '../assets/css/list.css'
import Img from '../components/Img'
import { Flex } from 'antd-mobile';

const list_data = [
    {
        img: 'list_data1.png',
        title: '星巴克推荐',
        des: '购前成为有星人，可享受升级优惠活动领更多好礼！'
    },
    {
        img: 'list_data2.png',
        title: '星巴克推荐',
        des: '购前成为有星人，可享受升级优惠活动领更多好礼！'
    },
    {
        img: 'list_data3.png',
        title: '星巴克推荐',
        des: '购前成为有星人，可享受升级优惠活动领更多好礼！'
    },
    {
        img: 'list_data1.png',
        title: '星巴克推荐',
        des: '购前成为有星人，可享受升级优惠活动领更多好礼！'
    },
    {
        img: 'list_data2.png',
        title: '星巴克推荐',
        des: '购前成为有星人，可享受升级优惠活动领更多好礼！'
    },
    {
        img: 'list_data3.png',
        title: '星巴克推荐',
        des: '购前成为有星人，可享受升级优惠活动领更多好礼！'
    }
]

export default class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list_data
        }
    }
    render() {
        return (
            <div className="list">
                    <div className="list-header">
                        相关资讯
                    </div>
                    {
                        this.state.list_data.map((item,value) => {
                            return (
                                <div className="list_item" key={value}>
                                    <Flex>
                                        <Flex.Item>
                                            <Img src={item.img} alt="" height={80} />
                                        </Flex.Item>
                                        <Flex.Item className="item-title">
                                            <h3>{item.title}</h3>
                                            <p>{item.des}</p>
                                        </Flex.Item>
                                    </Flex>
                                </div>
                            )
                        })
                    }
                </div>
        )
    }
}
