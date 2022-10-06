import * as React from 'react';
import { render } from 'react-dom';
import { DOMModel, createRDC, DOMRegistry } from 'react-dom-components';

const App = () => {
  React.useEffect(() => {
    console.log('From useEffect')
    setTimeout(() => { window.alert('Hey, I am useEffect')}, 5000)
  }, [])
  return (
    <div>Hey, I am from React</div>
  )
};

class ModelElement extends DOMModel {
  constructor (element) {
    super(element);
  }
}

const ComponentRDC = createRDC('custom-tag', ModelElement, App)

const domRegistry = new DOMRegistry(React, render);

domRegistry.register({ ComponentRDC })

domRegistry.init(document)