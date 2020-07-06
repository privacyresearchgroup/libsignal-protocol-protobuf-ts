import { textsecure } from '..'

const ephemeralKey = Uint8Array.from([0, 1, 2, 3, 4])
const ciphertext = Uint8Array.from([5, 6, 7, 8, 9])
test(`Encode/decode round trip`, () => {
    const msg = new textsecure.WhisperMessage({ ephemeralKey, ciphertext, counter: 42, previousCounter: 41 })
    console.log({ msg })
    const encoded = textsecure.WhisperMessage.encode(msg).finish()
    console.log({ encoded })
    const decoded = textsecure.WhisperMessage.decode(encoded)

    console.log({ msg, decoded })
    for (let i = 0; i < 5; ++i) {
        expect(decoded.ephemeralKey[i]).toBe(msg.ephemeralKey[i])
        expect(decoded.ciphertext[i]).toBe(msg.ciphertext[i])
    }
})
