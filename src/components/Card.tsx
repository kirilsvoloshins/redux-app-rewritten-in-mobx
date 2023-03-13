import * as React from "react";
import { useMainStore } from "../hooks/useMainStore";
import { observer } from "mobx-react";

export const Card: React.FC<Props> = observer(function Card({ amount, name, kudos }) {
    const { addKudos } = useMainStore();

    const callback = React.useCallback(() => {
        addKudos(name);
    }, [name]);

    return (
        <div className="ticket">
            <h4>{name}</h4>
            <p>{`Pledged amount: ${amount}`}</p>
            <p>{`Thanks received: ${kudos}`}</p>
            <button onClick={callback}>{`Thank ${name}`}</button>
        </div>
    );
});

interface Props {
    amount: number;
    name: string;
    kudos: number;
}
