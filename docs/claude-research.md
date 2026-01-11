# Agentic IDE rules systems: A comprehensive guide for 2025

**The rules and instructions systems in agentic IDEs have evolved dramatically**, with Cursor, Claude Code, and GitHub Copilot each developing sophisticated but distinctly different approaches to persistent context management. Cursor now uses a `.cursor/rules/` directory with MDC (Markdown with frontmatter) files, Claude Code relies on hierarchical `CLAUDE.md` files with MCP integration, and GitHub Copilot offers `.github/copilot-instructions.md` with path-specific instruction files. Understanding these systems is critical for teams adopting AI-assisted development, as well-configured rules can improve code quality by **30% or more** while poorly structured rules lead to inconsistent, unreliable outputs.

---

## Cursor IDE has deprecated .cursorrules for a more powerful system

The original `.cursorrules` file format was deprecated in **January 2025 (v0.45)** in favor of a directory-based system offering greater flexibility and control. The new system uses `.cursor/rules/` containing `.mdc` files (Markdown with YAML frontmatter).

### The modern rules architecture

Cursor now supports three distinct rule scopes:

| Scope | Location | Version Controlled | Best Use Case |
|-------|----------|-------------------|---------------|
| **Project Rules** | `.cursor/rules/*.mdc` | Yes | Team standards, project-specific patterns |
| **User Rules** | Cursor Settings > General | No | Personal preferences (language, response style) |
| **Team Rules** | Cursor dashboard (v1.7+) | Via dashboard | Organization-wide policies |

Project rules support **four application modes** controlled by frontmatter properties:

```yaml
---
description: Apply when working with authentication modules
globs: ["src/auth/**/*.ts", "src/middleware/auth*.ts"]
alwaysApply: false
---
# Authentication Rules
- Use JWT tokens stored in httpOnly cookies
- Implement refresh token rotation
- Log all authentication events
```

**Always rules** (`alwaysApply: true`) inject into every conversation. **Auto Attached rules** trigger when files matching glob patterns are referenced. **Agent Requested rules** require descriptions so the AI can determine relevance dynamically. **Manual rules** only apply when explicitly `@mentioned`.

### File organization patterns that work

Effective Cursor projects organize rules by functional domain:

```
.cursor/rules/
├── workspace.mdc       # General workspace conventions
├── architecture.mdc    # Architectural patterns and constraints
├── backend.mdc         # Backend-specific standards
├── frontend.mdc        # Frontend component patterns
├── testing.mdc         # Test conventions and coverage requirements
└── security.mdc        # Security constraints and guardrails
```

Subdirectories can contain their own `.cursor/rules/` folders, allowing backend and frontend teams to maintain separate, scoped rule sets without conflict.

### Notepads are deprecated—use rules instead

Cursor's Notepads feature was **deprecated in October 2025**. The functionality—storing reusable prompts, file references, and context bundles—has been absorbed into Project Rules and the `/Generate Cursor Rules` command, which creates rules from conversation context.

---

## Claude Code uses CLAUDE.md files with hierarchical loading

Released in **February 2025**, Claude Code is Anthropic's terminal-based agentic coding tool. Its configuration system centers on `CLAUDE.md` files that Claude automatically loads into context at session start.

### Four levels of memory hierarchy

Claude Code reads memory files from multiple locations with clear precedence:

| Priority | Location | Purpose |
|----------|----------|---------|
| Highest | Enterprise policy (`/etc/claude-code/CLAUDE.md`) | Organization-wide mandates |
| High | Project memory (`./CLAUDE.md` or `./.claude/CLAUDE.md`) | Team-shared project instructions |
| Medium | User memory (`~/.claude/CLAUDE.md`) | Personal cross-project preferences |
| Lowest | Local project (`./CLAUDE.local.md`) | Personal project-specific (auto-gitignored) |

Files higher in the directory tree load at startup; child directory files load on-demand when working with files in those subtrees. This allows **monorepo-friendly configuration** where different services inherit base rules while maintaining their own contexts.

### Recommended CLAUDE.md structure

Keep files **concise (under 300 lines)** with short, declarative bullet points:

