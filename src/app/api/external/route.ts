import { NextResponse } from 'next/server';

// Utility function for logging errors
const logError = (error: unknown) => {
  console.error('API Error:', error);
};

export async function GET() {
  try {
    // Making the external API request
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');

    // Check if response is ok
    if (!res.ok) {
      throw new Error(`Failed to fetch posts. Status: ${res.status}`);
    }

    // Parse the data
    const data: { id: number; title: string; body: string }[] = await res.json();

    // Optional: You could validate or transform the data here if necessary
    if (!Array.isArray(data)) {
      throw new Error('Fetched data is not in the expected format');
    }

    // Respond with the fetched data
    return NextResponse.json(data);

  } catch (error) {
    // Log the error for debugging and monitoring
    logError(error);

    // Provide a more informative error message
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
