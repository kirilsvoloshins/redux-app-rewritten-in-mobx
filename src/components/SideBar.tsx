import * as React from "react";
import { observer } from "mobx-react";
import { useMainStore } from "../hooks/useMainStore";


export const SideBar = observer(function SideBar() {
    const { donatorNames } = useMainStore();
    console.log("sidebar render", donatorNames);
    return (
        <div className="sidebar">
            <h6>Latest donators:</h6>
            <ul className="sideul">
                {donatorNames.map((name, idx) => <li key={`${name}${idx}`}>{name}</li>)}
            </ul>
        </div>
    );
});
