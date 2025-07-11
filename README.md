# AutoWeave Agents

Centralized repository for AutoWeave agent implementations and utilities.

## Overview

This module contains all AutoWeave agent implementations, including:
- Debugging Agent: OpenTelemetry-based intelligent debugging and diagnosis
- Self-Awareness Agent: Genetic code tracking and self-improvement capabilities
- Integration Agent: Multi-platform integration (Git, Docker, CI/CD, APIs)

## Installation

```bash
npm install @autoweave/agents
```

## Usage

```javascript
import { createAgent, AgentTypes } from '@autoweave/agents';

// Create a debugging agent
const debugAgent = createAgent(AgentTypes.DEBUGGING, {
  telemetryEnabled: true
});

// Create an integration agent
const integrationAgent = createAgent(AgentTypes.INTEGRATION, {
  platforms: ['github', 'gitlab', 'jenkins']
});
```

## Agents

### Debugging Agent
Provides intelligent debugging capabilities with OpenTelemetry integration:
- Real-time monitoring and tracing
- AI-powered issue analysis
- Performance metrics tracking

### Self-Awareness Agent
Implements genetic code architecture for self-improvement:
- Code evolution tracking
- Performance optimization
- Self-modification capabilities

### Integration Agent
Handles multi-platform integrations:
- Git operations (GitHub, GitLab, Bitbucket)
- Docker container management
- CI/CD pipeline integration
- API/Swagger documentation

## Hooks System

Includes Claudia integration hooks for enhanced agent capabilities:
- Pre/post execution hooks
- Event-driven architecture
- Custom hook management

## Utility Scripts

Python scripts for database operations:
- `db_reader.py`: Read database contents
- `simple_db_reader.py`: Simplified database reading
- `check-db-sync.py`: Database synchronization checker

## Development

```bash
# Install dependencies
npm install

# Run tests
npm test

# Lint code
npm run lint
```

## License

MIT