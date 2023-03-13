import * as React from "react";

import {
    DonationCards,
    TopDonorComponent
} from "./DonationCards";
import { random, randomName } from "../utils";
import { observer } from "mobx-react";
import { useMainStore } from "../hooks/useMainStore";


export const MainWindow = observer(function MainWindow() {
    const { totalDonationAmount, addDonation } = useMainStore();

    const buttonCallback = React.useCallback(() => {
        addDonation({
            name: randomName(),
            amount: random(1, 1000),
            kudos: 0,
        });
    }, [])

    return (
        <div className="main">
            <h3>Total pledged: </h3> {totalDonationAmount}
            <br />
            <button onClick={buttonCallback}>{"DONATE NOW! <3"}</button>
            {/* <button onClick={buttonCallbackThunk}>{"Multidonate! <3"}</button>
            <button onClick={uselessIncrementCallback}>{"Useless increment"}</button> */}
            <DonationCards>
                <TopDonorComponent />
            </DonationCards>
        </div>
    );
});


