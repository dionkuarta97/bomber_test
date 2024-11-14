import { Route, TabBar, TabBarProps } from "react-native-tab-view"
import { View, Text, Dimensions, StyleSheet } from "react-native"
import { useAppSelector } from "../../../hooks/useAppDispatch"
import { scale } from "react-native-size-matters"


const DefaultTabBar = (props: TabBarProps<Route>) => {
  const { theme } = useAppSelector(state => state.theme)

  return <TabBar
    style={[styles.tabBar, { backgroundColor: theme.backgroundColor }]}
    {...props}
    indicatorStyle={{ backgroundColor: theme.textColor }}
    tabStyle={styles.tabBarItem}
    renderTabBarItem={({ route }) => (
      <View style={styles.tabBarItemContainer}>
        <Text style={[styles.tabBarText, { color: theme.textColor }]}>
          {route.title}
        </Text>
      </View>
    )}

  />
}

export default DefaultTabBar

const styles = StyleSheet.create({
  tabBar: {
    elevation: 0,
    shadowOpacity: 0,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowRadius: 0
  },
  tabBarItem: {
    width: Dimensions.get('window').width / 3,
  },
  tabBarText: {
    textAlign: 'center',
    fontSize: scale(12)
  },
  tabBarItemContainer: {
    width: Dimensions.get('window').width / 3,
    paddingVertical: scale(10)
  },
})
