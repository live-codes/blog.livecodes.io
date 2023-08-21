import React, { useState } from 'react';
import LiveCodes from 'livecodes/react';
import type { Config, EmbedOptions, Playground } from 'livecodes';
import styles from './TutorialDemo.module.css';

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
