## Topics

- `v1.0:` Install Tailwind CSS
- `v1.1:` Add basic semantic structure
- `v1.2:` Add environments

## Descriptions and Instructions

### `v1.0:` Install Tailwind CSS

1. Install tailwind: `npm install -D tailwindcss postcss autoprefixer`
2. Create configuration files: `npx tailwindcss init`

### `v1.1:` Add basic semantic structure

- Add basic semantic structure to the `pages` components.

### `v1.2:` Add environments

1. In production, create a new environment variable named `NG_ENV` with value `production`
2. In production, set the Build command: `npm run build -- --configuration $NG_ENV`
