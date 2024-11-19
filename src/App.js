import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { publicRouters } from '~/routes';
function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/following">Following</Link>
                </nav>
                <Routes>
                    {publicRouters.map((route, index) => {
                        return (
                            // <Route key={index} path={route.path} to element={route.component()} />
                            <Route key={index} path={route.path} to element={<route.component />} />
                        );
                    })}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
