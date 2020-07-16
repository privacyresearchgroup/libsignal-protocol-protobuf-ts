import { WhisperMessage, PreKeyWhisperMessage } from '..'
import { PushMessageContentCompatible } from '../push-message-content-compatible'
import { PushMessageContent_Flags } from '../generated/protos/PushMessages'

export function hexToArrayBuffer(str: string): ArrayBuffer {
    const ret = new ArrayBuffer(str.length / 2)
    const array = new Uint8Array(ret)
    for (let i = 0; i < str.length / 2; i++) array[i] = parseInt(str.substr(i * 2, 2), 16)
    return ret
}

const ephemeralKey = Uint8Array.from([0, 1, 2, 3, 4])
const ciphertext = Uint8Array.from([5, 6, 7, 8, 9])
test(`Encode/decode round trip`, () => {
    const msg = WhisperMessage.fromJSON({ ephemeralKey, ciphertext, counter: 42, previousCounter: 41 })

    const encoded = WhisperMessage.encode(msg).finish()

    const decoded = WhisperMessage.decode(encoded)

    for (let i = 0; i < 5; ++i) {
        expect(decoded.ephemeralKey[i]).toBe(msg.ephemeralKey[i])
        expect(decoded.ciphertext[i]).toBe(msg.ciphertext[i])
    }
})

const ciphertextMessage = hexToArrayBuffer(
    '3308c7b899021221058a49fa8a94224aaa8f5873404e01710ff9ef02169a75f90af4fbbc600796e0521a21050a6cf5e075c9970f14862db8a703a6c761f50b5182d17874908940556a22372222d301330a2105883ab58b3eb6db93b32bf91899a5b5175e7b21e96fff2cec02c83dff16ba1b271001180022a001256aae85babf8c0808f75e08bf10a63f7f3aea97324c2583d777f609df493d7d45232c8883c3e1118fbc29b6318a3091ae57fed4f1c54458c6bb832fbb35f24933cb79765d00f4a161e2877a5a21a26592cdb0aa8a2f70f5fbe8c601ecdff0bef1b733d7fd0cb7b7d8fc1e45f79c016c8f90449239ca1a04b374538f2760eef43127ddc9a6439c6ceca5faf5962fb26d7248257d4d5ee3fe4cf8795acc555718558e5317f618828328b25030bec09207'
)

test(`should be prekey message`, () => {
    const encoded = ciphertextMessage.slice(1)
    expect(() => PreKeyWhisperMessage.decode(new Uint8Array(encoded))).toBeTruthy()
})

describe(`Back-compatible PushMessageContent tests`, () => {
    // 0a 00 20 01
    test(`read end session message`, () => {
        const shouldBe = Uint8Array.from([32, 1])
        const proto = PushMessageContentCompatible.decode(shouldBe)

        expect(proto.body).not.toBeDefined()
        expect(proto.flags).toBe(PushMessageContent_Flags.END_SESSION)
    })

    test(`write end session message`, () => {
        const endSessionMessage = PushMessageContentCompatible.fromJSON({})
        endSessionMessage.flags = PushMessageContent_Flags.END_SESSION
        delete endSessionMessage.body

        const enc = PushMessageContentCompatible.encode(endSessionMessage).finish()

        const shouldBe = Uint8Array.from([32, 1])
        expect(enc[0]).toBe(shouldBe[0])
        expect(enc[1]).toBe(shouldBe[1])
        expect(enc.length).toBe(shouldBe.length)
    })

    test(`Empty object throws on encoding`, () => {
        const invalid = PushMessageContentCompatible.fromJSON({})
        delete invalid.body
        delete invalid.flags
        expect(() => PushMessageContentCompatible.encode(invalid).finish()).toThrow('Invalid protobuf')

        const tmp = PushMessageContentCompatible.fromJSON({ body: 'C' })
        console.log({ tmp: PushMessageContentCompatible.encode(tmp).finish() })
    })

    test(`read text message`, () => {
        const shouldBe = Uint8Array.from([10, 1, 67])
        const proto = PushMessageContentCompatible.decode(shouldBe)

        expect(proto.body).toBeDefined()
        expect(proto.body).toBe('C')
    })

    test(`write text message`, () => {
        const endSessionMessage = PushMessageContentCompatible.fromJSON({ body: 'C' })

        const enc = PushMessageContentCompatible.encode(endSessionMessage).finish()

        const shouldBe = Uint8Array.from([10, 1, 67])
        expect(enc[0]).toBe(shouldBe[0])
        expect(enc[1]).toBe(shouldBe[1])
        expect(enc[2]).toBe(shouldBe[2])
        expect(enc.length).toBe(shouldBe.length)
    })
})
