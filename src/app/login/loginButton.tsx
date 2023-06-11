'use client'

import {useOauthContext} from "@/app/context/oauthContext";
export function LoginButton() {
    const {oauthService} = useOauthContext()
    return (
        <button
            className="button px-4 py-2 font-semibold text-sm bg-sky-500 hover:bg-sky-600 text-white rounded-none shadow-sm inline-block"
            onClick={oauthService.beginAuthFlow.bind(oauthService)}>Login with lichess</button>
    )
}
