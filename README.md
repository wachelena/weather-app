# WeatherApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.5.

## Install dependencies

### Prerequisites

- You have installed `npm`

```
npm install
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Working with Git

Full reference [link](https://education.github.com/git-cheat-sheet-education.pdf)

#### Making changes

When you want to compare changes with the original version or make a new transaction of changes (also called _commit_).

```
$ git status
```
> Show modified files in the working directory and those staged for your next commit


```
$ git add [file]
```
> Add a file as it looks now to your next commit (_stage_)

```
$ git reset [file]
```
> Unstage a file from commit, but keep changest in your working directory

```
$ git diff
```
> Show comparison of changes and staged changes

```
$ git diff --staged
```
> Show staged but not yet commited changes compared to commited changes

```
$ git commit -m "[descriptive message]"
```
> Commit your staged content aas a new commit

#### Branching & merging

Isolating work in branches, switching contexts and integrating changes from others

```
$ git branch
```
> List your branches, a `*` appears next to the active branch

```
$ git branch [branch-name]
```
> Create a new branch at the current commit

```
$ git checkout [branch-name]
```
> Switch to another branch and check it out into your woking directory

```
$ git merge [branch]
```
> Merge the specified branch's history into the *current one*

```
$ git log <--graph> <--all>
```
> Show all commits in the current branch, and optionally in all branches

#### Sharing and updating

```
$ git remote add [alias] [url]
```
> Add a git repository URL as an alias


```
$ git fetch [alias]
```
> Download all the branches from the remote git repository into your local repository


```
$ git push [alias] [branch]
```
> Transmit local branch commits to the *remote* repository branch


```
$ git merge [alias]/[branch]
```
> Merge a remote branch into your current branch to bring it up to date

```
$ git pull <--rebase>
```
> Fetch and merge any commits from the remote branch your current branch is currently _tracking_. Optionally place your commits *at the top* of the commits from the remote branch.



## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
