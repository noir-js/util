// Copyright (C) 2023 Haderech Pte. Ltd.
// SPDX-License-Identifier: Apache-2.0

import { base64urlnopad } from './scure-base.js';

export function u8aToBase64url (v: Uint8Array): string {
  return base64urlnopad.encode(v);
}

export function base64urlToU8a (v: string): Uint8Array {
  return base64urlnopad.decode(v);
}
