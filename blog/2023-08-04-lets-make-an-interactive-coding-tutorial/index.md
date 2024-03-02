---
slug: lets-make-an-interactive-coding-tutorial
title: Let's Make an Interactive Coding Tutorial
authors: hatem
tags: [tutorials]
---

import LiveCodes from '../../src/components/LiveCodes.tsx';
import RunInLiveCodes from '../../src/components/RunInLiveCodes.tsx';
import TutorialDemo from './TutorialDemo.tsx';

Let's assume we want to make an interactive coding tutorial (for HTML, CSS and JavaScript) on a blog or a tutorials website. The tutorial should have a playground that helps us guide the students to write code, see the results and complete an assignment task.

We are going to use [LiveCodes](https://livecodes.io/docs) and its powerful [SDK](https://livecodes.io/docs/sdk) to achieve this. So, here we go.

<!--truncate-->

## What Are We Building?

We are going to build a playground for a simple interactive coding tutorial.

We will add some HTML, add styles using CSS and dynamically change its content using JavaScript. The student can interact with the playground, add code and see its result. At the end, the student is asked to complete a simple task (e.g. changing the value of a variable), then the task is verified and a feedback is given if the task was completed successfully.

## Demo

<TutorialDemo />

<hr />

## What is LiveCodes?

LiveCodes is a [feature-rich](https://livecodes.io/docs/features/), [open-source](https://github.com/live-codes/livecodes), [client-side](https://livecodes.io/docs/why#client-side), code playground that supports [80+ languages and frameworks](https://livecodes.io/docs/languages/). Playgrounds can be [embedded](https://livecodes.io/docs/features/embeds) in any web pages. A powerful, yet easy-to-use, [SDK](https://livecodes.io/docs/sdk) allows creating and communicating with playgrounds.

LiveCodes is free with no limits to usage, no ads and no account required. It is [MIT-licensed](https://livecodes.io/docs/license) which allows its use, distribution and modification even for commercial projects.

Read more in the [announcement](../2023-08-03-introducing-livecodes/index.md).

Enough talk, let's get started!

## The Playground

The LiveCodes [SDK](https://livecodes.io/docs/sdk) makes it easy to create code playgrounds. The SDK can be [loaded from CDN](https://livecodes.io/docs/sdk/#cdn) or can be [installed from npm](https://livecodes.io/docs/sdk/#npm-package). To keep things simple, we will just use the CDN.

The SDK is available for [vanilla JavaScript/TypeScript](https://livecodes.io/docs/sdk/js-ts), [React](https://livecodes.io/docs/sdk/react), [Vue](https://livecodes.io/docs/sdk/vue) and [Svelte](https://livecodes.io/docs/sdk/svelte). Again, for simplicity, we will use vanilla JavaScript.

You can find the full source code (also in React) [below](#full-code).

A new playground can be created using the [`createPlayground`](https://livecodes.io/docs/sdk/js-ts#createplayground) function. It takes the container HTML element (or its selector) and optionally [embed options](https://livecodes.io/docs/sdk/js-ts#embed-options).

<!-- prettier-ignore-start -->

export const step1 = {
  mode: 'result',
  html: `
<div id="container"></div>\n
<script type="module">
  import { createPlayground } from 'https://unpkg.com/livecodes';\n
  createPlayground('#container', { /* embed options */ });
</script>
`.trimStart(),
  css: `body { margin: 50px 2em; }`,
}

<RunInLiveCodes params={step1} code={step1.html} language="html" codeTitle="tutorial.html" formatCode={false} linkText="Preview" />


This creates a playground that the user can interact with and see the result immediately, without having to install or build anything (not even for any of the [supported languages](https://livecodes.io/docs/languages/)).

It is generally a good practice to specify the SDK version and a [permanent URL](https://livecodes.io/docs/features/permanent-url) for the app to avoid later potential breaking changes with updates to the SDK or the app.

export const step2 = {
  mode: 'result',
  html: `
<div id="container"></div>\n
<script type="module">
  // highlight-next-line
  import { createPlayground } from 'https://unpkg.com/livecodes@0.1.2';\n
  const options = {
    // highlight-next-line
    appUrl: 'https://v10.livecodes.io',
  };
  createPlayground('#container', options);
</script>
`.trimStart(),
  css: `body { margin: 50px 2em; }`,
}

<RunInLiveCodes params={step2} code={step2.html} language="html" codeTitle="tutorial.html" formatCode={false} linkText="Preview" />

We now have an empty playground. Let's fill it with code.

## Adding Content

When creating the playground, embed options can be used to add content (e.g. using the options [`config`](https://livecodes.io/docs/sdk/js-ts#config), [`params`](https://livecodes.io/docs/sdk/js-ts#params), [`import`](https://livecodes.io/docs/sdk/js-ts#import) or [`template`](https://livecodes.io/docs/sdk/js-ts#template)).

This loads the playground prefilled with the code you specified.

export const step3 = {
  mode: 'result',
  html: `
<div id="container"></div>\n
<script type="module">
  import { createPlayground } from 'https://unpkg.com/livecodes@0.1.2';\n
  const options = {
    appUrl: 'https://v10.livecodes.io',
    // highlight-start
    config: {
      markup: {
        language: 'html',
        content: 'Welcome to the tutorial!',
      },
    },
    // highlight-end
  };
  createPlayground('#container', options);
</script>
`.trimStart(),
  css: `body { margin: 50px 2em; }`,
}

<RunInLiveCodes params={step3} code={step3.html} language="html" codeTitle="tutorial.html" formatCode={false} linkText="Preview" />


## Adding Tutorial Steps

Now the student can see the playground, interact with it and see the result. So let's add some tutorial steps, where new code is added to the playground in different editors (HTML, CSS and JavaScript). This can gradually introduce new concepts to the student without losing context or having to move to a new playground.

The [`createPlayground`](https://livecodes.io/docs/sdk/js-ts#createplayground) function returns a promise that resolves to the playground instance. This instance has some useful [methods](https://livecodes.io/docs/sdk/js-ts/#sdk-methods) that allows interaction with the already running playground (e.g. [`run`](https://livecodes.io/docs/sdk/js-ts#run), [`getConfig`](https://livecodes.io/docs/sdk/js-ts#getconfig), [`setConfig`](https://livecodes.io/docs/sdk/js-ts#setconfig), [`getCode`](https://livecodes.io/docs/sdk/js-ts#getcode), [`format`](https://livecodes.io/docs/sdk/js-ts#format), [`show`](https://livecodes.io/docs/sdk/js-ts#show), [`runTests`](https://livecodes.io/docs/sdk/js-ts#runtests), [`onChange`](https://livecodes.io/docs/sdk/js-ts#onchange), [`getShareUrl`](https://livecodes.io/docs/sdk/js-ts#getshareurl)).

export const step4 = {
  mode: 'result',
  html: `
<div id="container"></div>
<!-- highlight-next-line -->
<button id="next">Next</button>\n
<script type="module">
  import { createPlayground } from "https://unpkg.com/livecodes@0.1.2";\n
  // highlight-start
  const steps = [
    {
      config: {
        markup: {
          language: "html",
          content: '<h1>Hello,\\n  <span id="title">World</span>!\\n</h1>',
        },
      },
    },
  ];
  // highlight-end\n
  const options = {
    appUrl: "https://v10.livecodes.io",
    config: {
      markup: {
        language: "html",
        content: "Welcome to the tutorial!",
      },
    },
  };\n
  // highlight-start
  createPlayground("#container", options).then((playground) => {
    const nextBtn = document.querySelector("#next");
    nextBtn.addEventListener("click", async () => {
      const currentStep = steps[0];
      await playground.setConfig(currentStep.config);
    });
  });
  // highlight-end
</script>
`.trimStart(),
  css: `body { margin: 50px 2em; }`,
}

<RunInLiveCodes params={step4} code={step4.html} language="html" codeTitle="tutorial.html" formatCode={false} linkText="Preview" />

Now we have defined an array (`steps`) that will hold the data of each step in the tutorial. The first step has a [`config` object](https://livecodes.io/docs/configuration/configuration-object) that is to be sent to the playground.

A button with the id `"next"` controls moving between steps. An event handler for its `click` event sends the current step `config` to the playground using the method [`setConfig`](https://livecodes.io/docs/sdk/js-ts#setconfig).

## More Steps

So, let's add some more steps. Clicking the button should move us to the next step.

export const step5 = {
  mode: 'result',
  html: `
<div id="container"></div>
<button id="next">Next</button>\n
<script type="module">
  import { createPlayground } from "https://unpkg.com/livecodes@0.1.2";\n
  const steps = [
    {
      config: {
        markup: {
          language: "html",
          content: '<h1>Hello,\\n  <span id="title">World</span>!\\n</h1>',
        },
      },
    },
    // highlight-start
    {
      config: {
        markup: {
          language: "html",
          content: '<h1>Hello,\\n  <span id="title">World</span>!\\n</h1>',
        },
        style: {
          language: 'css',
          content: '#title {\\n  color: blue;\\n}',
        },
      },
    },    
    // highlight-end
  ];\n
  const options = {
    appUrl: "https://v10.livecodes.io",
    config: {
      markup: {
        language: "html",
        content: "Welcome to the tutorial!",
      },
    },
  };\n
  createPlayground("#container", options).then((playground) => {
    // highlight-next-line
    let step = 0;
    const nextBtn = document.querySelector("#next");
    nextBtn.addEventListener("click", async () => {
      // highlight-start
      const lastStep = steps.length - 1;
      const currentStep = steps[step];
      await playground.setConfig(currentStep.config);
      step = step < lastStep ? step + 1 : 0;
      // highlight-end
    });
  });
</script>
`.trimStart(),
  css: `body { margin: 50px 2em; }`,
}

<RunInLiveCodes params={step5} code={step5.html} language="html" codeTitle="tutorial.html" formatCode={false} linkText="Preview" />

The variable `step` keeps track of the step index. The corresponding data is read from the `steps` array and sent to the playground.

However, there is now a lot of duplication in the code of each step. Also, if the student makes some changes to the HTML, the next step will overwrite them.

So, let's read the current `config` object from the playground (using the method [`getConfig`](https://livecodes.io/docs/sdk/js-ts#getconfig)) and then merge the changes for the new step. Now, we can remove the duplication in steps.

export const step6 = {
  mode: 'result',
  html: `
<div id="container"></div>
<button id="next">Next</button>\n
<script type="module">
  import { createPlayground } from "https://unpkg.com/livecodes@0.1.2";\n
  const steps = [
    {
      config: {
        markup: {
          language: "html",
          content: '<h1>Hello,\\n  <span id="title">World</span>!\\n</h1>',
        },
      },
    },
    {
      // highlight-start
      config: {
        style: {
          language: 'css',
          content: '#title {\\n  color: blue;\\n}',
        },
      },
      // highlight-end
    },    
  ];\n
  const options = {
    appUrl: "https://v10.livecodes.io",
    config: {
      markup: {
        language: "html",
        content: "Welcome to the tutorial!",
      },
    },
  };\n
  createPlayground("#container", options).then((playground) => {
    let step = 0;
    const nextBtn = document.querySelector("#next");
    nextBtn.addEventListener("click", async () => {
      const lastStep = steps.length - 1;
      const currentStep = steps[step];
      // highlight-start
      const prevConfig = step === 0 ? options.config : await playground.getConfig();
      await playground.setConfig({ ...prevConfig, ...currentStep.config });
      // highlight-end
      step = step < lastStep ? step + 1 : 0;
    });
  });
</script>
`.trimStart(),
  css: `body { margin: 50px 2em; }`,
}

<RunInLiveCodes params={step6} code={step6.html} language="html" codeTitle="tutorial.html" formatCode={false} linkText="Preview" />

## Changing Layout

We still have a problem!

Although we were able to add CSS code, the style editor was not activated. We can correct this by using the [`show`](https://livecodes.io/docs/sdk/js-ts#show) method.

We can even control the position of the cursor, so that your student is guided where to start typing.

export const step7 = {
  mode: 'result',
  html: `
<div id="container"></div>
<button id="next">Next</button>\n
<script type="module">
  import { createPlayground } from "https://unpkg.com/livecodes@0.1.2";\n
  const steps = [
    {
      // highlight-start
      panel: 'markup',
      position: { line: 2, column: 20 },
      // highlight-end
      config: {
        markup: {
          language: "html",
          content: '<h1>Hello,\\n  <span id="title">World</span>!\\n</h1>',
        },
      },
    },
    {
      // highlight-start
      panel: 'style',
      position: { line: 2, column: 10 },
      // highlight-end
      config: {
        style: {
          language: 'css',
          content: '#title {\\n  color: blue;\\n}',
        },
      },
    },    
  ];\n
  const options = {
    appUrl: "https://v10.livecodes.io",
    config: {
      markup: {
        language: "html",
        content: "Welcome to the tutorial!",
      },
    },
  };\n
  createPlayground("#container", options).then((playground) => {
    let step = 0;
    const nextBtn = document.querySelector("#next");
    nextBtn.addEventListener("click", async () => {
      const lastStep = steps.length - 1;
      const currentStep = steps[step];
      const prevConfig = step === 0 ? options.config : await playground.getConfig();
      await playground.setConfig({ ...prevConfig, ...currentStep.config });
      // highlight-next-line
      await playground.show(currentStep.panel, currentStep.position);
      step = step < lastStep ? step + 1 : 0;
    });
  });
</script>
`.trimStart(),
  css: `body { margin: 50px 2em; }`,
}

<RunInLiveCodes params={step7} code={step7.html} language="html" codeTitle="tutorial.html" formatCode={false} linkText="Preview" />

Now, let's add some steps for JavaScript code. We can even open the integrated [console](https://livecodes.io/docs/features/console) to show logs. Let's also change the text of the "next" button with each step.

export const step8 = {
  mode: 'result',
  html: `
<div id="container"></div>
<!-- highlight-next-line -->
<button id="next">Start Tutorial</button>\n
<script type="module">
  import { createPlayground } from "https://unpkg.com/livecodes@0.1.2";\n
  const steps = [
    {
      // highlight-next-line
      btnText: 'Next',
      panel: 'markup',
      position: { line: 2, column: 20 },
      config: {
        markup: {
          language: "html",
          content: '<h1>Hello,\\n  <span id="title">World</span>!\\n</h1>',
        },
      },
    },
    {
      // highlight-next-line
      btnText: 'Next',
      panel: 'style',
      position: { line: 2, column: 10 },
      config: {
        style: {
          language: 'css',
          content: '#title {\\n  color: blue;\\n}',
        },
      },
    },
    // highlight-start
    {
      btnText: 'Next',
      panel: 'script',
      position: { line: 2, column: 19 },
      config: {
        script: {
          language: 'javascript',
          content:
            '// change this value to "LiveCodes"\\nconst newTitle = "???";\\ndocument.querySelector("#title").textContent = newTitle;\\nconsole.log(newTitle);',
        },
      },
    },
    {
      btnText: 'Final Result',
      panel: 'console',
    },
    {
      btnText: 'Restart Tutorial',
      panel: 'result',
    },
    // highlight-end
  ];\n
  const options = {
    appUrl: "https://v10.livecodes.io",
    config: {
      markup: {
        language: "html",
        content: "Welcome to the tutorial!",
      },
    },
  };\n
  createPlayground("#container", options).then((playground) => {
    let step = 0;
    const nextBtn = document.querySelector("#next");
    nextBtn.addEventListener("click", async () => {
      const lastStep = steps.length - 1;
      const currentStep = steps[step];
      const prevConfig = step === 0 ? options.config : await playground.getConfig();
      await playground.setConfig({ ...prevConfig, ...currentStep.config });
      await playground.show(currentStep.panel, currentStep.position);
      // highlight-next-line
      nextBtn.textContent = currentStep.btnText;
      step = step < lastStep ? step + 1 : 0;
    });
  });
</script>
`.trimStart(),
  css: `body { margin: 50px 2em; }`,
}

<RunInLiveCodes params={step8} code={step8.html} language="html" codeTitle="tutorial.html" formatCode={false} linkText="Preview" />

## Assignments

So, we are progressing very well!

Now we want our student to complete a task. We then need to validate if the task was completed successfully. This can be achieved by running [automated tests](https://livecodes.io/docs/features/tests).

LiveCodes supports running automated tests using Jest and Testing Library. You may test the page DOM or test the [code exported from the script editor](https://livecodes.io/docs/features/tests/#importing-code).

Let's write some tests for our tutorial.

```js
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";

test("Should display title", async () => {
  expect(screen.getByText("Hello", { exact: false })).toHaveTextContent(
    "Hello, LiveCodes!"
  );
});

test("Title should be blue", async () => {
  const style = window.getComputedStyle(document.querySelector("#title"));
  expect(style.color).toBe("rgb(0, 0, 255)");
});
```

We test that the student was indeed able to complete the task (by changing the value of the variable `newTitle` to become `"LiveCodes"`). Also we are testing the color of the title.

These tests can be added to [`tests`](https://livecodes.io/docs/configuration/configuration-object#tests) property of the [`config` object](https://livecodes.io/docs/configuration/configuration-object).

We can then run the tests using the SDK method [`runTests`](https://livecodes.io/docs/sdk/js-ts#runtests). This method returns a promise that resolves to the test results, which we can then show to our student.

<!-- prettier-ignore-end -->

## Final Result

This is the final result after adding tests, styles and some final touches.

<TutorialDemo />

## Full Code

<details>
<summary>Show full code (vanilla JS)</summary>

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>LiveCodes Tutorial Demo</title>
    <style>
      body {
        display: flex;
        flex-direction: column;
        font: 0.9em sans-serif;
        justify-content: center;
        margin: 10px 10%;
      }
      h1 {
        text-align: center;
        font-size: 1.5em;
        color: rgb(72, 72, 72);
      }
      #container {
        height: 60vh;
        margin: auto;
      }
      #controls {
        list-style: none;
        display: flex;
        gap: 1em;
        justify-content: center;
        flex-wrap: wrap;
        max-width: 100%;
        margin: 1em;
        padding: 0;
      }
      #controls button {
        width: 15em;
        height: 2em;
        background-color: rgb(243, 243, 243);
        border: 1px solid grey;
        border-radius: 2px;
        cursor: pointer;
        color: darkslategrey;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      #result {
        margin: 1em;
        text-align: center;
      }
      #result.success {
        color: green;
      }
      #result.fail {
        color: red;
      }
    </style>
  </head>
  <body>
    <div id="container"></div>
    <div id="controls">
      <button id="next">Start Tutorial</button>
      <button id="test">Check My Solution</button>
    </div>
    <div id="result"></div>
    <script type="module">
      import { createPlayground } from 'https://unpkg.com/livecodes@0.1.2';

      const steps = [
        {
          btnText: 'Next',
          panel: 'markup',
          position: { line: 2, column: 20 },
          config: {
            markup: {
              language: 'html',
              content: '<h1>Hello,\n  <span id="title">World</span>!\n</h1>',
            },
          },
        },
        {
          btnText: 'Next',
          panel: 'style',
          position: { line: 2, column: 10 },
          config: {
            style: {
              language: 'css',
              content: '#title {\n  color: blue;\n}',
            },
          },
        },
        {
          btnText: 'Next',
          panel: 'script',
          position: { line: 2, column: 19 },
          config: {
            script: {
              language: 'javascript',
              content:
                '// change this value to "LiveCodes"\nconst newTitle = "???";\ndocument.querySelector("#title").textContent = newTitle;\nconsole.log(newTitle);',
            },
          },
        },
        {
          btnText: 'Final Result',
          panel: 'console',
        },
        {
          btnText: 'Restart Tutorial',
          panel: 'result',
        },
      ];

      const options = {
        appUrl: 'https://v10.livecodes.io/',
        loading: 'eager',
        config: {
          markup: {
            language: 'html',
            content: 'Welcome to the tutorial!<br>Start by clicking the button below.',
          },
          tests: {
            language: 'javascript',
            content:
              'import { screen } from "@testing-library/dom";\nimport "@testing-library/jest-dom";\n\ntest("Should display title", async () => {\n  expect(screen.getByText("Hello", { exact: false })).toHaveTextContent(\n    "Hello, LiveCodes!"\n  );\n});\n\ntest("Title should be blue", async () => {\n  const style = window.getComputedStyle(document.querySelector("#title"));\n  expect(style.color).toBe("rgb(0, 0, 255)");\n});',
          },
        },
      };

      createPlayground('#container', options).then((playground) => {
        let step = 0;
        const nextBtn = document.querySelector('#next');
        const testsBtn = document.querySelector('#test');
        const testResult = document.querySelector('#result');

        nextBtn.addEventListener('click', async () => {
          const lastStep = steps.length - 1;
          const currentStep = steps[step];
          const prevConfig = step === 0 ? options.config : await playground.getConfig();

          await playground.setConfig({ ...prevConfig, ...currentStep.config });
          await playground.show(currentStep.panel, currentStep.position);

          nextBtn.textContent = currentStep.btnText;
          step = step < lastStep ? step + 1 : 0;
        });

        testsBtn.addEventListener('click', async () => {
          testResult.textContent = 'Checking your solution...';
          testResult.classList.remove('success');
          testResult.classList.remove('fail');

          const { results } = await playground.runTests();
          if (results.some((result) => result.status === 'fail')) {
            testResult.textContent = 'Wrong answer, try again!';
            testResult.classList.add('fail');
            testResult.classList.remove('success');
          } else {
            testResult.textContent = 'Correct answer, well done!';
            testResult.classList.add('success');
            testResult.classList.remove('fail');
          }
        });
      });
    </script>
  </body>
</html>
```

</details>

<details>
<summary>Show full code (React TSX)</summary>

```tsx
import React, { useState } from 'react';
import LiveCodes from 'livecodes/react';
import type { Config, EmbedOptions, Playground } from 'livecodes';
import styles from './styles.module.css';

interface Step {
  btnText: string;
  panel?: 'markup' | 'style' | 'script' | 'console' | 'result';
  position?: { line: number; column: number };
  config?: Partial<Config>;
}

export default function () {
  const steps: Step[] = [
    {
      btnText: 'Next',
      panel: 'markup',
      position: { line: 2, column: 20 },
      config: {
        markup: {
          language: 'html',
          content: '<h1>Hello,\n  <span id="title">World</span>!\n</h1>',
        },
      },
    },
    {
      btnText: 'Next',
      panel: 'style',
      position: { line: 2, column: 10 },
      config: {
        style: {
          language: 'css',
          content: '#title {\n  color: blue;\n}',
        },
      },
    },
    {
      btnText: 'Next',
      panel: 'script',
      position: { line: 2, column: 19 },
      config: {
        script: {
          language: 'javascript',
          content:
            '// change this value to "LiveCodes"\nconst newTitle = "???";\ndocument.querySelector("#title").textContent = newTitle;\nconsole.log(newTitle);',
        },
      },
    },
    {
      btnText: 'Final Result',
      panel: 'console',
    },
    {
      btnText: 'Restart Tutorial',
      panel: 'result',
    },
  ];

  const options: EmbedOptions = {
    appUrl: 'https://v25.livecodes.io/',
    loading: 'eager',
    config: {
      markup: {
        language: 'html',
        content: 'Welcome to the tutorial!<br>Start by clicking the button below.',
      },
      tests: {
        language: 'javascript',
        content:
          'import { screen } from "@testing-library/dom";\nimport "@testing-library/jest-dom";\n\ntest("Should display title", async () => {\n  expect(screen.getByText("Hello", { exact: false })).toHaveTextContent(\n    "Hello, LiveCodes!"\n  );\n});\n\ntest("Title should be blue", async () => {\n  const style = window.getComputedStyle(document.querySelector("#title"));\n  expect(style.color).toBe("rgb(0, 0, 255)");\n});',
      },
    },
  };

  const [playground, setPlayground] = useState<Playground>();
  const [step, setStep] = useState(0);
  const [nextBtnText, setNextBtnText] = useState('Start Tutorial');
  const [testResult, setTestResult] = useState('');
  const [testResultClass, setTestResultClass] = useState('');

  const onReady = (sdk: Playground) => {
    setPlayground(sdk);
  };

  const next = async () => {
    const lastStep = steps.length - 1;
    const currentStep = steps[step];
    const prevConfig =
      step === 0 ? (options.config as Partial<Config>) : await playground?.getConfig();

    if (currentStep.config) {
      await playground?.setConfig({ ...prevConfig, ...currentStep.config });
    }
    await playground?.show(currentStep.panel, {
      ...currentStep.position,
    });

    setNextBtnText(currentStep.btnText);
    setStep((s) => (s < lastStep ? s + 1 : 0));
  };

  const runTests = async () => {
    setTestResult('Checking your solution...');
    setTestResultClass('');

    const { results } = await playground?.runTests();
    if (results.some((result) => result.status === 'fail')) {
      setTestResult('Wrong answer, try again!');
      setTestResultClass(styles.fail);
    } else {
      setTestResult('Correct answer, well done!');
      setTestResultClass(styles.success);
    }
  };

  return (
    <>
      <LiveCodes sdkReady={onReady} {...options} />
      <div className={styles.controls}>
        <button onClick={next}>{nextBtnText}</button>
        <button onClick={runTests}>Check My Solution</button>
      </div>
      <div className={styles.result + ' ' + testResultClass}>{testResult}</div>
    </>
  );
}
```

</details>

## Conclusion

That was an interesting project to build!

Using LiveCodes SDK, we have built a very basic tutorial where the student can learn how to add HTML elements, style them with CSS and change the text content with JavaScript. We were even able to check if the assignment was completed successfully.

During our work, we had an idea about the LiveCodes SDK and how to use it. Please refer to the [SDK documentations](https://livecodes.io/docs/sdk) for more details.

## What's Next?

You can now make your tutorials a lot more interactive and fun with LiveCodes. These tutorials can use any of the supported [languages and frameworks](https://livecodes.io/docs/languages). Tutorials may also cover your own libraries (with full editor [IntelliSense](https://livecodes.io/docs/features/intellisense)).

You may want to create full courses and even sell them. LiveCodes is [MIT-licensed](https://livecodes.io/docs/license).

Your imagination is the limit!

## Tell Us What You Think

Please [let us know](https://github.com/live-codes/livecodes/discussions) what you think. If you have a case that the SDK does not cover, [tell us about it](https://github.com/live-codes/livecodes/issues).

If you do use LiveCodes for your tutorials/courses, we would [love to know](https://livecodes.io/docs/contact) about them (we may even link to them!). And if you find LiveCodes to be useful, please [give us a star on GitHub](https://github.com/live-codes/livecodes) and please consider becoming a [sponsor](https://livecodes.io/docs/sponsor).

What will you learn/build/teach today?
