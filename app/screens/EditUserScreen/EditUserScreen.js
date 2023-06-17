import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

import LabelWithTextInput from '../../components/LabelWithTextInput/LabelWithTextInput';
import Button from '../../components/Button/Button';

import styles from './styles';
import AvatarImage from '../../components/AvatarImage/AvatarImage';
import EditPhotoSvg from '../../assets/svgs/EditPhotoSvg';

const EditUserScreen = ({ user }) => {
    const [firstName, setFirstName] = useState(user?.firstName || '');
    const [lastName, setLastName] = useState(user?.lastName || '');
    const [email, setEmail] = useState(user?.email || '');
    const [password, setPassword] = useState(user?.password || '');
    const [imageUrl, setImageUrl] = useState(user?.imageUrl || '');

    const openImagesGallery = async () => {
		const response = await launchImageLibrary();

		if (response?.assets) {
			setImageUrl(response.assets[0]);
		}
	};

    return (
        <View style={styles.mainContainer}>
            <View style={styles.avatarAndEditButtonContainerStyle}>
                <AvatarImage size={67} imageUrl={imageUrl}/>
                <TouchableOpacity 
                    style={styles.editPhotoButtonStyle}
                    onPress={openImagesGallery}
                >
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
            <LabelWithTextInput 
                label='E-mail' 
                inputField={email} 
                onChangeInputField={setEmail} 
            />
            <LabelWithTextInput 
                label='Password' 
                inputField={password} 
                onChangeInputField={setPassword} 
                isPassword
            />
            <Button
                label='Save changes'
                onButtonPress={() => undefined}
                buttonContainerStyle={styles.buttonContainerStyle}
            />
        </View>
    );
};

EditUserScreen.propTypes = {
    user: PropTypes.object,
};

export default EditUserScreen;
