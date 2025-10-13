/// <reference types="@types/google.maps" />
import { Company } from './Company';
import { User } from './User';
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();

const mapElement = document.getElementById('map');
const customMap = new CustomMap(mapElement as HTMLElement);

customMap.addMarker(user);
customMap.addMarker(company);
