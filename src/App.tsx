import React from 'react';
import MenuBar from './components/MenuBar/MenuBar';
import { RenderRoutes } from './routes/routes';
import './styles/App.scss';
import './styles/index.scss';

function App() {
  return (
    <>
      <MenuBar />
      {/* compensated for the sticky menubar */}
      <div style={{ height: 64 }} />
      
      {/* router for pages */}
      <RenderRoutes />

      {/* <TestPage /> */}

      {/* <TestFrame>
        <PageHeader />
        <AppTab
          title="This is a Tab"
          searchable={true}
          onSearch={(value: string) => console.log(value)}
        >
          {Array(10).fill(0).map((_, index) => { return <AppCard key={index} /> })
          }
        </AppTab>

        <QuestionCard />
      </TestFrame> */}
    </>
  );
}

export default App;
