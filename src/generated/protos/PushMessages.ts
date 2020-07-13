/* eslint-disable */
import * as Long from 'long';
import { Writer, Reader } from 'protobufjs/minimal';


export interface IncomingPushMessageSignal {
  type: IncomingPushMessageSignal_Type;
  source: string;
  sourceDevice: number;
  relay: string;
  timestamp: number;
  /**
   *  Contains an encrypted PushMessageContent
   */
  message: Uint8Array;
}

export interface PushMessageContent {
  body: string;
  attachments: PushMessageContent_AttachmentPointer[];
  group: PushMessageContent_GroupContext | undefined;
  flags: number;
}

export interface PushMessageContent_AttachmentPointer {
  id: number;
  contentType: string;
  key: Uint8Array;
}

export interface PushMessageContent_GroupContext {
  id: Uint8Array;
  type: PushMessageContent_GroupContext_Type;
  name: string;
  members: string[];
  avatar: PushMessageContent_AttachmentPointer | undefined;
}

const baseIncomingPushMessageSignal: object = {
  type: 0,
  source: "",
  sourceDevice: 0,
  relay: "",
  timestamp: 0,
};

const basePushMessageContent: object = {
  body: "",
  flags: 0,
};

const basePushMessageContent_AttachmentPointer: object = {
  id: 0,
  contentType: "",
};

const basePushMessageContent_GroupContext: object = {
  type: 0,
  name: "",
  members: "",
};

