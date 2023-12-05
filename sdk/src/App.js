import { useEffect } from 'react';

function App() {
  const API = 'http://localhost:8000/generate/report'
  
  const createReport = async (token) => {
    await fetch(API, {
      method: 'POST',
      body: JSON.stringify(
        {
          "token": token,
          "ucode": crypto.randomUUID()
        }
      ),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      console.log(response)
    }).catch((err) => console.error(err))
  }

  useEffect(() => {
    window.idwSDKWeb({
      token: process.env.REACT_APP_SDK_TOKEN,
      onRender: () => {
        console.log('it renders!');
      },
      onComplete: ({ token }) => {
        console.log('SDK Token', token);
        createReport(token)
      },
      onError: (error) => {
        alert(error);
      }
    });
  }, [])


  return (
    <div className="App">
      <div data-idw-sdk-web style={{ margin: 'auto' }}></div>
    </div>
  );
}

export default App;
