# AGENTS.md - Configuration for JMF-UI Monorepository

This file configures the behavior of coding agents working on the JMF-UI monorepository.

## Repository Overview

- **Monorepo Structure**: Uses pnpm workspaces with packages in `tooling/`, `react/`, and `app/` directories
- **Package Manager**: pnpm (v11.5.0 as per .tool-versions)
- **Node.js Version**: 24.16.0
- **Root Package Manager**: pnpm workspace root

## Tooling Configuration

### Package Manager
- Use `pnpm` for all package management operations
- Run `pnpm install` to install dependencies
- Use `pnpm recursive run` for cross-workspace scripts

### Workspace Structure
```
root/
├── package.json          # Root workspace dependencies
├── pnpm-workspace.yaml  # Workspace configuration
├── .github/             # GitHub Actions workflows
├── app/                # Application packages
│   ├── assetto-corsa-app/
│   ├── assetto-corsa-manager/
│   ├── e2e/
│   ├── fuelcalc/
│   └── home/
├── react/              # React component packages
│   └── use-service/
└── tooling/            # Tooling packages
    └── har-express/
```

## Git Workflow

### Branching Strategy
- **Main Branch**: `main` - protected, requires PR reviews
- **Feature/Patch Branches**: Use descriptive names like `update-deps-2026-10`
- **Worktree**: Use git worktree for isolated development environments

### Pull Requests
- Create PRs from worktree branches
- Maintain descriptive PR titles and detailed descriptions
- Reference related issues when applicable

## Development Commands

### Root Level Scripts
- `pnpm build`: Build all workspace packages
- `pnpm lint`: Run linting across all packages
- `pnpm test`: Run tests across all packages
- `pnpm release`: Publish packages using changesets
- `pnpm changeset`: Create and manage changesets

### Workspace-Specific Scripts
- Each package has its own `build`, `lint`, `test` scripts as applicable
- Use `pnpm recursive run --if-present <script>` pattern

## Dependency Management

### Update Strategy
- Update dependencies to latest stable versions
- Check compatibility between interdependent packages
- Update devDependencies and dependencies consistently
- Consider peerDependencies constraints

### Version Pinning
- Use caret (^) versions for flexibility: `"^major.minor.patch"`
- Maintain consistency across related packages

## Quality Assurance

### Linting
- Uses Oxlint for workspace linting
- Run `pnpm lint` to check all packages

### Testing
- Jest for unit testing
- Playwright for E2E testing
- Run `pnpm test` to execute all tests

## Deployment

### GitHub Pages
- Deployment via `gh-pages` package
- Demo builds use Vite with `--base` flags

### Package Publishing
- Uses Changesets for version management
- `pnpm release` triggers changeset publish

## GitHub Actions

### Workflows
- **main-deploy.yml**: Deployment on main branch push
- **pr-tests.yml**: Testing and linting on PRs
- **setup-node action**: Custom composite action for Node.js setup

### Action Updates
- Regularly update GitHub Actions to latest versions
- Check for new versions of:
  - `actions/checkout`
  - `actions/setup-node` 
  - `pnpm/action-setup`
  - `changesets/action`

## Environment Requirements

### Windows Development
- **WSL Required**: On Windows systems, always use Windows Subsystem for Linux (WSL 2) for development
- Run all commands and tooling within the WSL environment
- Ensure WSL has access to the repository files

### Node.js
- Version: 24.16.0 (as specified in .tool-versions)
- Use nvm or similar for version management

### pnpm
- Version: 11.5.0
- Configured in .tool-versions

## File Patterns to Maintain

### package.json Structure
- Consistent script naming across packages
- Proper peerDependencies declarations
- Accurate main and types fields for publishable packages

### TypeScript Configuration
- Match tsconfig patterns across similar packages
- Maintain build and development configurations separately

## Agent Instructions

1. **Use WSL on Windows** - On Windows, always operate within Windows Subsystem for Linux (WSL 2) environment
2. **Always use pnpm** - Do not use npm or yarn
3. **Respect workspaces** - Update dependencies considering workspace constraints
4. **Test changes** - Run lint and test scripts after dependency updates
5. **Maintain compatibility** - Ensure updated packages work together
6. **Document changes** - Include detailed commit messages and PR descriptions
7. **Update in batches** - Group related dependency updates together

## Exclusions

- Do not modify `.changeset/` directory contents directly
- Do not modify build outputs in `*/build` directories
- Do not modify `pnpm-lock.yaml` directly - let pnpm handle it
- Do not push directly to main branch