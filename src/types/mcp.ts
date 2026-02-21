/**
 * MCP Types for NovaSkyn
 */

export interface MCPRequest {
  jsonrpc: '2.0'
  id: string | number
  method: string
  params?: Record<string, unknown>
}

export interface MCPResponse {
  jsonrpc: '2.0'
  id: string | number
  result?: unknown
  error?: {
    code: number
    message: string
    data?: unknown
  }
}

export interface MCPTool {
  name: string
  description: string
  inputSchema: {
    type: string
    properties?: Record<string, unknown>
    required?: string[]
  }
}

export interface MCPCapabilities {
  tools?: {
    available: boolean
  }
  resources?: {
    available: boolean
  }
}

export interface MCPServerInfo {
  name: string
  version: string
  protocolVersion: string
  capabilities: MCPCapabilities
  serverInfo?: {
    name: string
    version: string
  }
}

export type MCPToolHandler = (params: Record<string, unknown>) => Promise<unknown>