function longToNumber(long: Long) {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

export const IncomingPushMessageSignal_Type = {
  UNKNOWN: 0 as const,
  CIPHERTEXT: 1 as const,
  KEY_EXCHANGE: 2 as const,
  PREKEY_BUNDLE: 3 as const,
  PLAINTEXT: 4 as const,
  RECEIPT: 5 as const,
  PREKEY_BUNDLE_DEVICE_CONTROL: 6 as const,
  DEVICE_CONTROL: 7 as const,
  UNRECOGNIZED: -1 as const,
  fromJSON(object: any): IncomingPushMessageSignal_Type {
    switch (object) {
      case 0:
      case "UNKNOWN":
        return IncomingPushMessageSignal_Type.UNKNOWN;
      case 1:
      case "CIPHERTEXT":
        return IncomingPushMessageSignal_Type.CIPHERTEXT;
      case 2:
      case "KEY_EXCHANGE":
        return IncomingPushMessageSignal_Type.KEY_EXCHANGE;
      case 3:
      case "PREKEY_BUNDLE":
        return IncomingPushMessageSignal_Type.PREKEY_BUNDLE;
      case 4:
      case "PLAINTEXT":
        return IncomingPushMessageSignal_Type.PLAINTEXT;
      case 5:
      case "RECEIPT":
        return IncomingPushMessageSignal_Type.RECEIPT;
      case 6:
      case "PREKEY_BUNDLE_DEVICE_CONTROL":
        return IncomingPushMessageSignal_Type.PREKEY_BUNDLE_DEVICE_CONTROL;
      case 7:
      case "DEVICE_CONTROL":
        return IncomingPushMessageSignal_Type.DEVICE_CONTROL;
      case -1:
      case "UNRECOGNIZED":
      default:
        return IncomingPushMessageSignal_Type.UNRECOGNIZED;
    }
  },
  toJSON(object: IncomingPushMessageSignal_Type): string {
    switch (object) {
      case IncomingPushMessageSignal_Type.UNKNOWN:
        return "UNKNOWN";
      case IncomingPushMessageSignal_Type.CIPHERTEXT:
        return "CIPHERTEXT";
      case IncomingPushMessageSignal_Type.KEY_EXCHANGE:
        return "KEY_EXCHANGE";
      case IncomingPushMessageSignal_Type.PREKEY_BUNDLE:
        return "PREKEY_BUNDLE";
      case IncomingPushMessageSignal_Type.PLAINTEXT:
        return "PLAINTEXT";
      case IncomingPushMessageSignal_Type.RECEIPT:
        return "RECEIPT";
      case IncomingPushMessageSignal_Type.PREKEY_BUNDLE_DEVICE_CONTROL:
        return "PREKEY_BUNDLE_DEVICE_CONTROL";
      case IncomingPushMessageSignal_Type.DEVICE_CONTROL:
        return "DEVICE_CONTROL";
      default:
        return "UNKNOWN";
    }
  },
}

export type IncomingPushMessageSignal_Type = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | -1;

export const PushMessageContent_Flags = {
  END_SESSION: 1 as const,
  UNRECOGNIZED: -1 as const,
  fromJSON(object: any): PushMessageContent_Flags {
    switch (object) {
      case 1:
      case "END_SESSION":
        return PushMessageContent_Flags.END_SESSION;
      case -1:
      case "UNRECOGNIZED":
      default:
        return PushMessageContent_Flags.UNRECOGNIZED;
    }
  },
  toJSON(object: PushMessageContent_Flags): string {
    switch (object) {
      case PushMessageContent_Flags.END_SESSION:
        return "END_SESSION";
      default:
        return "UNKNOWN";
    }
  },
}

export type PushMessageContent_Flags = 1 | -1;

export const PushMessageContent_GroupContext_Type = {
  UNKNOWN: 0 as const,
  UPDATE: 1 as const,
  DELIVER: 2 as const,
  QUIT: 3 as const,
  UNRECOGNIZED: -1 as const,
  fromJSON(object: any): PushMessageContent_GroupContext_Type {
    switch (object) {
      case 0:
      case "UNKNOWN":
        return PushMessageContent_GroupContext_Type.UNKNOWN;
      case 1:
      case "UPDATE":
        return PushMessageContent_GroupContext_Type.UPDATE;
      case 2:
      case "DELIVER":
        return PushMessageContent_GroupContext_Type.DELIVER;
      case 3:
      case "QUIT":
        return PushMessageContent_GroupContext_Type.QUIT;
      case -1:
      case "UNRECOGNIZED":
      default:
        return PushMessageContent_GroupContext_Type.UNRECOGNIZED;
    }
  },
  toJSON(object: PushMessageContent_GroupContext_Type): string {
    switch (object) {
      case PushMessageContent_GroupContext_Type.UNKNOWN:
        return "UNKNOWN";
      case PushMessageContent_GroupContext_Type.UPDATE:
        return "UPDATE";
      case PushMessageContent_GroupContext_Type.DELIVER:
        return "DELIVER";
      case PushMessageContent_GroupContext_Type.QUIT:
        return "QUIT";
      default:
        return "UNKNOWN";
    }
  },
}

export type PushMessageContent_GroupContext_Type = 0 | 1 | 2 | 3 | -1;

export const IncomingPushMessageSignal = {
  encode(message: IncomingPushMessageSignal, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int32(message.type);
    writer.uint32(18).string(message.source);
    writer.uint32(56).uint32(message.sourceDevice);
    writer.uint32(26).string(message.relay);
    writer.uint32(40).uint64(message.timestamp);
    writer.uint32(50).bytes(message.message);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): IncomingPushMessageSignal {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseIncomingPushMessageSignal } as IncomingPushMessageSignal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.source = reader.string();
          break;
        case 7:
          message.sourceDevice = reader.uint32();
          break;
        case 3:
          message.relay = reader.string();
          break;
        case 5:
          message.timestamp = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.message = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): IncomingPushMessageSignal {
    const message = { ...baseIncomingPushMessageSignal } as IncomingPushMessageSignal;
    if (object.type !== undefined && object.type !== null) {
      message.type = IncomingPushMessageSignal_Type.fromJSON(object.type);
    } else {
      message.type = 0;
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = String(object.source);
    } else {
      message.source = "";
    }
    if (object.sourceDevice !== undefined && object.sourceDevice !== null) {
      message.sourceDevice = Number(object.sourceDevice);
    } else {
      message.sourceDevice = 0;
    }
    if (object.relay !== undefined && object.relay !== null) {
      message.relay = String(object.relay);
    } else {
      message.relay = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Number(object.timestamp);
    } else {
      message.timestamp = 0;
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = bytesFromBase64(object.message);
    }
    return message;
  },
  fromPartial(object: DeepPartial<IncomingPushMessageSignal>): IncomingPushMessageSignal {
    const message = { ...baseIncomingPushMessageSignal } as IncomingPushMessageSignal;
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = object.source;
    } else {
      message.source = "";
    }
    if (object.sourceDevice !== undefined && object.sourceDevice !== null) {
      message.sourceDevice = object.sourceDevice;
    } else {
      message.sourceDevice = 0;
    }
    if (object.relay !== undefined && object.relay !== null) {
      message.relay = object.relay;
    } else {
      message.relay = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    } else {
      message.timestamp = 0;
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    }
    return message;
  },
  toJSON(message: IncomingPushMessageSignal): unknown {
    const obj: any = {};
    obj.type = IncomingPushMessageSignal_Type.toJSON(message.type);
    obj.source = message.source || "";
    obj.sourceDevice = message.sourceDevice || 0;
    obj.relay = message.relay || "";
    obj.timestamp = message.timestamp || 0;
    obj.message = message.message !== undefined ? base64FromBytes(message.message) : undefined;
    return obj;
  },
};

