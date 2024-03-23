/* eslint-disable security/detect-object-injection */
import { Env } from 'enums';

export const getEnv = (env: Env) => process.env[env];
