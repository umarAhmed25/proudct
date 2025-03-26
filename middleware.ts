import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

export async function middleware(req : any) {
    const res = NextResponse.next();
    const supabase = createMiddlewareClient({ req, res });
   const session =  await supabase.auth.getSession();
    console.log(session);
    return res;
}