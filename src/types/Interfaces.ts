export interface IYesNoResponse {
  answer: string;
  forced: boolean;
  image: string;
}
export interface IIndesicionData {
  question: string;
  answer: IYesNoResponse;
}
