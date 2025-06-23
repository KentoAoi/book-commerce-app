import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  adapter: PrismaAdapter(prisma),
  callbacks: {
    session: ({ session, user }) => {
        return {
            ...session,
            user: {
                ...session.user,
                id: user.id,
            }
        }
    }
  }
}
export default NextAuth(authOptions)