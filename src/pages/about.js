import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <h1>Sobre</h1>
      <p>
        Essa é uma aplicação desenvolvida com Next.js. Como um toque especial,
        adotei o tema da Pokédex, a enciclopédia digital que nos ajuda a
        explorar o vasto mundo dos Pokémon. Com base na API do Pokémon, trago a
        você informações detalhadas sobre centenas de espécies, seus tipos e
        muito mais.
      </p>
    </div>
  );
}
