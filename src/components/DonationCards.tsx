import * as React from "react";
import { Card } from "./Card.js";
import { useMainStore } from "../hooks/useMainStore.js";
import { observer } from "mobx-react";

export const DonationCards = observer(function DonationCards({ children }: React.PropsWithChildren) {
    const { donations } = useMainStore();
    return (
        <>
            {children}
            <h3>All donations:</h3>
            <ul>
                {donations.map(({ name, amount, kudos }) => (
                    <li key={name}>
                        <Card name={name} amount={amount} kudos={kudos} />
                    </li>
                ))}
            </ul>
        </>
    );
})

export const TopDonorComponent = observer(function TopDonorComponent() {
    const { topDonator } = useMainStore();

    return (
        <>
            <h1>TOP DONOR:</h1>
            {topDonator.name}
        </>
    )
});
