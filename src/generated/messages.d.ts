import * as $protobuf from "protobufjs";
/** Namespace textsecure. */
export namespace textsecure {

    /** Properties of a WhisperMessage. */
    interface IWhisperMessage {

        /** WhisperMessage ephemeralKey */
        ephemeralKey?: (Uint8Array|null);

        /** WhisperMessage counter */
        counter?: (number|null);

        /** WhisperMessage previousCounter */
        previousCounter?: (number|null);

        /** WhisperMessage ciphertext */
        ciphertext?: (Uint8Array|null);
    }

    /** Represents a WhisperMessage. */
    class WhisperMessage implements IWhisperMessage {

        /**
         * Constructs a new WhisperMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: textsecure.IWhisperMessage);

        /** WhisperMessage ephemeralKey. */
        public ephemeralKey: Uint8Array;

        /** WhisperMessage counter. */
        public counter: number;

        /** WhisperMessage previousCounter. */
        public previousCounter: number;

        /** WhisperMessage ciphertext. */
        public ciphertext: Uint8Array;

        /**
         * Creates a new WhisperMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WhisperMessage instance
         */
        public static create(properties?: textsecure.IWhisperMessage): textsecure.WhisperMessage;

        /**
         * Encodes the specified WhisperMessage message. Does not implicitly {@link textsecure.WhisperMessage.verify|verify} messages.
         * @param message WhisperMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: textsecure.IWhisperMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WhisperMessage message, length delimited. Does not implicitly {@link textsecure.WhisperMessage.verify|verify} messages.
         * @param message WhisperMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: textsecure.IWhisperMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WhisperMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WhisperMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): textsecure.WhisperMessage;

        /**
         * Decodes a WhisperMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WhisperMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): textsecure.WhisperMessage;

        /**
         * Verifies a WhisperMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WhisperMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WhisperMessage
         */
        public static fromObject(object: { [k: string]: any }): textsecure.WhisperMessage;

        /**
         * Creates a plain object from a WhisperMessage message. Also converts values to other types if specified.
         * @param message WhisperMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: textsecure.WhisperMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WhisperMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PreKeyWhisperMessage. */
    interface IPreKeyWhisperMessage {

        /** PreKeyWhisperMessage registrationId */
        registrationId?: (number|null);

        /** PreKeyWhisperMessage preKeyId */
        preKeyId?: (number|null);

        /** PreKeyWhisperMessage signedPreKeyId */
        signedPreKeyId?: (number|null);

        /** PreKeyWhisperMessage baseKey */
        baseKey?: (Uint8Array|null);

        /** PreKeyWhisperMessage identityKey */
        identityKey?: (Uint8Array|null);

        /** PreKeyWhisperMessage message */
        message?: (Uint8Array|null);
    }

    /** Represents a PreKeyWhisperMessage. */
    class PreKeyWhisperMessage implements IPreKeyWhisperMessage {

        /**
         * Constructs a new PreKeyWhisperMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: textsecure.IPreKeyWhisperMessage);

        /** PreKeyWhisperMessage registrationId. */
        public registrationId: number;

        /** PreKeyWhisperMessage preKeyId. */
        public preKeyId: number;

        /** PreKeyWhisperMessage signedPreKeyId. */
        public signedPreKeyId: number;

        /** PreKeyWhisperMessage baseKey. */
        public baseKey: Uint8Array;

        /** PreKeyWhisperMessage identityKey. */
        public identityKey: Uint8Array;

        /** PreKeyWhisperMessage message. */
        public message: Uint8Array;

        /**
         * Creates a new PreKeyWhisperMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PreKeyWhisperMessage instance
         */
        public static create(properties?: textsecure.IPreKeyWhisperMessage): textsecure.PreKeyWhisperMessage;

        /**
         * Encodes the specified PreKeyWhisperMessage message. Does not implicitly {@link textsecure.PreKeyWhisperMessage.verify|verify} messages.
         * @param message PreKeyWhisperMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: textsecure.IPreKeyWhisperMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PreKeyWhisperMessage message, length delimited. Does not implicitly {@link textsecure.PreKeyWhisperMessage.verify|verify} messages.
         * @param message PreKeyWhisperMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: textsecure.IPreKeyWhisperMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PreKeyWhisperMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PreKeyWhisperMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): textsecure.PreKeyWhisperMessage;

        /**
         * Decodes a PreKeyWhisperMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PreKeyWhisperMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): textsecure.PreKeyWhisperMessage;

        /**
         * Verifies a PreKeyWhisperMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PreKeyWhisperMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PreKeyWhisperMessage
         */
        public static fromObject(object: { [k: string]: any }): textsecure.PreKeyWhisperMessage;

