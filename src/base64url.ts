// Copyright (C) 2023 Haderech Pte. Ltd.
// SPDX-License-Identifier: Apache-2.0

import { base64urlnopad } from '@scure/base';

/**
 * @name u8aToBase64url
 * @summary Creates a base64url string from a Uint8Array object.
 */
export function u8aToBase64url (v: Uint8Array): string {
  return base64urlnopad.encode(v);
}

/**
 * @name base64urlToU8a
 * @summary Creates a Uint8Array object from a base64url string.
 */
export function base64urlToU8a (v: string): Uint8Array {
  return base64urlnopad.decode(v);
}
