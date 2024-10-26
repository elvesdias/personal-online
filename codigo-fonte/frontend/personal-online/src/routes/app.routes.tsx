import { Platform } from "react-native";
import { useTheme } from "native-base";
import { useContext } from "react";
import AuthContext from "../context/authContext";
import {
    createBottomTabNavigator,
    BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";

import HomeSvg from "@assets/Home.svg";
import HistorySvg from "@assets/history.svg";
import ProfileSvg from "@assets/profile.svg";

import { Home } from "@screens/Home";
import { HomePersonal } from "@screens/HomePersonal";
import { Exercise } from "@screens/Exercise";
import { History } from "@screens/History";
import { Profile } from "@screens/Profile";

type AppRoutes = {
    home: undefined;
    exercise: undefined;
    history: undefined;
    profile: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
    const { sizes, colors } = useTheme();

    const iconSize = sizes[7];

    const { userType } = useContext(AuthContext);

    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: colors.blue[500],
                tabBarInactiveTintColor: colors.gray[200],
                tabBarStyle: {
                    backgroundColor: colors.blueGray[800],
                    borderTopWidth: 0,
                    height: Platform.OS === "android" ? "auto" : 96,
                    paddingBottom: sizes[10],
                    paddingTop: sizes[7],
                },
            }}
        >
            {userType == "admin" ? (
                <Screen
                    name="home"
                    component={HomePersonal}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <HomeSvg fill={color} width={iconSize} height={iconSize} />
                        ),
                    }}
                />
            ) : (

                <Screen
                    name="home"
                    component={Home}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <HomeSvg fill={color} width={iconSize} height={iconSize} />
                        ),
                    }}
                />
            )}

            {/* <Screen
                name="home"
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <HomeSvg fill={color} width={iconSize} height={iconSize} />
                    ),
                }}
            /> */}

            <Screen
                name="history"
                component={History}
                options={{
                    tabBarIcon: ({ color }) => (
                        <HistorySvg fill={color} width={iconSize} height={iconSize} />
                    ),
                }}
            />

            <Screen
                name="profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ color }) => (
                        <ProfileSvg fill={color} width={iconSize} height={iconSize} />
                    ),
                }}
            />

            <Screen
                name="exercise"
                component={Exercise}
                options={{ tabBarButton: () => null }}
            />
        </Navigator>
    );
}
