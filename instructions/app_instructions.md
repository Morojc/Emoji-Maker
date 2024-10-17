# Project Overview 
Use this guide to build a mobile app where users can give a text prompt or upload an image to generate ai generated images using models hosted on Replicates.

# Feature requirements
- We will use Ionic with react
- Create a form for users can put prompt, and click a button that calls the replicate model to generate emoji 
- Have a nice user interface and animations when the image is blank or generating
- Display all the images ever generated in a grid.
- When hover each emoji img, an icon button for download, and an icon button for like should be shown up.
# Relevant docs 
## How to use replicate emoji generator model 
Install Replicate’s Node.js client library
npm install replicate

Copy
Set the REPLICATE_API_TOKEN environment variable
export REPLICATE_API_TOKEN=<paste-your-token-here>

Visibility

Copy
Find your API token in your account settings.

Import and set up the client
import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

Copy
Run fofr/sdxl-emoji using Replicate’s API. Check out the model's schema for an overview of inputs and outputs.

const output = await replicate.run(
  "fofr/sdxl-emoji:dee76b5afde21b0f01ed7925f0665b7e879c50ee718c5f78a9d38e04d523cc5e",
  {
    input: {
      width: 1024,
      height: 1024,
      prompt: "A TOK emoji of a man",
      refine: "no_refiner",
      scheduler: "K_EULER",
      lora_scale: 0.6,
      num_outputs: 1,
      guidance_scale: 7.5,
      apply_watermark: false,
      high_noise_frac: 0.8,
      negative_prompt: "",
      prompt_strength: 0.8,
      num_inference_steps: 50
    }
  }
);
console.log(output);
# Current file structure 
EMOJI-MAKER/
├── .vscode/
├── cypress/
├── instructions/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   ├── EmojiForm.tsx
│   │   ├── EmojiGrid.tsx
│   │   ├── EmojiItem.tsx
│   │   └── LoadingAnimation.tsx
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   └── GeneratedEmojisPage.tsx
│   ├── theme/
│   ├── assets/
│   │   └── placeholder-emoji.png
│   ├── styles/
│   │   └── global.css
│   ├── utils/
│   │   └── replicateApi.ts
│   ├── types/
│   │   └── emoji.ts
│   ├── hooks/
│   │   └── useEmojiGeneration.ts
│   ├── App.test.tsx
│   ├── App.tsx
│   └── main.tsx
├── .browserslistrc
├── .eslintrc.js
├── .gitignore
├── capacitor.config.ts
├── cypress.config.ts
├── index.html
├── ionic.config.json
├── package-lock.json
├── package.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

# Rules 
- All new components should go in ./src/components and be named like ExampleComponent.tsx unless otherwise specified 
- All new pages go in ./src/pages
- All new assets go in ./src/assets
- All new styles go in styles
- All new utils go in ./src/utils
- All new types go in ./src/types
- All new hooks go in ./src/hooks
- All new services go in ./src/services
- All new contexts go in ./src/contexts
- All new routes go in ./src/routes
- All new layouts go in ./src/layouts
- All new services go in ./src/services
- All new contexts go in ./src/contexts
- All new routes go in ./src/routes
- All new layouts go in ./src/layouts
