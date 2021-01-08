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

// Sentiment Backend

export interface Session {
  sessionId: number;
  legislativePeriod: number;
  endDateTime: string;
  startDateTime: string;
}

export interface Faction {
  factionId: string;
  name: string;
  size: number;
  // ensure to add it manually
  legislativePeriod: number;
}

export interface FactionGraph {
  recipient: string;
  sender: string;
  sentiment: number;
  count: number;
  sessionId: number[];
}

export interface FactionRanked {
  factionId: string;
  name: string;
  size: number;
  rank: number;
  sessionId: number[];
}

export interface Person {
  faction: string;
  factionId: string;
  name: string;
  role: string;
  speakerId: string;
}

export interface PersonMessage {
  sender: string;
  recipient: string;
  sentiment: number;
  sessionId: number;
}

export interface PersonGraph {
  sender: string;
  recipient: string;
  sentiment: number;
  count: number;
  sessionId: number[];
}

export interface PersonRanked {
  factionId: string;
  faction: string;
  name: string;
  role: string;
  rank: number;
  speakerId: string;
  sessionId: number[];
}
