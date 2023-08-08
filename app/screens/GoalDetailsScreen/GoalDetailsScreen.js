/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, View } from 'react-native';
import PropTypes from 'prop-types';

import { useStore } from '../../zustand/root-reducer';
import { commentSection } from '../../project/constants';

import GoalCard from '../../components/GoalCard/GoalCard';
import SectionHeader from './components/SectionHeader/SectionHeader';
import AddCommentInput from './components/AddCommentInput/AddCommentInput';
import Comment from '../../components/Comment/Comment';

import styles from './styles';

const GoalDetailsScreen = ({ route, navigation }) => {
    const myUserData = useStore((state) => state.myUser.data);
    const getPostById = useStore((state) => state.getPostById);
    const { data, isPostLoading } = useStore((state) => state.post);

    const [selected, setSelected] = useState(commentSection.COMMENTS);
    const isSelectedUpdates = selected === 'Progress';
    const isCreatedByCurrentUser = myUserData?.id === data?.createdBy?.id;

    const comments = [1, 2, 3, 4, 5];
    const updates = [1, 2, 3, 4, 5];

    const changeSelectedOption = (option) => {
        setSelected(option);
    };

    const RenderSections = () => {
        if (selected === commentSection.PROGRESS) {
            return updates.map(() => (
                <Comment
                    comment='This is a very long text for update on a new line'
                    userName='Test Testov'
                    selected={selected}
                    isCreatedByCurrentUser={isCreatedByCurrentUser}
                />
            ));
        }
        if (selected === commentSection.COMMENTS) {
            return comments.map(() => (
                <Comment
                    comment='This is a very long text I want to be on a separate line hahahahha  fdsfhsdf ssdfh lsdjffsd'
                    userName='Test Testov'
                    selected={selected}
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
        <>
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
                    progress={0.99}
                    isFromGoalDetails
                />
                <SectionHeader selected={selected} changeOption={changeSelectedOption} />
                <RenderSections />
            </ScrollView>
            {isSelectedUpdates ? (
                isCreatedByCurrentUser ? (
                    <AddCommentInput avatarImage={myUserData?.image} />
                ) : null
            ) : (
                <AddCommentInput avatarImage={myUserData?.image} />
            )}
        </>
    );
};

GoalDetailsScreen.propTypes = {
    route: PropTypes.object,
};

export default GoalDetailsScreen;
