// Copyright (C) 2023 Haderech Pte. Ltd.
// SPDX-License-Identifier: Apache-2.0

import { describe, expect, it } from 'vitest';

import { base64urlToU8a, u8aToBase64url } from './base64url.js';

import { hexToU8a, u8aToHex } from '@polkadot/util';

describe('base64url', () => {
  describe('base64urlToU8a', () => {
    it('decodes a base64url to a Uint8Array', () => {
      const base64url = '7wHUNZPHFf3THGEUGr0EqZ_WgiyFWIVMzeOaVoTnpW2ifQ';
      const hex = '0xef01d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d';

      expect(u8aToHex(base64urlToU8a(base64url))).toEqual(hex);
    });
  });

  describe('u8aToBase64url', () => {
    it('encodes a Uint8Array to a base64url', () => {
      const base64url = '7wHUNZPHFf3THGEUGr0EqZ_WgiyFWIVMzeOaVoTnpW2ifQ';
      const hex = '0xef01d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d';

      expect(u8aToBase64url(hexToU8a(hex))).toEqual(base64url);
    });
  });
});
