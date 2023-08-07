import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import { useStore } from '../../zustand/root-reducer';

import GoalCard from '../../components/GoalCard/GoalCard';
import SectionHeader from './components/SectionHeader/SectionHeader';
import AddCommentInput from './components/AddCommentInput/AddCommentInput';

import styles from './styles';
import Comment from '../../components/Comment/Comment';

const GoalDetailsScreen = ({ route, navigation }) => {
    const [selected, setSelected] = useState('Comments');

    const myUserData = useStore((state) => state.myUser.data);
    const getPostById = useStore((state) => state.getPostById);
    const { data, isPostLoading } = useStore((state) => state.post);

    const comments = [1, 2, 3, 4, 5];
    const updates = [1, 2, 3, 4, 5];

    const changeSelectedOption = (option) => {
        setSelected(option);
    };

    const RenderSections = () => {
        if (selected === 'Progress') {
            return <Text>Progress</Text>;
        }
        if (selected === 'Comments') {
            return comments.map((comment) => (
                <Comment
                    comment='This is a very long text I want to be on a separate line hahahahha  fdsfhsdf ssdfh lsdjffsd'
                    userName='Test Testov'
                />
            ));
        }

        return null;
    };

    const onFocus = () => {
        const { goalId } = route.params;
        getPostById(goalId);
    };

    useEffect(() => {
        const unsubscirbe = navigation.addListener('focus', onFocus);

        return () => {
            unsubscirbe();
        };
    }, [navigation]);

    useEffect(() => {}, [isPostLoading]);

    if (isPostLoading) {
        return (
            <View style={styles.loadingSpinnerContainer}>
                <ActivityIndicator size='large' color='#B5B5B5' />
            </View>
        );
    }

    return (
        <ScrollView
            contentContainerStyle={styles.mainContainer}
            scrollEnabled
            showsVerticalScrollIndicator={false}
        >
            <GoalCard
                datePosted={data?.dateCreated}
                user={data?.createdBy}
                commentsLength={50}
                title={data?.title}
                description={data?.content}
                goalId={data?.id}
                progress={0.6}
                isFromGoalDetails
            />
            <SectionHeader selected={selected} changeOption={changeSelectedOption} />
            <RenderSections />
            <AddCommentInput avatarImage={myUserData?.image} />
        </ScrollView>
    );
};

GoalDetailsScreen.propTypes = {
    route: PropTypes.object,
};

export default GoalDetailsScreen;
