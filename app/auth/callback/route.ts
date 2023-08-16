import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");

  if (code) {
    const supabase = createRouteHandlerClient({ cookies });
    //usando el codigo que le hemos pasdo por url nos devuelve la sessión del usuario.
    await supabase.auth.exchangeCodeForSession(code);

  }
  return NextResponse.redirect("http://localhost:3000/dashboard");
}
