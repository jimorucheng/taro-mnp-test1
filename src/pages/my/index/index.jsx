import Taro from '@tarojs/taro'
import React from 'react'
import { View, Text } from '@tarojs/components'
import MySwiper from '../../../components/mySwiper/mySwiper'
import './index.css'

class MyIndex extends React.Component {
    state = {
        banner: [{
            image_src: 'https://hbimg.huabanimg.com/9abd8e7d768e6bb070de86c09671b73c81de118d43df2-xahAjO_fw658',
        },
        {
            image_src: 'https://hbimg.huabanimg.com/9abd8e7d768e6bb070de86c09671b73c81de118d43df2-xahAjO_fw658',
        },
        {
            image_src: 'https://hbimg.huabanimg.com/9abd8e7d768e6bb070de86c09671b73c81de118d43df2-xahAjO_fw658',
        },
        ]
    }
    render() {
        const { banner } = this.state
        return (
            <View className='home_page'>
                <MySwiper banner={banner} />
            </View>
        )
    }
}

export default MyIndex
