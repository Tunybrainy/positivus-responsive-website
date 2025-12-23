function Button({ text, href }) {
  return (
    <a href={href}>
      <button className="px-6 py-3 bg-brand-dark text-white rounded-lg shadow hover:scale-105 transition-transform">
        {text}
      </button>
    </a>
  );
}

export default Button;
