// JSON Placeholder
export interface UserInterface {
  id: number;
  name: string;
}

// React Router DOM
export interface NavigationLinkInterface {
  name: string;
  route: string;
}

// Sentiment
export interface Faction {
  name: string;
  size: number;
}

export interface FactionMessage {
  from: string;
  sentiment: number;
  to: string;
}
