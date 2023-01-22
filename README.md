# api-nodejs-postgres-ts

# environment setup

Clone the repo:

```bash
git clone https://github.com/aldairl/api-nodejs-postgres-ts.git
cd api-nodejs-postgres-ts
```

Set the environment variables:

```bash
cp .env.example .env

# open .env and modify the environment variables (if needed)
```

# commands

### Install the dependencies:

```bash
npm install
```

### Docker:

```bash
# run docker containers in development mode
npm run docker:dev

# run docker containers in production mode
npm run docker:prod

```

### Running locally:

```bash
npm run start:dev
```

Running in production:

```bash
npm run start
```
