/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
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
    const getComments = useStore((state) => state.getComments);
    const getAllUpdates = useStore((state) => state.getAllUpdates);

    const { data } = useStore((state) => state.post);
    const comments = useStore((state) => state.comments);
    const updates = useStore((state) => state.updates);

    const [selected, setSelected] = useState(commentSection.COMMENTS);
    const isSelectedUpdates = selected === commentSection.PROGRESS;
    const isPostCreatedByCurrentUser = myUserData?.id === data?.createdBy?.id;

    const changeSelectedOption = (option) => {
        setSelected(option);
    };

    const RenderSections = () => {
        if (selected === commentSection.PROGRESS) {
            return updates?.data?.map((update) => {
                return (
                    <Comment
                        key={`${update.id}`}
                        comment={update?.text}
                        commentId={update?.id}
                        title={update?.title}
                        imageSource={update?.image}
                        user={data?.createdBy}
                        isPostCreatedByCurrentUser={isPostCreatedByCurrentUser}
                        selected={selected}
                    />
                );
            });
        }
        if (selected === commentSection.COMMENTS) {
            return comments?.data?.map((comment) => {
                return (
                    <Comment
                        key={`${comment.id}`}
                        comment={comment?.text}
                        commentId={comment.id}
                        likes={comment?.likes}
                        user={comment?.user}
                        selected={selected}
                        refreshScreen={refreshScreen}
                        isPostCreatedByCurrentUser={isPostCreatedByCurrentUser}
                    />
                );
            });
        }

        return null;
    };

    const refreshScreen = () => {
        const { goalId } = route.params;
        getPostById(goalId);
        getComments(goalId);
        getAllUpdates(goalId);
    };

    const onFocus = () => {
        refreshScreen();
    };

    useEffect(() => {
        const unsubscirbe = navigation.addListener('focus', onFocus);

        return () => {
            unsubscirbe();
        };
    }, [navigation]);

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
                    commentsLength={comments?.data?.length}
                    title={data?.title}
                    description={data?.content}
                    goalId={data?.id}
                    progress={0.99}
                    refreshScreen={refreshScreen}
                    isFromGoalDetails
                />
                <SectionHeader selected={selected} changeOption={changeSelectedOption} />
                <RenderSections />
            </ScrollView>
            {isSelectedUpdates ? (
                isPostCreatedByCurrentUser ? (
                    <AddCommentInput
                        avatarImage={myUserData?.image}
                        postId={data?.id}
                        isFromUpdates
                        refreshScreen={refreshScreen}
                        label='Add an update'
                    />
                ) : null
            ) : (
                <AddCommentInput
                    avatarImage={myUserData?.image}
                    postId={data?.id}
                    refreshScreen={refreshScreen}
                    label='Add a comment'
                />
            )}
        </>
    );
};

GoalDetailsScreen.propTypes = {
    route: PropTypes.object,
};

export default GoalDetailsScreen;
