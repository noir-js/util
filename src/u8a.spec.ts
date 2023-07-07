// Copyright (C) 2023 Haderech Pte. Ltd.
// SPDX-License-Identifier: Apache-2.0

import { describe, expect, it } from 'vitest';

import { u8aStartsWith } from './u8a.js';

import { hexToU8a } from '@polkadot/util';

describe('u8a', () => {
  it('checks whether Uint8Array starts with the prefix', () => {
    const a = hexToU8a('0x12345678');

    expect(u8aStartsWith(a, hexToU8a('0x1234'))).toBe(true);
    expect(u8aStartsWith(a, hexToU8a('0x1256'))).toBe(false);
    expect(u8aStartsWith(a, hexToU8a('0x1234567890'))).toBe(false);
  });
});
