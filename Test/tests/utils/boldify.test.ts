import { describe, it, expect } from 'vitest';

// Extracted from PostDetail.tsx — tested independently of the component
function boldify(text: string): string {
  return text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
}

describe('boldify utility', () => {
  it('wraps **text** in <strong> tags', () => {
    expect(boldify('**hello**')).toBe('<strong>hello</strong>');
  });

  it('handles multiple bold segments in one string', () => {
    const result = boldify('**one** and **two**');
    expect(result).toBe('<strong>one</strong> and <strong>two</strong>');
  });

  it('leaves plain text unchanged', () => {
    expect(boldify('plain text')).toBe('plain text');
  });

  it('handles empty string', () => {
    expect(boldify('')).toBe('');
  });

  it('does not match single asterisks', () => {
    expect(boldify('*not bold*')).toBe('*not bold*');
  });

  it('handles bold text inside a sentence', () => {
    const result = boldify('Add **salt** and **pepper** to taste');
    expect(result).toBe('Add <strong>salt</strong> and <strong>pepper</strong> to taste');
  });

  it('handles numbers and punctuation inside bold markers', () => {
    expect(boldify('Cook for **3–4 minutes**.')).toBe('Cook for <strong>3–4 minutes</strong>.');
  });

  it('handles bold with special characters', () => {
    expect(boldify('**Hollandaise Sauce:**')).toBe('<strong>Hollandaise Sauce:</strong>');
  });
});
