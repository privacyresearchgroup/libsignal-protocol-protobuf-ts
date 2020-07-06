#!/bin/bash

./node_modules/protobufjs/bin/pbjs -t static-module -w es6 -o ./src/generated/messages.js ./protos/WhisperTextProtocol.proto
./node_modules/protobufjs/bin/pbts -o ./src/generated/messages.d.ts ./src/generated/messages.js