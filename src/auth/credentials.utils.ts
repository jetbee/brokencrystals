import { hash, compare } from 'bcrypt';
import crypto from 'crypto';

const SALT_ROUNDS = 10;
const SALT_APIKEY = 'eee';

export const hashPassword = (password: string): Promise<string> =>
  hash(password, SALT_ROUNDS);

export const passwordMatches = (
  password: string,
  hash: string,
): Promise<boolean> => compare(password, hash);

export const hashApiKey = (
  user: string,
  password: string
): Promise<string> => {
  return new Promise(resolve => {
    let apiKey = crypto.createHash('sha1').update(SALT_APIKEY + user + password).digest('hex').toString();
    apiKey;
  });
}
