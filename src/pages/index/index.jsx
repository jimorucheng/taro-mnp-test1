import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import api from '../../utils/api'
import './index.css'

class Index extends React.Component {
    state = {
        msg: 'Hello World!',
        loading: true,
        threads: []
    }
    config = {
        navigationBarTitleText: '首页'
    }
    // async componentDidMount() {
    //     try {
    //         const res = await Taro.request({
    //             url: apigetLatestTopic()
    //         })
    //         this.setState({
    //             threads: res.data,
    //             loading: false
    //         })
    //     } catch (error) {
    //         Taro.showToast({
    //             title: '载入远程数据错误'
    //         })
    //     }
    // }
    render() {
        const { loading, threads } = this.state
        return (
            <View className='index'>
                <Text>{this.state.msg}</Text>
                <Text>Hello world!Hello world!</Text>
                {/* <ThreadList
                    threads={threads}
                    loading={loading}
                /> */}
            </View>
        )
    }
}

export default Index
