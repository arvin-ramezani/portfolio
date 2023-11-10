import NextAuth, { AuthOptions } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

export const CredentialType = {
  signIn: 'SIGNIN',
  signUp: 'SIGNUP',
};

export const options: AuthOptions = {
  pages: {},
  secret: process.env.NEXTAUTH_SECRET,

  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
      profile(profile) {
        // console.log('Profile GitHub: ', profile);

        return {
          ...profile,
          image: profile.avatar_url,
        };
      },
    }),
    GoogleProvider({
      profile(profile) {
        // console.log('Profile Google: ', profile);

        return {
          ...profile,
          id: profile?.sub,
          image: profile?.picture,
        };
      },
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      return session;
    },
  },
};

export default NextAuth(options);
