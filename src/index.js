import './style.css';
import dom, { createList } from "./dom";
import projects, { setProjects } from "./projects";
import { dialogFunctions } from './dialogFunctions';

setProjects();
dom();
createList();
dialogFunctions()