        /**
         * Creates a plain object from a PreKeyWhisperMessage message. Also converts values to other types if specified.
         * @param message PreKeyWhisperMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: textsecure.PreKeyWhisperMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PreKeyWhisperMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a KeyExchangeMessage. */
    interface IKeyExchangeMessage {

        /** KeyExchangeMessage id */
        id?: (number|null);

        /** KeyExchangeMessage baseKey */
        baseKey?: (Uint8Array|null);

        /** KeyExchangeMessage ephemeralKey */
        ephemeralKey?: (Uint8Array|null);

        /** KeyExchangeMessage identityKey */
        identityKey?: (Uint8Array|null);

        /** KeyExchangeMessage baseKeySignature */
        baseKeySignature?: (Uint8Array|null);
    }

    /** Represents a KeyExchangeMessage. */
    class KeyExchangeMessage implements IKeyExchangeMessage {

        /**
         * Constructs a new KeyExchangeMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: textsecure.IKeyExchangeMessage);

        /** KeyExchangeMessage id. */
        public id: number;

        /** KeyExchangeMessage baseKey. */
        public baseKey: Uint8Array;

        /** KeyExchangeMessage ephemeralKey. */
        public ephemeralKey: Uint8Array;

        /** KeyExchangeMessage identityKey. */
        public identityKey: Uint8Array;

        /** KeyExchangeMessage baseKeySignature. */
        public baseKeySignature: Uint8Array;

        /**
         * Creates a new KeyExchangeMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KeyExchangeMessage instance
         */
        public static create(properties?: textsecure.IKeyExchangeMessage): textsecure.KeyExchangeMessage;

        /**
         * Encodes the specified KeyExchangeMessage message. Does not implicitly {@link textsecure.KeyExchangeMessage.verify|verify} messages.
         * @param message KeyExchangeMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: textsecure.IKeyExchangeMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified KeyExchangeMessage message, length delimited. Does not implicitly {@link textsecure.KeyExchangeMessage.verify|verify} messages.
         * @param message KeyExchangeMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: textsecure.IKeyExchangeMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KeyExchangeMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KeyExchangeMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): textsecure.KeyExchangeMessage;

        /**
         * Decodes a KeyExchangeMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns KeyExchangeMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): textsecure.KeyExchangeMessage;

        /**
         * Verifies a KeyExchangeMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a KeyExchangeMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KeyExchangeMessage
         */
        public static fromObject(object: { [k: string]: any }): textsecure.KeyExchangeMessage;

        /**
         * Creates a plain object from a KeyExchangeMessage message. Also converts values to other types if specified.
         * @param message KeyExchangeMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: textsecure.KeyExchangeMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KeyExchangeMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an IncomingPushMessageSignal. */
    interface IIncomingPushMessageSignal {

        /** IncomingPushMessageSignal type */
        type?: (textsecure.IncomingPushMessageSignal.Type|null);

        /** IncomingPushMessageSignal source */
        source?: (string|null);

        /** IncomingPushMessageSignal sourceDevice */
        sourceDevice?: (number|null);

        /** IncomingPushMessageSignal relay */
        relay?: (string|null);

        /** IncomingPushMessageSignal timestamp */
        timestamp?: (number|Long|null);

        /** IncomingPushMessageSignal message */
        message?: (Uint8Array|null);
    }

    /** Represents an IncomingPushMessageSignal. */
    class IncomingPushMessageSignal implements IIncomingPushMessageSignal {

        /**
         * Constructs a new IncomingPushMessageSignal.
         * @param [properties] Properties to set
         */
        constructor(properties?: textsecure.IIncomingPushMessageSignal);

        /** IncomingPushMessageSignal type. */
        public type: textsecure.IncomingPushMessageSignal.Type;

        /** IncomingPushMessageSignal source. */
        public source: string;

        /** IncomingPushMessageSignal sourceDevice. */
        public sourceDevice: number;

        /** IncomingPushMessageSignal relay. */
        public relay: string;

        /** IncomingPushMessageSignal timestamp. */
        public timestamp: (number|Long);

        /** IncomingPushMessageSignal message. */
        public message: Uint8Array;

