import Taro from '@tarojs/taro'
import React from 'react'
import { View, Input } from '@tarojs/components'
import './index.css'

class MrLogin extends React.Component {

    state = {
        userName: '销售',          // 用户名
        password: 'admin123',      // 密码    
    }
    // 获取用户名
    bindUserName = (e) => {
        console.log(e)
        // this.setState({
        //   userName
        // })
    }

    render() {
        const { userName, password } = this.state
        return (
            <View class="mr_login_box">
                <image src="../../../images/login/mr_login.png" class="mr_login_icon"></image>
                <View class="login_title1">欢迎来到诺医荟</View>
                <View class="login_title2">前沿进展、热门资讯、会议直播</View>
                <View class="login_title2 login_title3">医生们都在用的学术资讯平台</View>
                <View class="login_message_box">
                    <View class="user_name">用户名</View>
                    <View class="user_name_input_box">
                        <Input type="text" value={userName} class="input_class" placeholder="请输入用户名" placeholder-class="user_name_placeholder_class" onInput={this.bindUserName.bind(this)} />
                    </View>
                    <View class="user_password">密码</View>
                    <View class="user_name_input_box">
                        <Input type="text" value={password} class="input_class" placeholder="请输入密码" placeholder-class="user_name_placeholder_class" onInput={this.bindPassword.bind(this)} />
                    </View>
                </View>
                <View class="mr_login_btn" bindtap="ok">登录</View>
            </View>
        )
    }

}

export default MrLogin