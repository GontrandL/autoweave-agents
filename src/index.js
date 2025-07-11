/**
 * AutoWeave Agents Module
 * Main entry point for all agent implementations
 */

// Core agents
export { DebuggingAgent } from './agents/debugging-agent.js';
export { SelfAwarenessAgent } from './agents/self-awareness-agent.js';

// Integration agent and its components
export { default as IntegrationAgent } from './agents/integration-agent/index.js';
export { GitManager } from './agents/integration-agent/git-manager.js';
export { DockerManager } from './agents/integration-agent/docker-manager.js';
export { CICDPlatformManager } from './agents/integration-agent/cicd-platform-manager.js';
export { SwaggerManager } from './agents/integration-agent/swagger-manager.js';

// Hooks system (Claudia integration)
export { hooksManager } from './hooks/claudia/hooksManager.ts';
export * from './hooks/claudia/hooks.ts';

// Utility scripts
export const scripts = {
  dbReader: './scripts/db_reader.py',
  simpleDbReader: './scripts/simple_db_reader.py',
  checkDbSync: './scripts/check-db-sync.py'
};

// Agent factory function
export function createAgent(type, config = {}) {
  switch (type) {
    case 'debugging':
      return new DebuggingAgent(config);
    case 'self-awareness':
      return new SelfAwarenessAgent(config);
    case 'integration':
      return new IntegrationAgent(config);
    default:
      throw new Error(`Unknown agent type: ${type}`);
  }
}

// Export all agents as a collection
export const agents = {
  DebuggingAgent,
  SelfAwarenessAgent,
  IntegrationAgent
};

// Export agent types enum
export const AgentTypes = {
  DEBUGGING: 'debugging',
  SELF_AWARENESS: 'self-awareness',
  INTEGRATION: 'integration'
};

// Export version info
export const version = '1.0.0';