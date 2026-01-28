const fs = require('fs');
const path = require('path');

const API_KEY = 'AIzaSyCT13YebS4b1YPmXX1KqTN-GcvTF8Q3zGY';
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'images');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const images = [
  {
    name: 'hero',
    prompt: 'Luxurious contemporary interior design, Edinburgh Georgian townhouse living room with floor-to-ceiling windows, natural light streaming in, elegant velvet sofa in deep emerald green, brass accents, curated art on walls, warm wood flooring, sophisticated yet inviting atmosphere, professional interior photography, editorial quality'
  },
  {
    name: 'portfolio-living-room',
    prompt: 'High-end living room interior design, modern Scottish home, statement fireplace with marble surround, bespoke built-in shelving, rich textures mixing velvet and linen, earthy color palette with touches of gold, large abstract artwork, professional interior photography'
  },
  {
    name: 'portfolio-bedroom',
    prompt: 'Serene luxury bedroom interior design, Edinburgh apartment, upholstered headboard in soft grey, layered bedding in neutral tones, bedside tables with sculptural lamps, full-length curtains in natural linen, calming sophisticated atmosphere, professional interior photography'
  },
  {
    name: 'portfolio-kitchen',
    prompt: 'Contemporary kitchen interior design, Scottish townhouse, dark green painted cabinetry, brass hardware and fixtures, marble countertops and backsplash, statement pendant lights over island, professional interior photography, editorial quality'
  },
  {
    name: 'portfolio-bathroom',
    prompt: 'Spa-like luxury bathroom interior design, Edinburgh home, freestanding bathtub, floor-to-ceiling marble tiles, brass fixtures, large mirror with decorative frame, natural light, plants, professional interior photography'
  },
  {
    name: 'portfolio-dining',
    prompt: 'Elegant dining room interior design, Scottish Georgian home, long wooden dining table, upholstered dining chairs, statement chandelier, built-in sideboard, large windows with plantation shutters, professional interior photography'
  },
  {
    name: 'about-studio',
    prompt: 'Interior design studio workspace, creative professional environment, fabric swatches and material samples on desk, mood boards on wall, design books, warm lighting, plants, stylish yet functional workspace, professional photography'
  },
  {
    name: 'detail-textures',
    prompt: 'Close-up of luxury interior design materials, velvet fabric, marble sample, brass fixtures, wood grain, layered textures for interior design, professional product photography, warm lighting'
  }
];

async function generateImage(imageConfig) {
  console.log(`Generating: ${imageConfig.name}...`);
  
  // Using Imagen 4 model for image generation
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-generate-001:predict?key=${API_KEY}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        instances: [{
          prompt: imageConfig.prompt
        }],
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
  
  // Extract the image from predictions
  const prediction = data.predictions?.[0];
  
  if (!prediction?.bytesBase64Encoded) {
    console.log('Response:', JSON.stringify(data, null, 2));
    throw new Error('No image in response');
  }

  const imageData = prediction.bytesBase64Encoded;
  const outputPath = path.join(OUTPUT_DIR, `${imageConfig.name}.jpg`);
  
  fs.writeFileSync(outputPath, Buffer.from(imageData, 'base64'));
  console.log(`✓ Saved: ${outputPath}`);
  
  return outputPath;
}

async function generateAll() {
  console.log('Starting image generation for Vertigo Interiors...\n');
  
  for (const img of images) {
    try {
      await generateImage(img);
      // Small delay between requests
      await new Promise(r => setTimeout(r, 1500));
    } catch (err) {
      console.error(`✗ Failed ${img.name}:`, err.message);
    }
  }
  
  console.log('\nDone!');
}

generateAll();
