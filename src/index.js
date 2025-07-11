/**
 * AutoWeave Agents Module
 * 
 * This module provides a collection of intelligent agents for various tasks:
 * - Debugging Agent: OpenTelemetry-based intelligent debugging and diagnosis
 * - Integration Agent: Multi-service integration with LangChain orchestration
 * - Self-Awareness Agent: Genetic code tracking and self-modification capabilities
 */

// Export all agents
module.exports = {
  // Main agents
  DebuggingAgent: require('./debugging-agent'),
  IntegrationAgent: require('./integration-agent'),
  SelfAwarenessAgent: require('./self-awareness-agent'),
  
  // Integration agent components
  GitOpsManager: require('./integration-agent/gitops-manager'),
  LangChainOrchestrator: require('./integration-agent/langchain-orchestrator'),
  MetricsCollector: require('./integration-agent/metrics-collector'),
  OpenAPIParser: require('./integration-agent/openapi-parser'),
  PydanticGenerator: require('./integration-agent/pydantic-generator'),
  
  // Agent utilities
  createDebuggingAgent: (config) => {
    const DebuggingAgent = require('./debugging-agent');
    return new DebuggingAgent(config);
  },
  
  createIntegrationAgent: (config) => {
    const IntegrationAgent = require('./integration-agent');
    return new IntegrationAgent(config);
  },
  
  createSelfAwarenessAgent: (config) => {
    const SelfAwarenessAgent = require('./self-awareness-agent');
    return new SelfAwarenessAgent(config);
  }
};