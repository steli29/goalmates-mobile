import { createContext } from 'react';

export const saveDraftModalInitialState = {
    isSaveDraftModalOpen: false,
    onSaveDraftModalOpen: () => undefined,
    onSaveDraftModalClose: () => undefined,
    isDataForDraftAvailable: false,
    onSetDraftDataAvailable: () => undefined,
}

const AppContext = createContext({
    ...saveDraftModalInitialState,
});

export default AppContext;