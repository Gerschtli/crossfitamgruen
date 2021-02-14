# Website for CrossFit am Grün

Built on [Gatsby JS](https://www.gatsbyjs.com/) with [netlfiy cms](https://www.netlifycms.org/) as backend hosted as
static site on [netlify](https://www.netlify.com/).

## Netlify Setup

### Forms

To get notified on new contact form submissions, you need to manually register yourself in "Site Settings" > "Forms" >
"Form notifications".

Every submission is visible in "Forms" > "Active forms" > "contact". Be sure to check in "Spam submissions" (visible on
click on "Verified submissions") for false positives because notifications are only sent for verified submissions.

### Identity

Every person which needs a login has to be added in "Identity" > "Invite users". Furthermore, its complete name should
be added after the invitation is sent.

## Local development

```
npm run serve
```

### Build and serve static page locally

```
npm run build
npx gatsby serve
```

### Local git gateway

Run local git proxy

```
npx netlify-cms-proxy-server
```
