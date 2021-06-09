import './App.css';

// import { Switch, Route } from 'react-router-dom'
// import { BrowserRouter as Router } from 'react-router-dom'
import { TaskList,/* EditTask, TestBar*/ } from './components'
import React from 'react'
import { ThemeContext } from './theme-context'

function App() {
  const { theme, toggle, dark } = React.useContext(ThemeContext)

  return (
    <header style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
    {/* <Router> */}
      <div className="App" >
      <h1>To do list 0.1</h1>
      <button
        type="button"
        onClick={toggle}
        style={{
          backgroundColor: theme.backgroundColor,
          color: theme.color,
          outline: 'none'
        }}
      >
        Toggle to {!dark ? 'Dark' : 'Light'} theme
      </button>
            <TaskList />
                {/* <Switch>
                  <Route exact path="/" component={TaskList} />
                  <Route path="/edit/:id" component={EditTask} />
                </Switch> */}
                {/* did not have any other path now */}
    </div>
    {/* </Router> */}
    {/* <TestBar /> */}
    </header>
    
  );
}

export default App;
