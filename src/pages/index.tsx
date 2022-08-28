import styles from './styles.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Studio Cultural Buritis</h1>
        <nav>
          <a href="">Início</a>
          <a href="">Sobre nós</a>
          <a href="">Novidades</a>
          <a href="">Cursos</a>
          <a href="">Contatos</a>
        </nav>
      </header>
      <main>
        <h1>
          Aulas de ballet <br /> clássico Rio de <br /> Janeiro
        </h1>
        <p>
          Aqui é onde o seu texto começa. Basta clicar e começar a <br /> escrever.
          Odit aut fugit sed quia consequuntur magni dolores eos qui <br /> ratione
          voluptatem sequi nesciunt neque porro quisquam.
          <br />
          <button>Sobre nossa escola</button>
        </p>

      </main>
    </div>
  );
}