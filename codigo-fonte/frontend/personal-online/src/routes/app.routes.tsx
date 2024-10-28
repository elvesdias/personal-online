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
//import { HomeAluno } from "@screens/HomeAluno";
import { Workout } from "@screens/Workout";
import { Exercise } from "@screens/Exercise";
import { History } from "@screens/History";
import { Profile } from "@screens/Profile";
import { Program } from "@screens/program";


type AppRoutes = {
  home: undefined;
 // HomeAluno: undefined;
  program: undefined;
  exercise: undefined;
  history: undefined;
  profile: undefined;
  workout: undefined
  homeAluno: undefined
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  const { sizes, colors } = useTheme();

  const iconSize = sizes[7];

  const { userType } = useContext(AuthContext);



  ///
  //
  //
  //
  // const userType = 'admin'; // apagar essa linha, apenas para testes
  //
  //

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.blue[300],
        tabBarInactiveTintColor: colors.gray[200],
        tabBarStyle: {
          backgroundColor: "#032243",
          borderTopWidth: 0,
          height: Platform.OS === "android" ? "auto" : 96,
          paddingBottom: sizes[10],
          paddingTop: sizes[10],
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

      <Screen
        name="homeAluno"
        component={Home}
      />

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

      <Screen
        name="program"
        component={Program}
      />

      <Screen
        name="workout"
        component={Workout}
      />
    </Navigator>
  );
}
