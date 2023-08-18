import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';

import { Screens } from '../../project/constants';
import { useStore } from '../../zustand/root-reducer';
import { timeAgo } from '../../project/helpers/helper-functions';

import GoalPreview from '../GoalPreview/GoalPreview';
import AvatarImage from '../AvatarImage/AvatarImage';
import ChatSvg from '../../assets/svgs/ChatSvg';
import ThreeDotsSvg from '../../assets/svgs/ThreeDotsSvg';
import GoalOptionsModal from '../GoalOptionsModal/GoalOptionsModal';

import styles from './styles';

const GoalCard = ({
    datePosted,
    commentsLength,
    title,
    description,
    progress,
    user,
    goalId,
    refreshScreen,
    isFromGoalDetails = false,
}) => {
    // TODO
    // Possibility to have options in modal for goal for different users
    const navigation = useNavigation();

    const myUser = useStore((state) => state.myUser);

    const { firstName, lastName, image, id } = user || {};
    const isCurrentUser = id === myUser?.data?.id;

    const parsedDate = timeAgo(new Date(datePosted));

    const [isOptionsModalVisible, setIsOptionsModalVisible] = useState(false);

    const closeModal = () => {
        setIsOptionsModalVisible(false);
    };

    const openModal = () => {
        setIsOptionsModalVisible(true);
    };

    const onNameItemPress = () => {
        navigation.push(Screens.PROFILE, {
            user,
        });
    };

    const onViewPostDetailsPress = () => {
        navigation.navigate(Screens.GOAL_DETAILS, {
            goalId,
        });
    };

    const onDotsPress = () => {
        openModal();
    };

    return (
        <View style={styles.mainContainer}>
            <GoalOptionsModal
                isVisible={isOptionsModalVisible}
                onClose={closeModal}
                isCurrentUser={isCurrentUser}
                refreshScreen={refreshScreen}
                data={{
                    goalId,
                    title,
                    description,
                }}
            />
            <View style={[styles.rowContainer, styles.cardHeaderContainer]}>
                <AvatarImage size={46} imageUrl={image} />
                <View style={styles.nameAndDateContainer}>
                    <TouchableOpacity onPress={onNameItemPress}>
                        <Text style={styles.nameText}>{`${firstName} ${lastName}`}</Text>
                    </TouchableOpacity>
                    <Text style={styles.datePostedText}>{parsedDate}</Text>
                </View>
                {isCurrentUser && !isFromGoalDetails ? (
                    <TouchableOpacity
                        onPress={onDotsPress}
                        style={styles.dotsStyle}
                        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                    >
                        <ThreeDotsSvg />
                    </TouchableOpacity>
                ) : null}
            </View>
            <GoalPreview title={title} description={description} progress={progress} />
            <View style={styles.goalCardFooter}>
                {!isFromGoalDetails && (
                    <TouchableOpacity onPress={onViewPostDetailsPress}>
                        <Text style={styles.viewCommentsButtonText}>View full goal details</Text>
                    </TouchableOpacity>
                )}
                <View style={[styles.rowContainer, styles.commentIconContainer]}>
                    <ChatSvg />
                    <Text style={styles.commentsLengthText}>{commentsLength}</Text>
                </View>
                {isFromGoalDetails && (
                    <Text style={styles.commentsLengthText}>{progress * 100}%</Text>
                )}
            </View>
        </View>
    );
};

GoalCard.propTypes = {
    user: PropTypes.object,
    datePosted: PropTypes.string,
    commentsLength: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    progress: PropTypes.number,
    goalId: PropTypes.number,
    refreshScreen: PropTypes.func,
    isFromGoalDetails: PropTypes.bool,
};

export default GoalCard;
