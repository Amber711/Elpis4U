export class LivingCenter {
  id: number;
  name: string;
  place_info: PlaceInfo;
  bed_num: number;
  shower_num: number;
  org_type: string;
  food_available: boolean;
  clothes_available: boolean;
  wardrobe_available: boolean;
  facility: Facility;
  event: string;
}


export class PlaceInfo {
  id: number;
  address: string;
  policy: string;
  hours: string;
  contact_info: string;
}

export class Facility {
  id: number;
  wifi_available: boolean;
  outlet_available: boolean;
  table_num: number;
}
