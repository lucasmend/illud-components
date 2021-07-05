# Illud Components

NextJS project to develop and showcase common frontend components for future use in other projects.

[Bit Harmony](https://harmony-docs.bit.dev/) was the original idea to manage components, but due to some issues setting it up, decided to create this manager, to create general purpose components.

## Prerequisites

* NPM:  
`` npm install npm@latest -g ``

## Installation

1. Clone the repo:  
``git clone https://github.com/lucasmend/illud-components.git``
2. Install NPM packages:  
``npm install``

## Running

Start local server:  
``npm run dev``  
Access at [localhost:3000](localhost:3000)  

## Preferred workflow

1. Checkout development branch:  
``git pull && git checkout develop``  
2. Create new component branch:  
``git checkout -b COMPONENT_NAME``
3. Use project component create tool:  
``npm run create --component=COMPONENT_NAME``  
Or on Windows:  
``npm run create-windows --component=COMPONENT_NAME``  

Project component create tool argument COMPONENT_NAME supports kebab-case `component-name` syntax and will generate a PascalCase `ComponentName` directory on `components/`, and the following files:  
* `components/ComponentName/index.js`
* `components/ComponentName/styles.css`
* `components/ComponentName/component-name.test.js`
* `pages/component-name.js`

## Deploying

**TODO**

# TODO
* Elaborate code generation on scaffold tool.