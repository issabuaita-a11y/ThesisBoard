export interface Submission {
  id: string;
  text: string;
  tags: string[];
  timestamp: {
    seconds: number;
    nanoseconds: number;
  };
}

