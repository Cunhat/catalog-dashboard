import NextAuth, { type NextAuthOptions } from 'next-auth';
//import DiscordProvider from "next-auth/providers/discord";
import CredentialsProvider from 'next-auth/providers/credentials';
//import KeycloakProvider from 'next-auth/providers/keycloak';
import Auth0Provider from 'next-auth/providers/auth0';

// Prisma adapter for NextAuth, optional and can be removed

//import { env } from '../../../env/server.mjs';

export const authOptions: NextAuthOptions = {
  // Include user.id on session
  callbacks: {
    jwt: async ({ token, user, profile, account }) => {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    session: async ({ session, token, user }) => {
      return session;
    },
  },

  secret: process.env.AUTH_SECRET,
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID!,
      clientSecret: process.env.AUTH0_CLIENT_SECRET!,
      issuer: process.env.AUTH0_ISSUER,
      idToken: true,

      token: {
        params: {
          audience: process.env.AUTH0_AUDIENCE,
        },
      },
      authorization: {
        params: {
          audience: process.env.AUTH0_AUDIENCE,
        },
      },
    }),
    // ...add more providers here
  ],
  pages: {
    signIn: '/login',
  },
};

export default NextAuth(authOptions);
