#!/bin/bash

./node_modules/protobufjs/bin/pbjs -t static-module -w es6 -o ./generated/messages.js ./protos/WhisperTextProtocol.proto ./protos/PushMessages.proto
./node_modules/protobufjs/bin/pbts -o ./generated/messages.d.ts ./generated/messages.js

cp -r ./generated ./lib

# ./node_modules/protobufjs/bin/pbjs -t static-module -w es6 -o ./src/generated/pushmessages.js ./protos/PushMessages.proto
# ./node_modules/protobufjs/bin/pbts -o ./src/generated/pushmessages.d.ts ./src/generated/pushmessages.js