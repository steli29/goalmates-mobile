import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';

import { useStore } from '../../../zustand/root-reducer';
import { Screens, TabNames } from '../../../project/constants';

import TabBarIcon from '../TabBarIcon/TabBarIcon';

import styles from './styles';

const CustomTabBar = ({ state, descriptors, navigation }) => {
    const focusedOptions = descriptors[state.routes[state.index].key].options;
    const { data } = useStore((store) => store.myUser);

    if (focusedOptions.tabBarVisible === false) {
        return null;
    }

    const onPress = (route, isFocused) => {
        const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
        });
        if (!isFocused && !event.defaultPrevented) {
            if (route.name === TabNames.PROFILE) {
                navigation.navigate(route.name, {
                    screen: Screens.PROFILE,
                    params: {
                        user: data,
                        isFromTabs: true,
                    },
                });
            } else {
                navigation.navigate(route.name);
            }
        }
    };

    return (
        <View style={[styles.mainContainer, styles.shadowEffect]}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label = options.tabBarLabel ?? options.title ?? route.name;
                const isFocused = state.index === index;
                // const labelToShow = label.replace(/_/g, ' ');
                // const isLabelCreateGoal = labelToShow.toString() === 'Create Goal';

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                const onPressHandler = () => onPress(route, isFocused);
                return (
                    <TouchableWithoutFeedback
                        key={label}
                        accessibilityRole='button'
                        accessibilityState={isFocused ? { selected: true } : {}}
                        onPress={onPressHandler}
                        onLongPress={onLongPress}
                    >
                        <View style={[styles.tabWrapper]}>
                            <TabBarIcon label={label} isFocused={isFocused} />
                            {/* {!isLabelCreateGoal && <Text style={styles.labelTextStyle}>{labelToShow}</Text>} */}
                        </View>
                    </TouchableWithoutFeedback>
                );
            })}
        </View>
    );
};

CustomTabBar.propTypes = {
    state: PropTypes.object.isRequired,
    descriptors: PropTypes.object.isRequired,
    navigation: PropTypes.object.isRequired,
};

export default CustomTabBar;
