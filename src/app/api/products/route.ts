import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const apiUrl =
      process.env.NEXT_PUBLIC_API_URL ||
      'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json';

    const res = await fetch(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error(`API responded with status ${res.status}`);
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error('Error fetching products in server route:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Error fetching products' },
      { status: 500 }
    );
  }
}
