import React, { useEffect, useState } from 'react';
import { ScrollView, TextInput, TouchableOpacity, View, Text, FlatList } from 'react-native';

import { useStore } from '../../zustand/root-reducer';
import { Screens } from '../../project/constants';
import useDebounce from '../../project/hooks/useDebounce';

import CloseSvg from '../../assets/svgs/CloseSvg';
import SearchIconSvg from '../../assets/svgs/SearchIconSvg';
import AvatarImage from '../../components/AvatarImage/AvatarImage';

import styles from './styles';

const SearchScreen = ({ navigation }) => {
    const searchUsers = useStore((state) => state.searchUsers);
    const searchResults = useStore((state) => state.searchResults);
    const clearResults = useStore((state) => state.clearResults);

    const [userProfileName, setUserProfileName] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const debouncedUsername = useDebounce(userProfileName);
    const onPressClear = () => {
        clearResults();
        setUserProfileName('');
    };

    const onUserPress = (user) => {
        navigation.navigate(Screens.PROFILE, {
            user,
        });
    };

    const keyExtractor = (_, index) => {
        return `${index}`;
    };

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.profileContainer} onPress={() => onUserPress(item)}>
                <AvatarImage size={50} />
                <Text style={styles.nameLabel}>
                    {item.firstName} {item.lastName}
                </Text>
            </TouchableOpacity>
        );
    };

    useEffect(() => {
        if (debouncedUsername.length > 2) {
            searchUsers(debouncedUsername);
        } else {
            clearResults();
        }
    }, [debouncedUsername]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            // eslint-disable-next-line no-unused-expressions
            debouncedUsername.length > 2 && (searchResults.error || !searchResults.data?.length)
                ? setShowErrorMessage(true)
                : setShowErrorMessage(false);
        }, 650);

        return () => {
            clearTimeout(timeout);
        };
    }, [searchResults, debouncedUsername]);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            onPressClear();
        });

        return () => {
            unsubscribe();
        }
    }, [navigation]);

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
            {showErrorMessage ? (
                <Text style={[styles.profileContainer, styles.errorMessage]}>
                    {searchResults.error 
                    ? searchResults.error 
                    : "We couldn't find any matches"}
                </Text>
            ) : null}

            <FlatList data={searchResults.data} renderItem={renderItem} keyExtractor={keyExtractor} />
        </ScrollView>
    );
};

export default SearchScreen;
