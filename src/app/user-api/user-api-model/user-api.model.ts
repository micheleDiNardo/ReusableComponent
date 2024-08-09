interface DataInterface {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  }

export class Data implements DataInterface{
    id!: number;
    email!: string;
    first_name!: string;
    last_name!: string;
    avatar!: string;
  }
  
interface SupportInterface {
    url: string;
    text: string;
}
  
export class Support implements SupportInterface {
    url!: string;
    text!: string;
}

export class UserApi {
    data!: Data;
    support!: Support;
}

export class PaginatedUsers {
  page!: number;
  per_page!: number;
  total!: number;
  total_pages!: number;
  data!: Data[];
  support!: Support;
}

export class UserCreatedRequest {
  id?: string;
  name!: string;
  job!: string;
}