        /**
         * Creates a new IncomingPushMessageSignal instance using the specified properties.
         * @param [properties] Properties to set
         * @returns IncomingPushMessageSignal instance
         */
        public static create(properties?: textsecure.IIncomingPushMessageSignal): textsecure.IncomingPushMessageSignal;

        /**
         * Encodes the specified IncomingPushMessageSignal message. Does not implicitly {@link textsecure.IncomingPushMessageSignal.verify|verify} messages.
         * @param message IncomingPushMessageSignal message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: textsecure.IIncomingPushMessageSignal, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified IncomingPushMessageSignal message, length delimited. Does not implicitly {@link textsecure.IncomingPushMessageSignal.verify|verify} messages.
         * @param message IncomingPushMessageSignal message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: textsecure.IIncomingPushMessageSignal, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an IncomingPushMessageSignal message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns IncomingPushMessageSignal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): textsecure.IncomingPushMessageSignal;

        /**
         * Decodes an IncomingPushMessageSignal message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns IncomingPushMessageSignal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): textsecure.IncomingPushMessageSignal;

        /**
         * Verifies an IncomingPushMessageSignal message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an IncomingPushMessageSignal message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns IncomingPushMessageSignal
         */
        public static fromObject(object: { [k: string]: any }): textsecure.IncomingPushMessageSignal;

        /**
         * Creates a plain object from an IncomingPushMessageSignal message. Also converts values to other types if specified.
         * @param message IncomingPushMessageSignal
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: textsecure.IncomingPushMessageSignal, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this IncomingPushMessageSignal to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace IncomingPushMessageSignal {

        /** Type enum. */
        enum Type {
            UNKNOWN = 0,
            CIPHERTEXT = 1,
            KEY_EXCHANGE = 2,
            PREKEY_BUNDLE = 3,
            PLAINTEXT = 4,
            RECEIPT = 5,
            PREKEY_BUNDLE_DEVICE_CONTROL = 6,
            DEVICE_CONTROL = 7
        }
    }

    /** Properties of a PushMessageContent. */
    interface IPushMessageContent {

        /** PushMessageContent body */
        body?: (string|null);

        /** PushMessageContent attachments */
        attachments?: (textsecure.PushMessageContent.IAttachmentPointer[]|null);

        /** PushMessageContent group */
        group?: (textsecure.PushMessageContent.IGroupContext|null);

        /** PushMessageContent flags */
        flags?: (number|null);
    }

    /** Represents a PushMessageContent. */
    class PushMessageContent implements IPushMessageContent {

        /**
         * Constructs a new PushMessageContent.
         * @param [properties] Properties to set
         */
        constructor(properties?: textsecure.IPushMessageContent);

        /** PushMessageContent body. */
        public body: string;

        /** PushMessageContent attachments. */
        public attachments: textsecure.PushMessageContent.IAttachmentPointer[];

        /** PushMessageContent group. */
        public group?: (textsecure.PushMessageContent.IGroupContext|null);

        /** PushMessageContent flags. */
        public flags: number;

        /**
         * Creates a new PushMessageContent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PushMessageContent instance
         */
        public static create(properties?: textsecure.IPushMessageContent): textsecure.PushMessageContent;

        /**
         * Encodes the specified PushMessageContent message. Does not implicitly {@link textsecure.PushMessageContent.verify|verify} messages.
         * @param message PushMessageContent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: textsecure.IPushMessageContent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PushMessageContent message, length delimited. Does not implicitly {@link textsecure.PushMessageContent.verify|verify} messages.
         * @param message PushMessageContent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: textsecure.IPushMessageContent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PushMessageContent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PushMessageContent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): textsecure.PushMessageContent;

        /**
         * Decodes a PushMessageContent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PushMessageContent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): textsecure.PushMessageContent;

        /**
         * Verifies a PushMessageContent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PushMessageContent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PushMessageContent
         */
        public static fromObject(object: { [k: string]: any }): textsecure.PushMessageContent;

        /**
         * Creates a plain object from a PushMessageContent message. Also converts values to other types if specified.
         * @param message PushMessageContent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: textsecure.PushMessageContent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PushMessageContent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PushMessageContent {

        /** Properties of an AttachmentPointer. */
        interface IAttachmentPointer {

            /** AttachmentPointer id */
            id?: (number|Long|null);

            /** AttachmentPointer contentType */
            contentType?: (string|null);

            /** AttachmentPointer key */
            key?: (Uint8Array|null);
        }

