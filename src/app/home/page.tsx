'use client'

import {useEffect, useState} from "react";
import {redirect} from "next/navigation";

import {useLichessContext, useOauthContext} from "@/app/context";
import {accountSchema, AccountSchema} from "@/services";

export default function Home() {
  const {lichessService} = useLichessContext()
  const {oauthService} = useOauthContext()
  const [lichessAccount, setLichessAccount] = useState<AccountSchema>()
  useEffect(() => {
    if(oauthService.isAuthorized()) {
      lichessService.setAccessToken(oauthService.token!.value)
      lichessService.getAccountData().then(setLichessAccount)
    } else {
      redirect('./login')
    }
  }, [lichessAccount?.id])
  return (lichessAccount ? <div>Welcome: {lichessAccount.username}</div> : <div>Loading</div>)
}
