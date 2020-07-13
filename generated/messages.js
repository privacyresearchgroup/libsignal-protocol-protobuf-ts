/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const textsecure = $root.textsecure = (() => {

    /**
     * Namespace textsecure.
     * @exports textsecure
     * @namespace
     */
    const textsecure = {};

    textsecure.WhisperMessage = (function() {

        /**
         * Properties of a WhisperMessage.
         * @memberof textsecure
         * @interface IWhisperMessage
         * @property {Uint8Array|null} [ephemeralKey] WhisperMessage ephemeralKey
         * @property {number|null} [counter] WhisperMessage counter
         * @property {number|null} [previousCounter] WhisperMessage previousCounter
         * @property {Uint8Array|null} [ciphertext] WhisperMessage ciphertext
         */

        /**
         * Constructs a new WhisperMessage.
         * @memberof textsecure
         * @classdesc Represents a WhisperMessage.
         * @implements IWhisperMessage
         * @constructor
         * @param {textsecure.IWhisperMessage=} [properties] Properties to set
         */
        function WhisperMessage(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WhisperMessage ephemeralKey.
         * @member {Uint8Array} ephemeralKey
         * @memberof textsecure.WhisperMessage
         * @instance
         */
        WhisperMessage.prototype.ephemeralKey = $util.newBuffer([]);

        /**
         * WhisperMessage counter.
         * @member {number} counter
         * @memberof textsecure.WhisperMessage
         * @instance
         */
        WhisperMessage.prototype.counter = 0;

        /**
         * WhisperMessage previousCounter.
         * @member {number} previousCounter
         * @memberof textsecure.WhisperMessage
         * @instance
         */
        WhisperMessage.prototype.previousCounter = 0;

        /**
         * WhisperMessage ciphertext.
         * @member {Uint8Array} ciphertext
         * @memberof textsecure.WhisperMessage
         * @instance
         */
        WhisperMessage.prototype.ciphertext = $util.newBuffer([]);

        /**
         * Creates a new WhisperMessage instance using the specified properties.
         * @function create
         * @memberof textsecure.WhisperMessage
         * @static
         * @param {textsecure.IWhisperMessage=} [properties] Properties to set
         * @returns {textsecure.WhisperMessage} WhisperMessage instance
         */
        WhisperMessage.create = function create(properties) {
            return new WhisperMessage(properties);
        };

        /**
         * Encodes the specified WhisperMessage message. Does not implicitly {@link textsecure.WhisperMessage.verify|verify} messages.
         * @function encode
         * @memberof textsecure.WhisperMessage
         * @static
         * @param {textsecure.IWhisperMessage} message WhisperMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WhisperMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ephemeralKey != null && Object.hasOwnProperty.call(message, "ephemeralKey"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.ephemeralKey);
            if (message.counter != null && Object.hasOwnProperty.call(message, "counter"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.counter);
            if (message.previousCounter != null && Object.hasOwnProperty.call(message, "previousCounter"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.previousCounter);
            if (message.ciphertext != null && Object.hasOwnProperty.call(message, "ciphertext"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.ciphertext);
            return writer;
        };

        /**
         * Encodes the specified WhisperMessage message, length delimited. Does not implicitly {@link textsecure.WhisperMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof textsecure.WhisperMessage
         * @static
         * @param {textsecure.IWhisperMessage} message WhisperMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WhisperMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WhisperMessage message from the specified reader or buffer.
         * @function decode
         * @memberof textsecure.WhisperMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {textsecure.WhisperMessage} WhisperMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WhisperMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.textsecure.WhisperMessage();
            while (reader.pos < end) {
                let tag = reader.uint32();
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
        };

        /**
         * Decodes a WhisperMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof textsecure.WhisperMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {textsecure.WhisperMessage} WhisperMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WhisperMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WhisperMessage message.
         * @function verify
         * @memberof textsecure.WhisperMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WhisperMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ephemeralKey != null && message.hasOwnProperty("ephemeralKey"))
                if (!(message.ephemeralKey && typeof message.ephemeralKey.length === "number" || $util.isString(message.ephemeralKey)))
                    return "ephemeralKey: buffer expected";
            if (message.counter != null && message.hasOwnProperty("counter"))
                if (!$util.isInteger(message.counter))
                    return "counter: integer expected";
            if (message.previousCounter != null && message.hasOwnProperty("previousCounter"))
                if (!$util.isInteger(message.previousCounter))
                    return "previousCounter: integer expected";
            if (message.ciphertext != null && message.hasOwnProperty("ciphertext"))
                if (!(message.ciphertext && typeof message.ciphertext.length === "number" || $util.isString(message.ciphertext)))
                    return "ciphertext: buffer expected";
            return null;
        };

        /**
         * Creates a WhisperMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof textsecure.WhisperMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {textsecure.WhisperMessage} WhisperMessage
         */
        WhisperMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.textsecure.WhisperMessage)
                return object;
            let message = new $root.textsecure.WhisperMessage();
            if (object.ephemeralKey != null)
                if (typeof object.ephemeralKey === "string")
                    $util.base64.decode(object.ephemeralKey, message.ephemeralKey = $util.newBuffer($util.base64.length(object.ephemeralKey)), 0);
                else if (object.ephemeralKey.length)
                    message.ephemeralKey = object.ephemeralKey;
            if (object.counter != null)
                message.counter = object.counter >>> 0;
            if (object.previousCounter != null)
                message.previousCounter = object.previousCounter >>> 0;
            if (object.ciphertext != null)
                if (typeof object.ciphertext === "string")
                    $util.base64.decode(object.ciphertext, message.ciphertext = $util.newBuffer($util.base64.length(object.ciphertext)), 0);
                else if (object.ciphertext.length)
                    message.ciphertext = object.ciphertext;
            return message;
        };

        /**
         * Creates a plain object from a WhisperMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof textsecure.WhisperMessage
         * @static
         * @param {textsecure.WhisperMessage} message WhisperMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WhisperMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.ephemeralKey = "";
                else {
                    object.ephemeralKey = [];
                    if (options.bytes !== Array)
                        object.ephemeralKey = $util.newBuffer(object.ephemeralKey);
                }
                object.counter = 0;
                object.previousCounter = 0;
                if (options.bytes === String)
                    object.ciphertext = "";
                else {
                    object.ciphertext = [];
                    if (options.bytes !== Array)
                        object.ciphertext = $util.newBuffer(object.ciphertext);
                }
            }
            if (message.ephemeralKey != null && message.hasOwnProperty("ephemeralKey"))
                object.ephemeralKey = options.bytes === String ? $util.base64.encode(message.ephemeralKey, 0, message.ephemeralKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.ephemeralKey) : message.ephemeralKey;
            if (message.counter != null && message.hasOwnProperty("counter"))
                object.counter = message.counter;
            if (message.previousCounter != null && message.hasOwnProperty("previousCounter"))
                object.previousCounter = message.previousCounter;
            if (message.ciphertext != null && message.hasOwnProperty("ciphertext"))
                object.ciphertext = options.bytes === String ? $util.base64.encode(message.ciphertext, 0, message.ciphertext.length) : options.bytes === Array ? Array.prototype.slice.call(message.ciphertext) : message.ciphertext;
            return object;
        };

        /**
         * Converts this WhisperMessage to JSON.
         * @function toJSON
         * @memberof textsecure.WhisperMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WhisperMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WhisperMessage;
    })();

    textsecure.PreKeyWhisperMessage = (function() {

        /**
         * Properties of a PreKeyWhisperMessage.
         * @memberof textsecure
         * @interface IPreKeyWhisperMessage
         * @property {number|null} [registrationId] PreKeyWhisperMessage registrationId
         * @property {number|null} [preKeyId] PreKeyWhisperMessage preKeyId
         * @property {number|null} [signedPreKeyId] PreKeyWhisperMessage signedPreKeyId
         * @property {Uint8Array|null} [baseKey] PreKeyWhisperMessage baseKey
         * @property {Uint8Array|null} [identityKey] PreKeyWhisperMessage identityKey
         * @property {Uint8Array|null} [message] PreKeyWhisperMessage message
         */

        /**
         * Constructs a new PreKeyWhisperMessage.
         * @memberof textsecure
         * @classdesc Represents a PreKeyWhisperMessage.
         * @implements IPreKeyWhisperMessage
         * @constructor
         * @param {textsecure.IPreKeyWhisperMessage=} [properties] Properties to set
         */
        function PreKeyWhisperMessage(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PreKeyWhisperMessage registrationId.
         * @member {number} registrationId
         * @memberof textsecure.PreKeyWhisperMessage
         * @instance
         */
        PreKeyWhisperMessage.prototype.registrationId = 0;

        /**
         * PreKeyWhisperMessage preKeyId.
         * @member {number} preKeyId
         * @memberof textsecure.PreKeyWhisperMessage
         * @instance
         */
        PreKeyWhisperMessage.prototype.preKeyId = 0;

        /**
         * PreKeyWhisperMessage signedPreKeyId.
         * @member {number} signedPreKeyId
         * @memberof textsecure.PreKeyWhisperMessage
         * @instance
         */
        PreKeyWhisperMessage.prototype.signedPreKeyId = 0;

        /**
         * PreKeyWhisperMessage baseKey.
         * @member {Uint8Array} baseKey
         * @memberof textsecure.PreKeyWhisperMessage
         * @instance
         */
        PreKeyWhisperMessage.prototype.baseKey = $util.newBuffer([]);

        /**
         * PreKeyWhisperMessage identityKey.
         * @member {Uint8Array} identityKey
         * @memberof textsecure.PreKeyWhisperMessage
         * @instance
         */
        PreKeyWhisperMessage.prototype.identityKey = $util.newBuffer([]);

        /**
         * PreKeyWhisperMessage message.
         * @member {Uint8Array} message
         * @memberof textsecure.PreKeyWhisperMessage
         * @instance
         */
        PreKeyWhisperMessage.prototype.message = $util.newBuffer([]);

        /**
         * Creates a new PreKeyWhisperMessage instance using the specified properties.
         * @function create
         * @memberof textsecure.PreKeyWhisperMessage
         * @static
         * @param {textsecure.IPreKeyWhisperMessage=} [properties] Properties to set
         * @returns {textsecure.PreKeyWhisperMessage} PreKeyWhisperMessage instance
         */
        PreKeyWhisperMessage.create = function create(properties) {
            return new PreKeyWhisperMessage(properties);
        };

        /**
         * Encodes the specified PreKeyWhisperMessage message. Does not implicitly {@link textsecure.PreKeyWhisperMessage.verify|verify} messages.
         * @function encode
         * @memberof textsecure.PreKeyWhisperMessage
         * @static
         * @param {textsecure.IPreKeyWhisperMessage} message PreKeyWhisperMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PreKeyWhisperMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.preKeyId != null && Object.hasOwnProperty.call(message, "preKeyId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.preKeyId);
            if (message.baseKey != null && Object.hasOwnProperty.call(message, "baseKey"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.baseKey);
            if (message.identityKey != null && Object.hasOwnProperty.call(message, "identityKey"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.identityKey);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.message);
            if (message.registrationId != null && Object.hasOwnProperty.call(message, "registrationId"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.registrationId);
            if (message.signedPreKeyId != null && Object.hasOwnProperty.call(message, "signedPreKeyId"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.signedPreKeyId);
            return writer;
        };

        /**
         * Encodes the specified PreKeyWhisperMessage message, length delimited. Does not implicitly {@link textsecure.PreKeyWhisperMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof textsecure.PreKeyWhisperMessage
         * @static
         * @param {textsecure.IPreKeyWhisperMessage} message PreKeyWhisperMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PreKeyWhisperMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PreKeyWhisperMessage message from the specified reader or buffer.
         * @function decode
         * @memberof textsecure.PreKeyWhisperMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {textsecure.PreKeyWhisperMessage} PreKeyWhisperMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PreKeyWhisperMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.textsecure.PreKeyWhisperMessage();
            while (reader.pos < end) {
                let tag = reader.uint32();
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
        };

        /**
         * Decodes a PreKeyWhisperMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof textsecure.PreKeyWhisperMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {textsecure.PreKeyWhisperMessage} PreKeyWhisperMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PreKeyWhisperMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PreKeyWhisperMessage message.
         * @function verify
         * @memberof textsecure.PreKeyWhisperMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PreKeyWhisperMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.registrationId != null && message.hasOwnProperty("registrationId"))
                if (!$util.isInteger(message.registrationId))
                    return "registrationId: integer expected";
            if (message.preKeyId != null && message.hasOwnProperty("preKeyId"))
                if (!$util.isInteger(message.preKeyId))
                    return "preKeyId: integer expected";
            if (message.signedPreKeyId != null && message.hasOwnProperty("signedPreKeyId"))
                if (!$util.isInteger(message.signedPreKeyId))
                    return "signedPreKeyId: integer expected";
            if (message.baseKey != null && message.hasOwnProperty("baseKey"))
                if (!(message.baseKey && typeof message.baseKey.length === "number" || $util.isString(message.baseKey)))
                    return "baseKey: buffer expected";
            if (message.identityKey != null && message.hasOwnProperty("identityKey"))
                if (!(message.identityKey && typeof message.identityKey.length === "number" || $util.isString(message.identityKey)))
                    return "identityKey: buffer expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!(message.message && typeof message.message.length === "number" || $util.isString(message.message)))
                    return "message: buffer expected";
            return null;
        };

        /**
         * Creates a PreKeyWhisperMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof textsecure.PreKeyWhisperMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {textsecure.PreKeyWhisperMessage} PreKeyWhisperMessage
         */
        PreKeyWhisperMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.textsecure.PreKeyWhisperMessage)
                return object;
            let message = new $root.textsecure.PreKeyWhisperMessage();
            if (object.registrationId != null)
                message.registrationId = object.registrationId >>> 0;
            if (object.preKeyId != null)
                message.preKeyId = object.preKeyId >>> 0;
            if (object.signedPreKeyId != null)
                message.signedPreKeyId = object.signedPreKeyId >>> 0;
            if (object.baseKey != null)
                if (typeof object.baseKey === "string")
                    $util.base64.decode(object.baseKey, message.baseKey = $util.newBuffer($util.base64.length(object.baseKey)), 0);
                else if (object.baseKey.length)
                    message.baseKey = object.baseKey;
            if (object.identityKey != null)
                if (typeof object.identityKey === "string")
                    $util.base64.decode(object.identityKey, message.identityKey = $util.newBuffer($util.base64.length(object.identityKey)), 0);
                else if (object.identityKey.length)
                    message.identityKey = object.identityKey;
            if (object.message != null)
                if (typeof object.message === "string")
                    $util.base64.decode(object.message, message.message = $util.newBuffer($util.base64.length(object.message)), 0);
                else if (object.message.length)
                    message.message = object.message;
            return message;
        };

        /**
         * Creates a plain object from a PreKeyWhisperMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof textsecure.PreKeyWhisperMessage
         * @static
         * @param {textsecure.PreKeyWhisperMessage} message PreKeyWhisperMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PreKeyWhisperMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.preKeyId = 0;
                if (options.bytes === String)
                    object.baseKey = "";
                else {
                    object.baseKey = [];
                    if (options.bytes !== Array)
                        object.baseKey = $util.newBuffer(object.baseKey);
                }
                if (options.bytes === String)
                    object.identityKey = "";
                else {
                    object.identityKey = [];
                    if (options.bytes !== Array)
                        object.identityKey = $util.newBuffer(object.identityKey);
                }
                if (options.bytes === String)
                    object.message = "";
                else {
                    object.message = [];
                    if (options.bytes !== Array)
                        object.message = $util.newBuffer(object.message);
                }
                object.registrationId = 0;
                object.signedPreKeyId = 0;
            }
            if (message.preKeyId != null && message.hasOwnProperty("preKeyId"))
                object.preKeyId = message.preKeyId;
            if (message.baseKey != null && message.hasOwnProperty("baseKey"))
                object.baseKey = options.bytes === String ? $util.base64.encode(message.baseKey, 0, message.baseKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.baseKey) : message.baseKey;
            if (message.identityKey != null && message.hasOwnProperty("identityKey"))
                object.identityKey = options.bytes === String ? $util.base64.encode(message.identityKey, 0, message.identityKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.identityKey) : message.identityKey;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = options.bytes === String ? $util.base64.encode(message.message, 0, message.message.length) : options.bytes === Array ? Array.prototype.slice.call(message.message) : message.message;
            if (message.registrationId != null && message.hasOwnProperty("registrationId"))
                object.registrationId = message.registrationId;
            if (message.signedPreKeyId != null && message.hasOwnProperty("signedPreKeyId"))
                object.signedPreKeyId = message.signedPreKeyId;
            return object;
        };

        /**
         * Converts this PreKeyWhisperMessage to JSON.
         * @function toJSON
         * @memberof textsecure.PreKeyWhisperMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PreKeyWhisperMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PreKeyWhisperMessage;
    })();

    textsecure.KeyExchangeMessage = (function() {

        /**
         * Properties of a KeyExchangeMessage.
         * @memberof textsecure
         * @interface IKeyExchangeMessage
         * @property {number|null} [id] KeyExchangeMessage id
         * @property {Uint8Array|null} [baseKey] KeyExchangeMessage baseKey
         * @property {Uint8Array|null} [ephemeralKey] KeyExchangeMessage ephemeralKey
         * @property {Uint8Array|null} [identityKey] KeyExchangeMessage identityKey
         * @property {Uint8Array|null} [baseKeySignature] KeyExchangeMessage baseKeySignature
         */

        /**
         * Constructs a new KeyExchangeMessage.
         * @memberof textsecure
         * @classdesc Represents a KeyExchangeMessage.
         * @implements IKeyExchangeMessage
         * @constructor
         * @param {textsecure.IKeyExchangeMessage=} [properties] Properties to set
         */
        function KeyExchangeMessage(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * KeyExchangeMessage id.
         * @member {number} id
         * @memberof textsecure.KeyExchangeMessage
         * @instance
         */
        KeyExchangeMessage.prototype.id = 0;

        /**
         * KeyExchangeMessage baseKey.
         * @member {Uint8Array} baseKey
         * @memberof textsecure.KeyExchangeMessage
         * @instance
         */
        KeyExchangeMessage.prototype.baseKey = $util.newBuffer([]);

        /**
         * KeyExchangeMessage ephemeralKey.
         * @member {Uint8Array} ephemeralKey
         * @memberof textsecure.KeyExchangeMessage
         * @instance
         */
        KeyExchangeMessage.prototype.ephemeralKey = $util.newBuffer([]);

        /**
         * KeyExchangeMessage identityKey.
         * @member {Uint8Array} identityKey
         * @memberof textsecure.KeyExchangeMessage
         * @instance
         */
        KeyExchangeMessage.prototype.identityKey = $util.newBuffer([]);

        /**
         * KeyExchangeMessage baseKeySignature.
         * @member {Uint8Array} baseKeySignature
         * @memberof textsecure.KeyExchangeMessage
         * @instance
         */
        KeyExchangeMessage.prototype.baseKeySignature = $util.newBuffer([]);

        /**
         * Creates a new KeyExchangeMessage instance using the specified properties.
         * @function create
         * @memberof textsecure.KeyExchangeMessage
         * @static
         * @param {textsecure.IKeyExchangeMessage=} [properties] Properties to set
         * @returns {textsecure.KeyExchangeMessage} KeyExchangeMessage instance
         */
        KeyExchangeMessage.create = function create(properties) {
            return new KeyExchangeMessage(properties);
        };

        /**
         * Encodes the specified KeyExchangeMessage message. Does not implicitly {@link textsecure.KeyExchangeMessage.verify|verify} messages.
         * @function encode
         * @memberof textsecure.KeyExchangeMessage
         * @static
         * @param {textsecure.IKeyExchangeMessage} message KeyExchangeMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KeyExchangeMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.baseKey != null && Object.hasOwnProperty.call(message, "baseKey"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.baseKey);
            if (message.ephemeralKey != null && Object.hasOwnProperty.call(message, "ephemeralKey"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.ephemeralKey);
            if (message.identityKey != null && Object.hasOwnProperty.call(message, "identityKey"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.identityKey);
            if (message.baseKeySignature != null && Object.hasOwnProperty.call(message, "baseKeySignature"))
                writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.baseKeySignature);
            return writer;
        };

        /**
         * Encodes the specified KeyExchangeMessage message, length delimited. Does not implicitly {@link textsecure.KeyExchangeMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof textsecure.KeyExchangeMessage
         * @static
         * @param {textsecure.IKeyExchangeMessage} message KeyExchangeMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KeyExchangeMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a KeyExchangeMessage message from the specified reader or buffer.
         * @function decode
         * @memberof textsecure.KeyExchangeMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {textsecure.KeyExchangeMessage} KeyExchangeMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KeyExchangeMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.textsecure.KeyExchangeMessage();
            while (reader.pos < end) {
                let tag = reader.uint32();
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
        };

        /**
         * Decodes a KeyExchangeMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof textsecure.KeyExchangeMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {textsecure.KeyExchangeMessage} KeyExchangeMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KeyExchangeMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a KeyExchangeMessage message.
         * @function verify
         * @memberof textsecure.KeyExchangeMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        KeyExchangeMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.baseKey != null && message.hasOwnProperty("baseKey"))
                if (!(message.baseKey && typeof message.baseKey.length === "number" || $util.isString(message.baseKey)))
                    return "baseKey: buffer expected";
            if (message.ephemeralKey != null && message.hasOwnProperty("ephemeralKey"))
                if (!(message.ephemeralKey && typeof message.ephemeralKey.length === "number" || $util.isString(message.ephemeralKey)))
                    return "ephemeralKey: buffer expected";
            if (message.identityKey != null && message.hasOwnProperty("identityKey"))
                if (!(message.identityKey && typeof message.identityKey.length === "number" || $util.isString(message.identityKey)))
                    return "identityKey: buffer expected";
            if (message.baseKeySignature != null && message.hasOwnProperty("baseKeySignature"))
                if (!(message.baseKeySignature && typeof message.baseKeySignature.length === "number" || $util.isString(message.baseKeySignature)))
                    return "baseKeySignature: buffer expected";
            return null;
        };

        /**
         * Creates a KeyExchangeMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof textsecure.KeyExchangeMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {textsecure.KeyExchangeMessage} KeyExchangeMessage
         */
        KeyExchangeMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.textsecure.KeyExchangeMessage)
                return object;
            let message = new $root.textsecure.KeyExchangeMessage();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.baseKey != null)
                if (typeof object.baseKey === "string")
                    $util.base64.decode(object.baseKey, message.baseKey = $util.newBuffer($util.base64.length(object.baseKey)), 0);
                else if (object.baseKey.length)
                    message.baseKey = object.baseKey;
            if (object.ephemeralKey != null)
                if (typeof object.ephemeralKey === "string")
                    $util.base64.decode(object.ephemeralKey, message.ephemeralKey = $util.newBuffer($util.base64.length(object.ephemeralKey)), 0);
                else if (object.ephemeralKey.length)
                    message.ephemeralKey = object.ephemeralKey;
            if (object.identityKey != null)
                if (typeof object.identityKey === "string")
                    $util.base64.decode(object.identityKey, message.identityKey = $util.newBuffer($util.base64.length(object.identityKey)), 0);
                else if (object.identityKey.length)
                    message.identityKey = object.identityKey;
            if (object.baseKeySignature != null)
                if (typeof object.baseKeySignature === "string")
                    $util.base64.decode(object.baseKeySignature, message.baseKeySignature = $util.newBuffer($util.base64.length(object.baseKeySignature)), 0);
                else if (object.baseKeySignature.length)
                    message.baseKeySignature = object.baseKeySignature;
            return message;
        };

        /**
         * Creates a plain object from a KeyExchangeMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof textsecure.KeyExchangeMessage
         * @static
         * @param {textsecure.KeyExchangeMessage} message KeyExchangeMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        KeyExchangeMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = 0;
                if (options.bytes === String)
                    object.baseKey = "";
                else {
                    object.baseKey = [];
                    if (options.bytes !== Array)
                        object.baseKey = $util.newBuffer(object.baseKey);
                }
                if (options.bytes === String)
                    object.ephemeralKey = "";
                else {
                    object.ephemeralKey = [];
                    if (options.bytes !== Array)
                        object.ephemeralKey = $util.newBuffer(object.ephemeralKey);
                }
                if (options.bytes === String)
                    object.identityKey = "";
                else {
                    object.identityKey = [];
                    if (options.bytes !== Array)
                        object.identityKey = $util.newBuffer(object.identityKey);
                }
                if (options.bytes === String)
                    object.baseKeySignature = "";
                else {
                    object.baseKeySignature = [];
                    if (options.bytes !== Array)
                        object.baseKeySignature = $util.newBuffer(object.baseKeySignature);
                }
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.baseKey != null && message.hasOwnProperty("baseKey"))
                object.baseKey = options.bytes === String ? $util.base64.encode(message.baseKey, 0, message.baseKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.baseKey) : message.baseKey;
            if (message.ephemeralKey != null && message.hasOwnProperty("ephemeralKey"))
                object.ephemeralKey = options.bytes === String ? $util.base64.encode(message.ephemeralKey, 0, message.ephemeralKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.ephemeralKey) : message.ephemeralKey;
            if (message.identityKey != null && message.hasOwnProperty("identityKey"))
                object.identityKey = options.bytes === String ? $util.base64.encode(message.identityKey, 0, message.identityKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.identityKey) : message.identityKey;
            if (message.baseKeySignature != null && message.hasOwnProperty("baseKeySignature"))
                object.baseKeySignature = options.bytes === String ? $util.base64.encode(message.baseKeySignature, 0, message.baseKeySignature.length) : options.bytes === Array ? Array.prototype.slice.call(message.baseKeySignature) : message.baseKeySignature;
            return object;
        };

        /**
         * Converts this KeyExchangeMessage to JSON.
         * @function toJSON
         * @memberof textsecure.KeyExchangeMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        KeyExchangeMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return KeyExchangeMessage;
    })();

    textsecure.IncomingPushMessageSignal = (function() {

        /**
         * Properties of an IncomingPushMessageSignal.
         * @memberof textsecure
         * @interface IIncomingPushMessageSignal
         * @property {textsecure.IncomingPushMessageSignal.Type|null} [type] IncomingPushMessageSignal type
         * @property {string|null} [source] IncomingPushMessageSignal source
         * @property {number|null} [sourceDevice] IncomingPushMessageSignal sourceDevice
         * @property {string|null} [relay] IncomingPushMessageSignal relay
         * @property {number|Long|null} [timestamp] IncomingPushMessageSignal timestamp
         * @property {Uint8Array|null} [message] IncomingPushMessageSignal message
         */

        /**
         * Constructs a new IncomingPushMessageSignal.
         * @memberof textsecure
         * @classdesc Represents an IncomingPushMessageSignal.
         * @implements IIncomingPushMessageSignal
         * @constructor
         * @param {textsecure.IIncomingPushMessageSignal=} [properties] Properties to set
         */
        function IncomingPushMessageSignal(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * IncomingPushMessageSignal type.
         * @member {textsecure.IncomingPushMessageSignal.Type} type
         * @memberof textsecure.IncomingPushMessageSignal
         * @instance
         */
        IncomingPushMessageSignal.prototype.type = 0;

        /**
         * IncomingPushMessageSignal source.
         * @member {string} source
         * @memberof textsecure.IncomingPushMessageSignal
         * @instance
         */
        IncomingPushMessageSignal.prototype.source = "";

        /**
         * IncomingPushMessageSignal sourceDevice.
         * @member {number} sourceDevice
         * @memberof textsecure.IncomingPushMessageSignal
         * @instance
         */
        IncomingPushMessageSignal.prototype.sourceDevice = 0;

        /**
         * IncomingPushMessageSignal relay.
         * @member {string} relay
         * @memberof textsecure.IncomingPushMessageSignal
         * @instance
         */
        IncomingPushMessageSignal.prototype.relay = "";

        /**
         * IncomingPushMessageSignal timestamp.
         * @member {number|Long} timestamp
         * @memberof textsecure.IncomingPushMessageSignal
         * @instance
         */
        IncomingPushMessageSignal.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * IncomingPushMessageSignal message.
         * @member {Uint8Array} message
         * @memberof textsecure.IncomingPushMessageSignal
         * @instance
         */
        IncomingPushMessageSignal.prototype.message = $util.newBuffer([]);

        /**
         * Creates a new IncomingPushMessageSignal instance using the specified properties.
         * @function create
         * @memberof textsecure.IncomingPushMessageSignal
         * @static
         * @param {textsecure.IIncomingPushMessageSignal=} [properties] Properties to set
         * @returns {textsecure.IncomingPushMessageSignal} IncomingPushMessageSignal instance
         */
        IncomingPushMessageSignal.create = function create(properties) {
            return new IncomingPushMessageSignal(properties);
        };

        /**
         * Encodes the specified IncomingPushMessageSignal message. Does not implicitly {@link textsecure.IncomingPushMessageSignal.verify|verify} messages.
         * @function encode
         * @memberof textsecure.IncomingPushMessageSignal
         * @static
         * @param {textsecure.IIncomingPushMessageSignal} message IncomingPushMessageSignal message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IncomingPushMessageSignal.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.source != null && Object.hasOwnProperty.call(message, "source"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.source);
            if (message.relay != null && Object.hasOwnProperty.call(message, "relay"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.relay);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.timestamp);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.message);
            if (message.sourceDevice != null && Object.hasOwnProperty.call(message, "sourceDevice"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.sourceDevice);
            return writer;
        };

        /**
         * Encodes the specified IncomingPushMessageSignal message, length delimited. Does not implicitly {@link textsecure.IncomingPushMessageSignal.verify|verify} messages.
         * @function encodeDelimited
         * @memberof textsecure.IncomingPushMessageSignal
         * @static
         * @param {textsecure.IIncomingPushMessageSignal} message IncomingPushMessageSignal message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IncomingPushMessageSignal.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an IncomingPushMessageSignal message from the specified reader or buffer.
         * @function decode
         * @memberof textsecure.IncomingPushMessageSignal
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {textsecure.IncomingPushMessageSignal} IncomingPushMessageSignal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IncomingPushMessageSignal.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.textsecure.IncomingPushMessageSignal();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
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
                    message.timestamp = reader.uint64();
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
        };

        /**
         * Decodes an IncomingPushMessageSignal message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof textsecure.IncomingPushMessageSignal
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {textsecure.IncomingPushMessageSignal} IncomingPushMessageSignal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IncomingPushMessageSignal.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an IncomingPushMessageSignal message.
         * @function verify
         * @memberof textsecure.IncomingPushMessageSignal
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        IncomingPushMessageSignal.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    break;
                }
            if (message.source != null && message.hasOwnProperty("source"))
                if (!$util.isString(message.source))
                    return "source: string expected";
            if (message.sourceDevice != null && message.hasOwnProperty("sourceDevice"))
                if (!$util.isInteger(message.sourceDevice))
                    return "sourceDevice: integer expected";
            if (message.relay != null && message.hasOwnProperty("relay"))
                if (!$util.isString(message.relay))
                    return "relay: string expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!(message.message && typeof message.message.length === "number" || $util.isString(message.message)))
                    return "message: buffer expected";
            return null;
        };

        /**
         * Creates an IncomingPushMessageSignal message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof textsecure.IncomingPushMessageSignal
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {textsecure.IncomingPushMessageSignal} IncomingPushMessageSignal
         */
        IncomingPushMessageSignal.fromObject = function fromObject(object) {
            if (object instanceof $root.textsecure.IncomingPushMessageSignal)
                return object;
            let message = new $root.textsecure.IncomingPushMessageSignal();
            switch (object.type) {
            case "UNKNOWN":
            case 0:
                message.type = 0;
                break;
            case "CIPHERTEXT":
            case 1:
                message.type = 1;
                break;
            case "KEY_EXCHANGE":
            case 2:
                message.type = 2;
                break;
            case "PREKEY_BUNDLE":
            case 3:
                message.type = 3;
                break;
            case "PLAINTEXT":
            case 4:
                message.type = 4;
                break;
            case "RECEIPT":
            case 5:
                message.type = 5;
                break;
            case "PREKEY_BUNDLE_DEVICE_CONTROL":
            case 6:
                message.type = 6;
                break;
            case "DEVICE_CONTROL":
            case 7:
                message.type = 7;
                break;
            }
            if (object.source != null)
                message.source = String(object.source);
            if (object.sourceDevice != null)
                message.sourceDevice = object.sourceDevice >>> 0;
            if (object.relay != null)
                message.relay = String(object.relay);
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = true;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber(true);
            if (object.message != null)
                if (typeof object.message === "string")
                    $util.base64.decode(object.message, message.message = $util.newBuffer($util.base64.length(object.message)), 0);
                else if (object.message.length)
                    message.message = object.message;
            return message;
        };

        /**
         * Creates a plain object from an IncomingPushMessageSignal message. Also converts values to other types if specified.
         * @function toObject
         * @memberof textsecure.IncomingPushMessageSignal
         * @static
         * @param {textsecure.IncomingPushMessageSignal} message IncomingPushMessageSignal
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        IncomingPushMessageSignal.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.type = options.enums === String ? "UNKNOWN" : 0;
                object.source = "";
                object.relay = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.message = "";
                else {
                    object.message = [];
                    if (options.bytes !== Array)
                        object.message = $util.newBuffer(object.message);
                }
                object.sourceDevice = 0;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.textsecure.IncomingPushMessageSignal.Type[message.type] : message.type;
            if (message.source != null && message.hasOwnProperty("source"))
                object.source = message.source;
            if (message.relay != null && message.hasOwnProperty("relay"))
                object.relay = message.relay;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber(true) : message.timestamp;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = options.bytes === String ? $util.base64.encode(message.message, 0, message.message.length) : options.bytes === Array ? Array.prototype.slice.call(message.message) : message.message;
            if (message.sourceDevice != null && message.hasOwnProperty("sourceDevice"))
                object.sourceDevice = message.sourceDevice;
            return object;
        };

        /**
         * Converts this IncomingPushMessageSignal to JSON.
         * @function toJSON
         * @memberof textsecure.IncomingPushMessageSignal
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        IncomingPushMessageSignal.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Type enum.
         * @name textsecure.IncomingPushMessageSignal.Type
         * @enum {number}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} CIPHERTEXT=1 CIPHERTEXT value
         * @property {number} KEY_EXCHANGE=2 KEY_EXCHANGE value
         * @property {number} PREKEY_BUNDLE=3 PREKEY_BUNDLE value
         * @property {number} PLAINTEXT=4 PLAINTEXT value
         * @property {number} RECEIPT=5 RECEIPT value
         * @property {number} PREKEY_BUNDLE_DEVICE_CONTROL=6 PREKEY_BUNDLE_DEVICE_CONTROL value
         * @property {number} DEVICE_CONTROL=7 DEVICE_CONTROL value
         */
        IncomingPushMessageSignal.Type = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "CIPHERTEXT"] = 1;
            values[valuesById[2] = "KEY_EXCHANGE"] = 2;
            values[valuesById[3] = "PREKEY_BUNDLE"] = 3;
            values[valuesById[4] = "PLAINTEXT"] = 4;
            values[valuesById[5] = "RECEIPT"] = 5;
            values[valuesById[6] = "PREKEY_BUNDLE_DEVICE_CONTROL"] = 6;
            values[valuesById[7] = "DEVICE_CONTROL"] = 7;
            return values;
        })();

        return IncomingPushMessageSignal;
    })();

    textsecure.PushMessageContent = (function() {

        /**
         * Properties of a PushMessageContent.
         * @memberof textsecure
         * @interface IPushMessageContent
         * @property {string|null} [body] PushMessageContent body
         * @property {Array.<textsecure.PushMessageContent.IAttachmentPointer>|null} [attachments] PushMessageContent attachments
         * @property {textsecure.PushMessageContent.IGroupContext|null} [group] PushMessageContent group
         * @property {number|null} [flags] PushMessageContent flags
         */

        /**
         * Constructs a new PushMessageContent.
         * @memberof textsecure
         * @classdesc Represents a PushMessageContent.
         * @implements IPushMessageContent
         * @constructor
         * @param {textsecure.IPushMessageContent=} [properties] Properties to set
         */
        function PushMessageContent(properties) {
            this.attachments = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PushMessageContent body.
         * @member {string} body
         * @memberof textsecure.PushMessageContent
         * @instance
         */
        PushMessageContent.prototype.body = "";

        /**
         * PushMessageContent attachments.
         * @member {Array.<textsecure.PushMessageContent.IAttachmentPointer>} attachments
         * @memberof textsecure.PushMessageContent
         * @instance
         */
        PushMessageContent.prototype.attachments = $util.emptyArray;

        /**
         * PushMessageContent group.
         * @member {textsecure.PushMessageContent.IGroupContext|null|undefined} group
         * @memberof textsecure.PushMessageContent
         * @instance
         */
        PushMessageContent.prototype.group = null;

        /**
         * PushMessageContent flags.
         * @member {number} flags
         * @memberof textsecure.PushMessageContent
         * @instance
         */
        PushMessageContent.prototype.flags = 0;

        /**
         * Creates a new PushMessageContent instance using the specified properties.
         * @function create
         * @memberof textsecure.PushMessageContent
         * @static
         * @param {textsecure.IPushMessageContent=} [properties] Properties to set
         * @returns {textsecure.PushMessageContent} PushMessageContent instance
         */
        PushMessageContent.create = function create(properties) {
            return new PushMessageContent(properties);
        };

        /**
         * Encodes the specified PushMessageContent message. Does not implicitly {@link textsecure.PushMessageContent.verify|verify} messages.
         * @function encode
         * @memberof textsecure.PushMessageContent
         * @static
         * @param {textsecure.IPushMessageContent} message PushMessageContent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PushMessageContent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.body != null && Object.hasOwnProperty.call(message, "body"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.body);
            if (message.attachments != null && message.attachments.length)
                for (let i = 0; i < message.attachments.length; ++i)
                    $root.textsecure.PushMessageContent.AttachmentPointer.encode(message.attachments[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.group != null && Object.hasOwnProperty.call(message, "group"))
                $root.textsecure.PushMessageContent.GroupContext.encode(message.group, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.flags != null && Object.hasOwnProperty.call(message, "flags"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.flags);
            return writer;
        };

        /**
         * Encodes the specified PushMessageContent message, length delimited. Does not implicitly {@link textsecure.PushMessageContent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof textsecure.PushMessageContent
         * @static
         * @param {textsecure.IPushMessageContent} message PushMessageContent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PushMessageContent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PushMessageContent message from the specified reader or buffer.
         * @function decode
         * @memberof textsecure.PushMessageContent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {textsecure.PushMessageContent} PushMessageContent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PushMessageContent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.textsecure.PushMessageContent();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.body = reader.string();
                    break;
                case 2:
                    if (!(message.attachments && message.attachments.length))
                        message.attachments = [];
                    message.attachments.push($root.textsecure.PushMessageContent.AttachmentPointer.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.group = $root.textsecure.PushMessageContent.GroupContext.decode(reader, reader.uint32());
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
        };

        /**
         * Decodes a PushMessageContent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof textsecure.PushMessageContent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {textsecure.PushMessageContent} PushMessageContent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PushMessageContent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PushMessageContent message.
         * @function verify
         * @memberof textsecure.PushMessageContent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PushMessageContent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.body != null && message.hasOwnProperty("body"))
                if (!$util.isString(message.body))
                    return "body: string expected";
            if (message.attachments != null && message.hasOwnProperty("attachments")) {
                if (!Array.isArray(message.attachments))
                    return "attachments: array expected";
                for (let i = 0; i < message.attachments.length; ++i) {
                    let error = $root.textsecure.PushMessageContent.AttachmentPointer.verify(message.attachments[i]);
                    if (error)
                        return "attachments." + error;
                }
            }
            if (message.group != null && message.hasOwnProperty("group")) {
                let error = $root.textsecure.PushMessageContent.GroupContext.verify(message.group);
                if (error)
                    return "group." + error;
            }
            if (message.flags != null && message.hasOwnProperty("flags"))
                if (!$util.isInteger(message.flags))
                    return "flags: integer expected";
            return null;
        };

        /**
         * Creates a PushMessageContent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof textsecure.PushMessageContent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {textsecure.PushMessageContent} PushMessageContent
         */
        PushMessageContent.fromObject = function fromObject(object) {
            if (object instanceof $root.textsecure.PushMessageContent)
                return object;
            let message = new $root.textsecure.PushMessageContent();
            if (object.body != null)
                message.body = String(object.body);
            if (object.attachments) {
                if (!Array.isArray(object.attachments))
                    throw TypeError(".textsecure.PushMessageContent.attachments: array expected");
                message.attachments = [];
                for (let i = 0; i < object.attachments.length; ++i) {
                    if (typeof object.attachments[i] !== "object")
                        throw TypeError(".textsecure.PushMessageContent.attachments: object expected");
                    message.attachments[i] = $root.textsecure.PushMessageContent.AttachmentPointer.fromObject(object.attachments[i]);
                }
            }
            if (object.group != null) {
                if (typeof object.group !== "object")
                    throw TypeError(".textsecure.PushMessageContent.group: object expected");
                message.group = $root.textsecure.PushMessageContent.GroupContext.fromObject(object.group);
            }
            if (object.flags != null)
                message.flags = object.flags >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a PushMessageContent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof textsecure.PushMessageContent
         * @static
         * @param {textsecure.PushMessageContent} message PushMessageContent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PushMessageContent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.attachments = [];
            if (options.defaults) {
                object.body = "";
                object.group = null;
                object.flags = 0;
            }
            if (message.body != null && message.hasOwnProperty("body"))
                object.body = message.body;
            if (message.attachments && message.attachments.length) {
                object.attachments = [];
                for (let j = 0; j < message.attachments.length; ++j)
                    object.attachments[j] = $root.textsecure.PushMessageContent.AttachmentPointer.toObject(message.attachments[j], options);
            }
            if (message.group != null && message.hasOwnProperty("group"))
                object.group = $root.textsecure.PushMessageContent.GroupContext.toObject(message.group, options);
            if (message.flags != null && message.hasOwnProperty("flags"))
                object.flags = message.flags;
            return object;
        };

        /**
         * Converts this PushMessageContent to JSON.
         * @function toJSON
         * @memberof textsecure.PushMessageContent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PushMessageContent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        PushMessageContent.AttachmentPointer = (function() {

            /**
             * Properties of an AttachmentPointer.
             * @memberof textsecure.PushMessageContent
             * @interface IAttachmentPointer
             * @property {number|Long|null} [id] AttachmentPointer id
             * @property {string|null} [contentType] AttachmentPointer contentType
             * @property {Uint8Array|null} [key] AttachmentPointer key
             */

            /**
             * Constructs a new AttachmentPointer.
             * @memberof textsecure.PushMessageContent
             * @classdesc Represents an AttachmentPointer.
             * @implements IAttachmentPointer
             * @constructor
             * @param {textsecure.PushMessageContent.IAttachmentPointer=} [properties] Properties to set
             */
            function AttachmentPointer(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AttachmentPointer id.
             * @member {number|Long} id
             * @memberof textsecure.PushMessageContent.AttachmentPointer
             * @instance
             */
            AttachmentPointer.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * AttachmentPointer contentType.
             * @member {string} contentType
             * @memberof textsecure.PushMessageContent.AttachmentPointer
             * @instance
             */
            AttachmentPointer.prototype.contentType = "";

            /**
             * AttachmentPointer key.
             * @member {Uint8Array} key
             * @memberof textsecure.PushMessageContent.AttachmentPointer
             * @instance
             */
            AttachmentPointer.prototype.key = $util.newBuffer([]);

            /**
             * Creates a new AttachmentPointer instance using the specified properties.
             * @function create
             * @memberof textsecure.PushMessageContent.AttachmentPointer
             * @static
             * @param {textsecure.PushMessageContent.IAttachmentPointer=} [properties] Properties to set
             * @returns {textsecure.PushMessageContent.AttachmentPointer} AttachmentPointer instance
             */
            AttachmentPointer.create = function create(properties) {
                return new AttachmentPointer(properties);
            };

            /**
             * Encodes the specified AttachmentPointer message. Does not implicitly {@link textsecure.PushMessageContent.AttachmentPointer.verify|verify} messages.
             * @function encode
             * @memberof textsecure.PushMessageContent.AttachmentPointer
             * @static
             * @param {textsecure.PushMessageContent.IAttachmentPointer} message AttachmentPointer message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AttachmentPointer.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.id);
                if (message.contentType != null && Object.hasOwnProperty.call(message, "contentType"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.contentType);
                if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.key);
                return writer;
            };

            /**
             * Encodes the specified AttachmentPointer message, length delimited. Does not implicitly {@link textsecure.PushMessageContent.AttachmentPointer.verify|verify} messages.
             * @function encodeDelimited
             * @memberof textsecure.PushMessageContent.AttachmentPointer
             * @static
             * @param {textsecure.PushMessageContent.IAttachmentPointer} message AttachmentPointer message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AttachmentPointer.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an AttachmentPointer message from the specified reader or buffer.
             * @function decode
             * @memberof textsecure.PushMessageContent.AttachmentPointer
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {textsecure.PushMessageContent.AttachmentPointer} AttachmentPointer
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AttachmentPointer.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.textsecure.PushMessageContent.AttachmentPointer();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.fixed64();
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
            };

            /**
             * Decodes an AttachmentPointer message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof textsecure.PushMessageContent.AttachmentPointer
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {textsecure.PushMessageContent.AttachmentPointer} AttachmentPointer
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AttachmentPointer.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AttachmentPointer message.
             * @function verify
             * @memberof textsecure.PushMessageContent.AttachmentPointer
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AttachmentPointer.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                        return "id: integer|Long expected";
                if (message.contentType != null && message.hasOwnProperty("contentType"))
                    if (!$util.isString(message.contentType))
                        return "contentType: string expected";
                if (message.key != null && message.hasOwnProperty("key"))
                    if (!(message.key && typeof message.key.length === "number" || $util.isString(message.key)))
                        return "key: buffer expected";
                return null;
            };

            /**
             * Creates an AttachmentPointer message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof textsecure.PushMessageContent.AttachmentPointer
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {textsecure.PushMessageContent.AttachmentPointer} AttachmentPointer
             */
            AttachmentPointer.fromObject = function fromObject(object) {
                if (object instanceof $root.textsecure.PushMessageContent.AttachmentPointer)
                    return object;
                let message = new $root.textsecure.PushMessageContent.AttachmentPointer();
                if (object.id != null)
                    if ($util.Long)
                        (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                    else if (typeof object.id === "string")
                        message.id = parseInt(object.id, 10);
                    else if (typeof object.id === "number")
                        message.id = object.id;
                    else if (typeof object.id === "object")
                        message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
                if (object.contentType != null)
                    message.contentType = String(object.contentType);
                if (object.key != null)
                    if (typeof object.key === "string")
                        $util.base64.decode(object.key, message.key = $util.newBuffer($util.base64.length(object.key)), 0);
                    else if (object.key.length)
                        message.key = object.key;
                return message;
            };

            /**
             * Creates a plain object from an AttachmentPointer message. Also converts values to other types if specified.
             * @function toObject
             * @memberof textsecure.PushMessageContent.AttachmentPointer
             * @static
             * @param {textsecure.PushMessageContent.AttachmentPointer} message AttachmentPointer
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AttachmentPointer.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.id = options.longs === String ? "0" : 0;
                    object.contentType = "";
                    if (options.bytes === String)
                        object.key = "";
                    else {
                        object.key = [];
                        if (options.bytes !== Array)
                            object.key = $util.newBuffer(object.key);
                    }
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    if (typeof message.id === "number")
                        object.id = options.longs === String ? String(message.id) : message.id;
                    else
                        object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
                if (message.contentType != null && message.hasOwnProperty("contentType"))
                    object.contentType = message.contentType;
                if (message.key != null && message.hasOwnProperty("key"))
                    object.key = options.bytes === String ? $util.base64.encode(message.key, 0, message.key.length) : options.bytes === Array ? Array.prototype.slice.call(message.key) : message.key;
                return object;
            };

            /**
             * Converts this AttachmentPointer to JSON.
             * @function toJSON
             * @memberof textsecure.PushMessageContent.AttachmentPointer
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AttachmentPointer.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return AttachmentPointer;
        })();

        PushMessageContent.GroupContext = (function() {

            /**
             * Properties of a GroupContext.
             * @memberof textsecure.PushMessageContent
             * @interface IGroupContext
             * @property {Uint8Array|null} [id] GroupContext id
             * @property {textsecure.PushMessageContent.GroupContext.Type|null} [type] GroupContext type
             * @property {string|null} [name] GroupContext name
             * @property {Array.<string>|null} [members] GroupContext members
             * @property {textsecure.PushMessageContent.IAttachmentPointer|null} [avatar] GroupContext avatar
             */

            /**
             * Constructs a new GroupContext.
             * @memberof textsecure.PushMessageContent
             * @classdesc Represents a GroupContext.
             * @implements IGroupContext
             * @constructor
             * @param {textsecure.PushMessageContent.IGroupContext=} [properties] Properties to set
             */
            function GroupContext(properties) {
                this.members = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GroupContext id.
             * @member {Uint8Array} id
             * @memberof textsecure.PushMessageContent.GroupContext
             * @instance
             */
            GroupContext.prototype.id = $util.newBuffer([]);

            /**
             * GroupContext type.
             * @member {textsecure.PushMessageContent.GroupContext.Type} type
             * @memberof textsecure.PushMessageContent.GroupContext
             * @instance
             */
            GroupContext.prototype.type = 0;

            /**
             * GroupContext name.
             * @member {string} name
             * @memberof textsecure.PushMessageContent.GroupContext
             * @instance
             */
            GroupContext.prototype.name = "";

            /**
             * GroupContext members.
             * @member {Array.<string>} members
             * @memberof textsecure.PushMessageContent.GroupContext
             * @instance
             */
            GroupContext.prototype.members = $util.emptyArray;

            /**
             * GroupContext avatar.
             * @member {textsecure.PushMessageContent.IAttachmentPointer|null|undefined} avatar
             * @memberof textsecure.PushMessageContent.GroupContext
             * @instance
             */
            GroupContext.prototype.avatar = null;

            /**
             * Creates a new GroupContext instance using the specified properties.
             * @function create
             * @memberof textsecure.PushMessageContent.GroupContext
             * @static
             * @param {textsecure.PushMessageContent.IGroupContext=} [properties] Properties to set
             * @returns {textsecure.PushMessageContent.GroupContext} GroupContext instance
             */
            GroupContext.create = function create(properties) {
                return new GroupContext(properties);
            };

            /**
             * Encodes the specified GroupContext message. Does not implicitly {@link textsecure.PushMessageContent.GroupContext.verify|verify} messages.
             * @function encode
             * @memberof textsecure.PushMessageContent.GroupContext
             * @static
             * @param {textsecure.PushMessageContent.IGroupContext} message GroupContext message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GroupContext.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.id);
                if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
                if (message.members != null && message.members.length)
                    for (let i = 0; i < message.members.length; ++i)
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.members[i]);
                if (message.avatar != null && Object.hasOwnProperty.call(message, "avatar"))
                    $root.textsecure.PushMessageContent.AttachmentPointer.encode(message.avatar, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified GroupContext message, length delimited. Does not implicitly {@link textsecure.PushMessageContent.GroupContext.verify|verify} messages.
             * @function encodeDelimited
             * @memberof textsecure.PushMessageContent.GroupContext
             * @static
             * @param {textsecure.PushMessageContent.IGroupContext} message GroupContext message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GroupContext.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GroupContext message from the specified reader or buffer.
             * @function decode
             * @memberof textsecure.PushMessageContent.GroupContext
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {textsecure.PushMessageContent.GroupContext} GroupContext
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GroupContext.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.textsecure.PushMessageContent.GroupContext();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.bytes();
                        break;
                    case 2:
                        message.type = reader.int32();
                        break;
                    case 3:
                        message.name = reader.string();
                        break;
                    case 4:
                        if (!(message.members && message.members.length))
                            message.members = [];
                        message.members.push(reader.string());
                        break;
                    case 5:
                        message.avatar = $root.textsecure.PushMessageContent.AttachmentPointer.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GroupContext message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof textsecure.PushMessageContent.GroupContext
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {textsecure.PushMessageContent.GroupContext} GroupContext
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GroupContext.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GroupContext message.
             * @function verify
             * @memberof textsecure.PushMessageContent.GroupContext
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GroupContext.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!(message.id && typeof message.id.length === "number" || $util.isString(message.id)))
                        return "id: buffer expected";
                if (message.type != null && message.hasOwnProperty("type"))
                    switch (message.type) {
                    default:
                        return "type: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.members != null && message.hasOwnProperty("members")) {
                    if (!Array.isArray(message.members))
                        return "members: array expected";
                    for (let i = 0; i < message.members.length; ++i)
                        if (!$util.isString(message.members[i]))
                            return "members: string[] expected";
                }
                if (message.avatar != null && message.hasOwnProperty("avatar")) {
                    let error = $root.textsecure.PushMessageContent.AttachmentPointer.verify(message.avatar);
                    if (error)
                        return "avatar." + error;
                }
                return null;
            };

            /**
             * Creates a GroupContext message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof textsecure.PushMessageContent.GroupContext
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {textsecure.PushMessageContent.GroupContext} GroupContext
             */
            GroupContext.fromObject = function fromObject(object) {
                if (object instanceof $root.textsecure.PushMessageContent.GroupContext)
                    return object;
                let message = new $root.textsecure.PushMessageContent.GroupContext();
                if (object.id != null)
                    if (typeof object.id === "string")
                        $util.base64.decode(object.id, message.id = $util.newBuffer($util.base64.length(object.id)), 0);
                    else if (object.id.length)
                        message.id = object.id;
                switch (object.type) {
                case "UNKNOWN":
                case 0:
                    message.type = 0;
                    break;
                case "UPDATE":
                case 1:
                    message.type = 1;
                    break;
                case "DELIVER":
                case 2:
                    message.type = 2;
                    break;
                case "QUIT":
                case 3:
                    message.type = 3;
                    break;
                }
                if (object.name != null)
                    message.name = String(object.name);
                if (object.members) {
                    if (!Array.isArray(object.members))
                        throw TypeError(".textsecure.PushMessageContent.GroupContext.members: array expected");
                    message.members = [];
                    for (let i = 0; i < object.members.length; ++i)
                        message.members[i] = String(object.members[i]);
                }
                if (object.avatar != null) {
                    if (typeof object.avatar !== "object")
                        throw TypeError(".textsecure.PushMessageContent.GroupContext.avatar: object expected");
                    message.avatar = $root.textsecure.PushMessageContent.AttachmentPointer.fromObject(object.avatar);
                }
                return message;
            };

            /**
             * Creates a plain object from a GroupContext message. Also converts values to other types if specified.
             * @function toObject
             * @memberof textsecure.PushMessageContent.GroupContext
             * @static
             * @param {textsecure.PushMessageContent.GroupContext} message GroupContext
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GroupContext.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.members = [];
                if (options.defaults) {
                    if (options.bytes === String)
                        object.id = "";
                    else {
                        object.id = [];
                        if (options.bytes !== Array)
                            object.id = $util.newBuffer(object.id);
                    }
                    object.type = options.enums === String ? "UNKNOWN" : 0;
                    object.name = "";
                    object.avatar = null;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = options.bytes === String ? $util.base64.encode(message.id, 0, message.id.length) : options.bytes === Array ? Array.prototype.slice.call(message.id) : message.id;
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = options.enums === String ? $root.textsecure.PushMessageContent.GroupContext.Type[message.type] : message.type;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.members && message.members.length) {
                    object.members = [];
                    for (let j = 0; j < message.members.length; ++j)
                        object.members[j] = message.members[j];
                }
                if (message.avatar != null && message.hasOwnProperty("avatar"))
                    object.avatar = $root.textsecure.PushMessageContent.AttachmentPointer.toObject(message.avatar, options);
                return object;
            };

            /**
             * Converts this GroupContext to JSON.
             * @function toJSON
             * @memberof textsecure.PushMessageContent.GroupContext
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GroupContext.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Type enum.
             * @name textsecure.PushMessageContent.GroupContext.Type
             * @enum {number}
             * @property {number} UNKNOWN=0 UNKNOWN value
             * @property {number} UPDATE=1 UPDATE value
             * @property {number} DELIVER=2 DELIVER value
             * @property {number} QUIT=3 QUIT value
             */
            GroupContext.Type = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "UPDATE"] = 1;
                values[valuesById[2] = "DELIVER"] = 2;
                values[valuesById[3] = "QUIT"] = 3;
                return values;
            })();

            return GroupContext;
        })();

        /**
         * Flags enum.
         * @name textsecure.PushMessageContent.Flags
         * @enum {number}
         * @property {number} END_SESSION=1 END_SESSION value
         */
        PushMessageContent.Flags = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "END_SESSION"] = 1;
            return values;
        })();

        return PushMessageContent;
    })();

    return textsecure;
})();

export { $root as default };
