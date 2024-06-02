
<div align="center">
	<h1 align="center"><a href="https://notes-api-clean-architecture.alexgalhardo.com" target="_blank">notes-api-clean-architecture.alexgalhardo.com</a></h1>
</div>

## Introduction

- A REST Notes API using Clean Architecture with Typescript, Express, Mongodb and Unit & Integration tests.
- This is a updated version of the original:
   - Source code reference: <https://github.com/otaviolemos/thewisepad-core>
   - From the book/course: <https://www.otaviolemos.com.br/>
- This code is a great reference to learn tests and clean architecture principles

## Development Setup Local

1. Clone repository
```bash
git clone https://github.com/AlexGalhardo/notes-api-clean-architecture.alexgalhardo.com
```

2. Enter repository
```bash
cd notes-api-clean-architecture.alexgalhardo.com/
```

3. Run setup.sh
```bash
chmod +x setup.sh && ./setup.sh
```

## Build for deploy
a. Create build
```bash
bun run build
```

b. To test build production locally run:

```bash
bun run start
```

## Tests
Unit Tests:
```bash
bun run test:unit
```

Integration Tests:
```bash
bun run test:integration
```

Coverage Tests:
```bash
bun run test:ci
```

![notes-api-clean-architecture](https://github.com/AlexGalhardo/notes-api-clean-architecture.alexgalhardo.com/assets/19540357/b6b743bc-0d92-4137-895b-b32836c79730)

## API
- You can use the HTTP Requests references inside folder [./rest-client/](./rest-client/)
