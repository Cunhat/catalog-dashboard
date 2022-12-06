// @ts-check
import { env } from './src/env/server.mjs';
import path from 'path';

/**
 * Don't be scared of the generics here.
 * All they do is to give us autocompletion when using this.
 *
 * @template {import('next').NextConfig} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('next').NextConfig}}
 */
function defineNextConfig(config) {
  return config;
}

//const path = require('path');

export default defineNextConfig({
  reactStrictMode: true,
  swcMinify: true,
  // Next.js i18n docs: https://nextjs.org/docs/advanced-features/i18n-routing
  i18n: {
    locales: ['en', 'fr', 'pt'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  ...(typeof window === undefined ? { localePath: path.resolve('./public/locales') } : {}),
  env: {
    LOGOUT_URL: process.env.LOGOUT_URL ?? '/',
    API_URL: process.env.API_URL ?? 'http://localhost:3000',
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET ?? 'secret',
  },
});
