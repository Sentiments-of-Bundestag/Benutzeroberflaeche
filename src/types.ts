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

export interface FactionGraph {
  from: string;
  sentiment: number;
  to: string;
}

export interface Person {
  name: string;
  rank: number;
  role: string;
  speakerId: string;
}

export interface PersonGraph {
  sender: string;
  recipient: string;
  sentiment: number;
  count: number;
}
