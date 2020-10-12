import React, { Component } from 'react'
import { ListView } from 'antd-mobile';
import List from '../components/List'
import '../assets/css/listview.css'

const data = [
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

export default class ListViews extends Component {
    constructor(props) {
        super(props);
        const dataSource = new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2,   // 判断数据的依据
        });
    
        this.state = {
          dataSource,
          isLoading: true,
        };
      }

      componentDidMount() {
        
        // simulate initial Ajax   模拟ajax请求
        setTimeout(() => {
          // this.rData = genData();
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(data),
            isLoading: false,
          });
        }, 600);
      }
    
    renderRow () {
      return <List />
    }
    render() {
        return (
            <div className="listview">
                <ListView
                dataSource={this.state.dataSource}
                // renderHeader={() => <span>首页</span>}
                renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                  {this.state.isLoading ? 'Loading...' : 'Loaded'}
                </div>)}
                renderRow={this.renderRow}
                // renderSeparator={separator}
                className="am-list"
                // pageSize={4}
                useBodyScroll
                onScroll={() => { console.log('scroll'); }}
                // scrollRenderAheadDistance={500}
                // onEndReached={this.onEndReached}
                // onEndReachedThreshold={10}
              />
            </div>
        )
    }
}
