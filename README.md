# rCLI - CLI for React apps

<img src="https://github.com/Piotrko64/rCLI-own_CLI_for_React_apps/assets/77500425/a15eaa56-822f-4e0a-bea6-677d582e5744" title="RCLI" alt="RCLI"/>

<p> I created own CLI for React! It is my react equivalent response for ANGULAR CLI.
Thanks by rCLI (react CLI) we can create quick components with hook and files for styles (for example .module.css, styled.ts and more!)</p>

<p> <img src="https://github.com/Piotrko64/rCLI-own_CLI_for_React_apps/assets/77500425/fa252993-61c1-4962-97c1-3581332d6829" title="RCLI" alt="RCLI"/></p>

<p> I immetiadely create some basic file with example content! </p>

## Installation

-   With yarn

    ```sh
    yarn global add rcli-ff
    ```

-   With npm

    ```sh
    npm install -g rcli-ff
    ```

### Old way of Installation:

> Clone the repository (https://github.com/Piotrko64/rCLI-own_CLI_for_React_apps.git) and then navigate to it.

> Run npm install to install the dependencies.

> Run npm install -g . to install the CLI.

Now You can use rCLI!

## How to use? This is syntax:

rc \<path\> [flags]

## For Example:

Write in console:
<br>

> rc /ui/amazingButton -h --scss

Above line create basic component (path: ui/amazingButton) with hook and style (.module.scss) file! Remember Rcli create folders and imports automative!

## Options:

-j, --jsx Create .jsx file instead .tsx

-t, --tsx Create .tsx file [DEFAULT]

-ns, --no-style Don't create file for style

-nm, --no-module Create style file without module (for example .css instead .module.css)

-m, --module Create file as module [DEFAULT]

-sc, --scss Create .module.scss or .scss file instead .css

-cs, --css Create .css/.module.css file [DEFAULT]

-sa, --sass Create .module.sass or .sass file instead .css

-sty, --styled-components Create styled components file for style

-h, --hook Create also file for hook

-nf, --no-folder Create component files without folder

-v, --version output the current version

--help display help for command

## Key features

-   Create components like in a Angular CLI
-   Created files had correct imports and example using
-   We can use css/scss/sass or styled components for a style file

### Attention

I recommend use also prettier to better format all documents

### Execution Policies

<p> If you have problem with about Execution Policies please check this link:
https://stackoverflow.com/questions/63423584/how-to-fix-error-nodemon-ps1-cannot-be-loaded-because-running-scripts-is-disabl
</p>

# Good luck!
