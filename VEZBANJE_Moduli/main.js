import { generateList, generateListItem } from "./modules/list.js";
import {  generateTable, generateTableRow, generateTableItem } from "./modules/table.js";

let ul = generateList(document.body);
generateListItem(ul, "images/1.jpg");
generateListItem(ul, "images/2.jpg");
generateListItem(ul, "images/3.jpg");

let table = generateTable(document.body);
let tr = generateTableRow(table);
generateListItem(tr, "images/1.jpg");
generateListItem(tr, "images/2.jpg");
generateListItem(tr, "images/3.jpg");