import { Platform } from 'react-native';

export const Screens = {
    LOGIN: 'Login',
    REGISTER: 'Register',
    TABS: 'Tabs',
    HOME: 'Home',
    PROFILE: 'Profile',
    EDIT_USER: 'Edit_User',
    SETTINGS: 'Settings',
    VERIFY: 'Verify',
    FORGOTTEN_PASSWORD: 'Forgotten_Password',
    CREATE_GOAL: 'Create_Goal',
    SEARCH: 'Search',
    NOTIFICATIONS: 'Notifications',
    GOAL_DETAILS: 'Goal_Details',
    EDIT_GOAL: 'Edit_Goal',
};

export const TabNames = {
    HOME: 'Home-Tab',
    PROFILE: 'Profile-Tab',
    SEARCH: 'Search-Tab',
    NOTIFICATIONS: 'Notifications-Tab',
    CREATE: 'Create-Tab',
};

export const ReminderData = {
    EVERY_DAY: 'Every Day',
    EVERY_WEEK: 'Every Week',
    EVERY_MONTH: 'Every Month',
};

export const FONT_WEIGHT = {
    THIN: 'Thin',
    EXTRA_LIGHT: 'Extra Light',
    LIGHT: 'Light',
    NORMAL: 'Normal',
    MEDIUM: 'Medium',
    SEMI_BOLD: 'Semi Bold',
    BOLD: 'Bold',
    EXTRA_BOLD: 'Extra Bold',
};

export const FONT_FAMILY = {
    POPPINS: 'Poppins',
    NUNITO: 'Nunito',
};

export const isAndroid = Platform.OS === 'android';

export const isIOS = Platform.OS === 'ios';

export const ASYNC_STORAGE_KEYS = {
    CREATE_GOAL_DRAFT: 'create-goal-draft',
};

export const currentUserOptions = [
    'Turn off commenting',
    'Update Goal',
    'Edit',
    'Delete'
];

export const otherUsersOptions = [
    'Unfollow',
    'Turn off notifications for this Goal',
    'Hide',
    'Report',
]