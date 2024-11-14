import { View, StyleSheet, ActivityIndicator, FlatList } from "react-native"
import { scale } from "react-native-size-matters"
import { Route } from "react-native-tab-view"
import { useAppSelector } from "../../../hooks/useAppDispatch"
import useGetAllProducts from "../../../hooks/useGetAllProducts"
import ProductCard from "./productCard"

const TabContent = ({ route, index }: { route: Route, index: number }) => {
  const { theme } = useAppSelector(state => state.theme)
  const { category } = useAppSelector(state => state.home)

  const { data, fetchNextPage, hasNextPage } = useGetAllProducts({ category })



  return <View style={styles.tabContent}>
    <FlatList
      showsVerticalScrollIndicator={false}
      data={data?.pages.flatMap(page => page.products)}
      renderItem={({ item }) => <ProductCard product={item} />}
      onEndReached={() => fetchNextPage()}
      onEndReachedThreshold={0.5}
      ListFooterComponent={() => hasNextPage ? <ActivityIndicator size="small" color={theme.textColor} /> : null}
    />
  </View>
}

export default TabContent


const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    padding: scale(10)
  },
  tabContentText: {
    fontSize: scale(12)
  }
})
