import { Carousel } from 'antd-mobile';
import React from 'react'
// 引入图片
import banner1 from '../assets/images/banner1.png'
import banner2 from '../assets/images/banner2.png'
import banner3 from '../assets/images/banner3.png'

export default class Banner extends React.Component {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
  }
  // 所有组件完成后执行
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: [banner1, banner2, banner3],
      });
    }, 100);
  }
  render() {
    return (
        <Carousel
          autoplay={true}
          infinite
          cellSpacing={10}
          slideWidth={0.85}
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="###"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={`${val}`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
    );
  }
}
