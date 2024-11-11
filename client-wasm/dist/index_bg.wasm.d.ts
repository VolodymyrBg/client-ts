/* tslint:disable */
/* eslint-disable */
export const memory: WebAssembly.Memory;
export function __wbg_nadavalue_free(a: number): void;
export function nadavalue_new_secret_integer(
  a: number,
  b: number,
  c: number,
): void;
export function nadavalue_new_secret_unsigned_integer(
  a: number,
  b: number,
  c: number,
): void;
export function nadavalue_new_secret_blob(a: number, b: number): number;
export function nadavalue_new_public_integer(
  a: number,
  b: number,
  c: number,
): void;
export function nadavalue_new_public_unsigned_integer(
  a: number,
  b: number,
  c: number,
): void;
export function nadavalue_to_byte_array(a: number, b: number): void;
export function nadavalue_to_integer(a: number, b: number): void;
export function nadavalue_type_name(a: number, b: number): void;
export function __wbg_nadavalues_free(a: number): void;
export function nadavalues_new(a: number): void;
export function nadavalues_insert(
  a: number,
  b: number,
  c: number,
  d: number,
): void;
export function nadavalues_length(a: number): number;
export function nadavalues_to_record(a: number, b: number): void;
export function __wbg_partyid_free(a: number): void;
export function partyid_new(a: number, b: number): number;
export function partyid_to_byte_array(a: number): number;
export function __wbg_secretmasker_free(a: number): void;
export function secretmasker_new_64_bit_safe_prime(
  a: number,
  b: number,
  c: number,
  d: number,
): void;
export function secretmasker_new_128_bit_safe_prime(
  a: number,
  b: number,
  c: number,
  d: number,
): void;
export function secretmasker_new_256_bit_safe_prime(
  a: number,
  b: number,
  c: number,
  d: number,
): void;
export function secretmasker_mask(a: number, b: number, c: number): void;
export function secretmasker_unmask(
  a: number,
  b: number,
  c: number,
  d: number,
): void;
export function secretmasker_classify_values(a: number, b: number): number;
export function __wbg_nadavaluesclassification_free(a: number): void;
export function __wbg_get_nadavaluesclassification_particles(a: number): number;
export function __wbg_set_nadavaluesclassification_particles(
  a: number,
  b: number,
): void;
export function __wbg_get_nadavaluesclassification_shares(a: number): number;
export function __wbg_set_nadavaluesclassification_shares(
  a: number,
  b: number,
): void;
export function __wbg_get_nadavaluesclassification_public(a: number): number;
export function __wbg_set_nadavaluesclassification_public(
  a: number,
  b: number,
): void;
export function __wbg_get_nadavaluesclassification_ecdsa_private_key_shares(
  a: number,
): number;
export function __wbg_set_nadavaluesclassification_ecdsa_private_key_shares(
  a: number,
  b: number,
): void;
export function __wbg_get_nadavaluesclassification_ecdsa_signature_shares(
  a: number,
): number;
export function __wbg_set_nadavaluesclassification_ecdsa_signature_shares(
  a: number,
  b: number,
): void;
export function __wbg_partyshares_free(a: number): void;
export function partyshares_new(a: number, b: number, c: number): void;
export function partyshares_party(a: number): number;
export function partyshares_shares(a: number): number;
export function encode_values(a: number, b: number): void;
export function decode_values(a: number, b: number, c: number): void;
export function compute_values_size(a: number, b: number): void;
export function __wbg_encryptednadavalues_free(a: number): void;
export function __wbg_programmetadata_free(a: number): void;
export function programmetadata_new(a: number, b: number, c: number): void;
export function programmetadata_memory_size(a: number): number;
export function programmetadata_total_instructions(a: number): number;
export function programmetadata_instructions(a: number, b: number): void;
export function programmetadata_preprocessing_requirements(
  a: number,
  b: number,
): void;
export function __wbindgen_malloc(a: number, b: number): number;
export function __wbindgen_realloc(
  a: number,
  b: number,
  c: number,
  d: number,
): number;
export function __wbindgen_add_to_stack_pointer(a: number): number;
export function __wbindgen_free(a: number, b: number, c: number): void;
export function __wbindgen_exn_store(a: number): void;
