import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import RootStack from './navigation/stacks/rootStack';
// TODO: 
// Add goal screen 
// Edit user implement API
// Goal details screen
// Update goal screen
// Notification screen
function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <RootStack />
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

export default App;
