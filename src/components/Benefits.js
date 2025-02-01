import React from "react";
import "./Benefits.css";

const Benefits = () => {
  const benefits = [
    {
      title: "Beneficios emocionales y mentales",
      description:
        "Las mascotas pueden reducir el estrés, la ansiedad y la depresión. Acariciarlas aumenta los niveles de oxitocina, una hormona que genera bienestar y calma.",
    },
    {
      title: "Beneficios físicos",
      description:
        "Tener una mascota fomenta un estilo de vida más activo. Pasearlos regularmente ayuda a los dueños a hacer ejercicio y mejorar su salud.",
    },
    {
      title: "Salud y prevención de enfermedades",
      description:
        "Cuidar a una mascota implica llevarla al veterinario para vacunas y revisiones médicas, previniendo enfermedades tanto en humanos como en animales.",
    },
    {
      title: "Impacto en la socialización",
      description:
        "Las mascotas pueden ayudar a socializar. Pasear un perro facilita conocer a otras personas con intereses similares y generar nuevas amistades.",
    },
    {
      title: "Bienestar psicológico de las mascotas",
      description:
        "Las mascotas también necesitan bienestar emocional. Un entorno seguro y amoroso evita problemas de comportamiento como ansiedad o depresión.",
    },
    {
      title: "Educación y valores",
      description:
        "Cuidar una mascota enseña responsabilidad, empatía y respeto por los seres vivos, especialmente en los niños.",
    },
  ];

  return (
    <div className="benefits-container">
      <h1>Importancia del Cuidado de las Mascotas</h1>
      <div className="benefits-grid">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit-card">
            <h2>{benefit.title}</h2>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
