

export type Meal = {
  title: string;
  data: [{
    name: string;
    hour: string;
    description: string;
    type: 'in' | 'out' | ""
  }]
}