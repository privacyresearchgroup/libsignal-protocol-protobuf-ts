/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Writer, Reader } from 'protobufjs/minimal'
import { PushMessageContent_GroupContext, PushMessageContent_AttachmentPointer } from '.'

export interface PushMessageContentCompatible {
    body?: string
    attachments: PushMessageContent_AttachmentPointer[]
    group: PushMessageContent_GroupContext | undefined
    flags?: number
}

const basePushMessageContent: object = {}
export const PushMessageContentCompatible = {
    encode(message: PushMessageContentCompatible, writer: Writer = Writer.create()): Writer {
        if (!('body' in message) && !('flags' in message)) {
            throw new Error('Invalid protobuf')
        }
        if (message.body) {
            writer.uint32(10).string(message.body)
        }
        for (const v of message.attachments) {
            PushMessageContent_AttachmentPointer.encode(v!, writer.uint32(18).fork()).ldelim()
        }
        if (message.group !== undefined && message.group !== undefined) {
            PushMessageContent_GroupContext.encode(message.group, writer.uint32(26).fork()).ldelim()
        }
        if (message.flags) {
            writer.uint32(32).uint32(message.flags)
        }
        return writer
    },
    decode(input: Uint8Array | Reader, length?: number): PushMessageContentCompatible {
        const reader = input instanceof Uint8Array ? new Reader(input) : input
        const end = length === undefined ? reader.len : reader.pos + length
        const message = { ...basePushMessageContent } as PushMessageContentCompatible
        message.attachments = []
        while (reader.pos < end) {
            const tag = reader.uint32()
            switch (tag >>> 3) {
                case 1:
                    message.body = reader.string()
                    break
                case 2:
                    message.attachments.push(PushMessageContent_AttachmentPointer.decode(reader, reader.uint32()))
                    break
                case 3:
                    message.group = PushMessageContent_GroupContext.decode(reader, reader.uint32())
                    break
                case 4:
                    message.flags = reader.uint32()
                    break
                default:
                    reader.skipType(tag & 7)
                    break
            }
        }
        return message
    },
    fromJSON(object: any): PushMessageContentCompatible {
        const message = { ...basePushMessageContent } as PushMessageContentCompatible
        message.attachments = []
        if (object.body !== undefined && object.body !== null) {
            message.body = String(object.body)
        } else {
            message.body = object.flags ? undefined : ''
        }
        if (object.attachments !== undefined && object.attachments !== null) {
            for (const e of object.attachments) {
                message.attachments.push(PushMessageContent_AttachmentPointer.fromJSON(e))
            }
        }
        if (object.group !== undefined && object.group !== null) {
            message.group = PushMessageContent_GroupContext.fromJSON(object.group)
        } else {
            message.group = undefined
        }
        if (object.flags !== undefined && object.flags !== null) {
            message.flags = Number(object.flags)
        } else {
            message.flags = 0
        }
        return message
    },
    fromPartial(object: DeepPartial<PushMessageContentCompatible>): PushMessageContentCompatible {
        const message = { ...basePushMessageContent } as PushMessageContentCompatible
        message.attachments = []
        if (object.body !== undefined && object.body !== null) {
            message.body = object.body
        } else {
            message.body = ''
        }
        if (object.attachments !== undefined && object.attachments !== null) {
            for (const e of object.attachments) {
                message.attachments.push(PushMessageContent_AttachmentPointer.fromPartial(e))
            }
        }
        if (object.group !== undefined && object.group !== null) {
            message.group = PushMessageContent_GroupContext.fromPartial(object.group)
        } else {
            message.group = undefined
        }
        if (object.flags !== undefined && object.flags !== null) {
            message.flags = object.flags
        } else {
            message.flags = 0
        }
        return message
    },
    toJSON(message: PushMessageContentCompatible): unknown {
        const obj: any = {}
        obj.body = message.body || ''
        if (message.attachments) {
            obj.attachments = message.attachments.map((e) =>
                e ? PushMessageContent_AttachmentPointer.toJSON(e) : undefined
            )
        } else {
            obj.attachments = []
        }
        obj.group = message.group ? PushMessageContent_GroupContext.toJSON(message.group) : undefined
        obj.flags = message.flags || 0
        return obj
    },
}

type Builtin = Date | Function | Uint8Array | string | number | undefined
type DeepPartial<T> = T extends Builtin
    ? T
    : T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : T extends {}
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : Partial<T>
