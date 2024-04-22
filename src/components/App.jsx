import userData from '../userData.json';
// Webpack розглядає це як імпорт модуля (у цьому випадку, модулем є JSON-файл)
// і автоматично парсить вміст JSON-файлу, перетворюючи його на JavaScript-об'єкт

import Profile from './Profile';

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </>
  );
};

export default App;
