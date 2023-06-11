'use client'
import {createContext, useContext, useState, ReactNode} from "react";
import {LichessService} from "@/services";
interface LichessContext {
    lichessService: LichessService,
}

const LichessContext = createContext({} as LichessContext);


export function LichessProvider({ children }: {children: ReactNode}) {

    const lichessService = new LichessService()

    return (
        <LichessContext.Provider value={{ lichessService }}>{children}</LichessContext.Provider>
    );
}

export function useLichessContext() {
    return useContext(LichessContext);
}
