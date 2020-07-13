/* eslint-disable */
import { Writer, Reader } from 'protobufjs/minimal';


export interface WhisperMessage {
  ephemeralKey: Uint8Array;
  counter: number;
  previousCounter: number;
  /**
   *  PushMessageContent
   */
  ciphertext: Uint8Array;
}

export interface PreKeyWhisperMessage {
  registrationId: number;
  preKeyId: number;
  signedPreKeyId: number;
  baseKey: Uint8Array;
  identityKey: Uint8Array;
  /**
   *  WhisperMessage
   */
  message: Uint8Array;
}

export interface KeyExchangeMessage {
  id: number;
  baseKey: Uint8Array;
  ephemeralKey: Uint8Array;
  identityKey: Uint8Array;
  baseKeySignature: Uint8Array;
}

const baseWhisperMessage: object = {
  counter: 0,
  previousCounter: 0,
};

const basePreKeyWhisperMessage: object = {
  registrationId: 0,
  preKeyId: 0,
  signedPreKeyId: 0,
};

const baseKeyExchangeMessage: object = {
  id: 0,
};

export const WhisperMessage = {
  encode(message: WhisperMessage, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).bytes(message.ephemeralKey);
    writer.uint32(16).uint32(message.counter);
    writer.uint32(24).uint32(message.previousCounter);
    writer.uint32(34).bytes(message.ciphertext);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): WhisperMessage {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWhisperMessage } as WhisperMessage;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ephemeralKey = reader.bytes();
          break;
        case 2:
          message.counter = reader.uint32();
          break;
        case 3:
          message.previousCounter = reader.uint32();
          break;
        case 4:
          message.ciphertext = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): WhisperMessage {
    const message = { ...baseWhisperMessage } as WhisperMessage;
    if (object.ephemeralKey !== undefined && object.ephemeralKey !== null) {
      message.ephemeralKey = bytesFromBase64(object.ephemeralKey);
    }
    if (object.counter !== undefined && object.counter !== null) {
      message.counter = Number(object.counter);
    } else {
      message.counter = 0;
    }
    if (object.previousCounter !== undefined && object.previousCounter !== null) {
      message.previousCounter = Number(object.previousCounter);
    } else {
      message.previousCounter = 0;
    }
    if (object.ciphertext !== undefined && object.ciphertext !== null) {
      message.ciphertext = bytesFromBase64(object.ciphertext);
    }
    return message;
  },
  fromPartial(object: DeepPartial<WhisperMessage>): WhisperMessage {
    const message = { ...baseWhisperMessage } as WhisperMessage;
    if (object.ephemeralKey !== undefined && object.ephemeralKey !== null) {
      message.ephemeralKey = object.ephemeralKey;
    }
    if (object.counter !== undefined && object.counter !== null) {
      message.counter = object.counter;
    } else {
      message.counter = 0;
    }
    if (object.previousCounter !== undefined && object.previousCounter !== null) {
      message.previousCounter = object.previousCounter;
    } else {
      message.previousCounter = 0;
    }
    if (object.ciphertext !== undefined && object.ciphertext !== null) {
      message.ciphertext = object.ciphertext;
    }
    return message;
  },
  toJSON(message: WhisperMessage): unknown {
    const obj: any = {};
    obj.ephemeralKey = message.ephemeralKey !== undefined ? base64FromBytes(message.ephemeralKey) : undefined;
    obj.counter = message.counter || 0;
    obj.previousCounter = message.previousCounter || 0;
    obj.ciphertext = message.ciphertext !== undefined ? base64FromBytes(message.ciphertext) : undefined;
    return obj;
  },
};

