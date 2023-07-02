import React, { useEffect, useState } from 'react';
import { ScrollView, TextInput, TouchableOpacity, View, Text, FlatList } from 'react-native';

import CloseSvg from '../../assets/svgs/CloseSvg';

import styles from './styles';
import AvatarImage from '../../components/AvatarImage/AvatarImage';
import { Screens } from '../../project/constants';
import SearchIconSvg from '../../assets/svgs/SearchIconSvg';

const SearchScreen = ({ navigation }) => {
    const data = [
        {
            firstName: 'Ivan',
            lastName: 'Ivanov',
            avatarImage: null,
        },
        {
            firstName: 'Peter',
            lastName: 'Petrov',
            avatarImage: null,
        },
    ];

    const [userProfileName, setUserProfileName] = useState('');
    // const [showErrorMessage, setShowErrorMessage] = useState(true);

    const onPressClear = () => {
        // dispatch(Actions.searchHorseProfile(''));
        setUserProfileName('');
    };

    const onUserPress = () => {
        navigation.navigate(Screens.PROFILE, {
            user: {
                id: 3,
                firstName: 'From',
                lastName: 'Search Screen',
            },
        });
    };

    const keyExtractor = (_, index) => {
        return `${index}`;
    };

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.profileContainer} onPress={onUserPress}>
                <AvatarImage size={50} />
                <Text style={styles.nameLabel}>
                    {item.firstName} {item.lastName}
                </Text>
            </TouchableOpacity>
        );
    };

    useEffect(() => {
        onPressClear();

        return () => {
            onPressClear();
        }
    }, []);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.searchBarContainer}>
                <View style={styles.row}>
                    <View style={styles.searchIcon}>
                        <SearchIconSvg />
                    </View>
                    <TextInput
                        autoFocus
                        autoCorrect={false}
                        autoCapitalize='none'
                        placeholder='Search Goalmates'
                        placeholderTextColor='#797676'
                        style={styles.textInputStyle}
                        value={userProfileName}
                        onChangeText={setUserProfileName}
                    />
                </View>
                {userProfileName ? (
                    <TouchableOpacity onPress={onPressClear} style={styles.closeIcon}>
                        <CloseSvg />
                    </TouchableOpacity>
                ) : null}
            </View>
            <Text style={[styles.profileContainer, styles.errorMessage]}>
                We couldn't find any matches
            </Text>
            <FlatList data={data} renderItem={renderItem} keyExtractor={keyExtractor} />
        </ScrollView>
    );
};

export default SearchScreen;
