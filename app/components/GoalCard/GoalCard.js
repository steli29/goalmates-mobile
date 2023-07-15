import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {useNavigation} from "@react-navigation/native";
import PropTypes from 'prop-types';

import GoalPreview from '../GoalPreview/GoalPreview';
import AvatarImage from '../AvatarImage/AvatarImage';
import ChatSvg from '../../assets/svgs/ChatSvg';

import styles from './styles';
import {Screens} from "../../project/constants";

const GoalCard = ({ avatarUrl, name, datePosted, commentsLength, title, description, progress }) => {
    const navigation = useNavigation()
    const firstName = name.split(' ')[0]
    const lastName = name.split(' ')[1];
    const onNameItemPress = () => {
        const params = {
            userId: 3,
            firstName,
            lastName,
        }
        navigation.push(Screens.PROFILE, params);
    }

    return (
        <View style={styles.mainContainer}>
            <View style={[styles.rowContainer, styles.cardHeaderContainer]}>
                <AvatarImage size={46} imageUrl={avatarUrl} />
                <View style={styles.nameAndDateContainer}>
                    <TouchableOpacity
                        onPress={onNameItemPress}
                    >
                        <Text style={styles.nameText}>{name}</Text>
                    </TouchableOpacity>
                    <Text style={styles.datePostedText}>{datePosted}</Text>
                </View>
            </View>
            <GoalPreview
                title={title}
                description={description}
                progress={progress}
            />
            <View style={styles.goalCardFooter}>
                <TouchableOpacity>
                    <Text style={styles.viewCommentsButtonText}>
                        View all {commentsLength} comments
                    </Text>
                </TouchableOpacity>
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
};

export default GoalCard;
