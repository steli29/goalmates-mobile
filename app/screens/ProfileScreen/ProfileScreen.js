import React, { useState } from 'react';
import { Text, TouchableOpacity, ScrollView, View } from 'react-native';

import { Screens } from '../../project/constants';

import AvatarImage from '../../components/AvatarImage/AvatarImage';
import LabelWithNumberBox from '../../components/LabelWithNumberBox/LabelWithNumberBox';
import GoalCard from '../../components/GoalCard/GoalCard';
import Button from '../../components/Button/Button';
import SettingsSvg from '../../assets/svgs/SettingsSvg';
import SettingsModal from '../../components/SettingsModal/SettingsModal';

import styles from './styles';

const ProfileScreen = ({ navigation }) => {
    const data = [
        {
            avatarUrl: null,
            datePosted: '1hr ago',
            name: 'Oyin Dolapo',
            commentsLength: 57,
            title: 'Learn new skill',
            description: 'Complete  prototyping course',
            deadline: '06 Januray 2022',
        },
        {
            avatarUrl: null,
            datePosted: '1hr ago',
            name: 'Oyin Dolapo',
            commentsLength: 57,
            title: 'Learn new skill',
            description: 'Complete  prototyping course',
            deadline: '06 Januray 2022',
        },
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);

    const closeModal = () => {
        setIsModalOpen(false);
    }

    const openModal = () => {
        setIsModalOpen(true);
    }

    const navigateToEditUser = () => {
        navigation.navigate(Screens.EDIT_USER);
    };

    const renderItem = (item, index) => {
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

    return (
        <ScrollView
            contentContainerStyle={styles.mainContainer}
            showsVerticalScrollIndicator={false}
        >
            <SettingsModal 
                isVisible={isModalOpen}
                onClose={closeModal}
            />
            <View style={styles.topRowWithNamedContainer}>
                <AvatarImage size={67} />
                <Text style={styles.nameLabel}>Katherine Mils</Text>
                <TouchableOpacity 
                    style={styles.settingsButtonStyle}
                    onPress={openModal}
                >
                    <SettingsSvg />
                </TouchableOpacity>
            </View>
            <Button
                label='Edit Profile'
                buttonContainerStyle={styles.buttonStyle}
                onButtonPress={navigateToEditUser}
            />
            <View style={styles.labelBoxContainer}>
                <LabelWithNumberBox label='Goals' number={20} />
                <View style={styles.divider} />
                <LabelWithNumberBox label='Following' number={25} />
                <View style={styles.divider} />
                <LabelWithNumberBox label='Followers' number={25} />
            </View>
            <Text style={styles.postsLabelText}>Goals</Text>
            {data && data.map(renderItem)}
        </ScrollView>
    );
};

export default ProfileScreen;
