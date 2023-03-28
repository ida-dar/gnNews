const Home = () => {
  return (
    <div>
      <p>
        Aplikacja wyświetla topowe nagłówki wiadomośći z wybranego kraju z listy po lewej. Źródłem newsów jest publiczne API{' '}
        <a href="https://newsapi.org/">News API</a>.
      </p>
      <p>Wiadomości mogą być wyświetlane w postaci listy lub kafelek.</p>
      <p>Maksymalna ilość wiadomości pobranych z API wynosi 100.</p>
    </div>
  );
};

export default Home;
