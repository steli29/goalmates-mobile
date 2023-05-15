import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const AuthHeadLine = ({ headline, additionalStyle }) => {
    return <Text style={[styles.textStyle, additionalStyle]}>{headline}</Text>;
};

AuthHeadLine.propTypes = {
    headline: PropTypes.string,
    additionalStyle: PropTypes.object,
};

export default AuthHeadLine;
