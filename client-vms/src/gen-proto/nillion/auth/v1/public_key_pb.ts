// @generated by protoc-gen-es v2.2.2 with parameter "target=ts"
// @generated from file nillion/auth/v1/public_key.proto (package nillion.auth.v1.public_key, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file nillion/auth/v1/public_key.proto.
 */
export const file_nillion_auth_v1_public_key: GenFile = /*@__PURE__*/
  fileDesc("CiBuaWxsaW9uL2F1dGgvdjEvcHVibGljX2tleS5wcm90bxIabmlsbGlvbi5hdXRoLnYxLnB1YmxpY19rZXkiWgoJUHVibGljS2V5EjsKCGtleV90eXBlGAEgASgOMikubmlsbGlvbi5hdXRoLnYxLnB1YmxpY19rZXkuUHVibGljS2V5VHlwZRIQCghjb250ZW50cxgCIAEoDCorCg1QdWJsaWNLZXlUeXBlEgsKB0VEMjU1MTkQABINCglTRUNQMjU2SzEQAUK4AQoeY29tLm5pbGxpb24uYXV0aC52MS5wdWJsaWNfa2V5Qg5QdWJsaWNLZXlQcm90b1ABogIETkFWUKoCGU5pbGxpb24uQXV0aC5WMS5QdWJsaWNLZXnKAhlOaWxsaW9uXEF1dGhcVjFcUHVibGljS2V54gIlTmlsbGlvblxBdXRoXFYxXFB1YmxpY0tleVxHUEJNZXRhZGF0YeoCHE5pbGxpb246OkF1dGg6OlYxOjpQdWJsaWNLZXliBnByb3RvMw");

/**
 * A public key.
 *
 * Signatures associated to this public key must be a 64 bytes long sequence which is the result of the
 * concatenation of the `r` and `s` scalars in the signature, each encoded in big endian.
 *
 * @generated from message nillion.auth.v1.public_key.PublicKey
 */
export type PublicKey = Message<"nillion.auth.v1.public_key.PublicKey"> & {
  /**
   * The type of this public key.
   *
   * @generated from field: nillion.auth.v1.public_key.PublicKeyType key_type = 1;
   */
  keyType: PublicKeyType;

  /**
   * The contents of this key.
   *
   * This is dependent on the `key_type` in this key:
   *
   * * For ED25519 it should be the curve point in its 32 byte compressed form.
   * * For SECP256K1 it should be the curve point in its 33 byte compressed form.
   *
   * @generated from field: bytes contents = 2;
   */
  contents: Uint8Array;
};

/**
 * Describes the message nillion.auth.v1.public_key.PublicKey.
 * Use `create(PublicKeySchema)` to create a new message.
 */
export const PublicKeySchema: GenMessage<PublicKey> = /*@__PURE__*/
  messageDesc(file_nillion_auth_v1_public_key, 0);

/**
 * A public key type.
 *
 * @generated from enum nillion.auth.v1.public_key.PublicKeyType
 */
export enum PublicKeyType {
  /**
   * An ED25519 public key.
   *
   * @generated from enum value: ED25519 = 0;
   */
  ED25519 = 0,

  /**
   * A SECP256K1 public key.
   *
   * @generated from enum value: SECP256K1 = 1;
   */
  SECP256K1 = 1,
}

/**
 * Describes the enum nillion.auth.v1.public_key.PublicKeyType.
 */
export const PublicKeyTypeSchema: GenEnum<PublicKeyType> = /*@__PURE__*/
  enumDesc(file_nillion_auth_v1_public_key, 0);

