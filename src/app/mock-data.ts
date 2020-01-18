import {LivingCenter} from './models/living-center.model';

export const LIVING_CENTERS: LivingCenter[] = [
  {
    id: 1,
    name: 'Live at Home',
    org_type: 'Social Services',
    food_available: true,
    clothes_available: true,
    wardrobe_available: true,
    event: 'Miracle Messages',
    bed_num: 30,
    shower_num: 5,
    place_info: {
      id: 1,
      address: '3065 Van Sansul Ave, San Jose, CA 95128',
      policy: 'feel at home.',
      hours: '24 hours',
      contact_info: '001-333-444'
    },
    facility: {
      id: 1,
      wifi_available: true,
      outlet_available: true,
      table_num: 8,
    }
  },
  {
    id: 2,
    name: 'Sunrise',
    org_type: 'Non-profit organization',
    food_available: true,
    clothes_available: true,
    wardrobe_available: false,
    event: 'Homeless Datathon',
    bed_num: 10,
    shower_num: 2,
    place_info: {
      id: 2,
      address: '1818 Scott Blvd, Santa Clara, CA 95050',
      policy: 'feel at home.',
      hours: '6:00am - 10:00pm Everyday',
      contact_info: '001-333-444'
    },
    facility: {
      id: 2,
      wifi_available: true,
      outlet_available: true,
      table_num: 8,
    }
  },
  {
    id: 3,
    name: 'Sunshine Villa',
    org_type: 'Social Services',
    food_available: true,
    clothes_available: true,
    wardrobe_available: true,
    event: 'xxxx',
    bed_num: 0,
    shower_num: 0,
    place_info: {
      id: 3,
      address: '2295 Plummer Ave, San Jose, CA 95125',
      policy: 'feel at home.',
      hours: '24 hours',
      contact_info: '001-333-444'
    },
    facility: {
      id: 3,
      wifi_available: true,
      outlet_available: true,
      table_num: 8,
    }
  },
  {
    id: 4,
    name: 'Sunshine Center',
    org_type: 'Church',
    food_available: true,
    clothes_available: false,
    wardrobe_available: false,
    event: 'Homeward Bound',
    bed_num: 15,
    shower_num: 2,
    place_info: {
      id: 4,
      address: '2295 Plummer Ave, San Jose, CA 95125',
      policy: 'feel at home.',
      hours: '24 hours',
      contact_info: '001-333-444'
    },
    facility: {
      id: 4,
      wifi_available: true,
      outlet_available: true,
      table_num: 8,
    }
  },
];
