function HeroSection() {
  return (
    <section
      className="hero"
      style={{
        background: "linear-gradient(135deg, #5a9bd6, #3a7bd5)",
        color: "white",
        padding: "80px 20px",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
        Добро пожаловать в Eurasian Institute for Interdisciplinary Studies
      </h1>
      <p style={{ fontSize: "1.2rem", maxWidth: "800px", margin: "0 auto" }}>
        Институт основан в 2023 году и занимается научными исследованиями в области
        социальных, технических и гуманитарных наук, объединяя специалистов разных дисциплин.
      </p>
    </section>
  );
}

export default HeroSection;
