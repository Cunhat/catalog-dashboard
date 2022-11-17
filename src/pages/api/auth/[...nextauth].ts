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
    jwt: ({ token, user, profile, account }) => {
      console.log('account ---->', account);
      console.log('profile ---->', profile);

      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session: ({ session, token, user }) => {
      // if (token) {
      //   session.id = token.id;
      // }
      // console.log('NextAuth.js session and token', session, token);

      // console.log('session', session);
      // console.log('token', token);
      return session;
    },
    // async signIn(sign) {
    //   console.log('sign', sign);
    //   return true;
    // },
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

  //adapter: PrismaAdapter(prisma), adapter will not work with credentials provider
  // pages: {
  //   signIn: '/login',
  // },
  // jwt: {
  //   secret: process.env.JWT_SECRET,
  // },
};

export default NextAuth(authOptions);