```markdown
# Tech Stack
- Frontend: React 18, TypeScript 5.x, Tailwind CSS
- Backend: Node.js 20, Express, PostgreSQL with Prisma
- Testing: Vitest for unit tests, Playwright for E2E

# Code Style
- Use ES modules (import/export) exclusively
- Prefer destructured imports
- camelCase for variables, PascalCase for components

# Critical Commands
- npm run build: Build the project
- npm run test: Run full test suite
- npm run typecheck: Validate TypeScript

# Architecture Constraints
- IMPORTANT: All API endpoints must validate input with Zod
- NEVER commit .env files or expose secrets in logs
```

Use emphasis markers like **"IMPORTANT:"** or **"NEVER"** for critical instructions, and the `@filename` syntax to reference files as additional context.

### Slash commands and skills provide reusable workflows

Claude Code supports both **slash commands** (simple prompt templates) and **skills** (complex multi-step workflows):

**Custom slash commands** live in `.claude/commands/*.md`:
```markdown
---
allowed-tools: Bash(git add:*), Bash(git commit:*)
argument-hint: [commit message]
description: Create a conventional commit
---
Stage all changes and create a commit with message: $ARGUMENTS
```

**Skills** are directory-based with `SKILL.md` manifests and supporting resources, useful for complex workflows like code review pipelines or deployment procedures.

### MCP integration extends capabilities

Claude Code acts as both MCP client and server. Teams configure shared MCP servers in `.mcp.json`:

```json
{
  "mcpServers": {
    "github": {
      "type": "http",
      "url": "https://api.github.com/mcp/"
    },
    "database": {
      "command": "npx",
      "args": ["-y", "@bytebase/dbhub", "--dsn", "${DB_CONNECTION_STRING}"]
    }
  }
}
```

This enables Claude to query databases, interact with GitHub, access internal tools, and pull context from external services—all configured per-project and version-controlled.

---

## GitHub Copilot offers instruction files with organization-level policies

GitHub Copilot's custom instruction system has expanded significantly through 2024-2025, now supporting repository, user, and organization-level configurations.

### Repository instructions anchor team standards

The primary instruction file lives at `.github/copilot-instructions.md`:

```markdown
# Project Overview
Multi-tenant scheduling platform using React and Node.js.

# Coding Standards
- Use TypeScript strict mode for all files
- Prefer async/await over callbacks or raw promises
- Add JSDoc comments to all exported functions
- Follow our custom ESLint configuration

# Testing Requirements
- Use React Testing Library for component tests
- Mock network calls with MSW
- Maintain >80% coverage on business logic
```

### Path-specific instructions enable targeted rules

Files in `.github/instructions/` can target specific file patterns:

```yaml
# .github/instructions/api-routes.instructions.md
---
applyTo: "src/api/**/*.ts,src/routes/**/*.ts"
excludeAgent: "code-review"  # Only coding agent uses this
---
# API Development Rules
- All endpoints must validate input with express-validator
- Return consistent error response format
- Include OpenAPI documentation comments
```

The `excludeAgent` property (added November 2025) allows separating coding instructions from code review instructions.

### Three-tier precedence with combination behavior

| Level | Scope | How to Configure |
|-------|-------|------------------|
| **Personal** | Individual preferences | GitHub.com profile settings, IDE settings |
| **Repository** | Team standards | `.github/copilot-instructions.md` |
| **Organization** | Enterprise policies | GitHub.com org settings > Copilot |

Critically, Copilot **combines all applicable instructions** rather than overriding—personal preferences layer on top of repository rules, which layer on top of organization policies. Conflicts resolve in favor of higher-priority (more specific) instructions.

### Prompt files enable reusable task templates

Beyond instructions, Copilot supports `.github/prompts/*.prompt.md` files for task-specific templates:

```markdown
# .github/prompts/create-api-endpoint.prompt.md
Create a new API endpoint for the specified resource including:
- Input validation with Zod schemas
- Error handling middleware integration
- OpenAPI documentation
- Unit tests with mocked dependencies

Reference: @src/api/controllers/base.controller.ts
```

Invoke prompts via `#prompt:` in chat or through the IDE's context attachment interface.

---

## How rules work differently across the three platforms

Understanding the architectural differences helps teams adopt the right patterns for each tool:

