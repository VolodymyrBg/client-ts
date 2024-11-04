// @generated by protoc-gen-es v2.2.2 with parameter "target=ts"
// @generated from file nillion/preprocessing/v1/element.proto (package nillion.preprocessing.v1.element, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc } from "@bufbuild/protobuf/codegenv1";

/**
 * Describes the file nillion/preprocessing/v1/element.proto.
 */
export const file_nillion_preprocessing_v1_element: GenFile = /*@__PURE__*/
  fileDesc("CiZuaWxsaW9uL3ByZXByb2Nlc3NpbmcvdjEvZWxlbWVudC5wcm90bxIgbmlsbGlvbi5wcmVwcm9jZXNzaW5nLnYxLmVsZW1lbnQqywEKFFByZXByb2Nlc3NpbmdFbGVtZW50EgkKBUFMUEhBEAASCgoGTEFNQkRBEAESCwoHQ09NUEFSRRACEhsKF0RJVklTSU9OX1NFQ1JFVF9ESVZJU09SEAMSGgoWRVFVQUxJVFlfU0VDUkVUX09VVFBVVBAEEhoKFkVRVUFMSVRZX1BVQkxJQ19PVVRQVVQQBRIVChFTSEFSRV9UT19QQVJUSUNMRRAGEgoKBk1PRFVMTxAHEgkKBVRSVU5DEAgSDAoIVFJVTkNfUFIQCULYAQokY29tLm5pbGxpb24ucHJlcHJvY2Vzc2luZy52MS5lbGVtZW50QgxFbGVtZW50UHJvdG9QAaICBE5QVkWqAiBOaWxsaW9uLlByZXByb2Nlc3NpbmcuVjEuRWxlbWVudMoCIE5pbGxpb25cUHJlcHJvY2Vzc2luZ1xWMVxFbGVtZW504gIsTmlsbGlvblxQcmVwcm9jZXNzaW5nXFYxXEVsZW1lbnRcR1BCTWV0YWRhdGHqAiNOaWxsaW9uOjpQcmVwcm9jZXNzaW5nOjpWMTo6RWxlbWVudGIGcHJvdG8z");

/**
 * A preprocessing element.
 *
 * @generated from enum nillion.preprocessing.v1.element.PreprocessingElement
 */
export enum PreprocessingElement {
  /**
   * @generated from enum value: ALPHA = 0;
   */
  ALPHA = 0,

  /**
   * @generated from enum value: LAMBDA = 1;
   */
  LAMBDA = 1,

  /**
   * @generated from enum value: COMPARE = 2;
   */
  COMPARE = 2,

  /**
   * @generated from enum value: DIVISION_SECRET_DIVISOR = 3;
   */
  DIVISION_SECRET_DIVISOR = 3,

  /**
   * @generated from enum value: EQUALITY_SECRET_OUTPUT = 4;
   */
  EQUALITY_SECRET_OUTPUT = 4,

  /**
   * @generated from enum value: EQUALITY_PUBLIC_OUTPUT = 5;
   */
  EQUALITY_PUBLIC_OUTPUT = 5,

  /**
   * @generated from enum value: SHARE_TO_PARTICLE = 6;
   */
  SHARE_TO_PARTICLE = 6,

  /**
   * @generated from enum value: MODULO = 7;
   */
  MODULO = 7,

  /**
   * @generated from enum value: TRUNC = 8;
   */
  TRUNC = 8,

  /**
   * @generated from enum value: TRUNC_PR = 9;
   */
  TRUNC_PR = 9,
}

/**
 * Describes the enum nillion.preprocessing.v1.element.PreprocessingElement.
 */
export const PreprocessingElementSchema: GenEnum<PreprocessingElement> = /*@__PURE__*/
  enumDesc(file_nillion_preprocessing_v1_element, 0);

