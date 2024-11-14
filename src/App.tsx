import { Provider } from "react-redux";
import Routes from "./routes";
import { store } from "./redux";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient()

export default function App() {
  return <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </QueryClientProvider>
  </Provider>
}
