/**
 * Simple markdown to HTML converter
 * Handles headings, lists, bold text, and paragraphs
 */
export function markdownToHtml(content: string): string {
  // Trim and normalize line endings
  const normalized = content.trim().replace(/\r\n/g, '\n');
  
  // Split into blocks (paragraphs separated by blank lines)
  const blocks = normalized.split(/\n\n+/);
  
  return blocks.map(block => {
    const trimmed = block.trim();
    
    if (!trimmed) return '';
    
    // H2 heading
    if (trimmed.startsWith('## ')) {
      return `<h2>${processInline(trimmed.slice(3))}</h2>`;
    }
    
    // H3 heading
    if (trimmed.startsWith('### ')) {
      return `<h3>${processInline(trimmed.slice(4))}</h3>`;
    }
    
    // Unordered list
    if (trimmed.startsWith('- ')) {
      const items = trimmed.split('\n')
        .filter(line => line.trim().startsWith('- '))
        .map(item => `<li>${processInline(item.trim().slice(2))}</li>`)
        .join('');
      return `<ul>${items}</ul>`;
    }
    
    // Ordered list
    if (/^\d+\.\s/.test(trimmed)) {
      const items = trimmed.split('\n')
        .filter(line => /^\d+\.\s/.test(line.trim()))
        .map(item => `<li>${processInline(item.trim().replace(/^\d+\.\s/, ''))}</li>`)
        .join('');
      return `<ol>${items}</ol>`;
    }
    
    // Regular paragraph
    return `<p>${processInline(trimmed)}</p>`;
  }).filter(Boolean).join('\n');
}

/**
 * Process inline markdown (bold, italic, links)
 */
function processInline(text: string): string {
  return text
    // Bold: **text** or __text__
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/__(.+?)__/g, '<strong>$1</strong>')
    // Italic: *text* or _text_
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/_(.+?)_/g, '<em>$1</em>')
    // Links: [text](url)
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>')
    // Em dash
    .replace(/—/g, '—');
}
