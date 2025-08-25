import NextAuth from "next-auth"
import Osu from "next-auth/providers/osu"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [Osu],
})