export const PushMessageContent = {
  encode(message: PushMessageContent, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.body);
    for (const v of message.attachments) {
      PushMessageContent_AttachmentPointer.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.group !== undefined && message.group !== undefined) {
      PushMessageContent_GroupContext.encode(message.group, writer.uint32(26).fork()).ldelim();
    }
    writer.uint32(32).uint32(message.flags);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): PushMessageContent {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePushMessageContent } as PushMessageContent;
    message.attachments = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.body = reader.string();
          break;
        case 2:
          message.attachments.push(PushMessageContent_AttachmentPointer.decode(reader, reader.uint32()));
          break;
        case 3:
          message.group = PushMessageContent_GroupContext.decode(reader, reader.uint32());
          break;
        case 4:
          message.flags = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PushMessageContent {
    const message = { ...basePushMessageContent } as PushMessageContent;
    message.attachments = [];
    if (object.body !== undefined && object.body !== null) {
      message.body = String(object.body);
    } else {
      message.body = "";
    }
    if (object.attachments !== undefined && object.attachments !== null) {
      for (const e of object.attachments) {
        message.attachments.push(PushMessageContent_AttachmentPointer.fromJSON(e));
      }
    }
    if (object.group !== undefined && object.group !== null) {
      message.group = PushMessageContent_GroupContext.fromJSON(object.group);
    } else {
      message.group = undefined;
    }
    if (object.flags !== undefined && object.flags !== null) {
      message.flags = Number(object.flags);
    } else {
      message.flags = 0;
    }
    return message;
  },
  fromPartial(object: DeepPartial<PushMessageContent>): PushMessageContent {
    const message = { ...basePushMessageContent } as PushMessageContent;
    message.attachments = [];
    if (object.body !== undefined && object.body !== null) {
      message.body = object.body;
    } else {
      message.body = "";
    }
    if (object.attachments !== undefined && object.attachments !== null) {
      for (const e of object.attachments) {
        message.attachments.push(PushMessageContent_AttachmentPointer.fromPartial(e));
      }
    }
    if (object.group !== undefined && object.group !== null) {
      message.group = PushMessageContent_GroupContext.fromPartial(object.group);
    } else {
      message.group = undefined;
    }
    if (object.flags !== undefined && object.flags !== null) {
      message.flags = object.flags;
    } else {
      message.flags = 0;
    }
    return message;
  },
  toJSON(message: PushMessageContent): unknown {
    const obj: any = {};
    obj.body = message.body || "";
    if (message.attachments) {
      obj.attachments = message.attachments.map(e => e ? PushMessageContent_AttachmentPointer.toJSON(e) : undefined);
    } else {
      obj.attachments = [];
    }
    obj.group = message.group ? PushMessageContent_GroupContext.toJSON(message.group) : undefined;
    obj.flags = message.flags || 0;
    return obj;
  },
};

