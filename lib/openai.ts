import OpenAI from 'openai';

if (!process.env.OPENAI_API_KEY) {
  throw new Error('OPENAI_API_KEY is not set');
}

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateTags(text: string): Promise<string[]> {
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
    // Fallback: return generic tags if AI fails
    return ['general', 'family', 'technology'];
  }
}

