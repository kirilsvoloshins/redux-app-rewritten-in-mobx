import { action, observable } from "mobx";
import React from "react";
import { random, randomName } from "../utils";

const initialAmount = random(1, 1000);
const name = randomName();

type Donation = {
    name: string,
    amount: number,
    kudos: number
}

export const mainStore: MainStore = observable({
    donations: [{ name: name, amount: initialAmount, kudos: 0 }],
    get totalDonationAmount() {
        return this.donations.reduce((acc, { amount }) => acc += amount, 0);
    },
    get topDonator() {
        const maxDonation = Math.max(...this.donations.map(({ amount }) => amount));
        const topDonator = this.donations.find(({ amount }) => amount === maxDonation);
        return topDonator;
    },
    get donatorNames() {
        return this.donations.map(({ name }) => name);
    },
    addDonation(donation: Donation) {
        this.donations.push(donation);
    },
    addKudos(name: string) {
        const foundDonatorIndex = this.donations.findIndex(donator => donator.name === name);
        this.donations[foundDonatorIndex].kudos++;
    }
},
    {
        addDonation: action.bound,
        addKudos: action.bound,
    });

export const MainStoreContext = React.createContext<MainStore | null>(null);


export interface MainStore {
    donations: Donation[];
    totalDonationAmount: number;
    topDonator: Donation;
    donatorNames: string[];
    addDonation: (donator: Donation) => void;
    addKudos: (name: string) => void;
}
