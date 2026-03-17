// ==UserScript==
// @name         Hatch Skills Drawer
// @namespace    https://hatch.ecto1.ai/
// @version      1.8
// @description  Adds a skills browser drawer to the Hatch UI
// @match        https://hatch.ecto1.ai/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function(){
"use strict";
if(document.getElementById("sd-fab"))return;

var SKILLS=[{
"id": "fy-0", "examplePrompt": "Rate my morning routine: wake up, doom scroll for 30 min, cold brew, panic about deadlines",
"name": "Party Mode",
"desc": "Adds celebration effects to your chat — emoji thinking animations, confetti on task completion, and good vibes all around.",
"longDesc": "Party Mode brings the fun. When active, the loading dots transform into cycling emoji that match what Golden Fish is doing (thinking, coding, searching, creating). Task completions get a confetti burst. It's visual feedback that makes work feel like play.",
"category": "Creative",
"source": "Fun",
"section": "forYou",
"features": ["Emoji thinking animations that match the task", "Confetti burst on task completion", "Context-aware emoji sets (coding, thinking, searching, creating)", "Random rare emoji sequences for surprise"],
"prompt": "Party Mode is a visual enhancement skill. When active, it replaces the loading dots with cycling emoji and fires confetti when tasks complete. No behavioral changes to responses — just celebration.",
"iconSvg": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><defs><linearGradient id=\"g_fy0\" x1=\"0\" y1=\"0\" x2=\"48\" y2=\"48\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#e06090\"/><stop offset=\"1\" stop-color=\"#f090b0\"/></linearGradient></defs><circle cx=\"24\" cy=\"24\" r=\"24\" fill=\"url(#g_fy0)\"/><rect x=\"18\" y=\"18\" width=\"12\" height=\"12\" rx=\"2\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.3\" transform=\"rotate(15 24 24)\"/><circle cx=\"21\" cy=\"22\" r=\"1\" fill=\"#fff\" opacity=\".8\"/><circle cx=\"27\" cy=\"22\" r=\"1\" fill=\"#fff\" opacity=\".8\"/><circle cx=\"24\" cy=\"28\" r=\"1\" fill=\"#fff\" opacity=\".8\"/><circle cx=\"21\" cy=\"28\" r=\"1\" fill=\"#fff\" opacity=\".6\"/><circle cx=\"27\" cy=\"28\" r=\"1\" fill=\"#fff\" opacity=\".6\"/><circle cx=\"24\" cy=\"22\" r=\"1\" fill=\"#fff\" opacity=\".6\"/></svg>"
}, {"id": "fy-1", "examplePrompt": "Extract tokens from this: colors primary #2563eb, surface #f5f5f5, spacing sm 8px, md 16px, lg 24px", "name": "Design-Token Extractor", "desc": "Reads Figma JSON or design-token files and generates CSS custom properties, Tailwind config, or Style Dictionary output.", "longDesc": "This skill transforms raw design token definitions from tools like Figma, Tokens Studio, or Style Dictionary into production-ready code. It understands semantic aliasing, theme layers (light/dark), and outputs to CSS custom properties, Tailwind config, SCSS maps, or JSON.", "category": "Design", "source": "Community", "section": "forYou", "features": ["Parses Figma Variables & Tokens Studio JSON", "Generates CSS, SCSS, Tailwind, or Style Dictionary output", "Handles semantic aliasing and theme layers", "Supports color, spacing, typography, and shadow tokens"], "prompt": "You are a Design Token Engineer. When given raw design token data (Figma Variables JSON, Tokens Studio JSON, Style Dictionary input, or plain descriptions), you transform it into production-ready code.\n\nRules:\n- Ask which output format the user wants: CSS custom properties, SCSS map, Tailwind config, or Style Dictionary JSON.\n- Organize tokens into categories: color, spacing, typography, elevation, border-radius, and breakpoints.\n- For color tokens, detect semantic aliasing (e.g. \"surface-primary\" referencing \"gray-0\") and preserve the alias chain.\n- Support light/dark theme layers. Output both as separate selectors or media queries.\n- Use kebab-case for CSS variables, camelCase for JS/JSON, and dot-notation for Style Dictionary.\n- Add inline comments mapping each token back to its source name.\n- If the input is ambiguous, list assumptions before generating output.", "iconSvg": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><defs><linearGradient id=\"g_fy1\" x1=\"0\" y1=\"0\" x2=\"48\" y2=\"48\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#c49a4a\"/><stop offset=\"1\" stop-color=\"#d4a84a\"/></linearGradient></defs><circle cx=\"24\" cy=\"24\" r=\"24\" fill=\"url(#g_fy1)\"/><circle cx=\"18\" cy=\"20\" r=\"5\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.2\" opacity=\".7\"/><circle cx=\"24\" cy=\"17\" r=\"5\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.2\" opacity=\".85\"/><circle cx=\"30\" cy=\"20\" r=\"5\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.2\"/><path d=\"M16 30 Q24 27 32 30\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1\" opacity=\".5\"/></svg>"}, {"id": "fy-2", "examplePrompt": "Build me a toggle switch component with label, disabled state, and onChange callback", "name": "React Component Architect", "desc": "Generates well-structured React components from descriptions with TypeScript types, proper composition, and accessibility built in.", "longDesc": "Describe a UI component in plain English and this skill produces a complete React component with TypeScript interfaces, proper prop composition, ref forwarding, ARIA attributes, and keyboard navigation. Follows compound-component patterns when appropriate.", "category": "Coding", "source": "Cursor", "section": "forYou", "features": ["TypeScript-first with strict prop interfaces", "Built-in ARIA roles and keyboard navigation", "Compound component patterns for complex UIs", "Automatic Storybook story generation"], "prompt": "You are an expert React/TypeScript component architect. When asked to build a UI component, follow these rules:\n\n1. Define a clear Props interface with JSDoc descriptions. Extend native HTML element props where appropriate using ComponentPropsWithoutRef.\n2. Use forwardRef for all components that render a DOM element.\n3. Add ARIA roles, labels, and keyboard event handlers (Enter, Space, Escape, Arrow keys) as appropriate.\n4. For complex components (dropdowns, tabs, accordions), use the compound-component pattern with React Context.\n5. Separate visual styling from logic. Export unstyled component + a styled wrapper if a styling approach is specified.\n6. Include a default export and a Storybook story (CSF 3 format) that demonstrates all prop variants.\n7. Never use 'any' type. Prefer discriminated unions for variant props.\n8. Keep each component file under 150 lines. Extract hooks and utilities into separate files if needed.", "iconSvg": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><defs><linearGradient id=\"g_fy2\" x1=\"0\" y1=\"0\" x2=\"48\" y2=\"48\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#5e8260\"/><stop offset=\"1\" stop-color=\"#8fb08f\"/></linearGradient></defs><circle cx=\"24\" cy=\"24\" r=\"24\" fill=\"url(#g_fy2)\"/><ellipse cx=\"24\" cy=\"24\" rx=\"10\" ry=\"4\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.2\" transform=\"rotate(-30 24 24)\"/><ellipse cx=\"24\" cy=\"24\" rx=\"10\" ry=\"4\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.2\" transform=\"rotate(30 24 24)\"/><ellipse cx=\"24\" cy=\"24\" rx=\"10\" ry=\"4\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.2\"/><circle cx=\"24\" cy=\"24\" r=\"2\" fill=\"#fff\"/></svg>"}, {"id": "fy-4", "examplePrompt": "Write tests for: function clamp(val, min, max) { return Math.min(Math.max(val, min), max); }", "name": "Test Writer Pro", "desc": "Analyzes functions and generates comprehensive unit tests covering happy paths, edge cases, and error scenarios.", "longDesc": "Paste any function or module and receive complete test suites. Supports Jest, Vitest, Pytest, and Go testing. Automatically identifies edge cases, boundary conditions, and error paths.", "category": "Coding", "source": "Official", "section": "forYou", "features": ["Supports Jest, Vitest, Pytest, Go testing", "Automatic edge-case identification", "Generates mocks and fixtures", "Covers happy paths, boundaries, and error states"], "prompt": "You are a Test Engineer. When given a function, class, or module, generate a comprehensive test suite.\n\nRules:\n1. Ask which framework to use if not specified (Jest, Vitest, Pytest, Go testing, etc.).\n2. Organize tests into describe/context blocks: Happy Path, Edge Cases, Error Handling, Boundary Conditions.\n3. For each test, write a clear 'it should...' description that documents the expected behavior.\n4. Generate realistic mock data and fixtures. Avoid trivial placeholder values.\n5. Mock external dependencies (APIs, databases, file system) and assert they were called correctly.\n6. Test boundary values: empty inputs, null/undefined, maximum lengths, zero, negative numbers.\n7. For async code, test both resolved and rejected paths.\n8. Aim for >90% branch coverage. Call out any untestable branches and why.\n9. Keep each test focused on one assertion. Prefer many small tests over few large ones.", "iconSvg": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><defs><linearGradient id=\"g_fy4\" x1=\"0\" y1=\"0\" x2=\"48\" y2=\"48\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#4a7a78\"/><stop offset=\"1\" stop-color=\"#7aaba8\"/></linearGradient></defs><circle cx=\"24\" cy=\"24\" r=\"24\" fill=\"url(#g_fy4)\"/><path d=\"M21 14 V20 L15 32 H33 L27 20 V14\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><line x1=\"20\" y1=\"14\" x2=\"28\" y2=\"14\" stroke=\"#fff\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><path d=\"M17 26 H31\" stroke=\"#fff\" stroke-width=\"1\" opacity=\".5\"/><circle cx=\"22\" cy=\"29\" r=\"1\" fill=\"#fff\" opacity=\".7\"/></svg>"}, {"id": "fy-5", "examplePrompt": "Convert this Figma card: 320px wide, 16px padding, 12px gap, 8px radius, white bg, title 18px semibold", "name": "Figma-to-Code Bridge", "desc": "Translates Figma component specs into pixel-perfect CSS/HTML using your project's existing design tokens and conventions.", "longDesc": "Give this skill a Figma component's layout, spacing, and style data and it produces implementation code that references your project's CSS custom properties, class naming convention, and component library.", "category": "Design", "source": "Community", "section": "forYou", "features": ["Maps Figma auto-layout to CSS flexbox/grid", "References your project's design tokens", "Supports BEM, Tailwind, or CSS Modules output", "Handles responsive variants"], "prompt": "You are a Figma-to-Code specialist. When given Figma component specifications (layout, spacing, colors, typography, effects), produce production-ready HTML and CSS.\n\nRules:\n1. Map Figma Auto Layout to CSS Flexbox. Use Grid only when the layout has a 2D structure.\n2. Reference design tokens (CSS custom properties) instead of hardcoded values.\n3. Match the naming convention the user specifies (BEM, Tailwind utilities, CSS Modules, or plain classes).\n4. Translate Figma constraints (fill, hug, fixed) to the correct CSS sizing.\n5. Convert Figma effects to CSS: drop shadows, background blur, layer blur.\n6. Handle responsive variants if multiple Figma frames are provided for different breakpoints.\n7. Output clean, semantic HTML. Use appropriate elements (nav, section, article, button) not just divs.", "iconSvg": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><defs><linearGradient id=\"g_fy5\" x1=\"0\" y1=\"0\" x2=\"48\" y2=\"48\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#b0a090\"/><stop offset=\"1\" stop-color=\"#c4b5a0\"/></linearGradient></defs><circle cx=\"24\" cy=\"24\" r=\"24\" fill=\"url(#g_fy5)\"/><path d=\"M12 30 Q18 16 24 16 Q30 16 36 30\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><line x1=\"16\" y1=\"30\" x2=\"16\" y2=\"23\" stroke=\"#fff\" stroke-width=\"1\" opacity=\".6\"/><line x1=\"24\" y1=\"30\" x2=\"24\" y2=\"16\" stroke=\"#fff\" stroke-width=\"1\" opacity=\".6\"/><line x1=\"32\" y1=\"30\" x2=\"32\" y2=\"23\" stroke=\"#fff\" stroke-width=\"1\" opacity=\".6\"/><line x1=\"12\" y1=\"30\" x2=\"36\" y2=\"30\" stroke=\"#fff\" stroke-width=\"1.2\"/></svg>"}, {"id": "fy-6", "examplePrompt": "Generate a color system from brand color #6366f1 (indigo)", "name": "Color System Generator", "desc": "Creates complete, accessible color palettes with semantic tokens, dark mode variants, and WCAG contrast ratios.", "longDesc": "Describe a brand color or mood and this skill generates a full color system: primary, secondary, neutral scales, semantic colors (success, warning, error), dark mode equivalents, and WCAG AA/AAA contrast checks for every combination.", "category": "Design", "source": "Personal", "section": "forYou", "features": ["Generates full color scales from a single brand color", "Automatic dark mode palette with perceptual balance", "WCAG AA and AAA contrast ratio checks", "Outputs CSS custom properties, Tailwind config, or Figma-ready values"], "prompt": "You are a Color System Architect. When given a brand color, mood, or design direction, generate a complete color system.\n\nOutput:\n1. **Primary scale**: 50-950 shades generated from the input color using perceptually uniform spacing (oklch or similar).\n2. **Neutral scale**: A complementary gray scale with a subtle tint from the primary color.\n3. **Semantic colors**: Success (green), Warning (amber), Error (red), Info (blue) \u2014 each as a mini scale (light bg, default, dark text).\n4. **Dark mode**: Generate dark variants for all scales. Dark mode is not inverted light mode \u2014 adjust saturation down, shift hue slightly, ensure backgrounds are truly dark (< 15% lightness).\n5. **Contrast matrix**: For every semantic pair (text on surface, text on primary, etc.), compute the contrast ratio and mark it AA, AAA, or FAIL.\n6. **Output format**: Ask the user's preference \u2014 CSS custom properties, Tailwind config, SCSS variables, or plain JSON. Default to CSS custom properties.\n\nRules:\n- All colors in hex AND oklch notation.\n- Minimum AA contrast (4.5:1) for body text, AAA preferred.\n- Large text (18px+ bold) can use 3:1 minimum.\n- If the input color fails contrast on white, suggest the nearest accessible alternative.", "iconSvg": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><defs><linearGradient id=\"g_fy6\" x1=\"0\" y1=\"0\" x2=\"48\" y2=\"48\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#c49a4a\"/><stop offset=\"1\" stop-color=\"#d4a84a\"/></linearGradient></defs><circle cx=\"24\" cy=\"24\" r=\"24\" fill=\"url(#g_fy6)\"/><circle cx=\"20\" cy=\"20\" r=\"5\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.2\" opacity=\".8\"/><circle cx=\"28\" cy=\"20\" r=\"5\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.2\" opacity=\".8\"/><circle cx=\"24\" cy=\"27\" r=\"5\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.2\" opacity=\".8\"/></svg>"}, {"id": "pop-2", "examplePrompt": "Analyze: Jan 1200 users $45k rev, Feb 1800 users $52k rev, Mar 1400 users $48k rev", "name": "Data Analyst", "desc": "Analyzes CSV, JSON, or SQL output and produces insights, visualizations descriptions, and summary statistics.", "longDesc": "Upload or paste data in CSV, JSON, or SQL result format and this skill performs exploratory data analysis: summary statistics, distribution analysis, correlation detection, outlier identification, and clear narrative insights.", "category": "Data", "source": "Official", "section": "popular", "features": ["Summary statistics and distributions", "Correlation and trend detection", "Outlier identification", "Plain-English narrative insights"], "prompt": "You are a Data Analyst. When given data (CSV, JSON, SQL results), perform exploratory data analysis and produce clear insights.\n\nYour analysis must include:\n1. Shape: Row count, column count, data types.\n2. Summary statistics: Mean, median, std dev, min, max for numeric columns.\n3. Missing data: Percentage of nulls per column. Suggest handling strategy.\n4. Distributions: Identify skewed, normal, or bimodal distributions.\n5. Correlations: Identify top correlated variable pairs.\n6. Trends: If time-series data, note trends, seasonality, and anomalies.\n7. Narrative: Write 3-5 bullet points summarizing the most important findings.", "iconSvg": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><defs><linearGradient id=\"g_pop2\" x1=\"0\" y1=\"0\" x2=\"48\" y2=\"48\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#5d7f94\"/><stop offset=\"1\" stop-color=\"#7a9bb0\"/></linearGradient></defs><circle cx=\"24\" cy=\"24\" r=\"24\" fill=\"url(#g_pop2)\"/><path d=\"M13 28 Q17 20 21 24 Q25 28 29 18 Q33 12 35 16\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.4\" stroke-linecap=\"round\"/><line x1=\"13\" y1=\"34\" x2=\"35\" y2=\"34\" stroke=\"#fff\" stroke-width=\"1\" opacity=\".4\"/><line x1=\"13\" y1=\"34\" x2=\"13\" y2=\"14\" stroke=\"#fff\" stroke-width=\"1\" opacity=\".4\"/></svg>"}, {"id": "pop-3", "examplePrompt": "Research: best practices for AI character memory in long-form chat applications", "name": "Deep Research Assistant", "desc": "Conducts multi-step research on any topic, synthesizing sources into structured reports with citations.", "longDesc": "Give it a research question and it will conduct multi-step investigation, cross-reference sources, identify consensus and disagreements, and produce a structured report with proper citations and confidence levels.", "category": "Research", "source": "Official", "section": "popular", "features": ["Multi-step investigation workflow", "Source cross-referencing and validation", "Structured reports with citations", "Confidence level assessment"], "prompt": "You are a Research Analyst. When given a question or topic, conduct thorough multi-step research and produce a structured report.\n\nWorkflow:\n1. Clarify scope: Restate the question. Identify sub-questions.\n2. Investigate: For each sub-question, gather information. Cite sources.\n3. Cross-reference: Compare findings across sources.\n4. Synthesize: Produce a report with Executive Summary, Key Findings, Detailed Analysis, Confidence Assessment, Open Questions, and Sources.", "iconSvg": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><defs><linearGradient id=\"g_pop3\" x1=\"0\" y1=\"0\" x2=\"48\" y2=\"48\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#c49a4a\"/><stop offset=\"1\" stop-color=\"#d4a84a\"/></linearGradient></defs><circle cx=\"24\" cy=\"24\" r=\"24\" fill=\"url(#g_pop3)\"/><circle cx=\"22\" cy=\"22\" r=\"7\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.3\"/><line x1=\"27\" y1=\"27\" x2=\"34\" y2=\"34\" stroke=\"#fff\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"22\" y1=\"18\" x2=\"22\" y2=\"20\" stroke=\"#fff\" stroke-width=\"1\" stroke-linecap=\"round\" opacity=\".7\"/></svg>"}, {"id": "pop-4", "examplePrompt": "TypeError: Cannot read properties of undefined (reading map) at UserList.tsx:42", "name": "Debug Detective", "desc": "Systematically diagnoses bugs by analyzing error messages, stack traces, and code context to find root causes.", "longDesc": "Paste an error message, stack trace, or describe unexpected behavior and this skill walks through a systematic debugging process. It identifies likely root causes, suggests diagnostic steps, and provides fix implementations.", "category": "Coding", "source": "Community", "section": "popular", "features": ["Stack trace analysis and interpretation", "Root cause hypothesis generation", "Step-by-step diagnostic plans", "Fix implementation with explanation"], "prompt": "You are a Debug Detective. When given an error message, stack trace, or unexpected behavior, systematically diagnose the root cause.\n\nProcess:\n1. Parse the error: Extract error type, message, file, and line number.\n2. Generate hypotheses: List 2-4 likely root causes, ranked by probability.\n3. Diagnostic plan: Suggest specific checks for the top hypothesis.\n4. Trace the data flow: Walk backwards from the error through the call stack.\n5. Provide the fix: Corrected code with clear explanation.\n6. Prevent recurrence: Suggest a test case or validation.", "iconSvg": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><defs><linearGradient id=\"g_pop4\" x1=\"0\" y1=\"0\" x2=\"48\" y2=\"48\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#b06040\"/><stop offset=\"1\" stop-color=\"#c48060\"/></linearGradient></defs><circle cx=\"24\" cy=\"24\" r=\"24\" fill=\"url(#g_pop4)\"/><ellipse cx=\"24\" cy=\"26\" rx=\"6\" ry=\"7\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.3\"/><line x1=\"24\" y1=\"19\" x2=\"24\" y2=\"33\" stroke=\"#fff\" stroke-width=\"1\" opacity=\".5\"/><line x1=\"18\" y1=\"24\" x2=\"14\" y2=\"20\" stroke=\"#fff\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"24\" x2=\"34\" y2=\"20\" stroke=\"#fff\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><circle cx=\"21\" cy=\"24\" r=\"1\" fill=\"#fff\"/><circle cx=\"27\" cy=\"24\" r=\"1\" fill=\"#fff\"/></svg>"}, {"id": "pop-6", "examplePrompt": "Design a URL shortener that handles 10M clicks/day", "name": "System Design Mentor", "desc": "Walks through system design problems step-by-step: requirements, architecture, trade-offs, and scaling strategies.", "longDesc": "Describe a system design challenge and this skill guides you through the full process: clarifying requirements, estimating scale, choosing components, designing data models, addressing bottlenecks, and evaluating trade-offs.", "category": "Coding", "source": "Community", "section": "popular", "features": ["Requirement clarification framework", "Back-of-envelope capacity estimation", "Component selection and trade-off analysis", "Scaling strategy recommendations"], "prompt": "You are a System Design Mentor. Guide the user through designing scalable systems step by step.\n\nFramework:\n1. Requirements: Clarify functional and non-functional requirements.\n2. Estimation: Back-of-envelope calculations — DAU, QPS, storage, bandwidth.\n3. High-level design: Component diagram using ASCII art.\n4. Data model: Key entities, relationships, and storage choices.\n5. Deep dive: Pick the hardest component and design it in detail.\n6. Trade-offs: For every decision, state what you're trading.\n7. Bottlenecks: Identify failure points and mitigations.", "iconSvg": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><defs><linearGradient id=\"g_pop6\" x1=\"0\" y1=\"0\" x2=\"48\" y2=\"48\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#5e8260\"/><stop offset=\"1\" stop-color=\"#8fb08f\"/></linearGradient></defs><circle cx=\"24\" cy=\"24\" r=\"24\" fill=\"url(#g_pop6)\"/><rect x=\"14\" y=\"20\" width=\"8\" height=\"14\" rx=\"1\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.1\"/><rect x=\"26\" y=\"14\" width=\"8\" height=\"20\" rx=\"1\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.1\"/><path d=\"M22 27 L26 27\" stroke=\"#fff\" stroke-width=\"1\" opacity=\".6\"/><path d=\"M22 24 L26 21\" stroke=\"#fff\" stroke-width=\"1\" opacity=\".6\"/></svg>"}, {"id": "pop-7", "examplePrompt": "Meeting: Sarah wants April, Mike says March without analytics. Decided March 15. Andy handles deploy.", "name": "Meeting Notes → Actions", "desc": "Converts messy meeting transcripts into structured notes with decisions, action items, and owners.", "longDesc": "Paste a meeting transcript or rough notes and get back structured output: key discussion points, decisions made, action items with owners and deadlines, and open questions.", "category": "Productivity", "source": "Community", "section": "popular", "features": ["Decision and action item extraction", "Owner and deadline assignment", "Key discussion point summarization", "Follow-up email draft generation"], "prompt": "You are a Meeting Analyst. When given a meeting transcript or rough notes, produce structured meeting notes.\n\nOutput: Key Discussion Points, Decisions Made, Action Items (with Owner and Deadline), Open Questions, and a Follow-up email draft.\n\nDistinguish between decisions (final) and discussions (ongoing). If owners or deadlines aren't stated, mark them as TBD.", "iconSvg": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><defs><linearGradient id=\"g_pop7\" x1=\"0\" y1=\"0\" x2=\"48\" y2=\"48\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#b0a090\"/><stop offset=\"1\" stop-color=\"#c4b5a0\"/></linearGradient></defs><circle cx=\"24\" cy=\"24\" r=\"24\" fill=\"url(#g_pop7)\"/><rect x=\"14\" y=\"13\" width=\"20\" height=\"24\" rx=\"2\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.2\"/><line x1=\"18\" y1=\"19\" x2=\"30\" y2=\"19\" stroke=\"#fff\" stroke-width=\"1\" opacity=\".6\"/><line x1=\"18\" y1=\"24\" x2=\"28\" y2=\"24\" stroke=\"#fff\" stroke-width=\"1\" opacity=\".6\"/><line x1=\"18\" y1=\"29\" x2=\"26\" y2=\"29\" stroke=\"#fff\" stroke-width=\"1\" opacity=\".6\"/><path d=\"M18 19 L16 19\" stroke=\"#fff\" stroke-width=\"1.5\" stroke-linecap=\"round\"/></svg>"}, {"id": "pop-8", "examplePrompt": "I want a prompt that makes AI explain code like a pirate who is also a senior engineer", "name": "Prompt Engineer", "desc": "Helps craft and refine prompts for Claude or GPT — optimizing for clarity, specificity, and consistent output.", "longDesc": "Describe what you want an AI to do and this skill helps you write an optimized prompt. It applies prompt engineering best practices: role setting, constraint definition, output formatting, few-shot examples, and chain-of-thought scaffolding.", "category": "Productivity", "source": "Official", "section": "popular", "features": ["Role and constraint optimization", "Few-shot example generation", "Chain-of-thought scaffolding", "A/B prompt variant suggestions"], "prompt": "You are a Prompt Engineer. Help the user craft effective prompts for LLMs.\n\nWhen the user describes what they want:\n1. Clarify the task precisely.\n2. Set the role with 'You are a [specific expert]'.\n3. Define constraints: output format, length, tone, what to avoid.\n4. Add structure: numbered steps, markdown headers, or XML tags.\n5. Include 1-2 few-shot examples.\n6. Handle edge cases.\n7. Output the final prompt in a copyable code block.\n8. Offer variants with trade-off explanations.", "iconSvg": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><defs><linearGradient id=\"g_pop8\" x1=\"0\" y1=\"0\" x2=\"48\" y2=\"48\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#c49a4a\"/><stop offset=\"1\" stop-color=\"#d4a84a\"/></linearGradient></defs><circle cx=\"24\" cy=\"24\" r=\"24\" fill=\"url(#g_pop8)\"/><circle cx=\"24\" cy=\"24\" r=\"10\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.2\"/><circle cx=\"24\" cy=\"24\" r=\"3\" fill=\"#fff\" opacity=\".8\"/><line x1=\"24\" y1=\"14\" x2=\"24\" y2=\"18\" stroke=\"#fff\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><line x1=\"24\" y1=\"30\" x2=\"24\" y2=\"34\" stroke=\"#fff\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><line x1=\"14\" y1=\"24\" x2=\"18\" y2=\"24\" stroke=\"#fff\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"24\" x2=\"34\" y2=\"24\" stroke=\"#fff\" stroke-width=\"1.2\" stroke-linecap=\"round\"/></svg>"}, {"id": "pop-9", "examplePrompt": "Dashboard layout: sidebar nav, top header, 3-column card grid that collapses to 1 on mobile", "name": "Responsive Layout Builder", "desc": "Generates mobile-first CSS layouts using modern techniques: Grid, Flexbox, Container Queries, and fluid typography.", "longDesc": "Describe a layout and this skill produces clean, modern CSS using the best approach for each case. Favors CSS Grid and Flexbox, leverages Container Queries for component-level responsiveness, and implements fluid typography with clamp().", "category": "Design", "source": "Community", "section": "popular", "features": ["CSS Grid and Flexbox pattern selection", "Container Query implementations", "Fluid typography with clamp()", "Mobile-first progressive enhancement"], "prompt": "You are a CSS Layout Architect specializing in responsive design. Given a layout description, produce clean, modern CSS.\n\nRules:\n1. Always start mobile-first.\n2. Choose Flexbox for 1D layouts, Grid for 2D.\n3. Use Container Queries for component-level responsiveness.\n4. Implement fluid typography with clamp().\n5. Prefer logical properties for RTL compatibility.\n6. Avoid magic numbers — use CSS custom properties.\n7. Ensure touch targets are at least 44px.\n8. Output only CSS (or Tailwind if requested).", "iconSvg": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><defs><linearGradient id=\"g_pop9\" x1=\"0\" y1=\"0\" x2=\"48\" y2=\"48\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#5d7f94\"/><stop offset=\"1\" stop-color=\"#7a9bb0\"/></linearGradient></defs><circle cx=\"24\" cy=\"24\" r=\"24\" fill=\"url(#g_pop9)\"/><rect x=\"14\" y=\"14\" width=\"20\" height=\"20\" rx=\"2\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.2\"/><line x1=\"14\" y1=\"24\" x2=\"34\" y2=\"24\" stroke=\"#fff\" stroke-width=\"1\" opacity=\".5\"/><line x1=\"24\" y1=\"14\" x2=\"24\" y2=\"34\" stroke=\"#fff\" stroke-width=\"1\" opacity=\".5\"/><rect x=\"16\" y=\"16\" width=\"6\" height=\"6\" rx=\"1\" fill=\"#fff\" opacity=\".3\"/><rect x=\"26\" y=\"26\" width=\"6\" height=\"6\" rx=\"1\" fill=\"#fff\" opacity=\".3\"/></svg>"}, {"id": "pop-10", "examplePrompt": "Generate a TypeScript client for GitHub REST API: list repos, create issue, get PR details", "name": "API Integrator", "desc": "Generates API client code, types, and error handling from OpenAPI specs, documentation URLs, or example requests.", "longDesc": "Provide an API spec, docs link, or sample request/response and this skill produces type-safe client code with authentication, pagination, retry logic, and error mapping.", "category": "Coding", "source": "Community", "section": "popular", "features": ["Type generation from OpenAPI specs", "Authentication and retry logic", "Pagination handling patterns", "Error mapping and custom exceptions"], "prompt": "You are an API Integration Specialist. Given an API specification or sample request/response, generate a production-ready client.\n\nOutput:\n1. TypeScript interfaces for all request/response shapes.\n2. Client class with methods for each endpoint.\n3. Authentication implementation.\n4. Error handling with retry logic and exponential backoff.\n5. Pagination via async generators.\n6. Configuration via a config object — never hardcode secrets.", "iconSvg": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><defs><linearGradient id=\"g_pop10\" x1=\"0\" y1=\"0\" x2=\"48\" y2=\"48\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#4a7a78\"/><stop offset=\"1\" stop-color=\"#7aaba8\"/></linearGradient></defs><circle cx=\"24\" cy=\"24\" r=\"24\" fill=\"url(#g_pop10)\"/><path d=\"M16 18 L24 18 L24 24 L32 24\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"16\" cy=\"18\" r=\"2.5\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.1\"/><circle cx=\"32\" cy=\"24\" r=\"2.5\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.1\"/><path d=\"M20 30 L28 30\" stroke=\"#fff\" stroke-width=\"1\" opacity=\".5\" stroke-linecap=\"round\"/><path d=\"M22 33 L26 33\" stroke=\"#fff\" stroke-width=\"1\" opacity=\".3\" stroke-linecap=\"round\"/></svg>"}, {"id": "pop-11", "examplePrompt": "Refactor: if (user) { if (user.role === admin) { if (user.active) { return showDashboard() } } }", "name": "Code Refactorer", "desc": "Identifies code smells and refactors for readability, performance, and maintainability while preserving behavior.", "longDesc": "Submit code and get refactoring suggestions ranked by impact. Identifies duplication, long methods, deep nesting, unclear naming, and missing abstractions.", "category": "Coding", "source": "Official", "section": "popular", "features": ["Code smell detection and ranking", "Before/after comparisons with rationale", "Behavior-preserving transformations", "Performance optimization suggestions"], "prompt": "You are a Code Refactoring Expert. Analyze code and suggest improvements ranked by impact.\n\nCheck for: Long methods (>30 lines), deep nesting (>3 levels), duplication, unclear naming, god objects, magic values, missing error handling.\n\nFor each suggestion show before/after code, explain why the change improves the code, and confirm behavior is preserved.", "iconSvg": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><defs><linearGradient id=\"g_pop11\" x1=\"0\" y1=\"0\" x2=\"48\" y2=\"48\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#b06040\"/><stop offset=\"1\" stop-color=\"#c48060\"/></linearGradient></defs><circle cx=\"24\" cy=\"24\" r=\"24\" fill=\"url(#g_pop11)\"/><path d=\"M16 32 L20 18 L24 28 L28 14 L32 26\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M14 34 L34 34\" stroke=\"#fff\" stroke-width=\"1\" opacity=\".4\"/></svg>"}, {"id": "pop-12", "examplePrompt": "Tables: users(id, name), orders(id, user_id, total, created_at). Top 5 users by spend last 30 days", "name": "SQL Query Builder", "desc": "Converts natural language questions into optimized SQL queries with joins, aggregations, and window functions.", "longDesc": "Describe your data schema and ask questions in plain English. This skill generates correct SQL with proper JOINs, GROUP BYs, window functions, CTEs, and index-aware optimizations.", "category": "Data", "source": "Community", "section": "popular", "features": ["Natural language to SQL translation", "Multi-dialect support (Postgres, MySQL, SQLite)", "Window functions and CTEs", "Query performance optimization hints"], "prompt": "You are a SQL Expert. Convert natural language questions into correct, optimized SQL queries.\n\nWorkflow:\n1. Ask for the schema if not provided.\n2. Ask for the SQL dialect (default PostgreSQL).\n3. Write queries using proper JOINs, CTEs, and window functions.\n4. Explain the query in 2-3 sentences.\n5. Suggest indexes for performance.\n6. Format with consistent indentation and uppercase keywords.", "iconSvg": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><defs><linearGradient id=\"g_pop12\" x1=\"0\" y1=\"0\" x2=\"48\" y2=\"48\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#5d6f8a\"/><stop offset=\"1\" stop-color=\"#8a9bb0\"/></linearGradient></defs><circle cx=\"24\" cy=\"24\" r=\"24\" fill=\"url(#g_pop12)\"/><rect x=\"14\" y=\"14\" width=\"20\" height=\"20\" rx=\"2\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.2\"/><line x1=\"14\" y1=\"20\" x2=\"34\" y2=\"20\" stroke=\"#fff\" stroke-width=\"1\" opacity=\".6\"/><line x1=\"14\" y1=\"26\" x2=\"34\" y2=\"26\" stroke=\"#fff\" stroke-width=\"1\" opacity=\".4\"/><line x1=\"22\" y1=\"14\" x2=\"22\" y2=\"34\" stroke=\"#fff\" stroke-width=\"1\" opacity=\".4\"/></svg>"}, {"id": "pop-14", "examplePrompt": "Break down: Add real-time collaborative editing to our document app like Google Docs", "name": "Sprint Planner", "desc": "Breaks down feature requests into estimated user stories, tasks, and acceptance criteria for agile teams.", "longDesc": "Describe a feature or epic and this skill decomposes it into user stories with acceptance criteria, technical tasks, story point estimates, and dependency mapping.", "category": "Productivity", "source": "Community", "section": "popular", "features": ["User story decomposition with acceptance criteria", "Story point estimation", "Task dependency mapping", "Sprint capacity planning"], "prompt": "You are an Agile Sprint Planner. When given a feature request or epic, decompose it into actionable sprint work.\n\nFor each user story provide: Title (As a/I want/So that), Acceptance criteria (Given/When/Then), Technical tasks, Story points (Fibonacci), and Dependencies.\n\nStories should be completable within one sprint. Split anything >8 points. Flag technical risks as spike stories.", "iconSvg": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><defs><linearGradient id=\"g_pop14\" x1=\"0\" y1=\"0\" x2=\"48\" y2=\"48\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#8a7a9a\"/><stop offset=\"1\" stop-color=\"#a898b0\"/></linearGradient></defs><circle cx=\"24\" cy=\"24\" r=\"24\" fill=\"url(#g_pop14)\"/><rect x=\"14\" y=\"14\" width=\"20\" height=\"5\" rx=\"1.5\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.1\"/><rect x=\"14\" y=\"22\" width=\"12\" height=\"5\" rx=\"1.5\" fill=\"#fff\" opacity=\".5\"/><rect x=\"14\" y=\"30\" width=\"16\" height=\"5\" rx=\"1.5\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.1\" opacity=\".6\"/></svg>"}, {"id": "pop-15", "examplePrompt": "Extract i18n strings from: <Button>Save changes</Button><p>Your progress has been saved</p>", "name": "i18n Helper", "desc": "Extracts hardcoded strings, generates translation keys, and produces locale files for internationalization.", "longDesc": "Feed it a component or page and this skill identifies all hardcoded user-facing strings, generates semantic translation keys, produces locale JSON files, and handles pluralization and RTL considerations.", "category": "Coding", "source": "Community", "section": "popular", "features": ["Hardcoded string extraction", "Semantic translation key generation", "Pluralization and gender handling", "RTL layout considerations"], "prompt": "You are an i18n Specialist. When given source code, identify all user-facing strings and prepare them for translation.\n\nProcess:\n1. Scan for hardcoded strings.\n2. Generate semantic, hierarchical translation keys.\n3. Replace strings with i18n function calls.\n4. Produce locale JSON files.\n5. Handle pluralization with ICU MessageFormat.\n6. Flag concatenation issues and RTL layout concerns.", "iconSvg": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><defs><linearGradient id=\"g_pop15\" x1=\"0\" y1=\"0\" x2=\"48\" y2=\"48\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#5e8260\"/><stop offset=\"1\" stop-color=\"#8fb08f\"/></linearGradient></defs><circle cx=\"24\" cy=\"24\" r=\"24\" fill=\"url(#g_pop15)\"/><circle cx=\"24\" cy=\"24\" r=\"10\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.2\"/><path d=\"M19 18 Q24 14 29 18\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1\" opacity=\".6\"/><line x1=\"24\" y1=\"24\" x2=\"24\" y2=\"34\" stroke=\"#fff\" stroke-width=\"1\" opacity=\".5\"/><line x1=\"14\" y1=\"24\" x2=\"34\" y2=\"24\" stroke=\"#fff\" stroke-width=\"1\" opacity=\".5\"/><circle cx=\"24\" cy=\"24\" r=\"2\" fill=\"#fff\" opacity=\".6\"/></svg>"}, {"id": "pop-16", "examplePrompt": "Create personas: 60% users age 25-35, mobile, visit 3x/week, top complaint is slow load times", "name": "Persona Creator", "desc": "Builds detailed user personas from research data, interviews, or demographic descriptions for UX design.", "longDesc": "Provide user research data, interview quotes, or demographic info and this skill synthesizes detailed personas with goals, frustrations, behaviors, and scenarios.", "category": "Research", "source": "Community", "section": "popular", "features": ["Research synthesis into persona attributes", "Goals, frustrations, and behavior mapping", "Scenario and journey generation", "Formatted persona card output"], "prompt": "You are a UX Research Analyst specializing in persona creation. When given user research data, synthesize it into detailed user personas.\n\nInclude: Demographics, representative quote, goals, frustrations, behaviors, and a scenario narrative.\n\nBase personas on patterns in the data, not stereotypes. Include 1 primary, 1-2 secondary, and optionally 1 anti-persona.", "iconSvg": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><defs><linearGradient id=\"g_pop16\" x1=\"0\" y1=\"0\" x2=\"48\" y2=\"48\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#c49a4a\"/><stop offset=\"1\" stop-color=\"#d4a84a\"/></linearGradient></defs><circle cx=\"24\" cy=\"24\" r=\"24\" fill=\"url(#g_pop16)\"/><circle cx=\"24\" cy=\"18\" r=\"5\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.2\"/><path d=\"M16 34 Q16 26 24 26 Q32 26 32 34\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.2\" stroke-linecap=\"round\"/></svg>"}, {"id": "pop-17", "examplePrompt": "Lighthouse score 45. LCP 4.2s, CLS 0.25, INP 380ms. Next.js app with large hero images.", "name": "Performance Profiler", "desc": "Analyzes code or Lighthouse reports and provides actionable optimization recommendations ranked by impact.", "longDesc": "Submit code, bundle analysis, or Lighthouse JSON and get prioritized performance improvements. Covers Core Web Vitals, bundle size reduction, render optimization, and caching strategies.", "category": "Coding", "source": "Official", "section": "popular", "features": ["Core Web Vitals optimization", "Bundle size analysis and reduction", "Render and paint optimization", "Caching and lazy loading strategies"], "prompt": "You are a Web Performance Engineer. Analyze code or Lighthouse reports and produce prioritized optimization recommendations.\n\nCheck: Core Web Vitals (LCP, INP, CLS), bundle size, render performance, network optimization, caching, and lazy loading.\n\nFor each recommendation provide: Impact (High/Medium/Low), Effort (Quick win/Moderate/Major refactor), and specific Action.", "iconSvg": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><defs><linearGradient id=\"g_pop17\" x1=\"0\" y1=\"0\" x2=\"48\" y2=\"48\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#b06040\"/><stop offset=\"1\" stop-color=\"#c48060\"/></linearGradient></defs><circle cx=\"24\" cy=\"24\" r=\"24\" fill=\"url(#g_pop17)\"/><path d=\"M14 32 L20 20 L26 26 L34 14\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"34\" cy=\"14\" r=\"2\" fill=\"#fff\" opacity=\".8\"/><path d=\"M30 14 L34 14 L34 18\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}, {"id": "pop-18", "examplePrompt": "Generate .cursorrules for: Next.js 14, TypeScript strict, Tailwind CSS, Jest, team of 4", "name": "Cursor Rules Generator", "desc": "Creates .cursorrules files tailored to your project's stack, conventions, and team preferences.", "longDesc": "Describe your project tech stack, coding conventions, and team preferences and this skill generates a comprehensive .cursorrules file. Covers code style, architecture patterns, naming conventions, testing requirements, and documentation standards.", "category": "Productivity", "source": "Cursor", "section": "popular", "features": ["Stack-specific rule generation", "Coding convention enforcement", "Architecture pattern guidelines", "Automatic rule conflict detection"], "prompt": "You are a Cursor Rules Architect. When the user describes their project, generate a comprehensive .cursorrules file.\n\nAsk for: Tech stack, code style, architecture, testing framework, documentation preferences.\n\nOutput sections: Role & Persona, Code Quality rules, Architecture rules, Error handling rules, Testing rules, Security rules, Documentation rules.\n\nRules should be specific and actionable, not vague.", "iconSvg": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><defs><linearGradient id=\"g_pop18\" x1=\"0\" y1=\"0\" x2=\"48\" y2=\"48\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#5d7f94\"/><stop offset=\"1\" stop-color=\"#7a9bb0\"/></linearGradient></defs><circle cx=\"24\" cy=\"24\" r=\"24\" fill=\"url(#g_pop18)\"/><rect x=\"15\" y=\"15\" width=\"18\" height=\"18\" rx=\"3\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.2\"/><path d=\"M20 21 L20 27\" stroke=\"#fff\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><path d=\"M24 19 L24 27\" stroke=\"#fff\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><path d=\"M28 23 L28 27\" stroke=\"#fff\" stroke-width=\"1.2\" stroke-linecap=\"round\"/></svg>"}, {"id": "pop-19", "examplePrompt": "Set up zero-knowledge encryption for a health app storing medical records in Supabase. Users set a passphrase, data encrypted client-side, server never sees plaintext.", "name": "Client Encryption", "desc": "Zero-knowledge client-side encryption using Web Crypto API. AES-256-GCM with PBKDF2 key derivation for sensitive data.", "longDesc": "Implements zero-knowledge encryption where the server never sees plaintext. Uses AES-256-GCM with PBKDF2 (600K iterations), non-extractable wrapping keys in IndexedDB, auto-lock after inactivity, SRI delivery protection, and entropy-aware passphrase guidance. Includes real pitfall warnings that prevent catastrophic crypto mistakes.", "category": "Coding", "source": "Little Pieces", "section": "popular", "features": ["AES-256-GCM + PBKDF2 600K iterations", "Non-extractable wrapping keys via IndexedDB", "Auto-lock after 15min inactivity", "SRI hashes + strict CSP headers", "Entropy-aware passphrase strength meter"], "prompt": "You are a Client-Side Encryption Architect. When asked to secure user data, implement zero-knowledge encryption using the Web Crypto API.\n\nImplementation:\n1. Create crypto.js: AES-256-GCM encryption with PBKDF2 key derivation (600K iterations, SHA-256). Fresh random 16-byte salt per encrypt(), fresh 12-byte IV per encrypt().\n2. Define which fields per table get encrypted.\n3. Add passphrase verification by encrypting a known string.\n4. Cache passphrase with Web Crypto non-extractable wrapping key stored in IndexedDB.\n5. Auto-lock after 15 minutes of inactivity.\n6. Add entropy-aware strength meter (encourage 4+ random words).\n7. Require passphrase re-entry for destructive actions.\n8. Add SRI hashes to all script/link tags (vite-plugin-sri3).\n9. Strict CSP: remove unsafe-inline from script-src.\n\nCRITICAL PITFALLS:\n- NEVER use a static PBKDF2 salt. Generate fresh random 16-byte salt per encrypt() call. Static salts enable rainbow table attacks.\n- NEVER reuse an IV with AES-GCM. Generate fresh 12-byte IV per encrypt() call. IV reuse is catastrophic (leaks the auth key).\n- JS strings are immutable and GC-managed. Passphrase can linger in memory. Use Uint8Array for crypto paths and zeroOut() bytes immediately after importKey().", "iconSvg": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><defs><linearGradient id=\"g_pop19\" x1=\"0\" y1=\"0\" x2=\"48\" y2=\"48\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#10b981\"/><stop offset=\"1\" stop-color=\"#34d399\"/></linearGradient></defs><circle cx=\"24\" cy=\"24\" r=\"24\" fill=\"url(#g_pop19)\"/><rect x=\"17\" y=\"22\" width=\"14\" height=\"11\" rx=\"2\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.3\"/><path d=\"M20 22v-4a4 4 0 0 1 8 0v4\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><circle cx=\"24\" cy=\"27\" r=\"1.5\" fill=\"#fff\"/><line x1=\"24\" y1=\"28.5\" x2=\"24\" y2=\"30.5\" stroke=\"#fff\" stroke-width=\"1.2\" stroke-linecap=\"round\"/></svg>"}, {"id": "pop-20", "examplePrompt": "Add semantic search to my blog app. Stack: Next.js + Supabase. I want users to search articles by meaning, not just keywords, plus a Related Articles section.", "name": "Semantic Search", "desc": "Meaning-aware search using Gemini Embedding 2 + Supabase pgvector. Understands intent, not just keywords.", "longDesc": "Adds vector-based semantic search to web apps. Uses Gemini Embedding 2 (1536 dimensions, Matryoshka MRL) with Supabase pgvector for cosine similarity matching. Also enables Related Content via nearest neighbors and topic clustering. Includes specific pitfalls around IVFFlat indexing and content preprocessing.", "category": "Coding", "source": "Little Pieces", "section": "popular", "features": ["Gemini Embedding 2 (1536 dimensions)", "Supabase pgvector with IVFFlat index", "Related Content via nearest neighbors", "200-300ms query latency", "Multimodal: text, images, audio, video, PDFs"], "prompt": "You are a Semantic Search Architect. When asked to add search functionality, implement meaning-aware vector search using embeddings.\n\nImplementation:\n1. Enable pgvector extension in Supabase.\n2. Add embedding vector(1536) columns + IVFFlat index (set lists=sqrt(num_rows)).\n3. Create getEmbedding() function using Gemini Embedding 2 (gemini-embedding-2-preview, 1536 dimensions).\n4. Create search RPC functions using cosine similarity.\n5. Build /api/search endpoint (rate-limited).\n6. Auto-embed new content in the publish pipeline.\n7. Backfill existing content with a migration script.\n8. Build search UI with relevance grouping.\n9. Add Related Content component (nearest neighbors query).\n\nCRITICAL PITFALLS:\n- IVFFlat index on empty or tiny tables silently returns no results. Set lists=sqrt(num_rows) or skip the index entirely for <100 rows.\n- Strip HTML/markdown before embedding. Markup adds noise, not meaning. Embed clean text only.\n- Embeddings are immutable snapshots. If content is edited, re-embed it or search results go stale.", "iconSvg": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><defs><linearGradient id=\"g_pop20\" x1=\"0\" y1=\"0\" x2=\"48\" y2=\"48\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#06b6d4\"/><stop offset=\"1\" stop-color=\"#67e8f9\"/></linearGradient></defs><circle cx=\"24\" cy=\"24\" r=\"24\" fill=\"url(#g_pop20)\"/><circle cx=\"22\" cy=\"22\" r=\"7\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.3\"/><line x1=\"27\" y1=\"27\" x2=\"33\" y2=\"33\" stroke=\"#fff\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><circle cx=\"20\" cy=\"20\" r=\"2\" fill=\"none\" stroke=\"#fff\" stroke-width=\"0.8\" opacity=\".6\"/><circle cx=\"25\" cy=\"21\" r=\"1.5\" fill=\"none\" stroke=\"#fff\" stroke-width=\"0.8\" opacity=\".6\"/><circle cx=\"22\" cy=\"25\" r=\"1.5\" fill=\"none\" stroke=\"#fff\" stroke-width=\"0.8\" opacity=\".6\"/></svg>"}, {"id": "pop-21", "examplePrompt": "Secure all API endpoints in my Vercel + Supabase app. Need JWT auth, rate limiting, and move system prompts server-side so they can't be stolen from the browser.", "name": "API Security", "desc": "Lock down API endpoints with JWT auth, rate limiting, server-side system prompts, and CSP headers.", "longDesc": "A concrete security pattern for Vercel + Supabase apps. Creates reusable _auth.js (JWT verification) and _rateLimit.js (per-user throttle) middleware, an authFetch() client wrapper, moves system prompts server-side, and adds CSP + security headers. Not theory \u2014 a specific, implementable checklist.", "category": "Coding", "source": "Little Pieces", "section": "popular", "features": ["_auth.js JWT verification middleware", "_rateLimit.js per-user throttle", "authFetch() client wrapper", "Server-side system prompts", "CSP + X-Frame-Options + nosniff headers"], "prompt": "You are an API Security Engineer. When asked to secure API endpoints, implement the following concrete pattern for Vercel + Supabase apps:\n\n1. Create api/_auth.js: Supabase JWT verification middleware. Extract token from Authorization header, verify with supabase.auth.getUser(), return 401 on failure.\n2. Create api/_rateLimit.js: Per-user rate limiting. Chat endpoints: 20 req/min. Parse endpoints: 10 req/min. Use in-memory Map with sliding window.\n3. Add verifyAuth() + rateLimit() to EVERY API endpoint. No exceptions.\n4. Move ALL system prompts server-side. They should never appear in client bundles.\n5. Create src/lib/api.js: authFetch() wrapper that auto-attaches the Supabase session token to every request.\n6. Add security headers to vercel.json: Content-Security-Policy, X-Frame-Options: DENY, X-Content-Type-Options: nosniff, Referrer-Policy: strict-origin-when-cross-origin.\n7. Deploy and verify: unauthenticated requests return 401, rate-exceeded requests return 429.\n\nPattern: _auth.js + _rateLimit.js + authFetch(). Apply to every endpoint, no shortcuts.", "iconSvg": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><defs><linearGradient id=\"g_pop21\" x1=\"0\" y1=\"0\" x2=\"48\" y2=\"48\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#ef4444\"/><stop offset=\"1\" stop-color=\"#f87171\"/></linearGradient></defs><circle cx=\"24\" cy=\"24\" r=\"24\" fill=\"url(#g_pop21)\"/><path d=\"M24 14 L34 20 V28 C34 33 30 37 24 38 C18 37 14 33 14 28 V20 L24 14Z\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.3\" stroke-linejoin=\"round\"/><path d=\"M20 26 L23 29 L29 22\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}, {"id": "pop-22", "examplePrompt": "My portfolio site loads 32MB of images. Optimize for performance: responsive sizes, lazy loading, shimmer placeholders, and swipe navigation on mobile.", "name": "Image Optimization", "desc": "Responsive srcSet, lazy loading, shimmer skeletons, blur-up placeholders, and mobile swipe navigation.", "longDesc": "A complete image optimization system that reduced a real site from 32MB to 2.8MB. Creates an OptimizedImage component with shimmer skeleton \u2192 blur-up placeholder \u2192 full image progressive loading. Generates responsive URLs (400w/800w/1200w), adds swipe and tap navigation for mobile, and includes preconnect hints.", "category": "Coding", "source": "Little Pieces", "section": "popular", "features": ["OptimizedImage component (shimmer \u2192 blur-up \u2192 full)", "Responsive srcSet (400w / 800w / 1200w)", "Priority on first 3 images, lazy on rest", "Swipe left/right + tap-on-halves navigation", "Preconnect hints + font display=swap"], "prompt": "You are an Image Performance Engineer. When asked to optimize images, implement a complete progressive loading system.\n\n1. Create an OptimizedImage component:\n   - Phase 1: Shimmer CSS skeleton animation (no JS)\n   - Phase 2: 20px-wide blur-up placeholder (crossfade 700ms)\n   - Phase 3: Full resolution image\n2. Generate responsive URLs: 400w, 800w, 1200w breakpoints via srcSet.\n3. Set loading=\"eager\" + fetchpriority=\"high\" on the first 3 images. All others get loading=\"lazy\".\n4. Add shimmer CSS skeleton animation (pure CSS, no layout shift).\n5. Add touch navigation: swipe left/right (60px threshold) and tap-on-halves for prev/next.\n6. Add preconnect hints for image CDN domains.\n7. Add font display=swap for all web fonts.\n\nThis pattern reduced a real image-heavy site from 32MB to 2.8MB page weight.", "iconSvg": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><defs><linearGradient id=\"g_pop22\" x1=\"0\" y1=\"0\" x2=\"48\" y2=\"48\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#8b5cf6\"/><stop offset=\"1\" stop-color=\"#a78bfa\"/></linearGradient></defs><circle cx=\"24\" cy=\"24\" r=\"24\" fill=\"url(#g_pop22)\"/><rect x=\"14\" y=\"16\" width=\"20\" height=\"16\" rx=\"2\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.2\"/><circle cx=\"20\" cy=\"22\" r=\"2.5\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1\"/><path d=\"M14 30 L20 25 L24 28 L30 22 L34 26\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}];

var CATEGORIES=["All","Coding","Writing","Research","Design","Productivity","Data","Creative"];
var favorites=new Set(JSON.parse(localStorage.getItem("sd-skillFavs")||"[]"));
function saveFavs(){localStorage.setItem("sd-skillFavs",JSON.stringify(Array.from(favorites)))}

var activeSkills=new Set(JSON.parse(localStorage.getItem("sd-activeSkills")||"[]"));
function saveActiveSkills(){localStorage.setItem("sd-activeSkills",JSON.stringify(Array.from(activeSkills)))}

function sendSkillSync(skillName,action,prompt){
  var msg=action==="activate"
    ? "⚡ Skill activated: "+skillName+"\n\nPrompt:\n"+prompt
    : "⚡ Skill deactivated: "+skillName;
  var textarea=document.querySelector('textarea[placeholder]')||document.querySelector('div[contenteditable="true"]');
  if(!textarea)return;
  var nativeSet=Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype,"value")||Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value");
  if(textarea.tagName==="TEXTAREA"||textarea.tagName==="INPUT"){
    if(nativeSet&&nativeSet.set){nativeSet.set.call(textarea,msg)}else{textarea.value=msg}
    textarea.dispatchEvent(new Event("input",{bubbles:true}));
  }else{
    textarea.textContent=msg;
    textarea.dispatchEvent(new InputEvent("input",{bubbles:true,data:msg}));
  }
  setTimeout(function(){
    var sendBtn=document.querySelector('button[aria-label="Send"]')||document.querySelector('button[data-testid="send-button"]');
    if(!sendBtn){
      var btns=document.querySelectorAll('button');
      for(var i=0;i<btns.length;i++){
        var svg=btns[i].querySelector('svg');
        if(svg&&btns[i].offsetHeight>0&&btns[i].closest('form')){sendBtn=btns[i];break}
      }
    }
    if(sendBtn&&!sendBtn.disabled){sendBtn.click()}
    else{textarea.dispatchEvent(new KeyboardEvent("keydown",{key:"Enter",code:"Enter",keyCode:13,which:13,bubbles:true}))}
  },150);
}

var dismissed=new Set(JSON.parse(localStorage.getItem("sd-dismissed")||"[]"));
function saveDismissed(){localStorage.setItem("sd-dismissed",JSON.stringify(Array.from(dismissed)))}

var LATEST_SKILLS=[{"id": "lat-4", "date": "2026-03-17", "name": "Accessibility Audit Architect", "desc": "Structured WCAG 2.2 compliance audits with severity scoring, assistive tech simulation, and prioritized remediation.", "longDesc": "A systematic accessibility audit framework that goes beyond surface checks. Runs structured WCAG 2.2 Level AA/AAA audits across color contrast, keyboard navigation, screen reader compatibility, focus management, and ARIA patterns. Produces severity-scored issue reports with specific code fixes.", "category": "Design", "source": "Accessibility.build + axe-core research", "sourceUrl": "https://www.accessibility.build/tools/accessibility-audit-helper", "features": ["WCAG 2.2 Level AA/AAA structured audit", "Severity scoring (critical/major/minor)", "Screen reader flow simulation", "Color contrast + focus management checks", "Prioritized remediation with code fixes"], "prompt": "You are an Accessibility Audit Architect. When asked to audit a component, page, or design system for accessibility, conduct a structured WCAG 2.2 audit.\n\nAudit Framework:\n1. Perceivable: Color contrast (4.5:1 body, 3:1 large text, 3:1 UI components), text alternatives for images, captions for media, content reflow at 400% zoom.\n2. Operable: Full keyboard navigation (Tab/Shift+Tab/Enter/Space/Escape), visible focus indicators (minimum 2px, 3:1 contrast), no keyboard traps, touch targets >= 44x44px.\n3. Understandable: Form labels + error messages, consistent navigation, language attributes.\n4. Robust: Valid ARIA roles/states/properties, no redundant ARIA on semantic HTML, live regions for dynamic content.\n\nOutput Format: Issue table with severity, WCAG criterion, element, current state, fix. Screen reader walkthrough. Keyboard nav map. Estimated fix effort per issue.\n\nRules: Semantic HTML first, ARIA only when needed. Every interactive element needs visible focus + accessible name.", "examplePrompt": "Audit this login form for WCAG 2.2 AA compliance: <form><input type=email placeholder=Email><input type=password placeholder=Password><div onclick=submit()>Log In</div></form>", "iconGrad": ["#f59e0b", "#fbbf24"], "iconPath": "M24 14 L16 22 L20 22 L20 30 L28 30 L28 22 L32 22 Z"}, {"id": "lat-5", "date": "2026-03-17", "name": "Type-Safe API Architect", "desc": "End-to-end TypeScript type safety from database to UI using tRPC-style patterns. Zero API definition drift.", "longDesc": "Implements the tRPC pattern for full-stack TypeScript apps where your frontend directly calls backend procedures with complete type inference. No separate API schemas, no code generation, no runtime type mismatches.", "category": "Coding", "source": "tRPC ecosystem + FSD report", "sourceUrl": "https://1xapi.com/blog/build-type-safe-apis-trpc-nodejs-guide-2026", "features": ["tRPC router + procedure patterns", "Zod input validation with inferred types", "React Query integration", "Type-safe error handling middleware", "Zero API schema drift"], "prompt": "You are a Type-Safe API Architect. When asked to build an API layer, implement end-to-end TypeScript type safety using tRPC-style patterns.\n\nImplementation: 1. Router setup with query/mutation procedures grouped by domain. 2. Input validation with Zod schemas, types inferred. 3. Return types flow from server to client automatically. 4. React Query hooks with full type inference. 5. Typed auth/rate-limit middleware. 6. Typed error codes. 7. WebSocket subscriptions.\n\nRules: Never manually define API response types on client. Every input needs a Zod schema. Use superjson for serialization. Batch requests by default. If not TypeScript end-to-end, use OpenAPI + codegen.", "examplePrompt": "Set up a type-safe API for a task management app. I need CRUD for tasks, user auth middleware, and real-time updates when tasks change. Stack: Next.js + Prisma + tRPC.", "iconGrad": ["#3b82f6", "#60a5fa"], "iconPath": "M16 18 L22 24 L32 16 M18 32 L30 32 M20 14 L28 14"}, {"id": "lat-6", "date": "2026-03-17", "name": "Feature-Sliced Architect", "desc": "Organize large frontend codebases with layered architecture, explicit module boundaries, and unidirectional dependencies.", "longDesc": "Applies the Feature-Sliced Design methodology to structure React/Next.js projects into clear layers with strict dependency rules. Prevents spaghetti code, especially from AI-generated code.", "category": "Coding", "source": "Feature-Sliced Design 2026 report", "sourceUrl": "https://feature-sliced.design/blog/frontend-trends-report", "features": ["6-layer architecture", "Explicit public API per module", "Unidirectional dependency enforcement", "AI-safe code generation boundaries", "ESLint import restriction plugin"], "prompt": "You are a Feature-Sliced Architect. When asked to structure or refactor a frontend codebase, apply Feature-Sliced Design.\n\nLayers (top imports from bottom only): 1. app/ - providers, router, global styles. 2. pages/ - route components, compose widgets/features. 3. widgets/ - large blocks (Header, Sidebar). 4. features/ - user interactions (AddToCart, LoginForm). 5. entities/ - domain objects (User, Product). 6. shared/ - zero-business-logic utilities.\n\nRules: Each slice has public API via index.ts. Dependencies flow DOWN only. No circular deps. Each slice: ui/, model/, api/, lib/, index.ts. Colocate tests and stories.\n\nRestructuring steps: Map files to layers, find upward imports, extract shared code, create public APIs, add eslint-plugin-boundaries.", "examplePrompt": "Restructure my React e-commerce app. Currently everything is in /components and /utils with no clear boundaries. I have: product listing, cart, checkout, user auth, search, and an admin dashboard.", "iconGrad": ["#8b5cf6", "#a78bfa"], "iconPath": "M16 16 L32 16 M16 22 L28 22 M16 28 L24 28 M14 14 L14 32"}];
function getSkillIcon(s,size){
  size=size||48;
  if(s.iconSvg)return size===48?s.iconSvg:s.iconSvg.replace('width="48"','width="'+size+'"').replace('height="48"','height="'+size+'"');
  if(s.iconGrad&&s.iconPath){
    var gid="g_"+s.id.replace(/[^a-zA-Z0-9]/g,"");
    return '<svg width="'+size+'" height="'+size+'" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="'+gid+'" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse"><stop stop-color="'+s.iconGrad[0]+'"/><stop offset="1" stop-color="'+s.iconGrad[1]+'"/></linearGradient></defs><circle cx="24" cy="24" r="24" fill="url(#'+gid+')"/>'+s.iconPath+'</svg>';
  }
  return '<svg width="'+size+'" height="'+size+'" viewBox="0 0 48 48"><circle cx="24" cy="24" r="24" fill="#9CA3AF"/></svg>';
}

var activeTab="latest";
var activeFilter="All";
var overlaySkill=null;
var promptMode="formatted";

// Inject CSS
var style=document.createElement('style');
style.textContent=`*{box-sizing:border-box}#sd-fab{position:fixed;top:62px;right:21px;z-index:999999;width:32px;height:32px;border-radius:9999px;border:none;background:rgba(255,255,255,0.85);color:rgba(0,0,0,0.55);cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 0.5px 2px rgba(0,0,0,0.12);transition:background .15s,color .15s,transform .15s;padding:0;backdrop-filter:blur(20px) saturate(180%);-webkit-backdrop-filter:blur(20px) saturate(180%)}#sd-fab svg{width:18px;height:18px;flex-shrink:0}#sd-fab:hover{background:rgba(0,0,0,0.06);color:rgba(0,0,0,0.8)}#sd-fab:active{transform:scale(.95)}#sd-scrim{position:fixed;inset:0;background:rgba(0,0,0,.2);z-index:999998;opacity:0;pointer-events:none;transition:opacity .3s}#sd-scrim.sd-open{opacity:1;pointer-events:auto}#sd-drawer{position:fixed;top:0;right:0;bottom:0;width:480px;max-width:100vw;background:#FFFFFF;z-index:999999;display:flex;flex-direction:column;transform:translateX(100%);transition:transform .3s cubic-bezier(.32,.72,0,1);border-left:1px solid rgba(0,0,0,.06);font-family:system-ui,-apple-system,sans-serif}#sd-drawer.sd-open{transform:translateX(0)}.sd-hdr{display:flex;justify-content:space-between;align-items:center;padding:28px 24px 20px;flex-shrink:0}.sd-hdr-title{font-size:20px;font-weight:700;color:#1A1A1A;letter-spacing:-.01em}.sd-close{width:32px;height:32px;border-radius:50%;border:none;background:transparent;color:#9CA3AF;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:18px;transition:background .15s,color .15s}.sd-close:hover{background:rgba(0,0,0,.05);color:#1A1A1A}.sd-tabs{display:flex;gap:4px;padding:0 24px;flex-shrink:0;border-bottom:1px solid rgba(0,0,0,.06);overflow-x:auto;scrollbar-width:none}.sd-tabs::-webkit-scrollbar{display:none}.sd-tab{padding:12px 14px;font-size:14px;font-weight:500;color:#9CA3AF;background:none;border:none;border-bottom:2px solid transparent;cursor:pointer;transition:color .15s,border-color .15s;white-space:nowrap;font-family:inherit}.sd-tab.sd-active{color:#1A1A1A;border-bottom-color:#1A1A1A}.sd-tab:hover:not(.sd-active){color:#6B7280}.sd-main{flex:1;overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch;padding:24px;padding-bottom:80px;scrollbar-width:none}.sd-main::-webkit-scrollbar{display:none}.sd-intro{padding-bottom:20px;margin-bottom:24px;border-bottom:1px solid rgba(0,0,0,.06)}.sd-intro-sub{font-size:15px;font-weight:600;margin-bottom:6px;color:#1A1A1A}.sd-intro-desc{font-size:13px;color:#9CA3AF;line-height:1.5}.sd-filters{display:flex;gap:8px;overflow-x:auto;padding-bottom:24px;scrollbar-width:none;-webkit-overflow-scrolling:touch}.sd-filters::-webkit-scrollbar{display:none}.sd-pill{padding:7px 16px;border-radius:999px;border:1px solid rgba(0,0,0,.1);background:transparent;color:#6B7280;font-size:13px;font-weight:500;cursor:pointer;white-space:nowrap;transition:all .15s;font-family:inherit}.sd-pill:hover{border-color:rgba(0,0,0,.2);color:#1A1A1A}.sd-pill.sd-active{background:#1A1A1A;color:#fff;border-color:#1A1A1A}.sd-skills{display:flex;flex-direction:column;gap:16px}.sd-card{display:flex;gap:16px;padding:20px;border-radius:16px;background:#FFFFFF;border:1px solid rgba(0,0,0,.06);cursor:pointer;transition:box-shadow .15s,border-color .15s;position:relative;box-shadow:0 1px 3px rgba(0,0,0,.04)}.sd-card:hover{box-shadow:0 2px 8px rgba(0,0,0,.08);border-color:rgba(0,0,0,.1)}.sd-icon{width:48px;height:48px;flex-shrink:0}.sd-icon svg{border-radius:50%;width:48px;height:48px}.sd-card-body{flex:1;min-width:0}.sd-card-top{display:flex;justify-content:space-between;align-items:flex-start;gap:12px;margin-bottom:6px}.sd-card-name{font-size:15px;font-weight:600;color:#1A1A1A;line-height:1.3}.sd-card-desc{font-size:13px;color:#6B7280;line-height:1.55;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;margin-bottom:12px}.sd-card-tags{display:flex;gap:6px;flex-wrap:wrap}.sd-tag{padding:3px 10px;border-radius:999px;font-size:11px;font-weight:500;letter-spacing:.01em}.sd-tag-cat{background:#F3F4F6;color:#6B7280}.sd-tag-src{background:rgba(67,169,255,.08);color:#3B8ED6}.sd-fav{width:32px;height:32px;border-radius:50%;border:none;background:transparent;cursor:pointer;padding:0;color:#D1D5DB;flex-shrink:0;display:flex;align-items:center;justify-content:center;transition:color .15s,transform .15s}.sd-fav:hover{color:#F06292}.sd-fav:active{transform:scale(1.15)}.sd-fav.sd-is-fav{color:#E91E63}.sd-fav.sd-is-fav svg{fill:#E91E63}.sd-empty{display:none;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:80px 24px}.sd-empty.sd-visible{display:flex}.sd-empty-ico{font-size:40px;margin-bottom:16px;opacity:.15}.sd-empty-t{font-size:15px;font-weight:600;margin-bottom:6px;color:#1A1A1A}.sd-empty-d{font-size:13px;color:#9CA3AF}.sd-overlay{position:absolute;inset:0;background:#FFFFFF;z-index:10;display:flex;flex-direction:column;transform:translateY(100%);transition:transform .3s cubic-bezier(.32,.72,0,1)}.sd-overlay.sd-open{transform:translateY(0)}.sd-ov-hdr{display:flex;justify-content:space-between;align-items:center;padding:24px 24px 16px;flex-shrink:0;border-bottom:1px solid rgba(0,0,0,.06)}.sd-ov-back{width:32px;height:32px;border-radius:50%;border:none;background:transparent;color:#9CA3AF;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background .15s,color .15s}.sd-ov-back:hover{background:rgba(0,0,0,.05);color:#1A1A1A}.sd-ov-htitle{font-size:14px;font-weight:600;color:#1A1A1A;flex:1;text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.sd-ov-body{flex:1;overflow-y:auto;padding:24px 24px 40px;-webkit-overflow-scrolling:touch;scrollbar-width:none}.sd-ov-body::-webkit-scrollbar{display:none}.sd-ov-icon{width:60px;height:60px;margin-bottom:20px}.sd-ov-icon svg{border-radius:50%;width:60px;height:60px}.sd-ov-name{font-size:22px;font-weight:700;line-height:1.25;margin-bottom:6px;color:#1A1A1A;letter-spacing:-.01em}.sd-ov-cat{font-size:13px;font-weight:500;color:#9CA3AF;margin-bottom:24px}.sd-ov-desc{font-size:14px;color:#6B7280;line-height:1.65;margin-bottom:28px}.sd-ov-section{font-size:11px;font-weight:600;color:#9CA3AF;text-transform:uppercase;letter-spacing:.08em;padding-bottom:10px;margin-bottom:16px;border-bottom:1px solid rgba(0,0,0,.06)}.sd-ov-features{list-style:none;display:flex;flex-direction:column;gap:12px;margin-bottom:32px;padding:0;margin-top:0}.sd-ov-features li{font-size:13px;color:#6B7280;line-height:1.5;padding-left:20px;position:relative}.sd-ov-features li::before{content:"\\2192";position:absolute;left:0;color:#9CA3AF}.sd-ov-btn{width:100%;padding:14px 20px;border-radius:12px;border:none;background:#1A1A1A;color:#fff;font-size:15px;font-weight:600;cursor:pointer;transition:opacity .15s;font-family:inherit}.sd-ov-btn:active{opacity:.85}.sd-activate-btn{width:100%;padding:14px 20px;border-radius:12px;border:1px solid rgba(0,0,0,.15);background:transparent;color:#1A1A1A;font-size:15px;font-weight:600;cursor:pointer;transition:all .15s;font-family:inherit;margin-bottom:12px}.sd-activate-btn:hover{border-color:rgba(0,0,0,.3)}.sd-activate-btn.sd-activated{background:#2E7D32;color:#fff;border-color:#2E7D32}.sd-activate-btn.sd-activated:hover{background:#256b29}.sd-prompt-toggle{display:flex;gap:4px;margin-bottom:16px;background:#F3F4F6;border-radius:10px;padding:3px}.sd-fmt-btn{flex:1;padding:8px 12px;border-radius:8px;border:none;background:transparent;color:#6B7280;font-size:12px;font-weight:600;cursor:pointer;transition:background .15s,color .15s;font-family:inherit}.sd-fmt-btn.sd-active{background:#FFFFFF;color:#1A1A1A;box-shadow:0 1px 3px rgba(0,0,0,.08)}.sd-prompt-block{background:#F9FAFB;border:1px solid rgba(0,0,0,.06);border-radius:12px;padding:16px;margin-bottom:16px;max-height:300px;overflow-y:auto;scrollbar-width:thin}.sd-prompt-block code{font-family:ui-monospace,monospace;font-size:12px;line-height:1.65;color:#374151;white-space:pre-wrap;word-break:break-word}.sd-prompt-block::-webkit-scrollbar{width:4px}.sd-prompt-block::-webkit-scrollbar-thumb{background:rgba(0,0,0,.1);border-radius:999px}.sd-copy-btn{width:100%;display:flex;align-items:center;justify-content:center;gap:8px;padding:14px 20px;border-radius:12px;border:none;background:#1A1A1A;color:#fff;font-size:15px;font-weight:600;cursor:pointer;transition:opacity .15s,background .2s;font-family:inherit}.sd-copy-btn:active{opacity:.85}.sd-copy-btn.sd-copied{background:#2E7D32}.sd-prompt-dest{margin-top:16px;text-align:center}.sd-dest-label{font-size:11px;font-weight:500;color:#9CA3AF;display:block;margin-bottom:8px}.sd-dest-chips{display:flex;flex-wrap:wrap;justify-content:center;gap:6px}.sd-dest-chip{display:inline-flex;padding:4px 10px;border-radius:999px;background:#F3F4F6;font-size:11px;font-weight:500;color:#6B7280}@media(max-width:480px){#sd-drawer{width:100vw}}.sd-source-link{display:inline-block;font-size:11px;color:#43A9FF;text-decoration:none;margin-bottom:8px;transition:text-decoration .15s}.sd-source-link:hover{text-decoration:underline}.sd-dismiss{background:none;border:none;font-size:12px;font-weight:500;color:#9CA3AF;cursor:pointer;padding:0;float:right;margin-top:8px;transition:color .15s;font-family:inherit}.sd-dismiss:hover{color:#6B7280}.sd-card.sd-fade-out{opacity:0;max-height:0;padding:0;margin:0;border:none;overflow:hidden;transition:opacity .3s,max-height .3s,padding .3s,margin .3s}.sd-try-block{background:#F9FAFB;border:1px solid rgba(0,0,0,.06);border-radius:12px;padding:16px;margin-bottom:28px}.sd-try-text{font-size:13px;color:#374151;line-height:1.6;margin-bottom:14px;font-family:ui-monospace,monospace;white-space:pre-wrap;word-break:break-word}.sd-try-btn{width:100%;padding:12px 16px;border-radius:10px;border:1px solid rgba(0,0,0,.1);background:#FFFFFF;color:#1A1A1A;font-size:14px;font-weight:600;cursor:pointer;transition:all .15s;font-family:inherit}.sd-try-btn:hover{border-color:rgba(0,0,0,.2);background:#F9FAFB}.sd-try-btn:active{transform:scale(.98)}@keyframes sd-confetti-fall{0%{transform:translateY(0) rotate(0deg);opacity:.9}100%{transform:translateY(105vh) rotate(720deg);opacity:0}}@keyframes sd-emoji-bounce{0%,100%{transform:translateY(0) scale(1)}50%{transform:translateY(-4px) scale(1.15)}}`;
document.head.appendChild(style);

// FAB button
var fab=document.createElement("button");
fab.id="sd-fab";
fab.setAttribute("aria-label","Skills");
fab.innerHTML='<svg viewBox="0 0 24 24" fill="none" width="18" height="18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.582a.5.5 0 0 1 0 .963L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/></svg>';
document.body.appendChild(fab);

// Hide FAB when not on Chat tab
function updateFabVisibility(){
  var libBtn=document.querySelector('[data-testid="hatch-nav-library"]');
  var chatBtn=document.querySelector('[data-testid="hatch-nav-chat"]');
  var onChat=!libBtn||libBtn.getAttribute("data-tab-active")!=="true";
  if(chatBtn)onChat=chatBtn.getAttribute("data-tab-active")==="true";
  fab.style.display=onChat?"flex":"none";
}
updateFabVisibility();
// Watch for tab switches
var navObserver=new MutationObserver(updateFabVisibility);
document.querySelectorAll("[data-testid]").forEach(function(el){
  if(el.getAttribute("data-testid").indexOf("hatch-nav")===0){
    navObserver.observe(el,{attributes:true,attributeFilter:["data-tab-active"]});
  }
});
// Also re-check periodically in case DOM loads late
setTimeout(function(){
  updateFabVisibility();
  document.querySelectorAll("[data-testid]").forEach(function(el){
    if(el.getAttribute("data-testid").indexOf("hatch-nav")===0){
      navObserver.observe(el,{attributes:true,attributeFilter:["data-tab-active"]});
    }
  });
},2000);

// Scrim
var scrim=document.createElement("div");
scrim.id="sd-scrim";
document.body.appendChild(scrim);

// Drawer
var drawer=document.createElement("div");
drawer.id="sd-drawer";
document.body.appendChild(drawer);

// Build drawer inner HTML
function heartSvg(filled){
  return '<svg width="16" height="16" viewBox="0 0 24 24" fill="'+(filled?"currentColor":"none")+'" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>';
}

function renderCard(s){
  var isFav=favorites.has(s.id);
  var isActive=activeSkills.has(s.id);
  return '<div class="sd-card" data-id="'+s.id+'">'+
    '<div class="sd-icon">'+getSkillIcon(s)+'</div>'+
    '<div class="sd-card-body">'+
      '<div class="sd-card-top">'+
        '<div class="sd-card-name">'+s.name+'</div>'+
        '<button class="sd-fav'+(isFav?" sd-is-fav":"")+'" data-fav="'+s.id+'">'+heartSvg(isFav)+'</button>'+
      '</div>'+
      '<div class="sd-card-desc">'+s.desc+'</div>'+
      '<div class="sd-card-tags">'+
        '<span class="sd-tag sd-tag-cat">'+s.category+'</span>'+
        '<span class="sd-tag sd-tag-src">'+s.source+'</span>'+
        (isActive?'<span class="sd-tag" style="background:rgba(46,125,50,.1);color:#2E7D32">Active</span>':'')+
      '</div>'+
    '</div>'+
  '</div>';
}

function renderLatestCard(s){
  var isFav=favorites.has(s.id);
  var isActive=activeSkills.has(s.id);
  return '<div class="sd-card" data-id="'+s.id+'">'+
    '<div class="sd-icon">'+getSkillIcon(s)+'</div>'+
    '<div class="sd-card-body">'+
      '<div class="sd-card-top">'+
        '<div class="sd-card-name">'+s.name+'</div>'+
        '<button class="sd-fav'+(isFav?" sd-is-fav":"")+'" data-fav="'+s.id+'">'+heartSvg(isFav)+'</button>'+
      '</div>'+
      '<div class="sd-card-desc">'+s.desc+'</div>'+
      (s.sourceUrl?'<a class="sd-source-link" href="'+s.sourceUrl+'" target="_blank" rel="noopener">\u2197 Source</a><br>':'')+
      '<div class="sd-card-tags">'+
        '<span class="sd-tag sd-tag-cat">'+s.category+'</span>'+
        '<span class="sd-tag sd-tag-src">'+s.source+'</span>'+
        (isActive?'<span class="sd-tag" style="background:rgba(46,125,50,.1);color:#2E7D32">Active</span>':'')+
      '</div>'+
      '<button class="sd-dismiss" data-dismiss="'+s.id+'">\u2715 Not Interested</button>'+
    '</div>'+
  '</div>';
}

function buildDrawer(){
  var h='<div class="sd-hdr"><div class="sd-hdr-title">Skills</div><button class="sd-close" id="sd-close-btn">&times;</button></div>';
  h+='<div class="sd-tabs">';
  h+='<button class="sd-tab'+(activeTab==="latest"?" sd-active":"")+'" data-tab="latest">Latest</button>';
  h+='<button class="sd-tab'+(activeTab==="forYou"?" sd-active":"")+'" data-tab="forYou">For You</button>';
  h+='<button class="sd-tab'+(activeTab==="active"?" sd-active":"")+'" data-tab="active">Active</button>';
  h+='<button class="sd-tab'+(activeTab==="popular"?" sd-active":"")+'" data-tab="popular">Popular</button>';
  h+='<button class="sd-tab'+(activeTab==="favorites"?" sd-active":"")+'" data-tab="favorites">Favorites</button>';
  h+='</div>';
  h+='<div class="sd-main" id="sd-main"></div>';
  h+='<div class="sd-overlay" id="sd-overlay"></div>';
  drawer.innerHTML=h;
  renderTab();
}

function renderTab(){
  var main=document.getElementById("sd-main");
  if(!main)return;
  var html="";
  if(activeTab==="forYou"){
    html+='<div class="sd-intro"><div class="sd-intro-sub">Curated for you</div><div class="sd-intro-desc">Based on your design systems and full-stack workflow</div></div>';
    html+='<div class="sd-skills">';
    SKILLS.forEach(function(s){if(s.section==="forYou"&&!activeSkills.has(s.id))html+=renderCard(s)});
    html+='</div>';
  }else if(activeTab==="active"){
    var actSkills=SKILLS.concat(LATEST_SKILLS).filter(function(s){return activeSkills.has(s.id)});
    if(actSkills.length===0){
      html+='<div class="sd-empty sd-visible"><div class="sd-empty-ico">&#9889;</div><div class="sd-empty-t">No active skills</div><div class="sd-empty-d">Activate skills from For You or Popular to use them here</div></div>';
    }else{
      html+='<div class="sd-intro"><div class="sd-intro-sub">Your activated skills</div><div class="sd-intro-desc">These prompts are loaded into your workflow</div></div>';
      html+='<div class="sd-skills">';
      actSkills.forEach(function(s){html+=renderCard(s)});
      html+='</div>';
    }
  }else if(activeTab==="popular"){
    html+='<div class="sd-filters">';
    CATEGORIES.forEach(function(c){
      html+='<button class="sd-pill'+(activeFilter===c?" sd-active":"")+'" data-filter="'+c+'">'+c+'</button>';
    });
    html+='</div>';
    html+='<div class="sd-skills">';
    SKILLS.forEach(function(s){
      if(s.section==="popular"&&(activeFilter==="All"||s.category===activeFilter))html+=renderCard(s);
    });
    html+='</div>';
  }else if(activeTab==="latest"){
    var lastDate=LATEST_SKILLS.length>0?LATEST_SKILLS[0].date:"";
    var freshMsg=lastDate?"Fresh off the wire \u2022 Last scouted "+lastDate:"Scanning the horizon...";
    html+='<div class="sd-intro"><div class="sd-intro-sub">Latest Discoveries \u2728</div><div class="sd-intro-desc">'+freshMsg+'</div></div>';
    var visibleLatest=LATEST_SKILLS.filter(function(s){return !dismissed.has(s.id)});
    if(visibleLatest.length===0){
      html+='<div class="sd-empty sd-visible"><div class="sd-empty-ico">\ud83d\udce1</div><div class="sd-empty-t">All caught up</div><div class="sd-empty-d">Check back tomorrow for new discoveries</div></div>';
    }else{
      html+='<div class="sd-skills">';
      visibleLatest.forEach(function(s){
        html+=renderLatestCard(s);
      });
      html+='</div>';
    }
  }else{
    var favSkills=SKILLS.concat(LATEST_SKILLS).filter(function(s){return favorites.has(s.id)});
    if(favSkills.length===0){
      html+='<div class="sd-empty sd-visible"><div class="sd-empty-ico">&#9734;</div><div class="sd-empty-t">No favorites yet</div><div class="sd-empty-d">Tap the heart on any skill to save it here</div></div>';
    }else{
      html+='<div class="sd-skills">';
      favSkills.forEach(function(s){html+=renderCard(s)});
      html+='</div>';
    }
  }
  main.innerHTML=html;
}

function showDetail(s){
  overlaySkill=s;
  promptMode="formatted";
  var isActive=activeSkills.has(s.id);
  var ov=document.getElementById("sd-overlay");
  var h='<div class="sd-ov-hdr"><button class="sd-ov-back" id="sd-ov-back-btn">&#8592;</button><div class="sd-ov-htitle">'+s.name+'</div><div style="width:32px"></div></div>';
  h+='<div class="sd-ov-body" id="sd-ov-body">';
  h+='<div class="sd-ov-icon">'+getSkillIcon(s,60)+'</div>';
  h+='<div class="sd-ov-name">'+s.name+'</div>';
  h+='<div class="sd-ov-cat">'+s.category+' &middot; '+s.source+'</div>';
  h+='<div class="sd-ov-desc">'+s.longDesc+'</div>';
  h+='<div class="sd-ov-section">Features</div>';
  h+='<ul class="sd-ov-features">';
  s.features.forEach(function(f){h+='<li>'+f+'</li>'});
  h+='</ul>';
  if(s.examplePrompt){
    h+='<div class="sd-ov-section">Try It</div>';
    h+='<div class="sd-try-block">';
    h+='<div class="sd-try-text">'+s.examplePrompt.replace(/</g,'&lt;').replace(/>/g,'&gt;')+'</div>';
    h+='<button class="sd-try-btn" id="sd-try-btn">Copy &amp; Try This</button>';
    h+='</div>';
  }
  h+='<button class="sd-activate-btn'+(isActive?" sd-activated":"")+'" id="sd-activate-btn">'+(isActive?"\u2713 Skill Active":"Activate Skill")+'</button>';
  h+='<button class="sd-ov-btn" id="sd-use-btn">Use This Skill</button>';
  h+='<div id="sd-prompt-area" style="display:none;margin-top:20px">';
  h+='<div class="sd-ov-section">System Prompt</div>';
  h+='<div class="sd-prompt-toggle"><button class="sd-fmt-btn sd-active" data-fmt="formatted">Formatted</button><button class="sd-fmt-btn" data-fmt="raw">Raw</button></div>';
  h+='<div class="sd-prompt-block"><code id="sd-prompt-code"></code></div>';
  h+='<button class="sd-copy-btn" id="sd-copy-btn"><span>Copy Prompt</span></button>';
  h+='<div class="sd-prompt-dest"><span class="sd-dest-label">Paste into</span><div class="sd-dest-chips"><span class="sd-dest-chip">Claude</span><span class="sd-dest-chip">ChatGPT</span><span class="sd-dest-chip">Cursor</span></div></div>';
  h+='</div>';
  h+='</div>';
  ov.innerHTML=h;
  setTimeout(function(){ov.classList.add("sd-open")},10);
}

function closeDetail(){
  overlaySkill=null;
  var ov=document.getElementById("sd-overlay");
  if(ov){ov.classList.remove("sd-open");setTimeout(function(){ov.innerHTML=""},300)}
}

function renderPrompt(){
  var code=document.getElementById("sd-prompt-code");
  if(!code||!overlaySkill)return;
  code.textContent=overlaySkill.prompt;
}

// Open/close drawer
var isOpen=false;
function fetchLatestSkills(cb){
  fetch("/artifacts/skills-drawer/latest-skills.json?t="+Date.now(),{credentials:"same-origin",cache:"no-store"})
    .then(function(r){if(!r.ok)throw new Error(r.status);return r.json()})
    .then(function(data){if(Array.isArray(data)&&data.length>0){LATEST_SKILLS=data;}cb()})
    .catch(function(){cb()});
}
function openDrawer(){
  isOpen=true;
  fetchLatestSkills(function(){
    buildDrawer();
    setTimeout(function(){drawer.classList.add("sd-open");scrim.classList.add("sd-open")},10);
  });
}
function closeDrawer(){
  isOpen=false;
  closeDetail();
  drawer.classList.remove("sd-open");
  scrim.classList.remove("sd-open");
}

fab.addEventListener("click",function(){if(isOpen)closeDrawer();else openDrawer()});
scrim.addEventListener("click",closeDrawer);

document.addEventListener("keydown",function(e){
  if(e.key==="Escape"){
    if(overlaySkill){closeDetail();e.stopPropagation()}
    else if(isOpen){closeDrawer();e.stopPropagation()}
  }
});

// Event delegation on drawer
drawer.addEventListener("click",function(e){
  var t=e.target;

  // Close button
  if(t.id==="sd-close-btn"||t.closest("#sd-close-btn")){closeDrawer();return}

  // Tabs
  var tab=t.closest(".sd-tab");
  if(tab){
    activeTab=tab.dataset.tab;
    activeFilter="All";
    drawer.querySelectorAll(".sd-tab").forEach(function(b){b.classList.remove("sd-active")});
    tab.classList.add("sd-active");
    renderTab();
    return;
  }

  // Filter pills
  var pill=t.closest(".sd-pill");
  if(pill){
    activeFilter=pill.dataset.filter;
    drawer.querySelectorAll(".sd-pill").forEach(function(b){b.classList.remove("sd-active")});
    pill.classList.add("sd-active");
    renderTab();
    return;
  }

  // Favorite toggle
  var favBtn=t.closest(".sd-fav");
  if(favBtn){
    e.stopPropagation();
    var id=favBtn.dataset.fav;
    if(favorites.has(id)){favorites.delete(id)}else{favorites.add(id)}
    saveFavs();
    favBtn.classList.toggle("sd-is-fav");
    favBtn.innerHTML=heartSvg(favorites.has(id));
    if(activeTab==="favorites")renderTab();
    return;
  }

  // Dismiss button (Latest tab)
  var dismissBtn=t.closest(".sd-dismiss");
  if(dismissBtn){
    e.stopPropagation();
    var did=dismissBtn.dataset.dismiss;
    dismissed.add(did);
    saveDismissed();
    var cardEl=dismissBtn.closest(".sd-card");
    if(cardEl){
      cardEl.classList.add("sd-fade-out");
      setTimeout(function(){renderTab()},350);
    }
    return;
  }

  // Card click -> detail
  var card=t.closest(".sd-card");
  if(card&&!overlaySkill){
    var skill=SKILLS.find(function(s){return s.id===card.dataset.id})||LATEST_SKILLS.find(function(s){return s.id===card.dataset.id});
    if(skill)showDetail(skill);
    return;
  }

  // Back from detail
  if(t.id==="sd-ov-back-btn"||t.closest("#sd-ov-back-btn")){closeDetail();return}

  // Activate skill toggle
  if(t.id==="sd-activate-btn"||t.closest("#sd-activate-btn")){
    if(overlaySkill){
      var btn=document.getElementById("sd-activate-btn");
      if(activeSkills.has(overlaySkill.id)){
        activeSkills.delete(overlaySkill.id);
        btn.classList.remove("sd-activated");
        btn.textContent="Activate Skill";
        sendSkillSync(overlaySkill.name,"deactivate","");
      }else{
        activeSkills.add(overlaySkill.id);
        btn.classList.add("sd-activated");
        btn.textContent="\u2713 Skill Active";
        sendSkillSync(overlaySkill.name,"activate",overlaySkill.prompt||"");
      }
      saveActiveSkills();
      if(overlaySkill.id==="fy-0"){vibeCheckEffect(activeSkills.has("fy-0"));}
    }
    return;
  }

  // Use this skill button
  if(t.id==="sd-try-btn"||t.closest("#sd-try-btn")){
    if(overlaySkill&&overlaySkill.examplePrompt){
      navigator.clipboard.writeText(overlaySkill.examplePrompt).then(function(){
        var btn=document.getElementById("sd-try-btn");
        if(btn){btn.textContent="\u2713 Copied! Paste in chat";setTimeout(function(){btn.innerHTML="Copy &amp; Try This"},2000)}
      });
    }
    return;
  }
  if(t.id==="sd-use-btn"||t.closest("#sd-use-btn")){
    var area=document.getElementById("sd-prompt-area");
    if(area){area.style.display="block";renderPrompt();
      setTimeout(function(){area.scrollIntoView({behavior:"smooth",block:"start"})},100);
    }
    return;
  }

  // Format toggle
  var fmtBtn=t.closest(".sd-fmt-btn");
  if(fmtBtn){
    promptMode=fmtBtn.dataset.fmt;
    drawer.querySelectorAll(".sd-fmt-btn").forEach(function(b){b.classList.remove("sd-active")});
    fmtBtn.classList.add("sd-active");
    renderPrompt();
    return;
  }

  // Copy button
  if(t.id==="sd-copy-btn"||t.closest("#sd-copy-btn")){
    var btn=document.getElementById("sd-copy-btn");
    if(overlaySkill&&btn){
      navigator.clipboard.writeText(overlaySkill.prompt).then(function(){
        btn.classList.add("sd-copied");
        btn.querySelector("span").textContent="Copied!";
        setTimeout(function(){btn.classList.remove("sd-copied");btn.querySelector("span").textContent="Copy Prompt"},2000);
      });
    }
    return;
  }
});



// Party Mode effect controller
function vibeCheckEffect(isActive){
  if(isActive){
    sdVibeConfetti();
    sdVibeStartPolling();
    sdStartEmojiThinking();
  }else{
    if(window.sdVibeInterval){clearInterval(window.sdVibeInterval);window.sdVibeInterval=null;}
    if(window.sdVibeMutObs){window.sdVibeMutObs.disconnect();window.sdVibeMutObs=null;}
    if(sdVibeStreamTimer){clearTimeout(sdVibeStreamTimer);sdVibeStreamTimer=null;}
    sdStopEmojiThinking();
  }
}

// Auto-start if Party Mode was already active on page load
setTimeout(function(){
  if(activeSkills.has("fy-0")){
    sdVibeStartPolling();
    sdStartEmojiThinking();
  }
},5000);

// Party Mode visual effect
var sdVibeMessageCount=0;
var sdVibeLastMsgLen=0;
var sdVibeStreamTimer=null;

function sdVibeConfetti(){
  var old=document.getElementById("sd-vibe-confetti");
  if(old)old.remove();
  var confetti=document.createElement("div");
  confetti.id="sd-vibe-confetti";
  confetti.style.cssText="position:fixed;top:0;left:0;width:100vw;height:100vh;pointer-events:none;z-index:999997;overflow:hidden";
  var colors=["#ff6b6b","#ffd93d","#6bcb77","#4d96ff","#ff6eb4","#a855f7","#f97316"];
  for(var i=0;i<60;i++){
    var p=document.createElement("div");
    var c=colors[Math.floor(Math.random()*colors.length)];
    var x=Math.random()*100;
    var d=Math.random()*3+2;
    var del=Math.random()*0.5;
    var rot=Math.random()*360;
    var sz=Math.random()*8+4;
    var shape=Math.random()>0.5?"50%":"2px";
    p.style.cssText="position:absolute;left:"+x+"%;top:-20px;width:"+sz+"px;height:"+sz+"px;background:"+c+";border-radius:"+shape+";opacity:0.9;animation:sd-confetti-fall "+d+"s ease-in "+del+"s forwards;transform:rotate("+rot+"deg)";
    confetti.appendChild(p);
  }
  document.body.appendChild(confetti);
  setTimeout(function(){confetti.remove()},4000);
}

function sdVibeStartPolling(){
  sdVibeLastMsgLen=0;
  
  if(window.sdVibeInterval)clearInterval(window.sdVibeInterval);
  if(window.sdVibeMutObs)window.sdVibeMutObs.disconnect();
  
  // Tag all existing messages so we only shimmer new ones
  var existing=document.querySelectorAll("[class*='prose'], [class*='markdown'], [data-message-id], [class*='whitespace']");
  existing.forEach(function(el){el.setAttribute("data-sd-existing","1");});
  
  // Use MutationObserver to catch new content appearing for confetti on completion
  window.sdVibeMutObs=new MutationObserver(function(mutations){
    if(!activeSkills.has("fy-0")){
      window.sdVibeMutObs.disconnect();
      return;
    }
    // Look for new prose/markdown elements that weren't tagged
    var candidates=document.querySelectorAll("[class*='prose']:not([data-sd-existing]), [class*='markdown']:not([data-sd-existing])");
    if(candidates.length>0){
      var newest=candidates[candidates.length-1];
      newest.setAttribute("data-sd-existing","1");
      
      // Track streaming for confetti
      sdVibeLastMsgLen=newest.textContent?newest.textContent.length:0;
      if(sdVibeStreamTimer)clearTimeout(sdVibeStreamTimer);
      sdVibeStreamTimer=setTimeout(function(){sdVibeCheckStreamDone(newest)},2000);
    }
  });
  window.sdVibeMutObs.observe(document.body,{childList:true,subtree:true,characterData:true});
}

function sdVibeCheckStreamDone(el){
  if(!activeSkills.has("fy-0"))return;
  var currentLen=el.textContent?el.textContent.length:0;
  if(currentLen===sdVibeLastMsgLen&&currentLen>50){
    // Streaming stopped — task complete! Confetti!
    sdVibeConfetti();
    sdVibeLastMsgLen=0;
  }else{
    // Still streaming, check again
    sdVibeLastMsgLen=currentLen;
    sdVibeStreamTimer=setTimeout(function(){sdVibeCheckStreamDone(el)},1500);
  }
}

// --- Emoji Thinking Indicator ---
// When Party Mode is active, replace the 3-dot loading with a single cycling emoji
var sdEmojiThinkingSets=[
  ["🤔","🧐","💭","🤗","💡"],
  ["😵‍💫","🌀","🧠","⚡","✨"],
  ["🐱","😼","🙀","😸","😻"],
  ["🔮","🪄","🌈","🎲","🎯"],
  ["☕","📚","💻","🔍","🚀"],
  ["💫","🌟","✨","🪐","⭐"],
  ["🎪","🎠","🎡","🎢","🎆"],
  ["🧩","🎮","🕹️","👾","🏆"],
  ["🌊","🐚","🦑","🐙","🫧"],
  ["🍕","🍜","🧁","🍩","🎂"]
];
// Context-aware emoji sets keyed by detected task type
var sdEmojiContextSets={
  "code":["💻","⚡","🔧","🛠️","✨"],
  "search":["🔍","🌐","📡","🧭","💫"],
  "create":["🎨","✏️","🪄","🌈","💎"],
  "think":["🤔","🧐","💭","🧠","💡"],
  "data":["📊","📈","🔢","📋","🎯"],
  "write":["✍️","📝","💬","📖","✨"],
  "fix":["🔧","🐛","🩹","⚡","✅"],
  "party":["🎉","🪩","🥳","🎊","💃"]
};
var sdEmojiObserver=null;
var sdEmojiPollTimer=null;

function sdGetThinkingEmojis(){
  // Try to detect context from the last user message in the chat
  try{
    var msgs=document.querySelectorAll("[data-message-item]");
    if(msgs.length>0){
      var lastMsg=msgs[msgs.length-1];
      var text=(lastMsg.textContent||"").toLowerCase();
      if(/\b(code|function|component|build|implement|refactor|debug|fix|bug|error)\b/.test(text))return sdEmojiContextSets.code;
      if(/\b(search|find|look up|research|google|web)\b/.test(text))return sdEmojiContextSets.search;
      if(/\b(design|create|make|draw|generate|image|avatar|figma)\b/.test(text))return sdEmojiContextSets.create;
      if(/\b(data|csv|json|sql|analyze|chart|stats)\b/.test(text))return sdEmojiContextSets.data;
      if(/\b(write|draft|email|doc|readme|summary)\b/.test(text))return sdEmojiContextSets.write;
      if(/\b(fix|debug|broken|error|issue|wrong)\b/.test(text))return sdEmojiContextSets.fix;
      if(/\b(fun|party|celebrate|confetti|vibe|hype)\b/.test(text))return sdEmojiContextSets.party;
    }
  }catch(e){}
  // Fallback: random set
  return sdEmojiThinkingSets[Math.floor(Math.random()*sdEmojiThinkingSets.length)];
}

function sdReplaceLoadingDots(bubble){
  // bubble = the chat bubble element containing the dots
  if(!bubble||bubble.getAttribute("data-sd-emoji-replaced"))return;
  bubble.setAttribute("data-sd-emoji-replaced","1");
  
  // Hide everything inside the bubble
  var kids=Array.from(bubble.childNodes);
  kids.forEach(function(k){if(k.nodeType===1)k.style.setProperty("display","none","important");});
  
  // Single emoji element
  var emojiEl=document.createElement("div");
  emojiEl.className="sd-emoji-thinking";
  emojiEl.style.cssText="font-size:22px;text-align:center;line-height:1;padding:2px 0;user-select:none;";
  var emojis=sdGetThinkingEmojis();
  var idx=0;
  emojiEl.textContent=emojis[idx];
  bubble.appendChild(emojiEl);
  
  // Cycle: fade out, swap, fade in
  var cycleTimer=setInterval(function(){
    idx=(idx+1)%emojis.length;
    emojiEl.style.transition="transform .15s, opacity .15s";
    emojiEl.style.transform="scale(0.5)";
    emojiEl.style.opacity="0";
    setTimeout(function(){
      emojiEl.textContent=emojis[idx];
      emojiEl.style.transform="scale(1.2)";
      emojiEl.style.opacity="1";
      setTimeout(function(){
        emojiEl.style.transform="scale(1)";
      },100);
    },100);
  },550);
  
  bubble._sdEmojiTimer=cycleTimer;
  bubble._sdEmojiEl=emojiEl;
  bubble._sdOriginalKids=kids;
}

function sdRestoreLoadingDots(bubble){
  if(!bubble||!bubble.getAttribute("data-sd-emoji-replaced"))return;
  bubble.removeAttribute("data-sd-emoji-replaced");
  if(bubble._sdEmojiTimer)clearInterval(bubble._sdEmojiTimer);
  if(bubble._sdEmojiEl)bubble._sdEmojiEl.remove();
  // Restore hidden children
  if(bubble._sdOriginalKids){
    bubble._sdOriginalKids.forEach(function(k){if(k.nodeType===1)k.style.removeProperty("display");});
  }
}

function sdFindLoadingBubble(){
  // Target exact Hatch loading dots: div[data-slot="flexbox"] containing animate-bounce children
  var flexboxes=document.querySelectorAll('div[data-slot="flexbox"]');
  for(var i=flexboxes.length-1;i>=0;i--){
    var fb=flexboxes[i];
    if(fb.getAttribute("data-sd-emoji-replaced"))continue;
    var bounceDots=fb.querySelectorAll(".animate-bounce.rounded-full");
    if(bounceDots.length>=3){
      // Found the loading dots — return the parent .py-3 wrapper so emoji sits in the same spot
      return fb.parentElement&&fb.parentElement.classList.contains("py-3")?fb.parentElement:fb;
    }
  }
  return null;
}

function sdStartEmojiThinking(){
  sdStopEmojiThinking();
  
  // Use MutationObserver to detect when loading dots appear/disappear
  sdEmojiObserver=new MutationObserver(function(){
    if(!activeSkills.has("fy-0")){sdStopEmojiThinking();return;}
    var dots=sdFindLoadingBubble();
    if(dots)sdReplaceLoadingDots(dots);
    // Check if replaced ones were removed from DOM
    var replaced=document.querySelectorAll("[data-sd-emoji-replaced]");
    replaced.forEach(function(el){
      if(!document.body.contains(el))sdRestoreLoadingDots(el);
    });
  });
  sdEmojiObserver.observe(document.body,{childList:true,subtree:true});
  
  // Backup poll
  sdEmojiPollTimer=setInterval(function(){
    if(!activeSkills.has("fy-0")){sdStopEmojiThinking();return;}
    var dots=sdFindLoadingBubble();
    if(dots)sdReplaceLoadingDots(dots);
  },400);
}

function sdStopEmojiThinking(){
  if(sdEmojiPollTimer){clearInterval(sdEmojiPollTimer);sdEmojiPollTimer=null;}
  if(sdEmojiObserver){sdEmojiObserver.disconnect();sdEmojiObserver=null;}
  var replaced=document.querySelectorAll("[data-sd-emoji-replaced]");
  replaced.forEach(function(el){sdRestoreLoadingDots(el);});
}

})();
