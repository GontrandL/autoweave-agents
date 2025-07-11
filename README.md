# AutoWeave Agents Module

This module contains the intelligent agents that power AutoWeave's autonomous capabilities.

## Installation

```bash
npm install @autoweave/agents

# For Python scripts
pip install -r requirements.txt
```

## Available Agents

### 1. Debugging Agent (`debugging-agent.js`)

An OpenTelemetry-based intelligent debugging and diagnosis agent that provides:

- **Real-time Monitoring**: Tracks agent health and performance metrics
- **Distributed Tracing**: Follows requests across multiple agents and services  
- **Intelligent Diagnosis**: AI-powered issue analysis and root cause detection
- **Auto-remediation**: Suggests and applies fixes for common issues

```javascript
const { createDebuggingAgent } = require('@autoweave/agents');

const debugAgent = createDebuggingAgent({
  telemetryEndpoint: 'http://localhost:4318',
  llmProvider: 'openai',
  autoRemediate: true
});

await debugAgent.diagnoseSystem();
```

### 2. Integration Agent (`integration-agent/`)

A sophisticated multi-service integration agent with:

- **LangChain Orchestration**: Complex workflow management with LangChain
- **GitOps Integration**: Automated Git operations and PR management
- **OpenAPI Support**: Parse and generate API specifications
- **Pydantic Models**: Auto-generate Python models from schemas
- **Metrics Collection**: Prometheus-compatible metrics export

Components:
- `integration-agent.js`: Main agent orchestrator
- `langchain-orchestrator.js`: LangChain workflow management
- `gitops-manager.js`: Git operations and GitHub integration
- `openapi-parser.js`: OpenAPI specification parsing
- `pydantic-generator.js`: Python model generation
- `metrics-collector.js`: Performance metrics collection
- `python-bridge.py`: Python-JavaScript bridge for LangChain

```javascript
const { createIntegrationAgent } = require('@autoweave/agents');

const integrationAgent = createIntegrationAgent({
  github: {
    token: process.env.GITHUB_TOKEN,
    owner: 'autoweave',
    repo: 'configs'
  },
  langchain: {
    apiKey: process.env.OPENAI_API_KEY,
    model: 'gpt-4'
  }
});

await integrationAgent.processWorkflow({
  description: "Create a Kubernetes deployment with monitoring"
});
```

### 3. Self-Awareness Agent (`self-awareness-agent.js`)

A unique genetic code tracking agent that enables:

- **Code Evolution Tracking**: Monitors code changes and patterns
- **Self-Modification**: Ability to suggest and apply self-improvements
- **Genetic Algorithms**: Evolution-based optimization
- **Memory Integration**: Deep integration with AutoWeave's memory system

```javascript
const { createSelfAwarenessAgent } = require('@autoweave/agents');

const selfAwareAgent = createSelfAwarenessAgent({
  memoryHost: 'localhost:6333',
  evolutionRate: 0.1,
  mutationProbability: 0.05
});

await selfAwareAgent.analyzeEvolution();
await selfAwareAgent.suggestOptimizations();
```

## Example Agent Configurations

The `examples/` directory contains YAML configurations for various agent types:

- `file-processor-agent.yaml`: File processing and transformation
- `kubernetes-monitor-agent.yaml`: Kubernetes cluster monitoring
- `compliance-audit-agent.yaml`: Security and compliance auditing
- `cross-cloud-migration-agent.yaml`: Multi-cloud migration orchestration
- `intelligent-cicd-agent.yaml`: CI/CD pipeline optimization
- `multi-cluster-orchestrator-agent.yaml`: Multi-cluster Kubernetes management

## Python Scripts

### Genetic Reconstruction (`scripts/genetic-reconstruction.py`)

Analyzes code evolution patterns and suggests optimizations:

```bash
python scripts/genetic-reconstruction.py --analyze --optimize
```

### Intelligent Deduplication (`scripts/intelligent_deduplication.py`)

Removes duplicate code patterns while preserving functionality:

```bash
python scripts/intelligent_deduplication.py --source ./src --threshold 0.8
```

## Claude Hooks

The `hooks/` directory contains Claude AI integration hooks:

- `genetic_pre_tool_use.py`: Pre-processes tool usage for genetic tracking
- `genetic_reconstructor.py`: Reconstructs code patterns from genetic history
- `db_connectors/genetic_qdrant.py`: Qdrant vector database connector for genetic data

## Architecture

```
autoweave-agents/
├── src/
│   ├── debugging-agent.js          # Debugging and diagnosis
│   ├── integration-agent/          # Integration orchestration
│   │   ├── index.js               # Main entry point
│   │   ├── integration-agent.js   # Core agent logic
│   │   ├── langchain-orchestrator.js
│   │   ├── gitops-manager.js
│   │   ├── openapi-parser.js
│   │   ├── pydantic-generator.js
│   │   ├── metrics-collector.js
│   │   └── python-bridge.py
│   └── self-awareness-agent.js     # Self-modification capabilities
├── examples/                       # Agent configuration examples
├── scripts/                        # Python utility scripts
├── hooks/                          # Claude AI integration
└── tests/                          # Test suites
```

## Development

```bash
# Run tests
npm test

# Lint code
npm run lint

# Start individual agents
npm run start:debugging
npm run start:integration
npm run start:self-awareness
```

## Integration with AutoWeave Core

All agents integrate seamlessly with AutoWeave's core modules:

```javascript
const { AutoWeave } = require('@autoweave/core');
const { createIntegrationAgent } = require('@autoweave/agents');

const autoweave = new AutoWeave();
const agent = createIntegrationAgent(config);

// Register agent with AutoWeave
autoweave.registerAgent('integration', agent);
```

## Contributing

When adding new agents:

1. Create agent file in `src/`
2. Add exports to `src/index.js`
3. Add example configuration in `examples/`
4. Document in this README
5. Add tests in `tests/`

## License

MIT