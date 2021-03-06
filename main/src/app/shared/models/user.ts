import { Rate } from "./rate";

export interface User {
  [prop: string]: any;
  // mọi người add thêm prop của đối tượng dưới này,
  // nếu có người add rồi thì xin bỏ qua. xin cảm ơn.
  id: number;
  fullName: string;
  email: string;
  phoneNumber: string;
  address: string;
  birthday: string;
  idCard: string;
  gender: string;
  rate: Rate;
  point: number;
  lastLogin: string;
  status: boolean;
  reasonBan: string;
  isLocked: boolean;
  password: null,
  question: string;
  answer: string;
  passwordResetCode?: string;
}