| Aspect | Cursor | Claude Code | GitHub Copilot |
|--------|--------|-------------|----------------|
| **Primary file** | `.cursor/rules/*.mdc` | `CLAUDE.md` | `.github/copilot-instructions.md` |
| **File format** | MDC (Markdown + YAML frontmatter) | Plain Markdown | Plain Markdown (YAML for path-specific) |
| **Scoping mechanism** | Glob patterns in frontmatter | Directory hierarchy | Glob patterns in frontmatter |
| **Dynamic application** | Agent Requested mode | Always loaded | Combined from all applicable files |
| **Version control** | Full support | Full support | Full support |
| **MCP integration** | Supported | Deep integration | Via Extensions |
| **Enterprise features** | Team Rules (v1.7+) | Enterprise memory + managed MCP | Organization instructions |

### System prompt vs project rules vs file-level context

Each tool handles context injection differently:

**Cursor** injects rules based on application mode—Always rules join the system prompt equivalent, while Auto Attached and Agent Requested rules inject dynamically based on file context or AI judgment.

**Claude Code** loads CLAUDE.md files hierarchically at session start, with parent directories processed immediately and child directories loaded on-demand. The `/memory` command allows mid-session edits, and `/compact` helps manage context window consumption.

**GitHub Copilot** combines all applicable instructions (user + repo + org) into a unified context, with path-specific files adding targeted guidance when matching files are involved.

---

## The Memory Bank pattern solves persistent context across sessions

AI assistants are fundamentally stateless—each session starts fresh. The **Memory Bank pattern** addresses this by maintaining structured documentation that AI reads at session start.

### Standard Memory Bank file structure

```
memory-bank/
├── projectbrief.md       # Overall scope, goals, requirements
├── productContext.md     # UX goals, user personas, problem space
├── systemPatterns.md     # Architecture decisions, design patterns
├── techContext.md        # Technology stack, dependencies, constraints
├── activeContext.md      # Current focus, immediate tasks (short-term memory)
├── progress.md           # Chronological achievement log
└── decisionLog.md        # Key decisions with rationale
```

### Implementation across tools

**In Cursor**, the popular `cursor-memory-bank` project (2.9k GitHub stars) provides specialized commands (`/van`, `/plan`, `/creative`, `/build`, `/reflect`, `/archive`) and complexity-tiered workflows that update memory files automatically.

**In Claude Code**, Memory Bank files live alongside `CLAUDE.md` with explicit reading instructions:

```markdown
# Memory Bank Protocol
1. Read ALL files in `memory-bank/` at session start
2. Update activeContext.md after significant changes
3. Log decisions in decisionLog.md with rationale
```

**In GitHub Copilot**, reference Memory Bank files in your instruction file and use prompt files to standardize update workflows.

### Plan/Act mode prevents premature execution

A critical pattern across all tools: separate planning from execution.

```
You: "Plan: Implement OAuth2 authentication with Google"
AI: [Provides detailed implementation plan without making changes]
You: "Looks good, proceed with step 1"
AI: [Executes only step 1, awaits confirmation]
```

This prevents agents from making sweeping changes before you've validated the approach.

---

## Security, compliance, and quality constraints require explicit encoding

Agentic IDEs amplify both productivity and risk. Security constraints must be explicit in rules.

### Security rules that work

The OpenSSF and Cloud Security Alliance have published guidelines for encoding security requirements:

```markdown
# Security Constraints (MANDATORY)

## Code Security
- NEVER use string concatenation for SQL queries—always parameterized
- NEVER hardcode secrets, API keys, or passwords
- All user input MUST be validated and sanitized before use
- Error messages MUST NOT expose stack traces or internal paths

## Dependency Management
- Only suggest packages updated within the last 12 months
- Flag any package with known CVEs before suggesting
- Prefer packages with >1000 GitHub stars and active maintenance
```

**Cisco's Project CodeGuard** framework provides pre-built security rules compatible with Cursor, Windsurf, and GitHub Copilot, based on OWASP and CWE best practices.

### License compliance cannot be ignored

The 2025 **LiCoEval study** found that **0.88%-2.01%** of AI-generated code strikingly matches existing open-source code, often without proper attribution. Mitigation strategies include:

