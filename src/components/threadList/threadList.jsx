import React from 'react'
import { View, Text } from '@tarojs/components'


class ThreadList extends React.Component {
    static defaultProps = {
      threads: [],
      loading: true
    }

    render () {
        const { loading, threads } = this.props

        if(loading) {

        }

        const element = threads.map((thread, index) => {
            return (
                // <Thread
                //     key={thread.id}
                //     node={thread.node}
                //     title={thread.title}
                //     last_modified={thread.last_modified}
                //     replies={thread.replies}
                //     tid={thread.id}
                //     member={thread.member}
                // />
            )
        })

        return (
            <View className='thread-list'>
                { element }
            </View>
        )
    }
}