function Section({ children, className = "" }) {
  return (
    <section className={`py-16 md:py-20 ${className}`}>
      {children}
    </section>
  );
}

export default Section;