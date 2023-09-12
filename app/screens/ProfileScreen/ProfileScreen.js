import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, FlatList, ActivityIndicator, RefreshControl } from 'react-native';
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
    const { data: myUserData } = useStore((state) => state.myUser);

    const { data, isUserLoading } = useStore((state) => state.user);
    const getUserById = useStore((state) => state.getUserById);

    const followUser = useStore((state) => state.followUser);
    const unfollowUser = useStore((state) => state.unfollowUser);
    const connections = useStore((state) => state.connections);

    const posts = useStore((state) => state.posts);
    const getPostsByUser = useStore((state) => state.getPostsByUser);

    const [buttonLabelText, setButtonLabelText] = useState('');

    const isMyUser =
        (route.params?.isFromTabs || myUserData?.id === route.params?.user?.id) ?? false;

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
        getPostsByUser(id);

    };

    const ProfileScreenHeader = () => {
        return (
            <>
                <View style={styles.topRowWithNamedContainer}>
                    <AvatarImage size={67} imageUrl={data?.image} />
                    <Text style={styles.nameLabel}>
                        {data?.firstName} {data?.lastName}
                    </Text>
                    {isMyUser && (
                        <TouchableOpacity style={styles.settingsButtonStyle} onPress={openModal}>
                            <SettingsSvg />
                        </TouchableOpacity>
                    )}
                </View>
                <Button 
                    label={buttonLabelText} 
                    onButtonPress={buttonPressHandler} 
                    buttonContainerStyle={buttonLabelText === 'Unfollow' ? styles.unfollowButtonStyle : null}
                />
                <View style={styles.labelBoxContainer}>
                    <LabelWithNumberBox label='Goals' number={posts.data?.length} />
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
        const { createdBy, title, content, id, dateCreated, commentsCount, progress } = item;
        return (
            <View key={index} style={styles.goalCardStyle}>
                <GoalCard
                    datePosted={dateCreated}
                    user={createdBy}
                    commentsLength={commentsCount}
                    title={title}
                    description={content}
                    goalId={id}
                    progress={progress}
                    refreshScreen={() => refreshParent(data.id)}
                />
            </View>
        );
    };

    const ItemSeparator = () => <View style={styles.separatorStyle} />;

    if (isUserLoading || posts.isLoading) {
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
                data={posts.data}
                renderItem={renderItem}
                ListHeaderComponent={ProfileScreenHeader}
                contentContainerStyle={styles.mainContainer}
                ItemSeparatorComponent={ItemSeparator}
                showsVerticalScrollIndicator={false}
                refreshControl={(
                    <RefreshControl 
                        onRefresh={() => refreshParent(route.params?.user?.id)}
                        refreshing={isUserLoading || posts.isLoading}
                    />
                )}
            />
        </>
    );
};

ProfileScreen.propTypes = {
    route: PropTypes.object,
};

export default ProfileScreen;
