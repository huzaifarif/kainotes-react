import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [isResolved, setResolved] = useState(false);
  useEffect(() => {
    const samplePromise = async () => {
      const promise = new Promise((resolve, reject) => {
        setTimeout(resolve, 5000); // Resolve dummy promise after 5 sec
      });
      await promise;
      setResolved(true);
    };

    samplePromise();
  }, []);
  const handleClick = (event: any) => {
    if ("MozActivity" in window) {
      var pickAny = new MozActivity({
        name: "pick"
      });

      pickAny.onsuccess = function () {
        var img = document.createElement("img");
        if (this.result.blob.type.indexOf("image") !== -1) {
          img.src = window.URL.createObjectURL(this.result.blob);
          console.warn('Image picked: ', img.src);
          // var imagePresenter = document.querySelector("#image-presenter");
          // imagePresenter.appendChild(img);
          // imagePresenter.style.display = "block";
        }
      };

      pickAny.onerror = function () {
        console.log("An error occurred");
      };
    } else {
      console.warn('Pick activity is not available in your browser!');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {`Learn React 👉 ${isResolved}`}
        </a>
        <button onClick={handleClick}>Pick something</button>
      </header>
    </div>
  );
}

export default App;
