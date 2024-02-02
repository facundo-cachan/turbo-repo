import path from "path";
import fs from "fs-extra";

import type { PlopTypes } from "@turbo/gen";

// Learn more about Turborepo Generators at https://turbo.build/repo/docs/core-concepts/monorepos/code-generation

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  // A simple generator to add a new React component to the internal UI library
  plop.setGenerator("react-component", {
    description: "Adds a new react component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the component?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/{{kebabCase name}}.tsx",
        templateFile: "templates/component.hbs",
      },
      {
        type: "append",
        path: "index.tsx",
        pattern: /"exports": {(?<insertion>)/g,
        template: '"./{{kebabCase name}}": "./src/{{kebabCase name}}.tsx",',
      },
      function createFixturesDirectory(answers: { name?: string }) {
        if (!answers.name) {
          return "no name provided, skipping fixture directory creation";
        }

        const directory = path.join(
          // resolves to the root of the current workspace
          plop.getDestBasePath(),
          "__tests__",
          "__fixtures__",
          answers.name,
        );
        fs.mkdirSync(directory);
        console.log(directory);

        return `created empty ${directory} directory for fixtures`;
      },
    ],
  });
}
