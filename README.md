# Advertisement App

- An advertisement listing, adding, favoriting, and deleting platform.

## Description

`Advertisement App` is a platform designed for the listing, addition, favoriting, and deletion of advertisements. Whether you're a business looking to list your products or an individual aiming to advertise your services, `Advertisement App` provides a seamless and efficient experience.

## Technologies Used

- **Next.js 13(App Router)**: Next.js is a React framework for building full-stack web applications.
- **CSS Modules**: CSS Modules is a CSS file in which all class names and animation names are scoped locally by default.
- **SASS**: CSS preprocessor.
- **Prisma**: Next-generation ORM for Node.js and TypeScript.
- **React**: A JavaScript library for building user interfaces.
- **Docker**: A platform for developing, shipping, and running applications in containers.
- **PostgreSQL**: Open source object-relational database system.
- **TypeScript**: A strongly typed superset of JavaScript.
- **Cloudinary (via next-cloudinary)**: Cloud-based image and video management.
- **moment**: Libraries to parse, validate, manipulate, and display dates and times in JavaScript.
- **classNames**: A simple JavaScript utility for conditionally joining classNames together.
- **dotenv**: Loads environment variables from a `.env` file into `process.env`.
- **react-hook-form**: Hooks for forms validation without the re-renders.
- **yup**: A JavaScript schema builder for value parsing and validation.
- **Supabase**: Open source Firebase alternative which provides PostgreSQL database hosting.
- **Vercel**: Cloud platform for static sites and Serverless Functions.

- Icons are from [Heroicons](https://heroicons.com/).

## Getting Started

### Dependencies

- Node.js
- `pnpm` and `docker` installed. Note: While `yarn` or `npm` can also be used, the commands must be changed accordingly.

### Installing

1. Clone the repository to your local machine.

```bash
git clone git@github.com:damla/ad-app.git
cd ad-app
```

2. Install the dependencies:

```bash
pnpm install
```

3. Start a local PostgreSQL database using Docker:

```bash
docker compose up
```

4. Update the database:

```bash
pnpm prisma generate && pnpm prisma db push && pnpm prisma db seed
```

### Executing program

- To run the project in development mode:

```bash
pnpm dev
```

- To build and run the project in production mode:

```bash
pnpm build && pnpm start
```

## Help

Ensure `pnpm` and `docker` are properly installed. If you encounter any issues, check if the database is properly set up and seeded. Remember, if you're using `yarn` or `npm`, adjust the commands accordingly.
