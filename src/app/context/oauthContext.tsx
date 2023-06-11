'use client'
import {createContext, useContext, ReactNode} from "react";
import {OauthService} from "@/services";
interface OauthContext {
    oauthService: OauthService,
}

const OauthContext = createContext({} as OauthContext);


export function OAuthProvider({ children }: {children: ReactNode}) {

    const oauthService = new OauthService()

    return (
        <OauthContext.Provider value={{ oauthService }}>{children}</OauthContext.Provider>
    );
}

export function useOauthContext() {
    return useContext(OauthContext);
}
