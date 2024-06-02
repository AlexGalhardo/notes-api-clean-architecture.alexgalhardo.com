#!/bin/bash
bun install
cp .env.example .env
bun run format
docker-compose down
docker-compose up -d
bun run dev
