import Image from "next/image";
import styles from "../../styles/Pokemon.module.css";

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.id}`
  );
  const data = await response.json();
  return {
    props: { pokemon: data },
  };
}

export async function getStaticPaths() {
  const maxPokemons = 251;
  const baseUrl = "https://pokeapi.co/api/v2/pokemon";
  const data = await fetch(`${baseUrl}/?limit=${maxPokemons}`);
  const { results } = await data.json();
  const paths = results.map((_, index) => {
    return {
      params: {
        id: `${index + 1}`,
      },
    };
  });
  return { paths, fallback: false };
}

export default function PokemonDetails({ pokemon }) {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>{pokemon.name}</h1>
      </div>
      <Image
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${String(
          pokemon.id
        ).padStart(3, "0")}.png`}
        width="200"
        height="200"
        alt={pokemon.name}
      />
      <div className={styles.number}>
        <h3>Número:</h3>
        <p>#{pokemon.id}</p>
      </div>
      <div className={styles.types}>
        <h3>Tipo:</h3>
        <div>
          {pokemon.types.map((item, index) => (
            <span
              key={index}
              className={`${styles.type} ${styles["type_" + item.type.name]}`}
            >
              {item.type.name}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.height}>
        <h4>Altura:</h4>
        <p>{pokemon.height * 10} cm</p>
      </div>
      <div className={styles.weight}>
        <h4>Peso:</h4>
        <p>{pokemon.weight / 10} kg</p>
      </div>
    </div>
  );
}
