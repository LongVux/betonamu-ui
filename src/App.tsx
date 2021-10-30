import React from 'react';
import AppCard from './components/AppCard/AppCard';
import AppTab from './components/AppTab/AppTab';
import MenuBar from './components/MenuBar/MenuBar';
import PageHeader from './components/PageHeader/PageHeader';
import QuestionCard from './components/QuestionCard/QuestionCard';
import TestFrame from './layouts/TestFrame/TestFrame';
import './styles/App.scss';
import './styles/index.scss';

function App() {
  return (
   <TestFrame
    header={<MenuBar />}
   >
      <PageHeader />
      <AppTab
        title="This is a Tab"
        searchable={true}
        onSearch={(value: string) => console.log(value)}
      >
        {Array(10).fill(0).map((_, index) => 
          {return <AppCard key={index}/>})
        }
      </AppTab>

      <QuestionCard />
   </TestFrame>
  );
}

export default App;
