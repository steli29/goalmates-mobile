import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';

import LabelWithTextInput from '../../components/LabelWithTextInput/LabelWithTextInput';
import Button from '../../components/Button/Button';

import styles from './styles';
import AvatarImage from '../../components/AvatarImage/AvatarImage';
import EditPhotoSvg from '../../assets/svgs/EditPhotoSvg';
import { useStore } from '../../zustand/root-reducer';
import ErrorModal from '../../components/ErrorModal/ErrorModal';

const EditUserScreen = ({ route }) => {
    const { user, onGoBack } = route.params;
    const navigation = useNavigation();
    const editUser = useStore((state) => state.editUser);
    const clearUserError = useStore((state) => state.clearUserError);
    const { error } = useStore((state) => state.user);

    const [firstName, setFirstName] = useState(user.firstName || null);
    const [lastName, setLastName] = useState(user.lastName || null);
    const [email, setEmail] = useState(user.email || null);
    const [password, setPassword] = useState(null);
    const [imageUrl, setImageUrl] = useState(user.image || null);
    const [isEditPressed, setIsEditPressed] = useState(false);

    const openImagesGallery = async () => {
        const response = await launchImageLibrary();

        if (response?.assets) {
            setImageUrl(response.assets[0]);
        }
    };

    const onSaveChangesPress = async () => {
        await editUser({
            firstName,
            lastName,
            email,
            password,
            image: imageUrl,
        });
        setIsEditPressed(true);
    };

    useEffect(() => {
        if (isEditPressed) {
            setIsEditPressed(false);
            if (!error) {
                onGoBack(user.id);
                navigation.goBack();
            }
        }
    }, [error, isEditPressed]);

    return (
        <View style={styles.mainContainer}>
            <ErrorModal 
                error={error}
                onErrorClear={clearUserError}
            />
            <View style={styles.avatarAndEditButtonContainerStyle}>
                <AvatarImage size={67} imageUrl={imageUrl} />
                <TouchableOpacity style={styles.editPhotoButtonStyle} onPress={openImagesGallery}>
                    <EditPhotoSvg />
                </TouchableOpacity>
            </View>
            <LabelWithTextInput
                label='First Name'
                inputField={firstName}
                onChangeInputField={setFirstName}
            />
            <LabelWithTextInput
                label='Last Name'
                inputField={lastName}
                onChangeInputField={setLastName}
            />
            <LabelWithTextInput label='E-mail' inputField={email} onChangeInputField={setEmail} />
            <LabelWithTextInput
                label='Password'
                inputField={password}
                onChangeInputField={setPassword}
                isPassword
            />
            <Button
                label='Save changes'
                onButtonPress={onSaveChangesPress}
                buttonContainerStyle={styles.buttonContainerStyle}
            />
        </View>
    );
};

EditUserScreen.propTypes = {
    route: PropTypes.object,
};

export default EditUserScreen;
