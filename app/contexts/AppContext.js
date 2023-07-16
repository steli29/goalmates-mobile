import { createContext } from 'react';

export const saveDraftModalInitialState = {
    isSaveDraftModalOpen: false,
    onSaveDraftModalOpen: () => undefined,
    onSaveDraftModalClose: () => undefined,
}

const AppContext = createContext({
    ...saveDraftModalInitialState,
});

export default AppContext;