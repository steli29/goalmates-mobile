import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';
import GoalCard from '../../components/GoalCard/GoalCard';

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <GoalCard 
                avatarUrl={null}
                datePosted="1hr ago"
                name="Oyin Dolapo"
                commentsLength={57}
                title='Learn new skill'
                description='Complete  prototyping course'
                deadline='06 Januray 2022'
            />
            <GoalCard 
                avatarUrl={null}
                datePosted="1hr ago"
                name="Oyin Dolapo"
                commentsLength={57}
                title='Learn new skill'
                description='Complete  prototyping course'
                deadline='06 Januray 2022'
            />
        </SafeAreaView>
    );
};

export default HomeScreen;
