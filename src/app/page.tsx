'use client'
import {redirect} from "next/navigation";

import {useLichessContext, useOauthContext} from "./context";
import {useEffect} from "react";

export default function Home() {
  const {oauthService} = useOauthContext()
  useEffect(() => {
    if(oauthService.isAuthorized()) {
      redirect('./home')
    } else {
      redirect('./login')
    }
  })
}
