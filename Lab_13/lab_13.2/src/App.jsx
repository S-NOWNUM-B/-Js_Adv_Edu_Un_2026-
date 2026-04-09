import React, { useState } from 'react';
import { useApi, useMutation, usePaginatedApi } from './hooks/useApi';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useDebounce, useDebouncedCallback } from './hooks/useDebounce';
import { useFetch, useFetchSWR } from './hooks/useFetch';

// Mock API functions for demo
const mockFetchUsers = async () => {
  await new Promise((resolve) => setTimeout(resolve, 800));
  return [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com' },
    { id: 3, name: 'Charlie Brown', email: 'charlie@example.com' },
  ];
};

const mockFetchPosts = async () => {
  await new Promise((resolve) => setTimeout(resolve, 600));
  return [
    { id: 1, title: 'Introduction to React Hooks', author: 'Alice' },
    { id: 2, title: 'Advanced HOC Patterns', author: 'Bob' },
    { id: 3, title: 'Custom Hooks Best Practices', author: 'Charlie' },
    { id: 4, title: 'State Management in 2026', author: 'Alice' },
  ];
};

function UsersSection() {
  const { data: users, loading, error, refetch } = useApi(mockFetchUsers, []);

  return (
    <div style={styles.section}>
      <h2 style={styles.heading}>useApi - Users</h2>
      {loading && <p style={styles.loading}>Loading users...</p>}
      {error && <p style={styles.error}>Error: {error}</p>}
      {users && (
        <ul style={styles.list}>
          {users.map((user) => (
            <li key={user.id} style={styles.listItem}>
              <strong>{user.name}</strong> — {user.email}
            </li>
          ))}
        </ul>
      )}
      <button onClick={refetch} style={styles.button}>
        Refetch Users
      </button>
    </div>
  );
}

function PostsSection() {
  const { data, loading, error, refetch } = useApi(mockFetchPosts, []);

  return (
    <div style={styles.section}>
      <h2 style={styles.heading}>useApi - Posts</h2>
      {loading && <p style={styles.loading}>Loading posts...</p>}
      {error && <p style={styles.error}>Error: {error}</p>}
      {data && (
        <ul style={styles.list}>
          {data.map((post) => (
            <li key={post.id} style={styles.listItem}>
              <strong>{post.title}</strong> by {post.author}
            </li>
          ))}
        </ul>
      )}
      <button onClick={refetch} style={styles.button}>
        Refetch Posts
      </button>
    </div>
  );
}

function LocalStorageDemo() {
  const [name, setName] = useLocalStorage('demo_name', '');
  const [inputValue, setInputValue] = useState(name);

  const handleSave = () => {
    setName(inputValue);
  };

  return (
    <div style={styles.section}>
      <h2 style={styles.heading}>useLocalStorage</h2>
      <div style={styles.inputGroup}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter your name"
          style={styles.input}
        />
        <button onClick={handleSave} style={styles.button}>
          Save to localStorage
        </button>
      </div>
      <p style={styles.info}>
        Stored value: <strong>{name || '(empty)'}</strong>
      </p>
      <p style={styles.caption}>
        This value persists across page reloads via localStorage.
      </p>
    </div>
  );
}

