// app/page.tsx
export default function Home() {
  return (
    <div>
      <header>
        <h1>Welcome to Assignment API Hub</h1>
        <p>Discover exciting posts, explore fascinating projects, and more!</p>
      </header>

      <section>
        <h2>Explore Posts</h2>
        <p>Dive into a collection of insightful and thought-provoking posts curated just for you.</p>
        <a href="/fetch-posts">Browse Posts</a>
      </section>

      <section>
        <h2>About Me</h2>
        <p>Learn more about my journey, passion for technology, and the inspiration behind this project.</p>
        <a href="/about">Discover More</a>
      </section>

      <section>
        <h2>Contact</h2>
        <p>Have any questions or ideas? Feel free to reach out and connect with me!</p>
        <a href="/contact">Get in Touch</a>
      </section>

      <footer>
        <p>© 2024 Assignment API Hub | All Rights Reserved</p>
      </footer>
    </div>
  );
}
