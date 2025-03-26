'use client'

import React, { useState, useEffect } from 'react'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import LoadingAnimation from '../_components/LoadingAnimation';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter()
  const supabase = createClientComponentClient()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {

      async function getUser(){
          const {data: {user}} = await supabase.auth.getUser()
          setUser(user)
          setLoading(false)
      }
      getUser()
  }, [])

      if(loading) return <LoadingAnimation/>

      const handleLogout = async () => {
         try {
          supabase.auth.signOut()
          router.push('/api/auth/sign-in')
         } catch (error) {
          console.log(error);
         }
      }

      console.log(user);

  return user ? (
    <div>
      <h1>Welcome {user?.email}</h1>
      <p>You are signed In</p>
      <button onClick={handleLogout} className="inline-flex text-sm items-center mt-4 justify-center gap-3 px-[16px] py-[8px] font-medium text-white duration-200 bg-blue-600 rounded-md hover:bg-blue-400" >
          Log out
      </button>
    </div>
  ) : router.push('/api/auth/sign-in')
}