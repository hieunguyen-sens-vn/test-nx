console.log('Hello World');
import { customAlphabet } from 'nanoid';
import pkg from '@magic-sdk/admin';
const { Magic } = pkg;

const nanoid = customAlphabet(
  '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  12
);

console.log({ nanoid: nanoid(), Magic });
