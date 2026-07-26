export const config = { runtime: 'edge' };
declare const process: {
  env: {
    GEMINI_API_KEY?: string;
  };
};

const systemPrompt = `Ești asistentul unui salon de coafură specializat în culori.
Primești o fotografie cu părul unei cliente și faci o evaluare vizuală orientativă.

Reguli:
- Răspunde DOAR cu un obiect JSON valid, fără text în plus.
- Scrie în limba română, prietenos și încurajator, niciodată critic.
- Nu comenta fața, corpul, vârsta sau aspectul persoanei. Doar părul.
- Dacă părul nu se vede clar, spune asta în "observations" și pune valori "neclar".
- Nu diagnostica afecțiuni medicale ale scalpului.

Structura JSON:
{
  "length": "scurt / mediu / lung / foarte lung",
  "texture": "drept / ondulat / creț / foarte creț",
  "thickness": "fin / mediu / gros",
  "currentColor": "descriere scurtă a culorii actuale",
  "undertone": "cald / rece / neutru",
  "condition": "bună" | "medie" | "deteriorată",
  "observations": ["2-4 observații scurte: rădăcină crescută, vârfuri despicate, urme de decolorare etc."],
  "suggestions": ["2-3 sugestii de servicii sau direcții de culoare potrivite"],
  "disclaimer": "o frază care spune că e o estimare din poză, nu înlocuiește consultația"
}`;

export default async function handler(request: Request) {
  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return Response.json({ error: 'Serviciul nu este configurat.' }, { status: 500 });
  }

  try {
    const { image } = await request.json();

    if (typeof image !== 'string' || !image.startsWith('data:image/')) {
      return Response.json({ error: 'Imagine invalidă.' }, { status: 400 });
    }

    const base64 = image.split(',')[1];

    const geminiRes = await fetch(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': apiKey,
        },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: systemPrompt }] },
          contents: [
            {
              parts: [
                { inline_data: { mime_type: 'image/jpeg', data: base64 } },
                { text: 'Analizează părul din această fotografie.' },
              ],
            },
          ],
          generationConfig: { responseMimeType: 'application/json' },
        }),
      }
    );

if (!geminiRes.ok) {
  const errorText = await geminiRes.text();
  console.log('EROARE GEMINI:', geminiRes.status, errorText);
  return Response.json({ error: 'Analiza nu a putut fi realizată.' }, { status: 502 });
}

    const data = await geminiRes.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      return Response.json({ error: 'Răspuns gol de la serviciul de analiză.' }, { status: 502 });
    }

    return new Response(text, {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch {
    return Response.json({ error: 'Ceva n-a mers. Încearcă din nou.' }, { status: 500 });
  }
}