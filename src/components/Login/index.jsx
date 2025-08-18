"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Login() {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <>
          <span>Signed in</span>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      ) : (
        <button onClick={() => signIn("github")}>
          Sign in with GitHub
        </button>
      )}
    </>
  );
}