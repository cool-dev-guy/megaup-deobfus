# megaup-deobfus
A POC for educational purpose on obfuscated code reading and simulating the decryption.
`Latest Update : 30/6/2025`

> The code quality might be not that good and may be even optimized,but this was a quick cook up.

Analysis.
---

<p>megaup.cc get's streams using the `/media/{id}` endpoint.
Note that the perfect request only gives correct source.
So once you request they actually note's your `UA` and req `cookie`.
And applies it to the encrypted source.
So along with the 10 in source keys your UA and document.cookie is also used for decryption.</p>

So if you want to decrypt a source.
1. req the `/media/${id}` endpoint with a specific cookie and UA.
2. get the encrypted text from the response and run the decryptor code.

Extras
---
- The `./mega-keys.js` gives the keys currently. Saves it as `keys.json`
- The `./mega-keys-test.js` is a working test script as of 30/6/2025.

@cool-dev-guy
