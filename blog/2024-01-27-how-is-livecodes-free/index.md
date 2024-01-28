---
slug: how-is-livecodes-free
title: How is LiveCodes Free?!
authors: hatem
tags: [free, open-source, sponsor, community]
---

[LiveCodes](https://livecodes.io) is a [feature-rich](https://livecodes.io/docs/features/), [open-source](https://github.com/live-codes/livecodes), [client-side](https://livecodes.io/docs/why#client-side), code playground that supports [80+ languages and frameworks](https://livecodes.io/docs/languages/). Playgrounds can be [embedded](https://livecodes.io/docs/features/embeds) in web pages. A powerful, yet easy-to-use, [SDK](https://livecodes.io/docs/sdk) allows creating and communicating with playgrounds.

Nevertheless, LiveCodes is free, with no subscriptions, no limits to usage, no ads and no account required. It is [MIT-licensed](https://livecodes.io/docs/license) which allows its use, distribution and modification even for commercial projects.

So, how can LiveCodes be free? What is the catch?

In this article we will discuss LiveCodes business model and how it can be sustainable.

<!--truncate-->

:::info TL;DR

High quality, free product → wide adoption → use for profit → [sponsors](https://livecodes.io/docs/sponsor) 🎉

[Win/Win/Win](#winwinwin)!

:::

## LiveCodes is a Developer Tool Not a Hosting Company!

Most other code playgrounds with comparable features and language support are either paid, or have [significant](https://codepen.io/accounts/signup), [progressively](https://blog.replit.com/embeds-are-going-away) [increasing](https://blog.replit.com/update-on-teams-for-education), [limitations](https://www.codesandbox.community/c/api-billing-updates/api-update-and-usage-based-billing) on free plans. Limitations restrict number of users, private projects, compute time to run code, available RAM or CPU, editable playgrounds and more. This is understandable. Servers cost money, and high usage of running code on servers can be expensive.

[LiveCodes](https://livecodes.io) solves this problem by running code on user devices not servers. So, instead of selling VMs and cloud computing, LiveCodes works on the client-side, and runs all the code (including compiling 80+ languages) in the browser. See how [LiveCodes is different](https://livecodes.io/docs/why).

LiveCodes aims to be a developer tool that boosts productivity, enhances [learning new technologies](../2023-08-22-lets-make-learning-frontend-great-again/index.md) and allows the use of [interactive tutorials](../2023-08-04-lets-make-an-interactive-coding-tutorial/index.md) in [teaching](../2023-11-27-livecodes-for-education/index.md), without having to care about spinning servers, maintaining databases, managing scaling or struggling with configuration files.

## Sustainability and Scalability

Sustainability is important. Running costs should not exceed project budget.

With this in mind, here is the current technology stack and services used by LiveCodes and their running costs:

- Code hosting and version control: [GitHub](https://github.com/live-codes/livecodes) - Free.
- CI/CD: [GitHub Actions](https://github.com/features/actions) - Free.
- Web hosting and CDN: [Cloudflare Pages](https://pages.cloudflare.com/) - Free.
- [Permanent URLs](https://livecodes.io/docs/features/permanent-url): [Cloudflare DNS](https://www.cloudflare.com/application-services/products/dns/) + [Cloudflare Pages](https://pages.cloudflare.com/) - Free.
- Dynamic services (like sharing short URLs): [Cloudflare Workers](https://workers.cloudflare.com/) - Generous Free Tier.
- Module hosting: [esm.sh](https://esm.sh/) / [jsDelivr](https://www.jsdelivr.com/) / [unpkg](https://www.unpkg.com/) - Free.
- TypeScript types (for [editor Intellisense](https://livecodes.io/docs/features/intellisense)): [esm.sh](https://esm.sh/) - Free.
- [Deploy](https://livecodes.io/docs/features/deploy) user projects: [GitHub Pages](https://pages.github.com/) - Free.
- Host user [assets](https://livecodes.io/docs/features/assets): [GitHub Pages](https://pages.github.com/) - Free.
- [Sync](https://livecodes.io/docs/features/sync) user data: GitHub - Free.
- Authentication with [GitHub account](https://livecodes.io/docs/features/github-integration/): [Firebase Authentication](https://firebase.google.com/products/auth) - Almost Free.
- Compiling and running user code: User browsers - Free!

Total running costs: **Almost Zero!**

In addition, being a static app, the files are aggressively cached in the browser and on CDN.

With high usage, LiveCodes is served from the edge (on Cloudflare CDN) close to the users. The computation occurs on user browsers. This does not result in any significant increase in costs.

Everybody is happy!

## Can LiveCodes be used for profit?

Absolutely!

LiveCodes is [open-source](https://github.com/live-codes/livecodes) and uses the commercial-friendly [MIT-license](https://livecodes.io/docs/license) which allows unrestricted use, distribution and modification even for commercial projects.

It can be easily [self-hosted](https://livecodes.io/docs/features/self-hosting) (if you wish) on any static file server. And, of course, you may use the hosted app ([livecodes.io](https://livecodes.io)) or any of its [permanent URLs](https://livecodes.io/docs/features/permanent-url).

LiveCodes offers a wide range of [features](https://livecodes.io/docs/features). And, in fact, many of these were specifically added to allow building products on top of it (e.g. [self-hosting](https://livecodes.io/docs/features/self-hosting), [embedded playgrounds](https://livecodes.io/docs/features/embeds), [SDK](https://livecodes.io/docs/sdk), [headless mode](https://livecodes.io/docs/sdk/headless), and [running tests](https://livecodes.io/docs/features/tests), just to name a few).

With wider adoption and happy users, more and more projects would start building on top of LiveCodes.

Examples for products that can be built on top of LiveCodes:

- Courses/Tutorials websites: similar to FreeCodeCamp, W3Schools, etc.
- Social coding platforms: similar to CodePen, Replit, etc.
- Code challenge platforms: similar to Leetcode, CodeWars, etc.
- Interactive documentations for libraries.
- Interactive blogs.
- Website builders and content management systems, etc.

## Development and Maintenance Costs

Commercial projects built on top of LiveCodes, would value the continued development and maintenance of the project. The cost of in-house building or maintaining such a project is high. At a fraction of that cost, [sponsoring LiveCodes](https://livecodes.io/docs/sponsor) would provide stability for the project, ensure that it continues to receive regular updates and allow having a higher priority in feature development. Sponsors can also have custom playground builds with their own **logo and brand** among other [benefits](https://livecodes.io/docs/sponsor#sponsorship-benefits).

In addition, such a sponsorship could enhance the sponsor's reputation, reflect goodwill and signal the commitment to technological innovation and support for the open-source community.
This is a strategic investment that pays off very well.

## Win/Win/Win

In summary, this business model is beneficial for everybody:

- The vast majority of **users** can continue to use LiveCodes for free and enjoy the large number of features.

- **Commercial projects** that build on top of LiveCodes can make use of the well-maintained product. Some of these projects may choose to [sponsor LiveCodes](https://livecodes.io/docs/sponsor) to support its continued development at a fraction of the cost that would be required for in-house building or maintaining such a project.

- LiveCodes **maintainers** can satisfy the passion of building the project they love, see it being used by their community and get compensated for their effort.

Win/Win/Win!

## How Can I Help?

I'm glad you asked! Thank you :)

- Please continue using [LiveCodes](https://livecodes.io)!  
  Don't worry, it is staying free for the foreseeable future.
- Report any issues and suggest new features [here](https://github.com/live-codes/livecodes/issues).
- Star the project on [GitHub](https://github.com/live-codes/livecodes). ⭐
- You are very welcome to [contribute](https://livecodes.io/docs/contribution) to the project.
- Follow [@livecodes_io](https://twitter.com/livecodes_io) on Twitter.
- Spread the word!
- ... and consider [sponsoring LiveCodes](https://livecodes.io/docs/sponsor)! 💚
