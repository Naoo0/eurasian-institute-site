// src/components/GridSection.jsx

function GridSection({ title, text, image, reverse }) {
  return (
    // Теперь здесь нет атрибута style, и CSS-файл будет работать
    <section className={`grid-section ${reverse ? "reverse" : ""}`}>
      <div>
        <h2>{title}</h2>
        {/* Если у тебя есть <p>{text}</p>, верни его сюда */}
      </div>
      {image && (
        <div>
          <img src={image} alt={title} />
        </div>
      )}
    </section>
  );
}

export default GridSection;