// Copyright (C) 2023 Haderech Pte. Ltd.
// SPDX-License-Identifier: Apache-2.0

import { describe, expect, it } from 'vitest';

import { decodeAddress, encodeAddress } from './address.js';

import { hexToU8a, u8aToHex } from '@polkadot/util';

describe('address', () => {
  describe('decodeAddress', () => {
    it('decodes a UniversalAddress to a Uint8Array', () => {
      const base64url = 'u7wHUNZPHFf3THGEUGr0EqZ_WgiyFWIVMzeOaVoTnpW2ifQ';
      const hex = '0xef01d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d';

      expect(u8aToHex(decodeAddress(base64url))).toEqual(hex);
    });
  });

  describe('encodeAddress', () => {
    it('encodes a Uint8Array to a UniversalAddress', () => {
      const base64url = 'u7wHUNZPHFf3THGEUGr0EqZ_WgiyFWIVMzeOaVoTnpW2ifQ';
      const hex = '0xef01d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d';

      expect(encodeAddress(hexToU8a(hex))).toEqual(base64url);
    });
  });
});