export const PreKeyWhisperMessage = {
  encode(message: PreKeyWhisperMessage, writer: Writer = Writer.create()): Writer {
    writer.uint32(40).uint32(message.registrationId);
    writer.uint32(8).uint32(message.preKeyId);
    writer.uint32(48).uint32(message.signedPreKeyId);
    writer.uint32(18).bytes(message.baseKey);
    writer.uint32(26).bytes(message.identityKey);
    writer.uint32(34).bytes(message.message);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): PreKeyWhisperMessage {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePreKeyWhisperMessage } as PreKeyWhisperMessage;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 5:
          message.registrationId = reader.uint32();
          break;
        case 1:
          message.preKeyId = reader.uint32();
          break;
        case 6:
          message.signedPreKeyId = reader.uint32();
          break;
        case 2:
          message.baseKey = reader.bytes();
          break;
        case 3:
          message.identityKey = reader.bytes();
          break;
        case 4:
          message.message = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PreKeyWhisperMessage {
    const message = { ...basePreKeyWhisperMessage } as PreKeyWhisperMessage;
    if (object.registrationId !== undefined && object.registrationId !== null) {
      message.registrationId = Number(object.registrationId);
    } else {
      message.registrationId = 0;
    }
    if (object.preKeyId !== undefined && object.preKeyId !== null) {
      message.preKeyId = Number(object.preKeyId);
    } else {
      message.preKeyId = 0;
    }
    if (object.signedPreKeyId !== undefined && object.signedPreKeyId !== null) {
      message.signedPreKeyId = Number(object.signedPreKeyId);
    } else {
      message.signedPreKeyId = 0;
    }
    if (object.baseKey !== undefined && object.baseKey !== null) {
      message.baseKey = bytesFromBase64(object.baseKey);
    }
    if (object.identityKey !== undefined && object.identityKey !== null) {
      message.identityKey = bytesFromBase64(object.identityKey);
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = bytesFromBase64(object.message);
    }
    return message;
  },
  fromPartial(object: DeepPartial<PreKeyWhisperMessage>): PreKeyWhisperMessage {
    const message = { ...basePreKeyWhisperMessage } as PreKeyWhisperMessage;
    if (object.registrationId !== undefined && object.registrationId !== null) {
      message.registrationId = object.registrationId;
    } else {
      message.registrationId = 0;
    }
    if (object.preKeyId !== undefined && object.preKeyId !== null) {
      message.preKeyId = object.preKeyId;
    } else {
      message.preKeyId = 0;
    }
    if (object.signedPreKeyId !== undefined && object.signedPreKeyId !== null) {
      message.signedPreKeyId = object.signedPreKeyId;
    } else {
      message.signedPreKeyId = 0;
    }
    if (object.baseKey !== undefined && object.baseKey !== null) {
      message.baseKey = object.baseKey;
    }
    if (object.identityKey !== undefined && object.identityKey !== null) {
      message.identityKey = object.identityKey;
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    }
    return message;
  },
  toJSON(message: PreKeyWhisperMessage): unknown {
    const obj: any = {};
    obj.registrationId = message.registrationId || 0;
    obj.preKeyId = message.preKeyId || 0;
    obj.signedPreKeyId = message.signedPreKeyId || 0;
    obj.baseKey = message.baseKey !== undefined ? base64FromBytes(message.baseKey) : undefined;
    obj.identityKey = message.identityKey !== undefined ? base64FromBytes(message.identityKey) : undefined;
    obj.message = message.message !== undefined ? base64FromBytes(message.message) : undefined;
    return obj;
  },
};

export const KeyExchangeMessage = {
  encode(message: KeyExchangeMessage, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint32(message.id);
    writer.uint32(18).bytes(message.baseKey);
    writer.uint32(26).bytes(message.ephemeralKey);
    writer.uint32(34).bytes(message.identityKey);
    writer.uint32(42).bytes(message.baseKeySignature);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): KeyExchangeMessage {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseKeyExchangeMessage } as KeyExchangeMessage;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        case 2:
          message.baseKey = reader.bytes();
          break;
        case 3:
          message.ephemeralKey = reader.bytes();
          break;
        case 4:
          message.identityKey = reader.bytes();
          break;
        case 5:
          message.baseKeySignature = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): KeyExchangeMessage {
    const message = { ...baseKeyExchangeMessage } as KeyExchangeMessage;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.baseKey !== undefined && object.baseKey !== null) {
      message.baseKey = bytesFromBase64(object.baseKey);
    }
    if (object.ephemeralKey !== undefined && object.ephemeralKey !== null) {
      message.ephemeralKey = bytesFromBase64(object.ephemeralKey);
    }
    if (object.identityKey !== undefined && object.identityKey !== null) {
      message.identityKey = bytesFromBase64(object.identityKey);
    }
    if (object.baseKeySignature !== undefined && object.baseKeySignature !== null) {
      message.baseKeySignature = bytesFromBase64(object.baseKeySignature);
    }
    return message;
  },
  fromPartial(object: DeepPartial<KeyExchangeMessage>): KeyExchangeMessage {
    const message = { ...baseKeyExchangeMessage } as KeyExchangeMessage;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.baseKey !== undefined && object.baseKey !== null) {
      message.baseKey = object.baseKey;
    }
    if (object.ephemeralKey !== undefined && object.ephemeralKey !== null) {
      message.ephemeralKey = object.ephemeralKey;
    }
    if (object.identityKey !== undefined && object.identityKey !== null) {
      message.identityKey = object.identityKey;
    }
    if (object.baseKeySignature !== undefined && object.baseKeySignature !== null) {
      message.baseKeySignature = object.baseKeySignature;
    }
    return message;
  },
  toJSON(message: KeyExchangeMessage): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.baseKey = message.baseKey !== undefined ? base64FromBytes(message.baseKey) : undefined;
    obj.ephemeralKey = message.ephemeralKey !== undefined ? base64FromBytes(message.ephemeralKey) : undefined;
    obj.identityKey = message.identityKey !== undefined ? base64FromBytes(message.identityKey) : undefined;
    obj.baseKeySignature = message.baseKeySignature !== undefined ? base64FromBytes(message.baseKeySignature) : undefined;
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