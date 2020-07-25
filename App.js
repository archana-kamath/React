import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import ChildComponent from './components/ChildComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
import Inline from './components/Inline';
import './AppStyles.css'
import styles from './AppStyles.module.css'
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import Input from './components/Input';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import User from './components/User';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';
 
function App() {
  //Step 2

  /*<div className="App">  
      <ComponentC/>
    </div>*/ 

  return (
    <div className="App">
          <UserProvider value="UserProvidedValue">  
            <ComponentC/>
          </UserProvider>
    </div>
  );
}

export default App;

/*
<Counter/>
<Greet name="Maya" heroName="Wonderwoman">
  <p>This is children</p>
</Greet>
<Welcome/>
<Hello/>
<Greet name="Kaka" heroName="Hulk">
    <button>Action</button>
</Greet>
<Welcome name="Maya" heroName="Wonderwoman"></Welcome>
<Welcome name="Kaka" heroName="Hulk"></Welcome>
<Message></Message>

<FunctionClick></FunctionClick>
<ClassClick></ClassClick>
<EventBind></EventBind>
<ParentComponent></ParentComponent>
<UserGreeting></UserGreeting>
<NameList></NameList>
<StyleSheet primary={true}></StyleSheet>
<Inline></Inline>
<h1 className='error'>Error</h1>
<h1 className='success'>Success</h1>
<Form></Form>
<LifecycleA></LifecycleA>
<FragmentDemo></FragmentDemo>
<Table></Table>
<ParentComp></ParentComp>
<RefsDemo></RefsDemo>
<FocusInput></FocusInput>
 <FRParentInput></FRParentInput>
 <PortalDemo></PortalDemo>
 <ErrorBoundary>
      <Hero heroName="Batman"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName="Superman"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName="Joker"></Hero>
      </ErrorBoundary>
<ClickCounter name="HOC_props"></ClickCounter>
        <HoverCounter></HoverCounter>
        <User render={(isLoggedIn)=> isLoggedIn ? 'Render Props - User': 'Guest'}></User>      
 */
