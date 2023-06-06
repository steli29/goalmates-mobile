import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

import AppHeader from '../../../components/AppHeader/AppHeader';

export const CustomAppHeader = (props) => <AppHeader {...props} />;

export const CustomHeaderTitle = ({ title }) => {
    return (
        <Text>
            {title}
        </Text>
    )
};

CustomHeaderTitle.propTypes = {
    title: PropTypes.string,
}
