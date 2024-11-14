import * as React from 'react';
import { useWindowDimensions } from 'react-native';
import {
  TabView,
  SceneMap,
} from 'react-native-tab-view';
import TabContent from './tabContent';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { setCategory } from '../../../redux/slices/homeslice';
import { useEffect } from 'react';
import DefaultTabBar from './tabBar';


const renderScene = SceneMap({
  first: TabContent,
  second: TabContent,
  third: TabContent,
});

const routes = [
  { key: 'first', title: 'Beauty' },
  { key: 'second', title: 'Fragrances' },
  { key: 'third', title: 'Furniture' },
];

export default function HomeTab() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(setCategory(routes[index].title))
  }, [index])

  return (
    <TabView
      onIndexChange={(idx) => {
        setIndex(idx)
      }}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      renderTabBar={DefaultTabBar}
      initialLayout={{ width: layout.width }}
    />
  );
}