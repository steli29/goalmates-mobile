import React from 'react';
import { FlatList, View } from 'react-native';
import NotificationItem from './components/NotificationItem';
import styles from './styles';

const NotificationsScreen = () => {
    const data = [
        {
            avatarImage: null,
            userName: 'Test Test',
            notificationText: 'Followed you',
            date: 'Just now',
        },
        {
            avatarImage: null,
            userName: 'Test Test',
            notificationText: 'Followed you',
            date: 'Just now',
        },
        {
            avatarImage: null,
            userName: 'Test Test',
            notificationText: 'Followed you',
            date: 'Just now',
        },
        {
            avatarImage: null,
            userName: 'Test Test',
            notificationText: 'Posted an update on your goal',
            date: 'Just now',
        }
    ]

    const renderItem = ({ item }) => {
        return (
            <NotificationItem 
                avatarImage={item.avatarImage}
                userName={item.userName}
                notificationText={item.notificationText}
                date={item.date}
            />
        )
    };

    const ItemSeparator = () => {
        return <View style={styles.separator}/>
    }

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            ItemSeparatorComponent={ItemSeparator}
            showsVerticalScrollIndicator={false}
            style={styles.mainContainer}
            contentContainerStyle={styles.contentContainerStyle}
        />
    );
};

export default NotificationsScreen;
