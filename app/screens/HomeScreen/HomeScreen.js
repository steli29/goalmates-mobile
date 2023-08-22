import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, Image, RefreshControl, TouchableOpacity, View } from 'react-native';

import { useStore } from '../../zustand/root-reducer';
import { filterModalOption } from '../../project/constants';

import GoalCard from '../../components/GoalCard/GoalCard';
import CategorySvg from '../../assets/svgs/CategorySvg';
import HomeFilterModal from './components/HomeFilterModal/HomeFilterModal';

import styles from './styles';

const HomeScreen = ({ navigation }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState(filterModalOption.MOST_RECENT);

    const myUser = useStore((state) => state.myUser);
    const getFeedPosts = useStore((state) => state.getFeedPosts);
    const feed = useStore((state) => state.feed);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const hideModal = () => {
        onRefresh();
        setIsModalVisible(false);
    };

    const onRefresh = async () => {
        const { id } = myUser.data;
        await getFeedPosts(id, selectedOption);
    };

    const onFocus = async () => {
        await onRefresh();
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', onFocus);

        return () => {
            unsubscribe();
        };
    }, [navigation]);

    const renderItem = ({ item, index }) => {
        const { createdBy, id, title, content, dateCreated, commentsCount } = item;
        return (
            <View key={index} style={styles.goalCardStyle}>
                <GoalCard
                    datePosted={dateCreated}
                    goalId={id}
                    user={createdBy}
                    commentsLength={commentsCount}
                    title={title}
                    description={content}
                    progress={0.6}
                />
            </View>
        );
    };
    const HomeHeader = () => {
        return (
            <View style={styles.headerContainer}>
                <Image source={require('../../assets/goalmates-logo/GOALMATESlogo.png')} />
                <TouchableOpacity onPress={showModal}>
                    <CategorySvg />
                </TouchableOpacity>
            </View>
        );
    };

    const ItemSeparator = () => <View style={styles.separatorStyle} />;

    return (
        <SafeAreaView style={styles.mainContainer} edges={['top']}>
            <HomeFilterModal
                isVisible={isModalVisible}
                onClose={hideModal}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
            />
            <HomeHeader />
            <FlatList
                data={feed?.data}
                renderItem={renderItem}
                ItemSeparatorComponent={ItemSeparator}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.contentContainerStyle}
                refreshControl={
                    <RefreshControl onRefresh={onRefresh} refreshing={feed.isLoading} />
                }
            />
        </SafeAreaView>
    );
};

export default HomeScreen;
