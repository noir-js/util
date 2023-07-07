// Copyright (C) 2023 Haderech Pte. Ltd.
// SPDX-License-Identifier: Apache-2.0

/**
 * @name u8aStartsWith
 * @summary Checks whether Uint8Array starts with the prefix.
 */
export function u8aStartsWith (v: Uint8Array, w: Uint8Array): boolean {
  if (v.length < w.length) {
    return false;
  }
  for (let i = 0; i < w.length; ++i) {
    if (v[i] !== w[i]) {
      return false;
    }
  }
  return true;
}
