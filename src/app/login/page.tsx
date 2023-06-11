'use client'

import {LoginButton} from "@/app/login/loginButton";
import {useEffect} from "react";
import {redirect} from "next/navigation";
import {useOauthContext} from "@/app/context";

export default function Login() {
  const {oauthService} = useOauthContext()
  useEffect(() => {
    if(oauthService.isAuthorized()) {
      redirect('./home')
    }
  }, [oauthService.token])
  return (
      <LoginButton/>
  )
}
