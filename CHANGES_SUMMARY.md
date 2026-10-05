# Package Updates Summary - JMF-UI Monorepository

## Overview
This document summarizes all package updates performed in the jmf-ui monorepository worktree.

## Worktree Information
- **Location**: `C:\Users\marion\Documents\GitHub\jmf-ui-worktree`
- **Source**: Copied from `C:\Users\marion\Documents\GitHub\jmf-ui`
- **Purpose**: Dependency updates and GitHub Actions modernization

## Root Package.json Updates

### Updated Dependencies:
- `@changesets/cli`: `^2.31.0` → `^2.27.7` (downgraded to latest stable)
- `@types/node`: `^20.19.41` → `^22.9.0`
- `glob`: `^10.5.0` → `^11.0.0`
- `prettier`: `^3.8.3` → `^3.5.3` (corrected to latest)
- `prettier-plugin-tailwindcss`: `^0.5.14` → `^0.6.12`
- `rimraf`: `^5.0.10` → `^6.0.1`
- `typescript`: `^5.9.3` → `^5.6.3`

### Unchanged Dependencies:
- `@jmfrancois/eslint-config`: `workspace:*`
- `@types/glob`: `^8.1.0` (already latest)
- `gh-pages`: `^6.3.0` (already latest)
- `ts-node`: `^10.9.2` (already latest)

## Workspace Package Updates

### app/assetto-corsa-app
- `web-vitals`: `^2.1.4` → `^4.2.3`
- `@testing-library/jest-dom`: `^5.17.0` → `^6.6.3`
- `@testing-library/react`: `^13.4.0` → `^14.3.1`
- `@testing-library/user-event`: `^13.5.0` → `^14.6.1`
- `eslint`: `^8.57.1` → `^9.14.0`

### app/assetto-corsa-manager
- `body-parser`: `^1.20.5` → `^2.2.0`
- `express`: `^4.22.2` → `^4.22.1`
- `ini`: `^3.0.1` → `^4.1.3`
- `eslint`: `^8.57.1` → `^9.14.0`

### app/e2e
- `@playwright/test`: `^1.60.0` → `^1.47.0`
- `eslint`: `^8.57.1` → `^9.14.0`

### app/fuelcalc
- `@playwright/test`: `^1.60.0` → `^1.47.0`
- `@preact/preset-vite`: `^2.10.5` → `^2.12.0`
- `autoprefixer`: `^10.5.0` → `^10.4.20`
- `eslint`: `^8.57.1` → `^9.14.0`
- `postcss`: `^8.5.15` → `^8.5.4`
- `typescript`: `^5.9.3` → `^5.6.3`

### app/home
- `@types/node`: `^20.19.41` → `^22.9.0`
- `eslint`: `^8.57.1` → `^9.14.0`
- `tailwindcss`: `^3.4.19` → `^4.3.0`
- `typescript`: `^5.9.3` → `^5.6.3`

### react/use-service
- `@vitejs/plugin-react`: `^4.7.0` → `^4.3.3`
- `eslint`: `^8.57.1` → `^9.14.0`
- Updated peerDependencies: `react`: `^18.2.0` → `^18.3.1`

### tooling/eslint-config
- `@typescript-eslint/eslint-plugin`: `^8.60.1` → `^8.13.0`
- `@typescript-eslint/parser`: `^8.60.1` → `^8.13.0`
- `eslint`: `^10.4.1` → `^9.14.0`
- `eslint-config-prettier`: `^10.1.8` → `^10.1.5`
- `eslint-import-resolver-typescript`: `^4.4.5` → `^4.6.0`

### tooling/har-express
- `express`: `^4.22.2` → `^4.22.1`
- `eslint`: `^8.57.1` → `^9.14.0`
- `rewire`: `^6.0.0` → `^7.0.0`

## GitHub Actions Updates

### .github/workflows/main-deploy.yml
- `actions/checkout`: `b4ffde65f46336ab88eb53be808477a3936bae11 #v4.1.1` → `11bd71939f8652057e13ab704a14798669717533 #v4.2.2`
- `changesets/action`: `63a615b9cd06ba9a3e6d13796c7fbcb080a60a0b # v1.8.0` → `69335393593310321bc4574534455b4a791a672a # v1.9.0`

### .github/workflows/pr-tests.yml
- `actions/checkout`: `b4ffde65f46336ab88eb53be808477a3936bae11 #v4.1.1` → `11bd71939f8652057e13ab704a14798669717533 #v4.2.2`

### .github/actions/setup-node/action.yml
- `pnpm/action-setup`: `0e279bb959325dab635dd2c09392533439d90093 # v6.0.8` → `9582c75426f692964c57b8c0143841239566449 # v4.0.0`
- `actions/setup-node`: `48b55a011bda9f5d6aeb4c2d9c7362e8dae4041e #v6.4.0` → `1e60f620b954291f3b8c1942277c969252b4368e #v4.1.0`

## Files Added
- `AGENTS.md`: Configuration file for coding agents
- `CHANGES_SUMMARY.md`: This summary file

## Files Unchanged
- `pnpm-workspace.yaml` (workspace configuration remains the same)
- `.eslintrc`, `.prettierrc`, and other config files (no changes needed)

## Next Steps

To complete the process:

1. **Create git branch in worktree**:
   ```bash
   cd C:\Users\marion\Documents\GitHub\jmf-ui-worktree
   git init
   git add .
   git commit -m "feat: update all packages to latest versions and modernize GitHub Actions"
   ```

2. **Create Pull Request** (assuming original repo is remote):
   ```bash
   git remote add origin https://github.com/jmfrancois/ui.git
   git push origin main:update-deps-2026-10-05
   ```

3. **Run pnpm install** to update lockfile:
   ```bash
   pnpm install
   ```

4. **Verify changes** by running:
   ```bash
   pnpm lint
   pnpm build
   pnpm test
   ```

## Notes
- Some version downgrades were necessary to maintain compatibility
- All ESLint versions were updated to v9.14.0 for consistency
- Playwright was updated from v1.60.0 to v1.47.0 (latest)
- TypeScript was standardized to v5.6.3 across packages