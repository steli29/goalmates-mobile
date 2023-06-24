import React, {useState} from 'react';
import {Text, TouchableOpacity, View, FlatList} from 'react-native';

import PropTypes from "prop-types";
import {Screens} from '../../project/constants';

import AvatarImage from '../../components/AvatarImage/AvatarImage';
import LabelWithNumberBox from '../../components/LabelWithNumberBox/LabelWithNumberBox';
import GoalCard from '../../components/GoalCard/GoalCard';
import Button from '../../components/Button/Button';
import SettingsSvg from '../../assets/svgs/SettingsSvg';
import SettingsModal from '../../components/SettingsModal/SettingsModal';

import styles from './styles';
import {useStore} from "../../zustand/root-reducer";

const ProfileScreen = ({navigation, route}) => {
    const {user = {}} = route.params || {};
    const userFromStore = useStore(state => state.user.data)
    const isMyUser = user.id === userFromStore.id;
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

    const ProfileScreenHeader = () => {
        return (
            <>
                <View style={styles.topRowWithNamedContainer}>
                    <AvatarImage size={67}/>
                    <Text style={styles.nameLabel}>Katherine Mils</Text>
                    {
                        isMyUser &&
                        (
                            <TouchableOpacity
                                style={styles.settingsButtonStyle}
                                onPress={openModal}>
                                <SettingsSvg/>
                            </TouchableOpacity>
                        )
                    }
                </View>
                <Button
                    label='Edit Profile'
                    buttonContainerStyle={styles.buttonStyle}
                    onButtonPress={navigateToEditUser}
                />
                <View style={styles.labelBoxContainer}>
                    <LabelWithNumberBox label='Goals' number={20}/>
                    <View style={styles.divider}/>
                    <LabelWithNumberBox label='Following' number={25}/>
                    <View style={styles.divider}/>
                    <LabelWithNumberBox label='Followers' number={25}/>
                </View>
                <Text style={styles.postsLabelText}>Goals</Text>
            </>
        )
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

    // eslint-disable-next-line react/no-unstable-nested-components
    const ItemSeparator = () => (
        <View style={styles.separatorStyle}/>
    )

    return (
        <>
            <SettingsModal
                isVisible={isModalOpen}
                onClose={closeModal}
            />
            <FlatList
                data={data}
                renderItem={renderItem}
                ListHeaderComponent={ProfileScreenHeader}
                contentContainerStyle={styles.mainContainer}
                ItemSeparatorComponent={ItemSeparator}
                showsVerticalScrollIndicator={false}
            />
        </>
    );
};

ProfileScreen.propTypes = {
    route: PropTypes.object,
}

export default ProfileScreen;
