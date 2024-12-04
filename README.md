# CRUK technical exercise (React)

## Sameer's comments

### Vercel deployment

A live version of this app can be viewed on Vercel:

[VERCEL LINK](https://react-exercise-cr.vercel.app/)

### Project board

A GitHub project board was used to breakdown and keep track of tasks, and to document future tasks if time permitted:

[PROJECT BOARD](https://github.com/users/ThatSameer/projects/4/views/1)

## Task details

- We will be testing your ability to understand an existing React/Typescript codebase, find what is already built, and what is not.
- You will be building a form using the CRUK React Component Library controlled by ReactHookForm which uses a Zod validation schema.
- This form which will fetch items from the NASA Library API. The "Form fields" section below describes the fields and their validation which should modify the search query.
- The media returned should be displayed in list below the form, these may be images, video, or audio clips. It is up to you how you display these
- The user should only see the first 10 items on the page. If you have time enabling pagination is a stretch target.
- Code must be clean and production ready, quality is better than quantity.
- You can test your application with Playwright, see src/test folder for example tests and see all the scripts available in the package.json
- Feel free to edit this readme or add a new readme file for any additional information, such as what you might do improve your application in the future.
- Please do not attempt to push to this repo, please create your own fork.

## Tools to be used

- NextJS (server) https://nextjs.org/docs
- NASA Images and Video Library API https://api.nasa.gov/
- CRUK React Component Library Storybook site: https://master.d28a8la187lo73.amplifyapp.com/
- CRUK React Component Library Package: https://www.npmjs.com/package/@cruk/cruk-react-components
- Styled Components (what the CRUK Component Library was built with) https://styled-components.com/docs
- React Hook Form (forms): https://react-hook-form.com/
- Zod (validation) https://zod.dev/

## Form fields

This form has 3 fields and error messages should appear below each field.

### Keywords field

| Attribute | Value    |
| :-------- | :------- |
| Label     | Keywords |
| Name      | keywords |
| Required  | true     |
| Type      | text     |
| Default   | ""       |

### Keywords validation

| Type       | Value | Message                                     |
| :--------- | :---- | :------------------------------------------ |
| min length | 2     | "keywords must have at least 2 characters." |
| max length | 50    | "keywords must have at most 50 characters." |

An error message should appear below the field

### Media type field

| Attribute | Value                       |
| :-------- | :-------------------------- |
| Label     | Media type                  |
| Name      | mediaType                   |
| Required  | true                        |
| Type      | select                      |
| Values    | [“audio”, “video”, “image”] |
| Default   | ""                          |

### Media types validation

| Type     | Value             | Message                       |
| :------- | :---------------- | :---------------------------- |
| if unset | null or undefined | "Please select a media type." |

### Year start field

| Attribute | Value      |
| :-------- | :--------- |
| Label     | Year start |
| Name      | yearStart  |
| Required  | false      |
| Type      | text       |
| Default   | ""         |

### Year start validation

| Type        | Value                  | Message                                 |
| :---------- | :--------------------- | :-------------------------------------- |
| number type | any non digit charater | "Please enter a valid number."          |
| min         | 1900                   | "Year start must be after 1900."        |
| max         | current year           | "Year start must not be in the future." |

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view your application.

The page auto-updates as you edit the files.

## Testing

To test your code run:

```bash
npm run test:debug
```

This will open up a browser window to show you your test in action
The page will auto-update as you edit files.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
