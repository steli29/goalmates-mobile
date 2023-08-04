import React, { useState } from 'react';
import { ScrollView, Text } from 'react-native';
import GoalCard from '../../components/GoalCard/GoalCard';
import styles from './styles';
import SectionHeader from './components/SectionHeader/SectionHeader';
import AddCommentInput from './components/AddCommentInput/AddCommentInput';
import { useStore } from '../../zustand/root-reducer';

const GoalDetailsScreen = () => {
    const [selected, setSelected] = useState('Comments');
    const myUserData = useStore((state) => state.myUser.data);
    const changeSelectedOption = (option) => {
        setSelected(option);
    };

    const RenderSections = () => {
        if(selected === 'Progress') {
            return (
                <Text>Progress</Text>
            )
        } 
        if(selected === 'Comments') {
            return (
                <Text>Comments</Text>
            )
        };

        return null;
    }

    return (
        <ScrollView
            contentContainerStyle={styles.mainContainer}
            scrollEnabled
            showsVerticalScrollIndicator={false}
            automaticallyAdjustKeyboardInsets
        >
            <GoalCard
                avatarUrl={null}
                datePosted='Yesterday'
                name='Test Test'
                commentsLength={57}
                title='Test Title'
                description='Test Description'
                progress={0.5}
                isFromGoalDetails
            />
            <SectionHeader selected={selected} changeOption={changeSelectedOption} />
            <RenderSections />
            <AddCommentInput avatarImage={myUserData?.image} />
        </ScrollView>
    );
};

export default GoalDetailsScreen;
