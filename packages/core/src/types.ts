import { z } from "zod";
import * as Wasm from "@nillion/client-wasm";

//
// Common types
//

export const Url = z.string().url().brand<"Url">();
export type Url = z.infer<typeof Url>;

export const Days = z.number().int().min(1).brand<"Days">();
export type Days = z.infer<typeof Days>;

//
// Network related types
//

export const NetworkName = z.enum(["Gluon", "Devnet", "TestFixture"]);
export type NetworkName = z.infer<typeof NetworkName>;

export const PartyId = z.string().length(52).brand<"PartyId">();
export type PartyId = z.infer<typeof PartyId>;

export const UserId = z.string().length(88).brand<"UserId">();
export type UserId = z.infer<typeof UserId>;

export const PartyName = z.string().min(1).brand<"PartyName">();
export type PartyName = z.infer<typeof PartyName>;

export const ProgramName = z.string().min(1).brand<"ProgramName">();
export type ProgramName = z.infer<typeof ProgramName>;

export const ClusterId = z.string().uuid().brand<"ClusterId">();
export type ClusterId = z.infer<typeof ClusterId>;

export const ClusterDescriptor = z
  .object({
    id: ClusterId,
    kappa: z.number(),
    parties: z.array(z.unknown()),
    prime: z.string(),
  })
  .brand<"ClusterDescriptor">();
export type ClusterDescriptor = z.infer<typeof ClusterDescriptor>;

// source: libp2p-wasm-ext websocket.js
const multiaddrRegex =
  /^\/(ip4|ip6|dns4|dns6|dns)\/(.*?)\/tcp\/(.*?)\/(ws|wss|x-parity-ws\/(.*)|x-parity-wss\/(.*))(|\/p2p\/[a-zA-Z0-9]+)$/;
export const Multiaddr = z.string().regex(multiaddrRegex).brand<"Multiaddr">();
export type Multiaddr = z.infer<typeof Multiaddr>;

//
// NilVm related types
//

export const ActionId = z.string().uuid().brand<"ActionId">();
export type ActionId = z.infer<typeof ActionId>;

export const StoreId = z.string().uuid().brand<"StoreId">();
export type StoreId = z.infer<typeof StoreId>;

export const ValueName = z.string().min(1).brand<"ValueName">();
export type ValueName = z.infer<typeof ValueName>;

// "namespace/friendly-name"
export const ProgramId = z
  .string()
  .min(1)
  // .refine((v) => v.length > 88 && v.indexOf("/") === 88)
  .brand<"ProgramId">();
export type ProgramId = z.infer<typeof ProgramId>;

export const ComputeResultId = z.string().uuid().brand<"ComputeResultId">();
export type ComputeResultId = z.infer<typeof ComputeResultId>;

//
// Payment related types
//
export const Token = {
  Unil: "unil",
  asUnil: (amount: number | string) => `${amount}${Token.Unil}`,
};

export const NilChainProtobufTypeUrl = "/nillion.meta.v1.MsgPayFor";

export const ChainId = z.string().min(1).brand<"ChainId">();
export type ChainId = z.infer<typeof ChainId>;

export const NilChainAddressPrefix = "nillion";
export const NilChainAddress = z
  .string()
  .length(46)
  .startsWith(NilChainAddressPrefix)
  .brand<"Address">();
export type NilChainAddress = z.infer<typeof NilChainAddress>;

export const PrivateKeyBase16 = z
  .string()
  .length(64)
  .brand<"PrivateKeyBase16">();
export type PrivateKeyBase16 = z.infer<typeof PrivateKeyBase16>;

export const TxHash = z.string().length(64).base64().brand<"TxHash">();
export type TxHash = z.infer<typeof TxHash>;

export const OperationCost = z
  .object({
    base: z.number(),
    compute: z.number(),
    congestion: z.number(),
    preprocessing: z.number(),
    storage: z.number(),
    total: z.number(),
  })
  .brand<"OperationCost">();

export type OperationCost = z.infer<typeof OperationCost>;

export const PriceQuote = z
  .object({
    expires: z.date(),
    nonce: z.instanceof(Uint8Array),
    cost: OperationCost,
    inner: z.custom<Wasm.PriceQuote>(),
  })
  .brand<"PriceQuote">();
export type PriceQuote = z.infer<typeof PriceQuote>;

export const PaymentReceipt = z
  .object({
    quote: PriceQuote,
    hash: TxHash,
  })
  .brand<"PaymentReceipt">();
export type PaymentReceipt = z.infer<typeof PaymentReceipt>;