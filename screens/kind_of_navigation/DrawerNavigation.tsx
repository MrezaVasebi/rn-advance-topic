import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigation from "./TabNavigation";
import { CustomDrawerNavigation, MainView } from "./components";

const Drawer = createDrawerNavigator();

const Feed = ({ navigation }: { navigation: any }) => {
  return (
    <MainView
      title="Feed"
      label="Open Drawer"
      onPress={() => navigation.openDrawer()}
    />
  );
};

const Article = ({ navigation }: { navigation: any }) => {
  return (
    <MainView
      title="Article"
      label="Open Drawer"
      onPress={() => navigation.openDrawer()}
    />
  );
};

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="TabNavigation"
      defaultStatus="closed"
      drawerContent={({ descriptors, navigation, state }) => {
        return (
          <CustomDrawerNavigation
            state={state}
            navigation={navigation}
            descriptors={descriptors}
          />
        );
      }}
      screenOptions={({ navigation, route }) => ({
        headerShown: false,
        // drawerType: "back",
        // drawerPosition: "left",

        // drawerLabel({ color, focused }) {
        //   return <AppText label={route.name} />;
        // },

        // drawerLabelStyle: {
        //   color: colors.purple,
        // },

        // drawerAllowFontScaling: true,

        // drawerContentContainerStyle: {
        //   flex: 1,
        //   paddingTop: 20,
        //   borderRadius: 10,
        //   backgroundColor: "green",
        // },

        // drawerContentStyle: {
        //   padding: 10,
        //   backgroundColor: "red",
        // },

        // drawerIcon({ color, size, focused }) {
        //   if (route.name === "TabNavigation") {
        //     return <Ionicons name="search" size={size} color={color} />;
        //   } else if (route.name === "Feed") {
        //     return <Ionicons name="open" size={size} color={color} />;
        //   } else if (route.name === "Article") {
        //     return <Ionicons name="book" size={size} color={color} />;
        //   }
        // },

        // drawerHideStatusBarOnOpen: true,
        // drawerStatusBarAnimation: "fade",

        // drawerActiveTintColor: colors.white,
        // drawerInactiveTintColor: colors.purple,

        // drawerActiveBackgroundColor: colors.red,
        // drawerInactiveBackgroundColor: colors.white,
      })}
    >
      <Drawer.Screen name="TabNavigation" component={TabNavigation} />
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
