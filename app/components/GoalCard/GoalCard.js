import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';

import GoalPreview from '../GoalPreview/GoalPreview';
import AvatarImage from '../AvatarImage/AvatarImage';
import ChatSvg from '../../assets/svgs/ChatSvg';

import styles from './styles';
import { Screens } from '../../project/constants';
import ThreeDotsSvg from '../../assets/svgs/ThreeDotsSvg';
import GoalOptionsModal from '../GoalOptionsModal/GoalOptionsModal';

const GoalCard = ({
    avatarUrl,
    name,
    datePosted,
    commentsLength,
    title,
    description,
    progress,
    isCurrentUser,
    isFromGoalDetails = false,
}) => {
    const navigation = useNavigation();
    const firstName = name.split(' ')[0];
    const lastName = name.split(' ')[1];

    const [isOptionsModalVisible, setIsOptionsModalVisible] = useState(false);

    const closeModal = () => {
        setIsOptionsModalVisible(false);
    };

    const openModal = () => {
        setIsOptionsModalVisible(true);
    };

    const onNameItemPress = () => {
        const params = {
            user: {
                userId: 3,
                firstName,
                lastName,
            },
        };
        navigation.push(Screens.PROFILE, params);
    };

    const onViewPostDetailsPress = () => {
        navigation.navigate(Screens.GOAL_DETAILS);
    };

    const onDotsPress = () => {
        openModal();
    };

    return (
        <View style={styles.mainContainer}>
            <GoalOptionsModal
                isVisible={isOptionsModalVisible}
                onClose={closeModal}
                isCurrentUser={!isCurrentUser}
                data={{
                    avatarUrl,
                    name,
                    datePosted,
                    commentsLength,
                    title,
                    description,
                    progress,
                }}
            />
            <View style={[styles.rowContainer, styles.cardHeaderContainer]}>
                <AvatarImage size={46} imageUrl={avatarUrl} />
                <View style={styles.nameAndDateContainer}>
                    <TouchableOpacity onPress={onNameItemPress}>
                        <Text style={styles.nameText}>{name}</Text>
                    </TouchableOpacity>
                    <Text style={styles.datePostedText}>{datePosted}</Text>
                </View>
                <TouchableOpacity
                    onPress={onDotsPress}
                    style={styles.dotsStyle}
                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                >
                    <ThreeDotsSvg />
                </TouchableOpacity>
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
            </View>
        </View>
    );
};

GoalCard.propTypes = {
    avatarUrl: PropTypes.string,
    name: PropTypes.string,
    datePosted: PropTypes.string,
    commentsLength: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    progress: PropTypes.number,
    isCurrentUser: PropTypes.bool,
    isFromGoalDetails: PropTypes.bool,
};

export default GoalCard;
