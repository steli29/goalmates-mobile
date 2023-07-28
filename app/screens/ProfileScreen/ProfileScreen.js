import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, FlatList, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import { Screens } from '../../project/constants';
import { useStore } from '../../zustand/root-reducer';

import AvatarImage from '../../components/AvatarImage/AvatarImage';
import LabelWithNumberBox from './components/LabelWithNumberBox/LabelWithNumberBox';
import GoalCard from '../../components/GoalCard/GoalCard';
import Button from '../../components/Button/Button';
import SettingsSvg from '../../assets/svgs/SettingsSvg';
import SettingsModal from './components/SettingsModal/SettingsModal';

import styles from './styles';

const ProfileScreen = ({ navigation, route }) => {
    const { data, isUserLoading } = useStore((state) => state.user);
    const { data: myUserData } = useStore((state) => state.myUser);
    const getUserById = useStore((state) => state.getUserById);

    const followUser = useStore((state) => state.followUser);
    const unfollowUser = useStore((state) => state.unfollowUser);
    const connections = useStore((state) => state.connections);

    const [buttonLabelText, setButtonLabelText] = useState('');

    const isMyUser =
        (route.params?.isFromTabs || myUserData.id === route.params?.user?.id) ?? false;

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            const { user } = route.params;
            const { id } = user;
            refreshParent(id);
        });

        return () => {
            unsubscribe();
        };
    }, [navigation]);

    useEffect(() => {
        if (data) {
            if (isMyUser) {
                setButtonLabelText('Edit Profile');
            } else if (data.isFollowing) {
                setButtonLabelText('Unfollow');
            } else {
                setButtonLabelText('Follow');
            }
        }
    }, [data]);

    const dataPosts = [
        {
            avatarUrl: null,
            datePosted: '1hr ago',
            name: 'Oyin Dolapo',
            commentsLength: 57,
            title: 'Learn new skill',
            description: 'Complete  prototyping course',
            progress: 0.4,
        },
        {
            avatarUrl: null,
            datePosted: '1hr ago',
            name: 'Oyin Dolapo',
            commentsLength: 57,
            title: 'Learn new skill',
            description: 'Complete  prototyping course',
            progress: 0.9,
        },
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const buttonPressHandler = () => {
        if (isMyUser) {
            navigation.navigate(Screens.EDIT_USER, {
                user: data,
                onGoBack: refreshParent,
            });
        } else if (data?.isFollowing) {
            unfollowUser(myUserData.id, data.id).then(() => {
                refreshParent(data.id);
            });
        } else {
            followUser(myUserData.id, data.id).then(() => {
                refreshParent(data.id);
            });
        }
    };

    const refreshParent = (id) => {
        getUserById(id);
    };

    const ProfileScreenHeader = () => {
        return (
            <>
                <View style={styles.topRowWithNamedContainer}>
                    <AvatarImage size={67} />
                    <Text style={styles.nameLabel}>
                        {data?.firstName} {data?.lastName}
                    </Text>
                    {isMyUser && (
                        <TouchableOpacity style={styles.settingsButtonStyle} onPress={openModal}>
                            <SettingsSvg />
                        </TouchableOpacity>
                    )}
                </View>
                <Button label={buttonLabelText} onButtonPress={buttonPressHandler} />
                <View style={styles.labelBoxContainer}>
                    <LabelWithNumberBox label='Goals' number={20} />
                    <View style={styles.divider} />
                    <LabelWithNumberBox label='Following' number={connections.following.length} />
                    <View style={styles.divider} />
                    <LabelWithNumberBox label='Followers' number={connections.followers.length} />
                </View>
                <Text style={styles.postsLabelText}>Goals</Text>
            </>
        );
    };

    const renderItem = ({ item, index }) => {
        return (
            <View key={index} style={styles.goalCardStyle}>
                <GoalCard
                    avatarUrl={item.avatarUrl}
                    datePosted={item.datePosted}
                    name={item.name}
                    commentsLength={item.commentsLength}
                    title={item.title}
                    description={item.description}
                    progress={item.progress}
                />
            </View>
        );
    };

    const ItemSeparator = () => <View style={styles.separatorStyle} />;
    if (isUserLoading) {
        return (
            <View style={styles.loadingSpinnerContainer}>
                <ActivityIndicator size='large' color='#B5B5B5' />
            </View>
        );
    }

    return (
        <>
            <SettingsModal isVisible={isModalOpen} onClose={closeModal} />
            <FlatList
                data={dataPosts}
                renderItem={renderItem}
                ListHeaderComponent={ProfileScreenHeader}
                contentContainerStyle={styles.mainContainer}
                ItemSeparatorComponent={ItemSeparator}
                activ
                showsVerticalScrollIndicator={false}
            />
        </>
    );
};

ProfileScreen.propTypes = {
    route: PropTypes.object,
};

export default ProfileScreen;
