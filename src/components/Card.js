import Image from "next/image";
import styles from "../styles/Card.module.css";
import Link from "next/link";

export default function Card({ pokemon }) {
  return (
    <Link href={`/pokemon/${pokemon.id}`} className={styles.button}>
      <div className={styles.card}>
        <Image
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${String(
            pokemon.id
          ).padStart(3, "0")}.png`}
          width="200"
          height="200"
          alt={pokemon.name}
        />
        <h4 className={styles.id}>#{pokemon.id}</h4>
        <h3 className={styles.name}>{pokemon.name}</h3>
      </div>
    </Link>
  );
}
