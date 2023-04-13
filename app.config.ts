/* eslint-disable complexity */
import { ExpoConfig } from '@expo/config';
import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

module.exports = ({ config }: { config: ExpoConfig }) => ({
  ...config,
  extra: {
    API_URL: process.env.FIREBASE_API_URL,
  },
});
