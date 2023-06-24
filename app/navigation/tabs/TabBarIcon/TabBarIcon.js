import React from "react";
import PropTypes from "prop-types";

import HomeIconSvg from "../../../assets/tab-icons/HomeIconSvg";
import CreateGoalSvg from "../../../assets/tab-icons/CreateGoalSvg";
import NotificationsSvg from "../../../assets/tab-icons/NotificationsSvg";
import ProfileSvg from "../../../assets/tab-icons/ProfileSvg";
import SearchSvg from "../../../assets/tab-icons/SearchSvg";

const TabBarIcon = ({ label, isFocused }) => {


    const iconColour = isFocused ? "#7B61FF" : "#B5B5B5";

    switch (label) {
        case "Home": return (
            <HomeIconSvg color={iconColour}/>
        );
        case "Search": return (
            <SearchSvg color={iconColour}/>
        );
        case "Create_Goal": return (
            <CreateGoalSvg/>
        );
        case "Notifications": return (
            <NotificationsSvg color={iconColour}/>
        );
        case "Profile": return (
            <ProfileSvg color={iconColour}/>
        );
        default:
            return null;
    }
};

TabBarIcon.propTypes = {
    label: PropTypes.string.isRequired,
    isFocused: PropTypes.bool.isRequired,
};

export default TabBarIcon;
