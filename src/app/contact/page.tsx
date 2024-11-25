export default function Contact() {
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Contact</h1>
      <p>If you'd like to get in touch, feel free to reach out via any of the methods below!</p>

      <div style={{ marginBottom: '10px' }}>
        <strong>Email:</strong> <a href="mailto:usama@example.com">usama@example.com</a>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <strong>Phone:</strong> <a href="tel:+923154996438">03154996438</a>
      </div>

      <h2>Social & Professional Links</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li style={{ marginBottom: '10px' }}>
          <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/usama-abdullah/" target="_blank" rel="noopener noreferrer">linkedin.com/in/usama-abdullah</a>
        </li>
        <li style={{ marginBottom: '10px' }}>
          <strong>GitHub:</strong> <a href="https://github.com/usama7871" target="_blank" rel="noopener noreferrer">github.com/usama7871</a>
        </li>
        <li style={{ marginBottom: '10px' }}>
          <strong>Twitter:</strong> <a href="https://x.com/usama7871" target="_blank" rel="noopener noreferrer">x.com/usama7871</a>
        </li>
        <li style={{ marginBottom: '10px' }}>
          <strong>WhatsApp:</strong> <a href="https://wa.me/923154996438" target="_blank" rel="noopener noreferrer">Click to message</a>
        </li>
      </ul>
    </div>
  );
}
