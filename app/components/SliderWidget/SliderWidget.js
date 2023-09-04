import Slider from '@react-native-community/slider';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import { useStore } from '../../zustand/root-reducer';

import styles from './styles';

const SliderWidget = ({ disabled, updateId }) => {
    const step = 1;
    const minValue = 0;
    const maxValue = 5;
    const [value, setValue] = useState(0);
    const [isSliderUsed, setIsSliderUsed] = useState(false);

    const setProgress = useStore((state) => state.setProgress);
    const myUserData = useStore((state) => state.myUser.data);

    const setSliderToUsed = () => {
        if (!isSliderUsed) {
            setIsSliderUsed(true);
        }
    };

    const onSlidingComplete = async () => {
        setProgress(updateId, myUserData?.id, value);
        setSliderToUsed();
    };

    return (
        <>
            {!disabled && (
                <Slider
                    minimumValue={minValue}
                    maximumValue={maxValue}
                    step={step}
                    value={value}
                    onValueChange={setValue}
                    disabled={isSliderUsed}
                    onSlidingComplete={onSlidingComplete}
                />
            )}
            <View style={styles.ratingContainer}>
                {!disabled && <Text style={styles.countText}>Rating: {value}</Text>}
                <Text style={styles.countText}>Total Rating: {value}</Text>
            </View>
        </>
    );
};

SliderWidget.propTypes = {
    disabled: PropTypes.bool,
    updateId: PropTypes.number,
};

export default SliderWidget;