        /** Represents an AttachmentPointer. */
        class AttachmentPointer implements IAttachmentPointer {

            /**
             * Constructs a new AttachmentPointer.
             * @param [properties] Properties to set
             */
            constructor(properties?: textsecure.PushMessageContent.IAttachmentPointer);

            /** AttachmentPointer id. */
            public id: (number|Long);

            /** AttachmentPointer contentType. */
            public contentType: string;

            /** AttachmentPointer key. */
            public key: Uint8Array;

            /**
             * Creates a new AttachmentPointer instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AttachmentPointer instance
             */
            public static create(properties?: textsecure.PushMessageContent.IAttachmentPointer): textsecure.PushMessageContent.AttachmentPointer;

            /**
             * Encodes the specified AttachmentPointer message. Does not implicitly {@link textsecure.PushMessageContent.AttachmentPointer.verify|verify} messages.
             * @param message AttachmentPointer message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: textsecure.PushMessageContent.IAttachmentPointer, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AttachmentPointer message, length delimited. Does not implicitly {@link textsecure.PushMessageContent.AttachmentPointer.verify|verify} messages.
             * @param message AttachmentPointer message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: textsecure.PushMessageContent.IAttachmentPointer, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AttachmentPointer message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AttachmentPointer
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): textsecure.PushMessageContent.AttachmentPointer;

            /**
             * Decodes an AttachmentPointer message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AttachmentPointer
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): textsecure.PushMessageContent.AttachmentPointer;

            /**
             * Verifies an AttachmentPointer message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AttachmentPointer message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AttachmentPointer
             */
            public static fromObject(object: { [k: string]: any }): textsecure.PushMessageContent.AttachmentPointer;

            /**
             * Creates a plain object from an AttachmentPointer message. Also converts values to other types if specified.
             * @param message AttachmentPointer
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: textsecure.PushMessageContent.AttachmentPointer, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AttachmentPointer to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GroupContext. */
        interface IGroupContext {

            /** GroupContext id */
            id?: (Uint8Array|null);

            /** GroupContext type */
            type?: (textsecure.PushMessageContent.GroupContext.Type|null);

            /** GroupContext name */
            name?: (string|null);

            /** GroupContext members */
            members?: (string[]|null);

            /** GroupContext avatar */
            avatar?: (textsecure.PushMessageContent.IAttachmentPointer|null);
        }

        /** Represents a GroupContext. */
        class GroupContext implements IGroupContext {

            /**
             * Constructs a new GroupContext.
             * @param [properties] Properties to set
             */
            constructor(properties?: textsecure.PushMessageContent.IGroupContext);

            /** GroupContext id. */
            public id: Uint8Array;

            /** GroupContext type. */
            public type: textsecure.PushMessageContent.GroupContext.Type;

            /** GroupContext name. */
            public name: string;

            /** GroupContext members. */
            public members: string[];

            /** GroupContext avatar. */
            public avatar?: (textsecure.PushMessageContent.IAttachmentPointer|null);

            /**
             * Creates a new GroupContext instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GroupContext instance
             */
            public static create(properties?: textsecure.PushMessageContent.IGroupContext): textsecure.PushMessageContent.GroupContext;

            /**
             * Encodes the specified GroupContext message. Does not implicitly {@link textsecure.PushMessageContent.GroupContext.verify|verify} messages.
             * @param message GroupContext message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: textsecure.PushMessageContent.IGroupContext, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GroupContext message, length delimited. Does not implicitly {@link textsecure.PushMessageContent.GroupContext.verify|verify} messages.
             * @param message GroupContext message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: textsecure.PushMessageContent.IGroupContext, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GroupContext message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GroupContext
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): textsecure.PushMessageContent.GroupContext;

            /**
             * Decodes a GroupContext message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GroupContext
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): textsecure.PushMessageContent.GroupContext;

            /**
             * Verifies a GroupContext message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GroupContext message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GroupContext
             */
            public static fromObject(object: { [k: string]: any }): textsecure.PushMessageContent.GroupContext;

            /**
             * Creates a plain object from a GroupContext message. Also converts values to other types if specified.
             * @param message GroupContext
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: textsecure.PushMessageContent.GroupContext, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GroupContext to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace GroupContext {

            /** Type enum. */
            enum Type {
                UNKNOWN = 0,
                UPDATE = 1,
                DELIVER = 2,
                QUIT = 3
            }
        }

        /** Flags enum. */
        enum Flags {
            END_SESSION = 1
        }
    }
}
