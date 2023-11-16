import App from './server';

const PORT = 3001;
App.listen(PORT, () => {
  console.log(`App listen at http://localhost:${PORT}`);
});
