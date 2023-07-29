/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import AppContext from '../contexts/AppContext';

const AppContextProvider = (props) => {
    const [isSaveDraftModalOpen, setIsSaveDraftModalVisible] = useState(false);
    const [isDataForDraftAvailable, setIsDataForDraftAvailable] = useState(false);

    const onSaveDraftModalOpen = () => {
        setIsSaveDraftModalVisible(true);
    };

    const onSaveDraftModalClose = () => {
        setIsSaveDraftModalVisible(false);
    };

    const onSetDraftDataAvailable = (value) => {
        if (isDataForDraftAvailable !== value) {
            setIsDataForDraftAvailable(value);
        }
    }

    const value = {
        isSaveDraftModalOpen,
        onSaveDraftModalClose,
        onSaveDraftModalOpen,
        isDataForDraftAvailable,
        onSetDraftDataAvailable,
    };

    return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};

AppContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppContextProvider;
