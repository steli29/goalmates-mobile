import React from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'

const Label = ({ label }) => {
    return (
        <Text style={styles.labelTextStyle}>{label}</Text>

    )
}

Label.propTypes = {
    label: PropTypes.string,
};

export default Label;