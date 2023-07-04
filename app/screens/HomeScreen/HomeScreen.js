import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FlatList, Image, TouchableOpacity, View} from "react-native";

import GoalCard from '../../components/GoalCard/GoalCard';

import styles from './styles';
import CategorySvg from "../../assets/svgs/CategorySvg";
import HomeFilterModal from "./components/HomeFilterModal/HomeFilterModal";

const HomeScreen = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const data = [
        {
            avatarUrl: null,
            datePosted: '1hr ago',
            name: 'Oyin Dolapo',
            commentsLength: 57,
            title: 'Learn new skill',
            description: 'Complete  prototyping course',
            deadline: '06 January 2022',
        },
        {
            avatarUrl: null,
            datePosted: '1hr ago',
            name: 'Oyin Dolapo',
            commentsLength: 57,
            title: 'Learn new skill',
            description: 'Complete  prototyping course',
            deadline: '06 January 2022',
        },
    ];

    const showModal = () => {
        setIsModalVisible(true);
    };

    const hideModal = () => {
        setIsModalVisible(false);
    }

    const renderItem = ({item, index}) => {
        return (
            <View key={index} style={styles.goalCardStyle}>
                <GoalCard
                    avatarUrl={item.avatarUrl}
                    datePosted={item.datePosted}
                    name={item.name}
                    commentsLength={item.commentsLength}
                    title={item.title}
                    description={item.description}
                    deadline={item.deadline}
                />
            </View>
        );
    };
    const HomeHeader = () => {
        return (
            <View style={styles.headerContainer}>
                <Image
                    source={require('../../assets/goalmates-logo/GOALMATESlogo.png')}
                />
                <TouchableOpacity
                    onPress={showModal}
                >
                    <CategorySvg/>
                </TouchableOpacity>
            </View>
        )
    }

    const ItemSeparator = () => (
        <View style={styles.separatorStyle}/>
    );

    return (
        <SafeAreaView style={styles.mainContainer}>
            <HomeFilterModal
                isVisible={isModalVisible}
                onClose={hideModal}
            />
            <FlatList
                data={data}
                renderItem={renderItem}
                ListHeaderComponent={HomeHeader}
                ItemSeparatorComponent={ItemSeparator}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
};

export default HomeScreen;