function DebounceDemo() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 500);
  const [results, setResults] = useState([]);

  const handleSearch = useDebouncedCallback((term) => {
    if (term.trim()) {
      setResults([
        `Result 1 for "${term}"`,
        `Result 2 for "${term}"`,
        `Result 3 for "${term}"`,
      ]);
    } else {
      setResults([]);
    }
  }, 500);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    handleSearch(value);
  };

  return (
    <div style={styles.section}>
      <h2 style={styles.heading}>useDebounce</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Type to search (debounced 500ms)"
        style={styles.input}
      />
      <p style={styles.info}>
        Current: <strong>{searchTerm}</strong> | Debounced: <strong>{debouncedSearch}</strong>
      </p>
      {results.length > 0 && (
        <ul style={styles.list}>
          {results.map((result, i) => (
            <li key={i} style={styles.listItem}>{result}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

function FetchDemo() {
  const { data, loading, error, cacheHit, refetch, clearCache } = useFetch(
    'https://jsonplaceholder.typicode.com/posts/1'
  );

  return (
    <div style={styles.section}>
      <h2 style={styles.heading}>useFetch with Cache</h2>
      {loading && <p style={styles.loading}>Fetching data...</p>}
      {error && <p style={styles.error}>Error: {error}</p>}
      {data && (
        <div style={styles.card}>
          <p><strong>ID:</strong> {data.id}</p>
          <p><strong>Title:</strong> {data.title}</p>
          <p style={styles.caption}>Cache hit: {cacheHit ? 'Yes' : 'No'}</p>
        </div>
      )}
      <div style={styles.buttonGroup}>
        <button onClick={refetch} style={styles.button}>
          Refetch (clears cache)
        </button>
        <button onClick={clearCache} style={styles.buttonSecondary}>
          Clear All Cache
        </button>
      </div>
    </div>
  );
}

function SWRDemo() {
  const { data, loading, error, isStale, revalidate, cacheHit } = useFetchSWR(
    'https://jsonplaceholder.typicode.com/posts/2'
  );

  return (
    <div style={styles.section}>
      <h2 style={styles.heading}>useFetchSWR (Stale-While-Revalidate)</h2>
      {loading && <p style={styles.loading}>Fetching data...</p>}
      {error && <p style={styles.error}>Error: {error}</p>}
      {data && (
        <div style={styles.card}>
          <p><strong>ID:</strong> {data.id}</p>
          <p><strong>Title:</strong> {data.title}</p>
          <p style={styles.caption}>
            Cache hit: {cacheHit ? 'Yes' : 'No'} | Stale: {isStale ? 'Yes' : 'No'}
          </p>
        </div>
      )}
      <button onClick={revalidate} style={styles.button}>
        Revalidate
      </button>
    </div>
  );
}

function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Lab 13.2: Custom Hooks Demo</h1>
      <p style={styles.subtitle}>
        Custom hooks for data fetching, localStorage sync, debouncing, and caching.
      </p>

      <UsersSection />
      <PostsSection />
      <LocalStorageDemo />
      <DebounceDemo />
      <FetchDemo />
      <SWRDemo />
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '32px 24px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
  },
  title: {
    fontSize: '32px',
    fontWeight: 700,
    color: '#212529',
    marginBottom: '8px',
  },
  subtitle: {
    fontSize: '16px',
    color: '#6c757d',
    marginBottom: '32px',
  },
  section: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '24px',
    marginBottom: '24px',
    border: '1px solid #dee2e6',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
  },
  heading: {
    fontSize: '20px',
    fontWeight: 600,
    color: '#212529',
    marginBottom: '16px',
  },
  loading: {
    color: '#0066cc',
    fontStyle: 'italic',
  },
  error: {
    color: '#dc3545',
    fontWeight: 500,
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: '12px 0',
  },
  listItem: {
    padding: '8px 0',
    borderBottom: '1px solid #f0f0f0',
    color: '#212529',
  },
  card: {
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '12px',
  },
  info: {
    fontSize: '14px',
    color: '#495057',
    margin: '8px 0',
  },
  caption: {
    fontSize: '12px',
    color: '#6c757d',
    marginTop: '4px',
  },
  inputGroup: {
    display: 'flex',
    gap: '12px',
    marginBottom: '12px',
  },
  input: {
    flex: 1,
    padding: '8px 12px',
    borderRadius: '8px',
    border: '1px solid #dee2e6',
    fontSize: '14px',
    outline: 'none',
  },
  buttonGroup: {
    display: 'flex',
    gap: '12px',
    marginTop: '12px',
  },
  button: {
    padding: '8px 16px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#0066cc',
    color: '#ffffff',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 500,
  },
  buttonSecondary: {
    padding: '8px 16px',
    borderRadius: '8px',
    border: '1px solid #dee2e6',
    backgroundColor: '#ffffff',
    color: '#495057',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 500,
  },
};

export default App;
