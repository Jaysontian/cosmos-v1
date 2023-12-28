import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import SpotifyProvider from "next-auth/providers/spotify";
import { GoogleProfile } from "next-auth/providers/google";
import { SpotifyProfile } from "next-auth/providers/spotify";

import { db } from "../../../../firebase/firestore";
import { doc, getDoc } from "firebase/firestore";

export const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      profile(profile: GoogleProfile) {
        // console.log(profile)
        return {
          ...profile,
          id: profile.sub.toString(),
        };
      },
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),

    // ...add more providers here
  ],
  callbacks: {
    // for client components:
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.sub as string;
        const userdoc = await getDoc(doc(db, "authID", session?.user.id));
        session.user.username = userdoc?.data()?.username ?? null;
        session.user.spotify_token = userdoc?.data()?.spotify_token ?? null;

        //console.log(session.user);
      }
      return session;
    },
    jwt: async ({ user, token }) => {
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
  },
  session: {
    strategy: "jwt",
  },
};
