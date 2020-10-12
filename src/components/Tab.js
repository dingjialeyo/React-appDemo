import React, { Component } from 'react'
import { Tabs } from 'antd-mobile';
import Img from '../components/Img'

const tabs = [
    { title: '饮品', sub: '1' },
    { title: '推荐', sub: '2' },
    { title: '销量', sub: '3' },
];

export default class Tab extends Component {
    render() {
        return (
            <div>
                <Tabs tabs={tabs}
                initialPage={0}
                onChange={(tab, index) => { console.log('onChange', index, tab); }}
                onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                <Img src="tab1.png" height="150" />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                <Img src="tab2.png" height="150" />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                <Img src="tab3.png" height="150" />
                </div>
                </Tabs>
            </div>
        )
    }
}
