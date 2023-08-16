"use client";
import { DoorOpen } from "lucide-react";
import {
  Session,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { Database } from "@/types/supabase";
import { GoogleIcon } from "../GoogleIcon/GoogleIcon";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const LoginComponent = () => {
  const [session, setSession] = useState<Session | null>(null);
  const supabase = createClientComponentClient<Database>();
  const router = useRouter();

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:3000/auth/callback",
      },
    });
  };

  const handleSingOut = async () => {
    await supabase.auth.signOut();
    router.push('auth/register')
  };

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
    };
    getSession();
  }, []);

  return (
    <div>
      {session !== null ? (
        <button
          onClick={handleSingOut}
          type="button"
          className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
        >
          <DoorOpen /> <span className="ml-3 text-lg">Salir</span>
        </button>
      ) : (
        <button
          onClick={handleSignIn}
          type="button"
          className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
        >
          <GoogleIcon />
          Inicia sesión con Google
        </button>
      )}
    </div>
  );
};