export const PushMessageContent_AttachmentPointer = {
  encode(message: PushMessageContent_AttachmentPointer, writer: Writer = Writer.create()): Writer {
    writer.uint32(9).fixed64(message.id);
    writer.uint32(18).string(message.contentType);
    writer.uint32(26).bytes(message.key);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): PushMessageContent_AttachmentPointer {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePushMessageContent_AttachmentPointer } as PushMessageContent_AttachmentPointer;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.contentType = reader.string();
          break;
        case 3:
          message.key = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PushMessageContent_AttachmentPointer {
    const message = { ...basePushMessageContent_AttachmentPointer } as PushMessageContent_AttachmentPointer;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.contentType !== undefined && object.contentType !== null) {
      message.contentType = String(object.contentType);
    } else {
      message.contentType = "";
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }
    return message;
  },
  fromPartial(object: DeepPartial<PushMessageContent_AttachmentPointer>): PushMessageContent_AttachmentPointer {
    const message = { ...basePushMessageContent_AttachmentPointer } as PushMessageContent_AttachmentPointer;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.contentType !== undefined && object.contentType !== null) {
      message.contentType = object.contentType;
    } else {
      message.contentType = "";
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    return message;
  },
  toJSON(message: PushMessageContent_AttachmentPointer): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.contentType = message.contentType || "";
    obj.key = message.key !== undefined ? base64FromBytes(message.key) : undefined;
    return obj;
  },
};

export const PushMessageContent_GroupContext = {
  encode(message: PushMessageContent_GroupContext, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).bytes(message.id);
    writer.uint32(16).int32(message.type);
    writer.uint32(26).string(message.name);
    for (const v of message.members) {
      writer.uint32(34).string(v!);
    }
    if (message.avatar !== undefined && message.avatar !== undefined) {
      PushMessageContent_AttachmentPointer.encode(message.avatar, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): PushMessageContent_GroupContext {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePushMessageContent_GroupContext } as PushMessageContent_GroupContext;
    message.members = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.bytes();
          break;
        case 2:
          message.type = reader.int32() as any;
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.members.push(reader.string());
          break;
        case 5:
          message.avatar = PushMessageContent_AttachmentPointer.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PushMessageContent_GroupContext {
    const message = { ...basePushMessageContent_GroupContext } as PushMessageContent_GroupContext;
    message.members = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = bytesFromBase64(object.id);
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = PushMessageContent_GroupContext_Type.fromJSON(object.type);
    } else {
      message.type = 0;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.members !== undefined && object.members !== null) {
      for (const e of object.members) {
        message.members.push(String(e));
      }
    }
    if (object.avatar !== undefined && object.avatar !== null) {
      message.avatar = PushMessageContent_AttachmentPointer.fromJSON(object.avatar);
    } else {
      message.avatar = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<PushMessageContent_GroupContext>): PushMessageContent_GroupContext {
    const message = { ...basePushMessageContent_GroupContext } as PushMessageContent_GroupContext;
    message.members = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.members !== undefined && object.members !== null) {
      for (const e of object.members) {
        message.members.push(e);
      }
    }
    if (object.avatar !== undefined && object.avatar !== null) {
      message.avatar = PushMessageContent_AttachmentPointer.fromPartial(object.avatar);
    } else {
      message.avatar = undefined;
    }
    return message;
  },
  toJSON(message: PushMessageContent_GroupContext): unknown {
    const obj: any = {};
    obj.id = message.id !== undefined ? base64FromBytes(message.id) : undefined;
    obj.type = PushMessageContent_GroupContext_Type.toJSON(message.type);
    obj.name = message.name || "";
    if (message.members) {
      obj.members = message.members.map(e => e || "");
    } else {
      obj.members = [];
    }
    obj.avatar = message.avatar ? PushMessageContent_AttachmentPointer.toJSON(message.avatar) : undefined;
    return obj;
  },
};

interface WindowBase64 {
  atob(b64: string): string;
  btoa(bin: string): string;
}

const windowBase64 = (globalThis as unknown as WindowBase64);
const atob = windowBase64.atob || ((b64: string) => Buffer.from(b64, 'base64').toString('binary'));
const btoa = windowBase64.btoa || ((bin: string) => Buffer.from(bin, 'binary').toString('base64'));

function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (let i = 0; i < arr.byteLength; ++i) {
    bin.push(String.fromCharCode(arr[i]));
  }
  return btoa(bin.join(''));
}
type Builtin = Date | Function | Uint8Array | string | number | undefined;
type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;