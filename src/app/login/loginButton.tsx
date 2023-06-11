'use client'

import {useOauthContext} from "@/app/context/oauthContext";
export function LoginButton() {
    const {oauthService} = useOauthContext()
    return (
        <button onClick={oauthService.beginAuthFlow.bind(oauthService)}>Login with lichess</button>
    )
}
