# Localization Strategy for Turkish Tourism Portal

## Guiding Principles
1. English (en.json) is the ORIGINAL localization source
2. All translations (ar.json, tr.json) MUST reflect the English source exactly
3. Translations should be culturally sensitive and accurate
4. Maintain the same structure and key hierarchy across all language files

## Recent Updates
- Ensured consistent translation across English, Turkish, and Arabic languages

## Translation Workflow
- Start with English source file
- Translate content preserving:
  * Original meaning
  * Tone
  * Context
  * Cultural nuances

## Upcoming Translation Tasks
### Pages to Translate
1. Experiences Page (`src/pages/Experiences.tsx`)
2. Travel Guide Page (`src/pages/Guide.tsx`)
3. Blog Posts Section (`src/pages/BlogPosts`)
4. Contact Page (`src/pages/Contact.tsx`)

### Translation Principles
- Maintain consistency across languages
- Preserve original meaning and cultural nuances
- Use translation keys for all user-facing strings
- Ensure translations are natural and contextually appropriate

### Translation Workflow
1. Identify all user-facing strings in the component
2. Create translation keys in `en.json`
3. Add translations for Turkish (`tr.json`) and Arabic (`ar.json`)
4. Update component to use translation keys
5. Test language switching and verify translations

## Current Languages
- English (Original)
- Arabic 
- Turkish

## Translation Notes
- Avoid literal word-for-word translations
- Prioritize natural language that sounds native in each language
- Verify translations with native speakers when possible

## Technical Implementation
- Using react-i18next for internationalization
- Translation files stored in `/src/translations/`
- Each language has its own JSON file
- Translations managed through consistent key structures

## Next Steps
- Systematically translate remaining pages
- Verify translations in each language
- Ensure consistent user experience across different language settings

## Notes
- English translation file (`en.json`) remains the source of truth
- Translations should be reviewed by native speakers when possible
- Continuously update and refine translations based on user feedback
