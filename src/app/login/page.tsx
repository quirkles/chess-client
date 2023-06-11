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
      <div className='h-full grid grid-cols-1 place-content-center'>
          <div>
                <LoginButton/>
          </div>
      </div>
  )
}
