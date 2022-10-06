import React from 'react';
import { render } from 'react-dom'
import { DOMRegistry } from 'react-dom-components';
import domComponentRDCList from './domComponentsRDC.js';

const domRegistry = new DOMRegistry(React, render);
domRegistry.register(domComponentRDCList);
domRegistry.init(document);