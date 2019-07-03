# jest-preset-angular-issue

Reproduction repository for Jest-Preset-Angular issue using newly generated Angular 8 application.

## Issue

Using **Jest-Preset-Angular**, tests fail to retrieve the dependencies injected in a component constructor resulting in the following error:

```
Can't resolve all parameters for AppComponent: (?).
```

The `AppComponent` has a dependency on `AppService` and, although the service is provided in the TestBed configuration and tests run successfully using **Karma**, it fails using **Jest-Preset-Angular** with Angular 8 but it was working with Angular 7.

## Installation

Clone this repository.

```bash
git clone https://github.com/jfcere/jest-preset-angular-issue.git
```

Install dependencies.

```bash
# using yarn
yarn
# OR using npm
npm install
```

## Reproduction Steps

Running tests using built-in **Karma** configuration will succeed for all tests.

```bash
# using yarn
yarn test
# OR using npm
npm run test
```

Running test with **Jest** will result in error.

```bash
# using yarn
yarn jest
# OR using npm
npm run jest
```
