
/**
 * 轮播图组件
 */
import Taro from '@tarojs/taro';
import React from 'react'
import { Swiper, SwiperItem, Image } from '@tarojs/components';
import PropTypes from 'prop-types';
import './mySwiper.css';

class MySwiper extends React.Component {
    static propTypes = {
        banner: PropTypes.array,
    };

    static defaultProps = {
        banner: [],
    };

    render() {
        const { banner } = this.props;
        return (
            <Swiper
                className="swiper-container"
                circular
                indicatorDots
                indicatorColor='#999'
                indicatorActiveColor='#bf708f'
                autoplay>
                { banner.map((item, index) => (
                    <SwiperItem key={index}>
                        <Image className="swiper-img" mode="widthFix" src={item.image_src}></Image>
                    </SwiperItem>
                ))}
            </Swiper>
        )
    }
}

export default MySwiper