- Enable Copilot's built-in duplicate code filters
- Use snippet scanning tools (FOSSA, Black Duck) in CI pipelines
- Explicitly prohibit copyleft licenses for proprietary projects in rules
- Document all external code sources for audit trails

---

## Role-based rules enable specialized AI personas

Different development phases benefit from different AI behaviors. A persona-driven approach assigns roles:

| Role | Responsibility | Recommended Model |
|------|---------------|-------------------|
| **Product Manager** | Write PRDs from requirements | GPT-4.1 (focused) |
| **Architect** | Design technical implementation | GPT-5, Gemini 2.5 Pro |
| **Implementer** | Write the actual code | Claude 4 (creative) |
| **Problem Solver** | Debug issues | GPT-5 (analytical) |
| **Reviewer** | Validate implementation | Gemini 2.5 Pro (large context) |

Example architect persona instruction:
```markdown
You are a software architect. Given the attached PRD, design the technical 
implementation with step-by-step instructions. Do not write code—describe 
the design patterns, data models, and integration points. Consider edge cases 
and failure modes explicitly.
```

---

## Team standardization prevents AI configuration chaos

With **76% of developers now using AI tools**, standardizing configurations prevents inconsistent quality across team members.

### Standardization approaches by tool

**Cursor** (v1.7+) introduced Team Rules that apply organization-wide behaviors from a central dashboard—testing requirements, linting preferences, security policies.

**Claude Code** uses enterprise memory at system paths (`/etc/claude-code/CLAUDE.md`) plus managed MCP configurations with allowlists/denylists for approved tools.

**GitHub Copilot** offers organization-level custom instructions configurable through GitHub.com settings, applicable to Copilot Chat, code review, and the coding agent.

### Onboarding new developers with existing rules

The Memory Bank pattern doubles as onboarding documentation:

1. New engineers clone the repo with pre-configured `.cursor/rules/` or `CLAUDE.md`
2. AI immediately understands project context, architecture decisions, and conventions
3. `projectbrief.md` and `productContext.md` provide the same context a senior engineer would share
4. Rules enforce standards automatically rather than relying on code review

Treat rules as living documentation: **"A great engineer only needs to be told something once—they learn it, internalize it, and apply it going forward."** Your AI rules should embody this principle.

---

## Anti-patterns that undermine rule effectiveness

### Common mistakes across all platforms

**Vague instructions** produce vague results:
```markdown
# Bad
- Write clean code
- Follow best practices

# Good  
- Functions must have single responsibility, max 30 lines
- All exported functions require JSDoc with @param and @returns
```

**Overly long rule files** cause context window competition—keep individual files under **500 lines**.

**Stale context** from rules referencing removed patterns or deprecated APIs confuses the AI.

**Duplicated content** instead of file references wastes tokens—use `@filename` syntax.

**Missing descriptions** for conditionally-applied rules means the AI cannot determine when to use them.

### Rule refresh for long conversations

Rules can drift out of context during extended sessions. Include refresh triggers:
```markdown
# Rule Compliance Check
RULE REFRESH: Re-read this rules file every 10-15 messages to maintain compliance.
If you notice deviation from these rules, acknowledge and correct course.
```

Periodically prompt: **"Please re-read the project rules and confirm you're following them."**

---

## Conclusion: Key patterns for agentic IDE success

The shift from passive AI assistance to agentic development requires intentional configuration. Three critical success factors emerge across all platforms:

**Context management determines output quality.** The Memory Bank pattern, hierarchical instruction files, and MCP integrations exist because well-structured context dramatically improves AI reasoning. Invest time upfront in documentation that serves both human and AI readers.

**Security and compliance require explicit encoding.** AI agents will cheerfully generate vulnerable code or license-violating snippets unless explicitly constrained. Use frameworks like CodeGuard or R.A.I.L.G.U.A.R.D., integrate scanning tools in CI, and treat AI output as untrusted by default.

**Rules are living documentation, not write-once configuration.** Version control your rules, update them after architectural decisions, and use them as the single source of truth that both humans and AI learn from. The teams achieving the best results with agentic IDEs treat rule maintenance as an ongoing practice, not a setup task.