import React, { Component } from 'react'
import { Flex } from 'antd-mobile';
import IconBar from '../components/IconBar'
import '../assets/css/subject.css'

export default class Subject extends Component {
    render() {
        return (
            <div className="subject">
                <Flex>
                    <Flex.Item>
                        <IconBar url="notice" title="大喇叭" />
                    </Flex.Item>
                    <Flex.Item>
                        <IconBar url="growup" title="绿色草" />
                    </Flex.Item>
                    <Flex.Item>
                        <IconBar url="readBook" title="阅读书" />
                    </Flex.Item>
                    <Flex.Item>
                        <IconBar url="resume" title="笔记本" /> 
                    </Flex.Item>
                </Flex>
                <Flex>
                    <Flex.Item>
                        <IconBar url="curriculum" title="公告栏" href="/#/Listview" />
                    </Flex.Item>
                    <Flex.Item>
                        <IconBar url="apply" title="任务栏" />
                    </Flex.Item>
                    <Flex.Item>
                        <IconBar url="apartment" title="已完成" />
                    </Flex.Item>
                    <Flex.Item>
                        <IconBar url="message-active" title="消息栏" />
                    </Flex.Item>
                </Flex>
            </div>
        )
    }
}
