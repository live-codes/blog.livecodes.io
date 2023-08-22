---
slug: lets-make-learning-frontend-great-again
title: Let's Make Learning Frontend Great Again!
authors: hatem
tags: [tutorials]
---

import LiveCodes from '../../src/components/LiveCodes.tsx';

Gone are the happy days when we used to start a frontend project by creating 3 files (for HTML, CSS and JavaScript), and start coding. Frontend development is becoming increasingly complex with a large number of frameworks (and meta frameworks) each with its own (non-standard) syntax, processors, build tools and configuration files. These are all great tools, and each solves a real set of problems. However, the ecosystem has become overwhelming for new comers who want to start a frontend development career.

<!-- truncate -->

## Outline

- [JavaScript Fatigue](#javascript-fatigue)
- [In Search for a Solution](#in-search-for-a-solution)
- [What is LiveCodes?](#what-is-livecodes)
- [Demo](#demo)
- [Language Support](#language-support)
- [Development Environment](#development-environment)
- [AI Code Assistant](#ai-code-assistant)
- [Sharing/Exporting/Deploying Projects](#sharingexportingdeploying-projects)
- [Embedded Playgrounds](#embedded-playgrounds)
- [Can I Use it to Make a Full Website?](#can-i-use-it-to-make-a-full-website)
- [Does it Work Offline?](#does-it-work-offline)
- [Open-Source](#open-source)
- [Conclusion](#conclusion)

## JavaScript Fatigue

The rapidly expanding ecosystem of modern JavaScript can be intimidating for new frontend developers. The complexity added by each new tool is increasing, to the extent that people started taking [multiple courses](https://frontendmasters.com/learn/webpack/) to learn the build tool, instead of learning the technology they use! This has been the situation over the [past few years](https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f) and it does not seem to be improving.

Why should a junior web developer, who wants to learn something new, need to run terminal commands and download the heaviest object in the universe, just to get started?!

import node_modules_jpg from './node_modules.jpg'

<img src={node_modules_jpg} alt="node_modules, the heaviest object in the universe" style={{maxHeight: '50vh', margin: '1em auto', display: 'block'}} />

<div class="caption">node_modules - the heaviest object in the universe</div>

Then comes the configuration hell, with the need to configure zillion different things to work together. Just to start a hello-world project!

Such environment setup may be needed for a production scale project, but it should not be required for learning, exploring, prototyping, experimenting, reproducing issues, sharing or teaching.

import config_files_jpg from './config-files.jpg'

<img src={config_files_jpg} alt="many configuration files" style={{maxHeight: '50vh', margin: '1em auto', display: 'block'}} />

<div class="caption">Configuration hell in action</div>

## In Search for a Solution

To simplify local environment setup, many platforms have provided online IDE/playgrounds to abstract away the build process and allow users to write code and see its result. These are great tools and they do solve parts of the problem. However, there has always been something missing. Since a lot of processing (e.g. compiling, bundling, etc.) occurs on their servers, there are always limitations for use (e.g. number of projects, private projects, processing power/memory, down-time etc.).

To overcome these limitations users are either required to pay for a subscription, or ,in case of open-source solutions, users are required to self-host the tool and deal with the complexity themselves (and still pay for the hosting provider).

:::info 🤔

As a developer I can understand why I need to pay for servers that host my websites for users. But why do I need to pay for servers to write code? I can use my local device. I just needed to take away the complexity!

:::

Other alternatives were able to run all the processing inside the browser on the user device, which is a great step forwards indeed. However, that required downloading a whole nodejs runtime and then, also downloading the heaviest object in the universe (see above) every time you load the playground. And you still need to go through the configuration hell (also see above). Just to start a hello-world project!

This is where LiveCodes comes to the scene.

import lets_make_frontend_great_again_jpg from './lets-make-frontend-great-again.jpg'

<img src={lets_make_frontend_great_again_jpg} alt="Let's Make Frontend Great Again" style={{maxHeight: '50vh', margin: '1em auto', display: 'block'}} />

<!-- disclosure -->

## What is LiveCodes?

[LiveCodes](https://livecodes.io) is a [feature-rich](https://livecodes.io/docs/features/), [open-source](https://github.com/live-codes/livecodes), [client-side](https://livecodes.io/docs/why#client-side), code playground that supports [80+ languages and frameworks](#language-support). Check out the [announcement](../2023-08-03-introducing-livecodes/index.md) for details.

When a user selects any of the supported languages/frameworks, the compiler of that language is downloaded and runs in the browser. After that, all code changes are compiled locally on the user device.

No server rounds are required for compilation or processing. No need to download a nodejs runtime. No `npm install`s. No build steps. No configuration hell. It just works!

LiveCodes is a client-side app, with no servers required. This allows it to be **free** with **no limits** to usage, **no ads** and **no account** required.

Another added benefit is privacy. All projects created in LiveCodes are **private by default**. The code written in LiveCodes does not leave the local device unless the user chooses to [share](https://livecodes.io/docs/features/share), [export](https://livecodes.io/docs/features/export) or [deploy](https://livecodes.io/docs/features/deploy) it.

A large number of [starter templates](https://livecodes.io?new) are available to make starting with a new framework a seamless experience. In addition, any [project](https://livecodes.io/docs/features/projects) can be saved as a [user template](https://livecodes.io/docs/features/templates#user-templates).

## Demo

This is an interactive demo for an embedded LiveCodes playground that runs React with JSX:

<LiveCodes template="react" height="80vh" loading="eager"></LiveCodes>

## Language Support

Currently, there are 80+ languages/frameworks supported in LiveCodes. These include:

- Web languages (HTML, CSS & JavaScript)
- Web frameworks/libraries (e.g. React JSX/TSX, Vue SFC, Svelte SFC, Solid, MDX, Astro).
- Languages that transpile to JavaScript (e.g. TypeScript, CoffeeScript, LiveScript, ReScript).
- Languages/frameworks that generate CSS (e.g. SCSS, Less, Stylus, Tailwind CSS, UnoCSS).
- CSS processors (e.g. PostCSS, Autoprefixer, Lightning CSS, CSS Modules, cssnano).
- Traditional programming languages (e.g. Python, Ruby, Go, PHP, C++, R, Lua, Scheme, Perl).
- Data manipulation/logic languages (e.g. SQL, Prolog).
- Authoring/templating languages (e.g Markdown, AsciiDoc, Pug, Handlebars, Haml).
- Low-code/visual editors (e.g. blockly, rich text editor).
- Modeling languages/diagram-as-code (e.g. Gnuplot, Graphviz, Mermaid, Vega, Plotly).
- Languages that target WebAssembly (e.g. AssemblyScript, WebAssembly Text Format).
- ... and [many more](https://livecodes.io/docs/languages).

Generally, if you are a developer (or want to be one), there is a big chance you will find something interesting to do with LiveCodes.

## One Interface for Many Tools

Many tools have provided playgrounds to help exploration and learning. However, each playground has different UI and features. A big advantage for LiveCodes is that it has a wide range of language/framework support. Through this single interface users can explore and learn many tools in one place. In addition, the large set of [features](https://livecodes.io/docs/features/) become available while using all these tools.

## Development Environment

LiveCodes provides many of the commonly used developer tools. These include Monaco editor (that powers [VS Code](https://code.visualstudio.com/)), [Prettier](https://prettier.io/), [Emmet](https://emmet.io/), Vim/Emacs modes, [Babel](https://babeljs.io/), [TypeScript](https://www.typescriptlang.org/), [SCSS](https://sass-lang.com/), [Less](https://lesscss.org/), [PostCSS](https://postcss.org/), [Jest](https://jestjs.io/) and [Testing Library](https://testing-library.com/), among others. All these tools run seamlessly in the browser without any installations or configurations. It feels like a very light-weight version of your own local development environment including the keyboard shortcuts, IntelliSense and code navigation features.

The integrated [console](https://livecodes.io/docs/features/console) allows quick inspection of logged values. And the [compiled code viewer](https://livecodes.io/docs/features/compiled-code) improves the learning experience.

[NPM modules](https://livecodes.io/docs/features/module-resolution) can be imported as usual. It just works™ without having to `npm install` anything. Not even on the server (because there is no server!).

## AI Code Assistant

The [AI code assistant](https://livecodes.io/docs/features/ai) provides code completion based on the current context and comments. This is powered by [Codeium](https://codeium.com), the **free** ultrafast Copilot alternative. This can significantly boost the learning experience. See [how to enable it](https://livecodes.io/docs/features/ai).

## Sharing/Exporting/Deploying Projects

Projects can be easily [shared](https://livecodes.io/docs/features/share) as URLs, QR codes or to social media platforms. In addition, any project can be [exported](https://livecodes.io/docs/features/export) as HTML, JSON or zip file containing source code files. Projects can also be exported to other services like GitHub gists, CodePen or JSFiddle.

User data can be [synchronized](https://livecodes.io/docs/features/sync) across devices. Also it can be [backed-up and restored](https://livecodes.io/docs/features/backup-restore) on same or different device.

Projects can be [deployed](https://livecodes.io/docs/features/deploy) to public URLs that can be shared with others. This is hosted for free on GitHub Pages.

## Embedded Playgrounds

Playgrounds can be [embedded](https://livecodes.io/docs/features/embeds) in any web page. This can be very useful for blogs, tutorials and documentation websites. The [embed screen](https://livecodes.io/docs/features/embeds) allows customization of embed options and previewing the resulting playground. Code can be easily [prefilled](https://livecodes.io/docs/features/code-prefill) into embedded playgrounds.

An easy-to-use, yet powerful, [SDK](https://livecodes.io/docs/sdk/), allows [communication](https://livecodes.io/docs/sdk/js-ts#sdk-methods) between the embedding page and the playground. This can be used to make [interactive coding tutorials](../2023-08-04-lets-make-an-interactive-coding-tutorial/index.md).

## Can I Use it to Make a Full Website?

You probably can, but you probably should NOT!

LiveCodes [projects](https://livecodes.io/docs/features/project) are kept simple, by design, where each project represents a single web page/component. There is no concept of multi-file projects. This makes it more suitable for learning, prototyping, experimenting, sharing and teaching. Once you cross that limit and require something bigger, you can then move back to your local IDE.

In fact, many of the features of LiveCodes were initially prototyped in LiveCodes, then later integrated into the big project.

## Does it Work Offline?

Not Yet!

Offline use is definitely on the roadmap. However, it is not ready yet.

## Open-Source

LiveCodes is released under the permissive [MIT License](https://livecodes.io/docs/license) which allows anyone to use (including commercial use), modify, and distribute. It can also be [self-hosted](https://livecodes.io/docs/features/self-hosting) (for free) on any static file server.

## Conclusion

LiveCodes makes getting started with frontend development easier, more accessible and more fun. Of course this alone does not solve the problem of increasing complexity in the frontend web development, however, it can be a great tool for learning, prototyping, experimenting, sharing and teaching. And it is free!

What will you learn (or teach) today?

- Start now: https://livecodes.io?new
- Check the docs: https://livecodes.io/docs
- Star the repo: https://github.com/live-codes/livecodes
