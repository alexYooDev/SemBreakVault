# Branching Standard

Always follow this branching pattern:
- master(main) (always stable/prod ready)
- feature/custom-feat-name
- fix/bug-description
- refactor/module-name
- docs/update-readme

## Creating a branch
```bash
git checkout -b feature/hello-world

// Add a file:

echo "console.log('Hello World')" > app.js

// Stage:

git add app.js


// Commit:

git commit -m "feat: add hello world script"

// Switch back to master

git checkout master


// Merge (usually merge with PR to be safe):
git merge feature/hello-world

```

## Conventional Commit Messages (How to write commit messages professionally)

```vbnet
feat: a new feature
fix: a bug fix
refactor: code improvement wihout new feature
docs: documentation
test: add/update tests
chore: maintenance
perf: performance improvements
```
### Example of good messages:
- feat(api): add user registration endpoint
- fix(auth): resolve token expiration bug
- refactor(db): extract query builder
- docs: add API usage examples

## GitHub Workflow

### Pushing local project to remote repository
- git remote add origin <remote-repo-url>
- git push -u origin master

### Professional PR

```bash
git checkout -b feature/day1-notes

// Add a file:
echo "Day 1 Git Notes" notes.md

// Commit:
git add .
git commit -m "docs: add day 1 git notes"
git push -u origin feature/day1-notes
```
- Go to GitHub -> Open a Pull Request

Title: docs: add day 1 git notes

Description: 

```
### Summary
- Added notes for Day1 Git session
- Includes branching, commits, workflow overview

### Checklist
- [x] Documentation added
- [X] Follows conventional commits
```

