---
name: Nano Banana 2 Setup
description: Nano Banana 2 image generation setup — API keys, model names, script locations, and how to generate images for Nextstep AI website
type: reference
---

## Nano Banana 2 — What It Is
"Nano Banana 2" = Nate Herk's name for Google's Gemini image generation model (`gemini-3.1-flash-image-preview`). Generates premium custom images via API.

## API Credentials
- **Google AI Studio API Key**: stored in `~/.nano-banana/.env` and `nextstep-ai-website/nano-banana/.env`
- **Model names** (confirmed working with this key):
  - `gemini-3.1-flash-image-preview` — Nano Banana 2 (primary)
  - `imagen-4.0-generate-001` — Imagen 4 (fallback, higher quality)
  - `gemini-2.5-flash-image` — second fallback
- **Endpoint**: `POST https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key={KEY}`
- **Payload**: `{"contents":[{"parts":[{"text":"prompt"}]}],"generationConfig":{"responseModalities":["IMAGE","TEXT"]}}`

## File Locations
- **Generation script**: `nextstep-ai-website/nano-banana/scripts/generate_gemini.py`
- **Kie.ai script** (needs KIE_API_KEY): `nextstep-ai-website/nano-banana/scripts/generate_kie.py`
- **Skill (upgraded master version)**: `~/.claude/skills/nano-banana-2/SKILL.md`
- **Original basic skill**: `~/.claude/skills/nano-banana/SKILL.md`
- **Master prompt reference**: `nextstep-ai-website/nano-banana/master_prompt_reference.md`
- **Project organizer**: `nextstep-ai-website/nano-banana/gemini.md`

## How to Generate an Image
```bash
cd "c:/Users/LENOVO/OneDrive/Documents/n8n builder/nextstep-ai-website"
python nano-banana/scripts/generate_gemini.py "assets/output.png" "your prompt here" "16:9"
```

## Nextstep AI Brand Colors for Prompts
Always include: "deep navy blue background (#0f172a), sky blue (#0ea5e9), light blue (#38bdf8) glowing elements"

## Website Assets Generated
- `assets/hero-visual.png` — hero section illustration (dark navy + blue circuits)
- `assets/workflow-visual.png` — workflow process infographic
