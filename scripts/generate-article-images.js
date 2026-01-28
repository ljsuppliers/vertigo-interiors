const fs = require('fs');
const path = require('path');
require('dotenv').config();

const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
  console.error('Error: GEMINI_API_KEY environment variable not set');
  process.exit(1);
}
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'images', 'articles');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const articles = [
  // Areas
  { slug: 'edinburgh-new-town', prompt: 'Elegant Georgian townhouse interior in Edinburgh New Town, high ceilings with ornate cornicing, large sash windows, period fireplace with contemporary furniture, sophisticated blend of heritage and modern design, natural light, professional interior photography' },
  { slug: 'interior-design-in-edinburgh', prompt: 'Beautiful Edinburgh home interior, Scottish Georgian architecture, elegant living room with views of Edinburgh skyline, warm contemporary design with heritage features, brass accents, velvet upholstery, professional interior photography' },
  { slug: 'interior-design-in-glasgow', prompt: 'Stylish Glasgow apartment interior, Victorian tenement with modern updates, high ceilings, bay windows, contemporary Scottish design, mix of industrial and refined elements, professional interior photography' },
  { slug: 'interior-design-in-london', prompt: 'Luxurious London townhouse interior, classic British design with contemporary touches, elegant living room, rich textures, sophisticated color palette, statement artwork, professional interior photography' },
  { slug: 'kitchen-design-edinburgh', prompt: 'Bespoke kitchen design in Edinburgh period property, dark green painted cabinets, marble countertops, brass hardware, Aga or range cooker, blend of traditional and modern, professional interior photography' },
  
  // Guides
  { slug: 'how-to-choose-colour-palette', prompt: 'Interior design colour palette mood board, paint swatches, fabric samples, material textures arranged elegantly on marble surface, sophisticated color coordination, warm neutrals with accent colors, professional styling photography' },
  { slug: 'how-to-choose-paint-colours', prompt: 'Interior wall with multiple paint test swatches, elegant room setting, showing colour comparison on wall, natural light, sophisticated interior, design process photography' },
  { slug: 'lighting-design-basics', prompt: 'Elegant living room showcasing layered lighting design, statement chandelier, wall sconces, table lamps, ambient lighting, warm inviting atmosphere, evening setting, professional interior photography' },
  { slug: 'working-with-interior-designer', prompt: 'Interior designer and client reviewing fabric samples and floor plans in elegant design studio, mood boards on wall, material samples, professional consultation setting, warm collaborative atmosphere' },
  
  // News
  { slug: 'biophilic-design-trend-2026', prompt: 'Biophilic interior design, living room filled with indoor plants, natural materials, wooden furniture, large windows with garden view, nature-inspired textures, calming green palette, professional interior photography' },
  { slug: 'colour-trends-spring-2026', prompt: 'Contemporary living room showcasing spring 2026 colour trends, soft warm pastels, terracotta and sage green accents, natural textures, stylish modern interior, professional interior photography' },
  { slug: 'interior-design-trends-2026', prompt: 'Cutting-edge interior design for 2026, warm minimalism living space, curved furniture, natural materials, earthy color palette, sophisticated yet inviting, professional interior photography' },
  { slug: 'sustainable-materials-interior-design-2026', prompt: 'Sustainable interior design materials, reclaimed wood furniture, natural stone, organic textiles, eco-friendly home decor, warm earthy tones, conscious luxury, professional interior photography' },
];

async function generateImage(article) {
  const outputPath = path.join(OUTPUT_DIR, `${article.slug}.jpg`);
  
  // Skip if already exists
  if (fs.existsSync(outputPath)) {
    console.log(`⏭ Skipping ${article.slug} (already exists)`);
    return;
  }
  
  console.log(`Generating: ${article.slug}...`);
  
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-generate-001:predict?key=${API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          instances: [{ prompt: article.prompt }],
          parameters: {
            sampleCount: 1,
            aspectRatio: '16:9',
            outputMimeType: 'image/jpeg'
          }
        })
      }
    );

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`API error: ${response.status} - ${error}`);
    }

    const data = await response.json();
    const prediction = data.predictions?.[0];
    
    if (!prediction?.bytesBase64Encoded) {
      throw new Error('No image in response');
    }

    fs.writeFileSync(outputPath, Buffer.from(prediction.bytesBase64Encoded, 'base64'));
    console.log(`✓ Saved: ${article.slug}.jpg`);
    
  } catch (err) {
    console.error(`✗ Failed ${article.slug}:`, err.message);
  }
  
  // Delay between requests
  await new Promise(r => setTimeout(r, 2000));
}

async function generateAll() {
  console.log('Generating unique images for all articles...\n');
  
  for (const article of articles) {
    await generateImage(article);
  }
  
  console.log('\nDone!');
}

generateAll();
