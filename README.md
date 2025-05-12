# Module Federation Demo Project

This project demonstrates a micro-frontend architecture using Vite Module Federation, consisting of a host application and multiple remote applications.

## Project Structure

```
├── apps/
│   ├── host/           # Main application
│   ├── remote1/        # Remote application 1
│   └── remote2/        # Remote application 2
├── .env.development    # Development environment variables
├── .env.staging        # Staging environment variables
├── .env.production     # Production environment variables
└── batch/             # Utility batch scripts
```

## Features

- 🔄 Module Federation with Vite
- ⚛️ React with TypeScript support
- 🛣️ React Router for navigation
- 📦 Redux Toolkit for state management
- 🔧 Environment-specific configurations
- 🚀 Batch scripts for easy deployment

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm 8 or higher

### Installation

1. Run the installation script:

```bash
install-all.bat
```

This will install dependencies for all applications (host and remotes).

### Development

Start the development servers:

```bash
start-dev.bat
```

This will run all applications concurrently:

- Host: http://localhost:5000
- Remote1: http://localhost:5001
- Remote2: http://localhost:5003

### Building

Build scripts are available for different environments:

```bash
build-dev.bat     # Development build
build-staging.bat # Staging build
build-prod.bat    # Production build
```

## Adding New Remote Applications

1. Create a new application in the `apps` directory
2. Update environment files with the new remote's URL:

   ```
   VITE_REMOTE3_URL=http://localhost:5003
   ```

3. Update the host's vite.config.js to include the new remote:

   ```javascript
   federation({
     remotes: {
       remote3: `${env.VITE_REMOTE3_URL}/assets/remoteEntry.js`,
     },
   });
   ```

4. Add the new route in `apps/host/src/routes/index.jsx`
5. Update batch scripts to include the new remote

## Using Paid Templates

To integrate a paid template:

1. Create a new remote application
2. Copy the template files into the remote's src directory
3. Update the remote's vite.config.js to expose needed components:

   ```javascript
   federation({
     exposes: {
       "./TemplateComponent": "./src/components/TemplateComponent.jsx",
     },
   });
   ```

4. Import and use the template components in the host application

## Project Configuration

### Environment Variables

- `VITE_API_URL`: Backend API URL
- `VITE_REMOTE*_URL`: URLs for remote applications

### State Management

Redux store is configured in `apps/host/src/store`:

- `appSlice.js`: Global application state
- Add new slices for additional features

### Routing

Routes are defined in `apps/host/src/routes/index.jsx`:

- Protected routes can be added using route guards
- Lazy loading is implemented for remote applications

### Shared Utils

Common utilities are available in `apps/host/src/utils`:

- `constants.js`: Application constants
- `helpers.js`: Helper functions

## Best Practices

1. Keep remote applications focused and independent
2. Share common dependencies through Module Federation
3. Use TypeScript for better type safety
4. Implement proper error boundaries
5. Follow consistent coding standards

## Deployment

1. Choose the appropriate build script for your environment
2. Update environment variables in the corresponding .env file
3. Run the build script
4. Deploy the built assets to your hosting service

## Troubleshooting

Common issues:

1. Module Federation connection errors:

   - Check if remote applications are running
   - Verify remote URLs in environment files

2. Build failures:

   - Ensure all dependencies are installed
   - Check for environment-specific configurations

3. Runtime errors:
   - Verify shared dependencies versions
   - Check browser console for detailed errors

## Project Dependencies

### Root-Level Dependencies

Dependencies installed in the root `package.json` are shared across all applications (host and remotes) through npm workspaces. This provides several benefits:

- Common dependencies are installed once and shared
- Consistent versions across all applications
- Reduced disk space usage
- Simplified dependency management

To add a shared dependency:

```bash
npm install <package-name> -w
```

### Application-Specific Dependencies

Each application (host/remotes) can have its own dependencies in its respective `package.json`. To add a dependency to a specific application:

```bash
npm install <package-name> -w <app-name>
```

Example:

```bash
npm install @mui/material -w host
```

## File Structure Best Practices

### Host Application

```
apps/host/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page components
│   ├── routes/        # Routing configuration
│   ├── store/         # Redux store and slices
│   ├── utils/         # Shared utilities
│   ├── hooks/         # Custom React hooks
│   ├── services/      # API services
│   └── types/         # TypeScript type definitions
```

### Remote Applications

```
apps/remote*/
├── src/
│   ├── components/    # Components to be exposed
│   ├── utils/        # Remote-specific utilities
│   └── types/        # TypeScript type definitions
```

## Development Workflow

1. Start development servers:

   ```bash
   start-dev.bat
   ```

2. Make changes to your applications

   - Host application changes in `apps/host`
   - Remote application changes in respective directories

3. Test your changes:

   - Host: http://localhost:5000
   - Remote1: http://localhost:5001
   - Remote2: http://localhost:5003

4. Build for deployment:
   ```bash
   build-prod.bat  # For production
   # or
   build-staging.bat  # For staging
   ```

## Code Organization

### Components

- Keep components small and focused
- Use TypeScript for better type safety
- Implement proper prop validation
- Follow consistent naming conventions

### State Management

- Use Redux for global state
- Keep Redux slices organized by feature
- Implement proper error handling
- Use TypeScript for type-safe actions and reducers

### Routing

- Organize routes by feature
- Implement proper route guards
- Use lazy loading for better performance
- Handle 404 pages properly

### Utilities

- Keep utility functions pure
- Implement proper error handling
- Write unit tests for critical functions
- Document complex logic

## Performance Optimization

1. Code Splitting

   - Use lazy loading for routes
   - Split vendor chunks appropriately
   - Optimize bundle sizes

2. Caching

   - Implement proper cache strategies
   - Use service workers when appropriate
   - Cache static assets effectively

3. Loading States
   - Implement loading indicators
   - Use skeleton screens
   - Handle errors gracefully

## Security Best Practices

1. Environment Variables

   - Never commit sensitive data
   - Use appropriate environment files
   - Implement proper validation

2. Authentication

   - Implement proper auth flows
   - Use secure session management
   - Handle token expiration

3. Data Handling
   - Validate all inputs
   - Sanitize outputs
   - Implement proper error boundaries
