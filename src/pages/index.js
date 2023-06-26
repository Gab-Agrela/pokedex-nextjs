import Card from "@/components/Card";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export async function getStaticProps() {
  const maxPokemons = 251;
  const baseUrl = "https://pokeapi.co/api/v2/pokemon";
  const data = await fetch(`${baseUrl}/?limit=${maxPokemons}`);
  const { results } = await data.json();
  results.forEach((pokemon, index) => (pokemon.id = index + 1));
  return {
    props: { pokemons: results },
  };
}

export default function Home({ pokemons }) {
  return (
    <div className={styles["home-container"]}>
      <Image src="/images/pokemon.png" width={300} height={110} alt="Pokemon" />
      <div className={styles["card-container"]}>
        {pokemons.map((pokemon, index) => (
          <Card pokemon={pokemon} key={index} />
        ))}
      </div>
    </div>
  );
}
