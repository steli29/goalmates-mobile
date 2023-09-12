import Slider from '@react-native-community/slider';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import { useStore } from '../../zustand/root-reducer';

import styles from './styles';

const SliderWidget = ({ updateId, refreshScreen }) => {
    const step = 1;
    const minValue = 0;
    const maxValue = 5;
    const [value, setValue] = useState(0);
    const [isSliderUsed, setIsSliderUsed] = useState(false);

    const setProgress = useStore((state) => state.setProgress);
    const getProgress = useStore((state) => state.getProgress);
    const myUserData = useStore((state) => state.myUser.data);

    const onSlidingComplete = async () => {
        await setProgress(updateId, myUserData?.id, value);
        setTimeout(() => {
            onFocus();
        }, 100);
    };

    const onFocus = async () => {
        const data = await getProgress(myUserData?.id, updateId);
        if (data) {
            setValue(data?.progress);
            setIsSliderUsed(data?.isRated);
        }
        refreshScreen();
    };

    useEffect(() => {
        onFocus();
    }, []);

    return (
        <>
            <Slider
                minimumValue={minValue}
                maximumValue={maxValue}
                step={step}
                value={value}
                onValueChange={setValue}
                disabled={isSliderUsed}
                onSlidingComplete={onSlidingComplete}
            />
            <View style={styles.ratingContainer}>
                <Text style={styles.countText}>Rating: {value}</Text>
                {/* <Text style={styles.countText}>Total Rating: {value}</Text> */}
            </View>
        </>
    );
};

SliderWidget.propTypes = {
    updateId: PropTypes.number,
    refreshScreen: PropTypes.func,
};

export default SliderWidget;
