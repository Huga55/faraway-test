import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { QueryParamProvider } from "use-query-params";
import { ReactRouter6Adapter } from "use-query-params/adapters/react-router-6";

import AppRoutes from "@routes/AppRoutes";

import { store } from "./store";

function App() {
    return (
        <BrowserRouter>
            <QueryParamProvider adapter={ReactRouter6Adapter}>
                <Provider store={store}>
                    <AppRoutes />
                </Provider>
            </QueryParamProvider>
        </BrowserRouter>
    );
}

export default App;
