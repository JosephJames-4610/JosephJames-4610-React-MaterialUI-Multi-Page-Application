import { DOMModel, createRDC } from 'react-dom-components';
import { GameHeader } from './shared/index.js';
import Home from './home/Home.jsx';
import MemoryCheck from './memoryCheck/MemoryCheck.jsx';
import IdentifyDifference from './identifyDifference/IdentifyDifference.jsx';

const DOM_COMPONENTS = {
  'game-header': GameHeader,
  'game-list': Home,
  'identify-difference': IdentifyDifference,
  'memory-check': MemoryCheck
};

class ReactDOMModel extends DOMModel {
  constructor(element) {
    super(element);
  }
}

const generateComponentsRDC = () => {
  const componentRDCList = {};
  Object.entries(DOM_COMPONENTS).forEach(([htmlTag, ReactComponent]) => {
    componentRDCList[htmlTag] = createRDC(htmlTag, ReactDOMModel, ReactComponent)
  })
  return componentRDCList;
}

export default generateComponentsRDC();