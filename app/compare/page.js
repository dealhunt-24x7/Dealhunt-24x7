'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ComparePage() {
  const [params, setParams] = useState({ pid: '', title: '' });
  const [results, setResults] = useState([]);

  useEffect(() => {
    // read query params in client
    const search = typeof window !== 'undefined' ? window.location.search : '';
    const sp = new URLSearchParams(search);
    const pid = sp.get('pid') || 'unknown';
    const title = sp.get('title') || 'Product';
    setParams({ pid, title });

    // Simulated compare results — replace with API fetch (Amazon/Flipkart/etc.) later
    const demo = [
      { site: 'Amazon', price: '₹9,999', rating: '4.2', link: '#' },
      { site: 'Flipkart', price: '₹9,849', rating: '4.1', link: '#' },
      { site: 'Croma', price: '₹10,200', rating: '4.0', link: '#' },
    ];
    // small delay to simulate network
    setTimeout(() => setResults(demo), 600);
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <div style={{ marginBottom: '1rem' }}>
        <Link href="/">← Back to Home</Link>
      </div>

      <h1 style={{ marginBottom: '.25rem' }}>Compare: {params.title}</h1>
      <p style={{ marginTop: 0, color: '#444' }}>Compare live prices & ratings across sites</p>

      <div style={{ marginTop: '1rem' }}>
        {results.length === 0 ? (
          <div>Loading comparison...</div>
        ) : (
          results.map((r, i) => (
            <div key={i} style={{
              display: 'flex', gap: '1rem', alignItems: 'center',
              background: '#fff', padding: '.6rem', borderRadius: '8px', marginBottom: '.6rem', boxShadow: '0 1px 6px rgba(0,0,0,.06)'
            }}>
              <div style={{ width: 72, height: 56, background: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 6 }}>
                <strong style={{ fontSize: 12 }}>{r.site}</strong>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700 }}>{r.price}</div>
                <div style={{ color: '#666' }}>Rating: {r.rating} · Delivery options vary</div>
              </div>
              <div>
                <a href={r.link} className="compare-btn" style={{ textDecoration: 'none' }}>Go to site</a>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
