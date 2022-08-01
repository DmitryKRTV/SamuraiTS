import * as React from "react";
import {StoreType} from "./redux/state";

export const StoreContext = React.createContext({} as any)

export type ProviderType = {
    store: any
    children: any
}

export const Provider = (props: ProviderType) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContext;