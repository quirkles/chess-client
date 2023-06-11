'use client'
import {useEffect} from "react";
import {useSearchParams, redirect, useRouter} from "next/navigation";

import {useLichessContext, useOauthContext} from "../context";
import {debug} from "util";

export default function OauthRedirect() {
  const { oauthService } = useOauthContext()
  const searchParams = useSearchParams();
  const {push} = useRouter();
  const code = searchParams.get('code')
  const state = searchParams.get('state')
  useEffect(() => {
    // if we're already authorized, just go to home
    if(oauthService.isAuthorized()) {
        redirect('/home')
    }
    // if we are coming back from lichess after authorizing the app, the happy path, check the params and verify the state
    if (code && state && oauthService.verifyState(state)) {
      oauthService.getAccessToken(code).then(() => {
        return push('/home')
      }).catch((err) => {debugger
        console.log('caught error', err)
        return push('/login')
      })
    } else {
      redirect('/login')
    }
  })
  return (
      <div></div>
  )
}
