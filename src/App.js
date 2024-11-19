import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { publicRouters } from '~/routes';
import { DefaultLayout } from '~/components/Layout';
import { Fragment } from 'react';
function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    {publicRouters.map((route, index) => {
                        let Layout = DefaultLayout;
                        if (route.layout) Layout = route.layout;
                        else if (route.layout === null) Layout = Fragment;
                        const Page = route.component;
                        return (
                            // <Route key={index} path={route.path} to element={route.component()} />
                            <Route
                                key={index}
                                path={route.path}
                                to
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
