function Welcome(props){
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name='Johnny Bravo' />
      <Welcome name='Dexter Boy Genius' />
      <Welcome name='Samurai jack' />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
