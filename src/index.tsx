import * as React from "react";
import { createRoot } from "react-dom/client";

import { mainStore, MainStoreContext } from "./stores/mainStore";
import { MainWindow } from "./components/MainWindow";
import { SideBar } from "./components/SideBar";

function App() {
    return (
        <MainStoreContext.Provider value={mainStore}>
            <h1>My Super Awesome app</h1>
            <div className="wrapper">
                <MainWindow />
                <SideBar />
            </div>
        </MainStoreContext.Provider>
    );
}

const root = createRoot(document.getElementById("root")!);

root.render(<App />)

