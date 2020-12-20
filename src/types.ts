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

// Completly Missing
export interface Session {
  sessionId: number;
  legislativePeriod: number;
  endDateTime: string;
  startDateTime: string;
}

export interface Faction {
  // Missing
  factionId: string;
  // Missing
  sessionId: number;
  name: string;
  size: number;
}

export interface FactionGraph {
  recipient: string;
  // Missing
  sessionId: number;
  sender: string;
  sentiment: number;
  // Missing
  count: number;
}

export interface FactionRanked {
  // Missing
  factionId: string;
  // Missing
  sessionId: string;
  name: string;
  size: number;
  rank: number;
}

export interface Person {
  speakerId: string;
  // Missing
  sessionId: number;
  name: string;
  rank: number;
  role: string;
}

// Completly missing
export interface PersonMessage {
  // Missing
  sessionId: number;
  sender: string;
  recipient: string;
  sentiment: number;
}

// Completly missing
export interface PersonGraph {
  // missing
  sessionId: number;
  sender: string;
  recipient: string;
  sentiment: number;
  count: number;
}

export interface PersonRanked {
  speakerId: number;
  // missing
  factionId: string;
  faction: string;
  name: string;
  role: string;
  rank: number;
}
