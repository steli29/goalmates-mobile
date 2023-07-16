import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import RootStack from './navigation/stacks/rootStack';
import AppContextProvider from './providers/AppContextProvider';
// TODO:
// Add goal screen
// Edit user implement API
// Goal details screen
// Update goal screen
// Notification screen
function App() {
    return (
        <AppContextProvider>
            <SafeAreaProvider>
                <NavigationContainer>
                    <RootStack />
                </NavigationContainer>
            </SafeAreaProvider>
        </AppContextProvider>
    );
}

export default App;
