import { Header } from "./Components/Header/Header";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Espaço para o conteúdo não ficar escondido atrás do Header fixo */}
      <main className="pt-20">
        <section
          id="inicio"
          className="h-screen flex items-center justify-center bg-gray-200"
        >
          <h1 className="text-4xl text-brand-dark font-bold">
            Banner Principal (Hero)
          </h1>
        </section>

        <section
          id="servicos"
          className="h-screen flex items-center justify-center bg-white"
        >
          <h2 className="text-3xl text-brand-blue font-bold">
            Nossos Serviços
          </h2>
        </section>
      </main>
    </div>
  );
}

export default App;
