import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import OpenAI from 'openai';

admin.initializeApp();

const db = admin.firestore();

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: functions.config().openai?.key || process.env.OPENAI_API_KEY,
});

async function generateTags(text: string): Promise<string[]> {
  const prompt = `Analyze the following text about family, technology, and connection. Generate relevant category tags or themes that capture the main ideas, emotions, or topics mentioned. Generate as many tags as are relevant to the content (there is no limit). Return only a comma-separated list of short, descriptive tags (2-5 words each). Do not include numbers, explanations, or formatting - just the tags separated by commas.

Text: "${text}"

Tags:`;

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are a helpful assistant that generates concise, relevant tags for text about family, technology, and connection.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 300,
    });

    const tagsText = response.choices[0]?.message?.content?.trim() || '';
    const tags = tagsText
      .split(',')
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0);

    return tags;
  } catch (error) {
    console.error('Error generating tags:', error);
    return ['general', 'family', 'technology'];
  }
}

// Submit endpoint
export const submit = functions.https.onRequest(async (req, res) => {
  // Enable CORS
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(204).send('');
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { text } = req.body;

    if (!text || typeof text !== 'string' || text.trim().length === 0) {
      res.status(400).json({ error: 'Text is required' });
      return;
    }

    // Generate tags using OpenAI
    const tags = await generateTags(text.trim());

    // Save to Firestore
    const docRef = await db.collection('submissions').add({
      text: text.trim(),
      tags,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    });

    res.status(200).json({ success: true, id: docRef.id });
  } catch (error) {
    console.error('Error submitting:', error);
    res.status(500).json({ error: 'Failed to submit' });
  }
});

// Board authentication endpoint
export const authBoard = functions.https.onRequest(async (req, res) => {
  // Enable CORS
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(204).send('');
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { password } = req.body;
    const correctPassword = functions.config().board?.password || process.env.BOARD_PASSWORD;

    if (!correctPassword) {
      res.status(500).json({ error: 'Board password not configured' });
      return;
    }

    if (password === correctPassword) {
      res.status(200).json({ success: true });
    } else {
      res.status(401).json({ error: 'Incorrect password' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to authenticate' });
  }
});

